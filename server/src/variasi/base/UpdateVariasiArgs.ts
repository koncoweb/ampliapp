/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { VariasiWhereUniqueInput } from "./VariasiWhereUniqueInput";
import { VariasiUpdateInput } from "./VariasiUpdateInput";

@ArgsType()
class UpdateVariasiArgs {
  @Field(() => VariasiWhereUniqueInput, { nullable: false })
  where!: VariasiWhereUniqueInput;
  @Field(() => VariasiUpdateInput, { nullable: false })
  data!: VariasiUpdateInput;
}

export { UpdateVariasiArgs as UpdateVariasiArgs };
