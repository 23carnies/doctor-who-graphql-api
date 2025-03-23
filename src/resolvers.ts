const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const resolvers = {
  Query: {
    quotes: async () => await prisma.quote.findMany({ include: { character: true, episode: true } }),
    characters: async () => await prisma.character.findMany(),
    episodes: async () => await prisma.episode.findMany(),
  },

  Mutation: {
    addCharacter: async (_: any, { name, actor, charType, doctorNumber }: { name: string; actor: string; charType: string; doctorNumber?: number }) => {
      return await prisma.character.create({
        data: {
          name,
          actor,
          charType,
          doctorNumber: doctorNumber || undefined,
        },
      });
    },
   
    addEpisode: async (_: any, { title, originalAirDate, series }: { title: string; originalAirDate: string; series: string }) => {
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

export default resolvers;