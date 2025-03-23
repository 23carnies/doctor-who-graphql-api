const DOCTOR = "DOCTOR";

export const mockCharacter = {
    id: 1,
    name: "Mock Doctor",
    actor: "Mock David Tennant",
    charType: DOCTOR,
    quotes: [],
    doctorNumber: "Mock 10",
}

export const mockEpisode = {
    id: 1,
    title: "Mock Episode",
    originalAirDate: "2021-01-01",
    series: "Mock Series",
    quotes: [],
}

export const mockQuote = {
    id: 1,
    text: "Mock Quote",
    character: mockCharacter,
    episode: mockEpisode,
}