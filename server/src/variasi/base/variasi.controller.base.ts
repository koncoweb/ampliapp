/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { VariasiService } from "../variasi.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { VariasiCreateInput } from "./VariasiCreateInput";
import { VariasiWhereInput } from "./VariasiWhereInput";
import { VariasiWhereUniqueInput } from "./VariasiWhereUniqueInput";
import { VariasiFindManyArgs } from "./VariasiFindManyArgs";
import { VariasiUpdateInput } from "./VariasiUpdateInput";
import { Variasi } from "./Variasi";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@swagger.ApiBasicAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class VariasiControllerBase {
  constructor(
    protected readonly service: VariasiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Variasi })
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: VariasiCreateInput): Promise<Variasi> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        gambar: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Variasi] })
  @ApiNestedQuery(VariasiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Variasi[]> {
    const args = plainToClass(VariasiFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        gambar: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Variasi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: VariasiWhereUniqueInput
  ): Promise<Variasi | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        gambar: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Variasi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: VariasiWhereUniqueInput,
    @common.Body() data: VariasiUpdateInput
  ): Promise<Variasi | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          gambar: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Variasi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: VariasiWhereUniqueInput
  ): Promise<Variasi | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          gambar: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findManyProducts(
    @common.Req() request: Request,
    @common.Param() params: VariasiWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        itemPrice: true,
        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "update",
    possession: "any",
  })
  async connectProducts(
    @common.Param() params: VariasiWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "update",
    possession: "any",
  })
  async updateProducts(
    @common.Param() params: VariasiWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "update",
    possession: "any",
  })
  async disconnectProducts(
    @common.Param() params: VariasiWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
