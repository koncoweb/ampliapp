import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { VariasiResolverBase } from "./base/variasi.resolver.base";
import { Variasi } from "./base/Variasi";
import { VariasiService } from "./variasi.service";

@graphql.Resolver(() => Variasi)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VariasiResolver extends VariasiResolverBase {
  constructor(
    protected readonly service: VariasiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
