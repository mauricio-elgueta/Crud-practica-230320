import { InputType, Field } from "type-graphql";

@InputType()
export class UpdateWeaponInput {
  @Field({ nullable: true })
  nombre?: string;

  @Field({ nullable: true })
  rama?: string;

  @Field({ nullable: true })
  calidad?: string;

  @Field({ nullable: true })
  encantamiento?: number;

  @Field({ nullable: true })
  precio?: number;

  @Field({ nullable: true })
  stock?: number;
}
