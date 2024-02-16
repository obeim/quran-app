export interface Surah {
  id: number;
  number: number;
  name_ar: string;
  name_en: string;
  name_en_translation: string;
  created_at: number;
  updated_at: number;
  type: string;
}

export interface Ayah {
  id: number;
  jozz: number;
  sora: number;
  sora_name_ar: string;
  page: number;
  aya_no: number;
  aya_text_emlaey: string;
  maany_aya: string;
  aya_text: string;
}

export interface Recent {
  type: "surah" | "jozz";
  name: string;
  aya: number;
  page: number;
  index: number;
  id: number;
}

export interface category {
  cat_name: string;
}

export interface Azkar {
  category: string;
  zekr: string;
  description: string;
  count: number;
  reference: string;
  search: string;
}
