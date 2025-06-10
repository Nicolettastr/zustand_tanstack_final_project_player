import { supabase } from "../index";
export async function MostrarNiveles() {
  try {
    const { data } = await supabase.from("levels_true_drink").select();
    return data;
  } catch (error) {}
}
