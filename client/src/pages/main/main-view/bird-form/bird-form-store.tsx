import { createContext } from "react";
import { BirdDetails, BirdSummary } from "../../../../accessors/types";
import { makeAutoObservable } from "mobx";
import { getBirdsWithProps } from "../../../../accessors/bird-accessor";

export class BirdFormStore {
    public bird: BirdDetails = {
        head: {
            crownColor: "none 🚫 / don't know 🤔",
            eyeStripeColor: "none 🚫 / don't know 🤔",
            beakColor: "none 🚫 / don't know 🤔",
            beakShape: "none 🚫 / don't know 🤔",
            beakLength: "none 🚫 / don't know 🤔",
        },
        body: {
            size:  "none 🚫 / don't know 🤔",
            throatColor: "none 🚫 / don't know 🤔",
            breastColor: "none 🚫 / don't know 🤔",
            pattern: "none 🚫 / don't know 🤔",
        },
        wing: {
            upperColor: "none 🚫 / don't know 🤔",
            underColor: "none 🚫 / don't know 🤔",
            shape: "none 🚫 / don't know 🤔",
        },
        leg: {
            color: "none 🚫 / don't know 🤔",
            length: "none 🚫 / don't know 🤔",
            shape: "none 🚫 / don't know 🤔",
        },
        tail: {
            color: "none 🚫 / don't know 🤔",
            length: "none 🚫 / don't know 🤔",
            shape: "none 🚫 / don't know 🤔"
        }
    };
    public resultBirds: BirdSummary[] = [];
    public activeStep: number = 0;
    public submitPressed: boolean = false;
    public resultsLoaded: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    public nextStep = () => {
        this.activeStep++;
    }

    public backStep = () => {
        this.activeStep--;
    }

    public resetStep = () => {
        this.activeStep = 0;
        this.submitPressed = false;
        this.resultsLoaded = false;
        this.resultBirds = [];
        this.resetProps();
    }

    public setCrownColor = (value: string) => {
        this.bird.head.crownColor = value;
    }

    public setEyeStripeColor = (value: string) => {
        this.bird.head.eyeStripeColor = value;
    }

    public setBeakColor = (value: string) => {
        this.bird.head.beakColor = value;
    }

    public setBeakShape = (value: string) => {
        this.bird.head.beakShape = value;
    }

    public setBeakLength = (value: string) => {
        this.bird.head.beakLength = value;
    }

    public setBodySize = (value: string) => {
        this.bird.body.size = value;
    }

    public setThroatColor = (value: string) => {
        this.bird.body.throatColor = value;
    }

    public setBreastColor = (value: string) => {
        this.bird.body.breastColor = value;
    }

    public setColorPattern = (value: string) => {
        this.bird.body.pattern = value;
    }
    
    public setUpperwingColor = (value: string) => {
        this.bird.wing.upperColor = value;
    }

    public setUnderwingColor = (value: string) => {
        this.bird.wing.underColor = value;
    }

    public setWingShape = (value: string) => {
        this.bird.wing.shape = value;
    }

    public setLegColor = (value: string) => {
        this.bird.leg.color = value;
    }
    
    public setLegLength = (value: string) => {
        this.bird.leg.length = value;
    }

    public setLegShape = (value: string) => {
        this.bird.leg.shape = value;
    }

    public setTailColor = (value: string) => {
        this.bird.tail.color = value;
    }
    
    public setTailLength = (value: string) => {
        this.bird.tail.length = value;
    }
    
    public setTailShape = (value: string) => {
        this.bird.tail.shape = value;
    }

    public submitDetails = async () => {
        this.submitPressed = true;
        this.stripProps();
        this.resultBirds = await getBirdsWithProps(this.bird);
        
        for (var index in this.resultBirds) {
            console.log(JSON.stringify(this.resultBirds[index]));
        }
        this.resetProps();
        this.resultsLoaded = true;
    }

    private resetProps = () => {
        this.setCrownColor("none 🚫 / don't know 🤔");
        this.setEyeStripeColor("none 🚫 / don't know 🤔");
        this.setBeakColor("none 🚫 / don't know 🤔");
        this.setBeakShape("none 🚫 / don't know 🤔");
        this.setBeakLength("none 🚫 / don't know 🤔");

        this.setBodySize("none 🚫 / don't know 🤔");
        this.setThroatColor("none 🚫 / don't know 🤔");
        this.setBreastColor("none 🚫 / don't know 🤔");
        this.setColorPattern("none 🚫 / don't know 🤔");

        this.setUpperwingColor("none 🚫 / don't know 🤔");
        this.setUnderwingColor("none 🚫 / don't know 🤔");
        this.setWingShape("none 🚫 / don't know 🤔");

        this.setLegColor("none 🚫 / don't know 🤔");
        this.setLegLength("none 🚫 / don't know 🤔");
        this.setLegShape("none 🚫 / don't know 🤔");

        this.setTailColor("none 🚫 / don't know 🤔");
        this.setTailLength("none 🚫 / don't know 🤔");
        this.setTailShape("none 🚫 / don't know 🤔");
    }

    private stripProps = () => {
        this.setCrownColor(this.firstWord(this.bird.head.crownColor));
        this.setEyeStripeColor(this.firstWord(this.bird.head.eyeStripeColor));
        this.setBeakColor(this.firstWord(this.bird.head.beakColor));
        this.setBeakShape(this.firstWord(this.bird.head.beakShape));
        this.setBeakLength(this.firstWord(this.bird.head.beakLength));

        this.setBodySize(this.firstWord(this.bird.body.size));
        this.setThroatColor(this.firstWord(this.bird.body.throatColor));
        this.setBreastColor(this.firstWord(this.bird.body.breastColor));
        this.setColorPattern(this.firstWord(this.bird.body.pattern));

        this.setUpperwingColor(this.firstWord(this.bird.wing.upperColor));
        this.setUnderwingColor(this.firstWord(this.bird.wing.underColor));
        this.setWingShape(this.firstWord(this.bird.wing.shape));

        this.setLegColor(this.firstWord(this.bird.leg.color));
        this.setLegLength(this.firstWord(this.bird.leg.length));
        this.setLegShape(this.firstWord(this.bird.leg.shape));

        this.setTailColor(this.firstWord(this.bird.tail.color));
        this.setTailLength(this.firstWord(this.bird.tail.length));
        this.setTailShape(this.firstWord(this.bird.tail.shape));
    }

    private firstWord = (input: string) => {
        return input.split(" ")[0];
    }
}

export const birdFormStore = new BirdFormStore();
export const BirdFormContext = createContext(birdFormStore);