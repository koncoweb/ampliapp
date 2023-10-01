import { Product } from "../product/Product";

export type Variasi = {
  createdAt: Date;
  gambar: string | null;
  id: string;
  products?: Array<Product>;
  updatedAt: Date;
};
