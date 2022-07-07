/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateVariasiArgs } from "./CreateVariasiArgs";
import { UpdateVariasiArgs } from "./UpdateVariasiArgs";
import { DeleteVariasiArgs } from "./DeleteVariasiArgs";
import { VariasiFindManyArgs } from "./VariasiFindManyArgs";
import { VariasiFindUniqueArgs } from "./VariasiFindUniqueArgs";
import { Variasi } from "./Variasi";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { VariasiService } from "../variasi.service";

@graphql.Resolver(() => Variasi)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class VariasiResolverBase {
  constructor(
    protected readonly service: VariasiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "read",
    possession: "any",
  })
  async _variasisMeta(
    @graphql.Args() args: VariasiFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Variasi])
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "read",
    possession: "any",
  })
  async variasis(
    @graphql.Args() args: VariasiFindManyArgs
  ): Promise<Variasi[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Variasi, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "read",
    possession: "own",
  })
  async variasi(
    @graphql.Args() args: VariasiFindUniqueArgs
  ): Promise<Variasi | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Variasi)
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "create",
    possession: "any",
  })
  async createVariasi(
    @graphql.Args() args: CreateVariasiArgs
  ): Promise<Variasi> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Variasi)
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "update",
    possession: "any",
  })
  async updateVariasi(
    @graphql.Args() args: UpdateVariasiArgs
  ): Promise<Variasi | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Variasi)
  @nestAccessControl.UseRoles({
    resource: "Variasi",
    action: "delete",
    possession: "any",
  })
  async deleteVariasi(
    @graphql.Args() args: DeleteVariasiArgs
  ): Promise<Variasi | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product])
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async products(
    @graphql.Parent() parent: Variasi,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}