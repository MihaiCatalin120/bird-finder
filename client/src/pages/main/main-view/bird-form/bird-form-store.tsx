import { createContext } from "react";
import { Bird } from "../../../../accessors/types";

export class BirdFormStore {
    public bird: Bird = {
        name: "none",
        scientificName: "none",
        wikiLink: "none",
        rarity: "none",
        head: {
            crownColor: "none",
            eyeStripeColor: "none",
            beakColor: "none",
            beakShape: "none",
            beakLength: "none",
        },
        body: {
            throatColor: "none",
            breastColor: "none",
            pattern: "none",
        },
        wing: {
            upperColor: "none",
            underColor: "none",
            shape: "none",
        },
        leg: {
            color: "none",
            length: "none",
            shape: "none",
        },
        tail: {
            color: "none",
            length: "none",
            shape: "none"
        }
    };
}

export const birdFormStore = new BirdFormStore();
export const BirdFormContext = createContext(birdFormStore);