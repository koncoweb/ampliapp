import { Module } from "@nestjs/common";
import { VariasiModuleBase } from "./base/variasi.module.base";
import { VariasiService } from "./variasi.service";
import { VariasiController } from "./variasi.controller";
import { VariasiResolver } from "./variasi.resolver";

@Module({
  imports: [VariasiModuleBase],
  controllers: [VariasiController],
  providers: [VariasiService, VariasiResolver],
  exports: [VariasiService],
})
export class VariasiModule {}
