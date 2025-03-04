import { create } from "zustand";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import db from "../firebaseConfig";

const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    set({ products });
  },
  addProduct: async (product) => {
    const docRef = await addDoc(collection(db, "products"), product);
    set((state) => ({
      products: [...state.products, { id: docRef.id, ...product }],
    }));
  },
  deleteProduct: async (id) => {
    await deleteDoc(doc(db, "products", id));
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    }));
  },
  updateProduct: async (id, updatedProduct) => {
    await updateDoc(doc(db, "products", id), updatedProduct);
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { id, ...updatedProduct } : product
      ),
    }));
  },
}));

export default useProductStore;
