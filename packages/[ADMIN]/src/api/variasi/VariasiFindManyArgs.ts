import { VariasiWhereInput } from "./VariasiWhereInput";
import { VariasiOrderByInput } from "./VariasiOrderByInput";

export type VariasiFindManyArgs = {
  where?: VariasiWhereInput;
  orderBy?: Array<VariasiOrderByInput>;
  skip?: number;
  take?: number;
};
