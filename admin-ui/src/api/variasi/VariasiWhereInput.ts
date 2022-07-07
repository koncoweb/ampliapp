import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";

export type VariasiWhereInput = {
  gambar?: StringNullableFilter;
  id?: StringFilter;
  products?: ProductListRelationFilter;
};
