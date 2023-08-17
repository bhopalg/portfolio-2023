export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      "useful-links": {
        Row: {
          categories: Database["public"]["Enums"]["category"][] | null;
          id: string;
          link: string;
          name: string;
        };
        Insert: {
          categories?: Database["public"]["Enums"]["category"][] | null;
          id?: string;
          link: string;
          name: string;
        };
        Update: {
          categories?: Database["public"]["Enums"]["category"][] | null;
          id?: string;
          link?: string;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      category: "css" | "react" | "infrastructure" | "ui" | "style" | "images" | "icons";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
