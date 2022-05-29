import {
    Stack, Typography
} from "@mui/material";
import { observer } from "mobx-react";
import { useContext } from "react";
import FormEntry from "../../../../components/form-entry";
import { BirdFormContext } from "./bird-form-store";


const CrownColorHelp = () => { 
    return (<>
    <p> Crown color refers to the color present in the area on top of the bird's head. </p>
    </>
    ); 
}
const EyeStripeColorHelp = () => {
     return (<>
     <p> Eye stripe color refers to the color present in the area on the level of the bird's eyes. </p>
     </>
     ); 
}
const BeakColorHelp = () => { 
    return (<>
    <p> The color of the bird's beak.</p>
    </>
    );
}
const BeakShapeHelp = () => { 
    return (<>
    <p> The shape of the bird's beak.</p>
    <p> For example, a regular duck has a rounded beak while a stork has a pointed beak. </p>
    </>
    );
}
const BeakLengthHelp = () => { 
    return (<>
    <p> The length of the bird's beak.</p>
    </>
    );
}

const FormPage = () => {
    const { bird } = useContext(BirdFormContext);

    const colorOptions = ["none 🚫 / don't know 🤔", "black ⬛", "white ⬜", "red 🟥", "green 🟩", "blue 🟦", "brown 🟫", "beige (lighter 🟫)", "pink 🌸", "orange 🟧", "grey 💿"];
    const shapeOptions = ["none 🚫 / don't know 🤔", "pointed", "rounded"];
    const lengthOptions = ["none 🚫 / don't know 🤔", "small", "medium", "long"];
    const patternOptions = ["none 🚫 / don't know 🤔", "striped", "spotted", "speckled"];
    const legShapeOptions = ["none 🚫 / don't know 🤔", "normal", "webbed"];
    const tailShapeOptions = ["none 🚫 / don't know 🤔", "fan", "forked", "squared"];

    return (
        <>
        <Typography variant="h3">
            Head
        </Typography>
        <FormEntry property="Crown color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.head.crownColor}></FormEntry>
        <FormEntry property="Eye stripe color:" options={colorOptions} helpContent={EyeStripeColorHelp()} selectedOption={bird.head.eyeStripeColor}></FormEntry>
        <FormEntry property="Beak color:" options={colorOptions} helpContent={BeakColorHelp()} selectedOption={bird.head.beakColor}></FormEntry>
        <FormEntry property="Beak shape:" options={shapeOptions} helpContent={BeakShapeHelp()} selectedOption={bird.head.beakShape}></FormEntry>
        <FormEntry property="Beak length:" options={lengthOptions} helpContent={BeakLengthHelp()} selectedOption={bird.head.beakLength}></FormEntry>
        <Typography variant="h3">
            Body
        </Typography>
        <FormEntry property="Throat color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.body.throatColor}></FormEntry>
        <FormEntry property="Breast color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.body.breastColor}></FormEntry>
        <FormEntry property="Pattern:" options={patternOptions} helpContent={CrownColorHelp()} selectedOption={bird.head.beakColor}></FormEntry>
        <Typography variant="h3">
            Wing
        </Typography>
        <FormEntry property="Upper wing color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.wing.upperColor}></FormEntry>
        <FormEntry property="Under wing color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.wing.underColor}></FormEntry>
        <FormEntry property="Shape:" options={shapeOptions} helpContent={CrownColorHelp()} selectedOption={bird.wing.shape}></FormEntry>
        <Typography variant="h3">
            Leg
        </Typography>
        <FormEntry property="Leg color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.leg.color}></FormEntry>
        <FormEntry property="Leg length:" options={lengthOptions} helpContent={CrownColorHelp()} selectedOption={bird.leg.length}></FormEntry>
        <FormEntry property="Leg shape:" options={legShapeOptions} helpContent={CrownColorHelp()} selectedOption={bird.leg.shape}></FormEntry>
        <Typography variant="h3">
            Tail
        </Typography>
        <FormEntry property="Tail color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.tail.color}></FormEntry>
        <FormEntry property="Tail length:" options={lengthOptions} helpContent={CrownColorHelp()} selectedOption={bird.tail.length}></FormEntry>
        <FormEntry property="Tail shape:" options={tailShapeOptions} helpContent={CrownColorHelp()} selectedOption={bird.tail.shape}></FormEntry>
        </>
    );
}

export default observer(FormPage);