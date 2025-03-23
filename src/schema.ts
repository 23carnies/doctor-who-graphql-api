import { gql } from "apollo-server-express";

const schema = gql`
  type Quote {
    id: ID!
    text: String!
    character: Character!
    episode: Episode
  }

  type Character {
    id: ID!
    name: String!
    actor: String
    charType: CharacterType!
    quotes: [Quote]!
    doctorNumber: String
  }

  type Episode {
    id: ID!
    title: String!
    originalAirDate: String
    series: String
    quotes: [Quote]!
  }

  enum CharacterType {
    DOCTOR
    COMPANION
    VILLAIN
    OTHER
  }

  type Query {
    quotes: [Quote]!
    characters: [Character]!
    episodes: [Episode]!
  }

  type Mutation {
    addCharacter(
      name: String!
      actor: String
      charType: CharacterType!
      doctorNumber: String
    ): Character!
    addQuote(text: String!, characterId: ID!, episodeId: ID): Quote!
    addEpisode(title: String!, originalAirDate: String, series: String): Episode!
  }
`;

export default schema;