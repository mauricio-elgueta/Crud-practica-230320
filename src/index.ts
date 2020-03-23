import "reflect-metadata";
import {createConnection} from "typeorm";
import {ApolloServer} from "apollo-server";
import {buildSchema} from "type-graphql";
import {WeaponResolver} from "./resolvers/WeaponResolvers";

async function main() {
    const connection = await createConnection();
    const schema = await buildSchema({resolvers: [WeaponResolver] });
    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("Servidor activo");
  }
  main();

  