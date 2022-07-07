import { Order } from "../order/Order";
import { Variasi } from "../variasi/Variasi";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  itemPrice: number | null;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
  variasi?: Array<Variasi>;
};
