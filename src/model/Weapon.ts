import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity()
@ObjectType()
export class Weapon extends BaseEntity {

    @Field(() => ID)  
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => String)
    @Column()
    nombre: string;

    @Field(() => String)
    @Column()
    rama: string;

    @Field(() => String)
    @Column()
    calidad: string;
    
    @Field(() => Number)
    @Column()
    encantamiento: number;

    @Field(() => Number)
    @Column()
    precio: number;

    @Field(() => Number)
    @Column()
    stock: number;
}