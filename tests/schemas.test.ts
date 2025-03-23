// import schemaTypeDefs from '../src/schema';
import { mockCharacter, mockEpisode, mockQuote } from './mocks/mock-entities';

describe('test all schemas', () => {
    test('should create a character with given data', () => {
        const character = mockCharacter;
        expect(character).toEqual({
            id: 1,
            name: 'Mock Doctor',
            actor: 'Mock David Tennant',
            charType: 'DOCTOR',
            doctorNumber: 'Mock 10',
            "quotes": []
        });
    });
    test('should create an episode with given data', () => {
        const episode = mockEpisode;
        expect(episode).toEqual({
            id: 1,
            title: 'Mock Episode',
            originalAirDate: '2021-01-01',
            series: 'Mock Series',
            quotes: []
        });
    });

    test('should create a quote with given data', () => {
        const quote = mockQuote;
        expect(quote).toEqual({
            id: 1,
            text: 'Mock Quote',
            character: mockCharacter,
            episode: mockEpisode
        });
    });

    test('should fail with bad characterId', () => {
        const quote = { ...mockQuote, character: { id: 0 } };
        expect(quote).not.toEqual(mockQuote);
    })
});

