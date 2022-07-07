import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { VariasiServiceBase } from "./base/variasi.service.base";

@Injectable()
export class VariasiService extends VariasiServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
