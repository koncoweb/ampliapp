import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { VariasiListRelationFilter } from "../variasi/VariasiListRelationFilter";

export type ProductWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  itemPrice?: FloatNullableFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  variasi?: VariasiListRelationFilter;
};
