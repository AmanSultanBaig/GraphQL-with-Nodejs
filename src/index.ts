import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from 'dotenv';

dotenv.config();

const server = new ApolloServer({});

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT || 4000) },
});
