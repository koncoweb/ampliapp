import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VariasiService } from "./variasi.service";
import { VariasiControllerBase } from "./base/variasi.controller.base";

@swagger.ApiTags("variasis")
@common.Controller("variasis")
export class VariasiController extends VariasiControllerBase {
  constructor(
    protected readonly service: VariasiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
