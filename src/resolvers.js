const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    quotes: async () => await prisma.quote.findMany({ include: { character: true, episode: true } }),
    characters: async () => await prisma.character.findMany(),
    episodes: async () => await prisma.episode.findMany(),
  },

  Mutation: {
    addCharacter: async (_, { name, actor, charType, doctorNumber }) => {
      return await prisma.character.create({
        data: {
          name,
          actor,
          charType,
          doctorNumber: doctorNumber || undefined,
        },
      });
    },
   
    addEpisode: async (_, { title, originalAirDate, series }) => {
      return await prisma.episode.create({
        data: {
          title,
          // originalAirDate, changed because of iso date error
          originalAirDate: originalAirDate ? new Date(originalAirDate).toISOString() : null,
          series,
        },
      });
    }
  }
};

module.exports = resolvers;
