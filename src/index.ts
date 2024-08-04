import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";
import { games, authors, reviews } from "./data";
import { typeDefs } from "./graphql/schemas/schema";

dotenv.config();

const resolvers = {
  Query: {
    games() {
      return games;
    },
    game(_, args) {
      return games.find((game) => game.id == args.id);
    },
    reviews() {
      return reviews;
    },
    review(_, args) {
      return reviews.find((review) => review.id == args.id);
    },
    authors() {
      return authors;
    },
    author(_, args) {
      return authors.find((author) => author.id == args.id);
    },
  },
  Game: {
    reviews(parent) {
      return reviews.filter((r) => r.game_id == parent.id);
    },
  },
  Author: {
    reviews(parent) {
      return reviews.filter((r) => r.game_id == parent.id);
    },
  },

  Mutation: {
    deleteGame(_, args) {
      return games.filter((game) => game.id != args.id);
    },
    addGame(_, args) {
      let game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000000).toString(),
      };

      games.push(game);
      return game;
    },
    editGame(_, args) {
      let game = games.find((x) => x.id == args.id);
      if (game) {
        game.title = args.game.title;
        game.platforms = args.game.platforms;
        return game;
      }
      return { message: "Invalid Id, Game not found!" };
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
