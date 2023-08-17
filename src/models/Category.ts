import { Database } from "@/models/Database";

export type Category = Database["public"]["Enums"]["category"];

export const categoryList: Category[] = ["css", "react", "infrastructure", "ui", "style", "images", "icons"];
