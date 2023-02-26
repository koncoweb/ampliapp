/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { VariasiWhereInput } from "./VariasiWhereInput";
import { Type } from "class-transformer";
import { VariasiOrderByInput } from "./VariasiOrderByInput";

@ArgsType()
class VariasiFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VariasiWhereInput,
  })
  @Field(() => VariasiWhereInput, { nullable: true })
  @Type(() => VariasiWhereInput)
  where?: VariasiWhereInput;

  @ApiProperty({
    required: false,
    type: [VariasiOrderByInput],
  })
  @Field(() => [VariasiOrderByInput], { nullable: true })
  @Type(() => VariasiOrderByInput)
  orderBy?: Array<VariasiOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VariasiFindManyArgs as VariasiFindManyArgs };
