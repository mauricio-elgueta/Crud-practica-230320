import { InputType, Field } from "type-graphql";

@InputType()
export class CreateWeaponInput {    
  @Field()
  nombre: string;

  @Field()
  rama: string;

  @Field()
  calidad: string;
  
  @Field()
  encantamiento: number;

  @Field()
  precio: number;

  @Field()
  stock: number;
}
