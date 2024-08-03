
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { games, authors, reviews } from './data';
import { typeDefs } from "./graphql/schemas/schema";

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

const startApplication = async () => {
    const { url } = await startStandaloneServer(server, {
        listen: { port: Number(process.env.PORT || 4000) },
    });
    console.log(`App is running at ${url}`);
};

startApplication();
