import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Weapon } from "../model/Weapon";
import {CreateWeaponInput} from "../inputs/CreateWeapon";
import {UpdateWeaponInput} from "../inputs/UpdateWeapon";

@Resolver()
export class WeaponResolver {
  @Query(() => [Weapon])
  weaponList() {
    return Weapon.find();
  }

  @Query(() => Weapon)
  weaponFind(@Arg("id") id: number) {
    const weap =  Weapon.findOne({ where: { id }});
    return weap;
  }

  @Mutation(() => Weapon)
  async createWeapon(@Arg("data") data: CreateWeaponInput) {
    const weap = Weapon.create(data);
    await weap.save();
    return weap;
  }

  @Mutation(() => Weapon)
  async updateWeapon(@Arg("id") id: number, @Arg("data") data: UpdateWeaponInput) {
    const weap = await Weapon.findOne({ where: { id } });
    if (!weap) throw new Error("Item no encontrado");
    Object.assign(weap, data);
    await weap.save();
    return weap;
  }

  @Mutation(() => Boolean)
  async deleteWeapon(@Arg("id") id: number) {
    const weap = await Weapon.findOne({ where: { id } });
    if (!weap) throw new Error("Item no encontrado");
    await weap.remove();
    return true;
  }


}
