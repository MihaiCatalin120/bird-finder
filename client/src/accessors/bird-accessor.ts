import { BASE_URL } from "./constants";
import { BirdDetails, BirdSummary } from "./types";
import { httpGet } from "./helper-functions";

const BIRD_URL = `${BASE_URL}birds/`;

export const getBirdsWithProps = (details: BirdDetails) => {
    var url: string = `${BIRD_URL}filter/`;
    var firstProp: boolean = true;

    
    Object.entries(details)
    .forEach(([key, value]) => {
        Object.entries(value).forEach(([characteristic, charValue]) => {
            if(charValue === "none") return;
            else if(!firstProp) {
                console.log(`${key}${characteristic}=${charValue}`);
                url += `&${key}${characteristic}=${charValue}`
            }
            else {
                console.log(`${key}${characteristic}=${charValue}`);
                url += `?${key}${characteristic}=${charValue}`;
                firstProp = false;
            }
        })
    });

    console.log(url);
    

    return httpGet<BirdSummary[]>(url);
}
