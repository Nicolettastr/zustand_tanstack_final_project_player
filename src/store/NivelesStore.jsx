import { toast } from "react-toastify";
import { create } from "zustand";
import { MostrarNiveles } from "../index";

export const useNivelesStore = create((set) => ({
  mostrarNiveles: async () => {
    try {
      const response = await MostrarNiveles();
      return response;
    } catch (error) {
      toast.error(`Error al mostrar niveles: ${error.message}`);
      throw error;
    }
  },
  nivelesItemSelect: [],
  selectNiveles: (p) => {
    set({ nivelesItemSelect: p });
  },
}));
