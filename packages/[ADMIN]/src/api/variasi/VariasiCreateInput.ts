import { ProductCreateNestedManyWithoutVariasisInput } from "./ProductCreateNestedManyWithoutVariasisInput";

export type VariasiCreateInput = {
  gambar?: string | null;
  products?: ProductCreateNestedManyWithoutVariasisInput;
};
