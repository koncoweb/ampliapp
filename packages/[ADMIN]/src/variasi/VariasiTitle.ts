import { Variasi as TVariasi } from "../api/variasi/Variasi";

export const VARIASI_TITLE_FIELD = "gambar";

export const VariasiTitle = (record: TVariasi): string => {
  return record.gambar?.toString() || String(record.id);
};
