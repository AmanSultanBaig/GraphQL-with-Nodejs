export const games = [
  {
    id: 1,
    game: "The Legend of Zelda: Breath of the Wild",
    platforms: ["Nintendo Switch", "Wii U"],
  },
  {
    id: 2,
    game: "God of War",
    platforms: ["PlayStation 4", "PlayStation 5"],
  },
  {
    id: 3,
    game: "Cyberpunk 2077",
    platforms: ["PC", "PlayStation 4", "Xbox One", "Google Stadia"],
  },
  {
    id: 4,
    game: "Minecraft",
    platforms: [
      "PC",
      "Mac",
      "Linux",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "iOS",
      "Android",
    ],
  },
  {
    id: 5,
    game: "Among Us",
    platforms: [
      "PC",
      "iOS",
      "Android",
      "Nintendo Switch",
      "PlayStation 4",
      "Xbox One",
    ],
  },
];

export const authors = [
  {
    id: 1,
    name: "J.K. Rowling",
    verified: true,
  },
  {
    id: 2,
    name: "George R.R. Martin",
    verified: true,
  },
  {
    id: 3,
    name: "Stephen King",
    verified: true,
  },
  {
    id: 4,
    name: "Neil Gaiman",
    verified: true,
  },
  {
    id: 5,
    name: "Terry Pratchett",
    verified: true,
  },
  {
    id: 6,
    name: "John Doe",
    verified: false,
  },
];

export const reviews = [
  {
    id: 1,
    rating: 5,
    content: "An absolute masterpiece, highly recommend!",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 4,
    content: "Great game with a few minor issues.",
    author_id: 2,
    game_id: 2,
  },
  {
    id: 3,
    rating: 3,
    content: "Good, but could have been better.",
    author_id: 3,
    game_id: 3,
  },
  {
    id: 4,
    rating: 5,
    content: "An all-time favorite, endless possibilities!",
    author_id: 4,
    game_id: 4,
  },
  {
    id: 5,
    rating: 4,
    content: "Fun and addictive, great for quick sessions.",
    author_id: 5,
    game_id: 5,
  },
];
