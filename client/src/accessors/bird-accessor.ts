import { BASE_URL } from "./constants";
import { BirdDetails, BirdSummary } from "./types";
import { httpGet } from "./helper-functions";

const BIRD_URL = `${BASE_URL}birds`;

export const getBirdsWithProps = (details: BirdDetails) => {
    var url: string = BIRD_URL;
    var firstProp: boolean = true;

    
    Object.entries(details)
    .forEach(([key, value]) => {
        Object.entries(value).forEach(([characteristic, charValue]) => {
            if(charValue === "none") return;
            if(!firstProp) {
                console.log(`${characteristic}${charValue}`);
                url += `&${characteristic}=${charValue}`
                return;
            }
            if(firstProp) {
                url += `?${characteristic}=${charValue}`;
                firstProp = true;
            }
        })
    });

    console.log(url);
    

    return httpGet<BirdSummary[]>(url);
}
