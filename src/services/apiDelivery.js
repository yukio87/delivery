import supabase from "./supabase";

// Не использовал Axios, потому-что было сложно найти бесплатный Api, который мог бы сохранять данные на сервере. Воспользовался сервисом Supabase

export async function getMenu() {
  const { data, error } = await supabase.from("menu").select("*");
  if (error) throw new Error("Failed getting menu...");
  return data;
}

export async function getOrder(numOrder) {
  const { data, error } = await supabase
    .from("orders")
    .select()
    .eq("numOrder", numOrder);
  if (error) throw new Error(`Couldn't find order #${numOrder}...`);
  return data;
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from("orders")
    .insert([newOrder])
    .select();
  if (error) throw new Error("Failed creating your order...");
  return data;
}
