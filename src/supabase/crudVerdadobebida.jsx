import { supabase } from "../index";
export async function MostrarVerdadobebidaXnivel(p) {
  const { data } = await supabase
    .from("questions_true_drink")
    .select()
    .eq("id_level", p.id_level)
    .order("id", { ascending: true });
  return data;
}
