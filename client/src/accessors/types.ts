export interface BirdDetails {
    head: {
        crownColor: string;
        eyeStripeColor: string;
        beakColor: string;
        beakShape: string;
        beakLength: string;
    }
    body: {
        throatColor: string;
        breastColor: string;
        pattern: string;
    }
    wing: {
        upperColor: string;
        underColor: string;
        shape: string;
    }
    leg: {
        color: string;
        length: string;
        shape: string;
    }
    tail: {
        color: string;
        length: string;
        shape: string;
    }
}

export interface BirdSummary {
    name: string;
    scientificName: string;
    wikiLink: string;
    rarity: string;
}