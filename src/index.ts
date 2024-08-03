import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { typeDefs } from "./graphql/schemas/schemas";
import { games, reviews, authors } from "./data";
dotenv.config();

const resolvers = {
  Query: {
    games() {
      return games;
    },
    reviews() {
      return reviews;
    },
    authors() {
      return authors;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
  listen: { port: Number(process.env.PORT || 4000) },
});
