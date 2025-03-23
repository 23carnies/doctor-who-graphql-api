import request from 'supertest';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import typeDefs from '../src/schema';
import resolvers from '../src/resolvers';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

beforeAll(async () => {
  await server.start();
  server.applyMiddleware({ app });
});

describe('GraphQL API', () => {
  it('fetches characters', async () => {
    const query = {
      query: `
        query {
          characters {
            id
            name
            actor
            charType
          }
        }
      `
    };

    const response = await request(app)
      .post('/graphql')
      .send(query);

    expect(response.statusCode).toBe(200);
    expect(response.body.data.characters).toBeInstanceOf(Array);
  });
});
