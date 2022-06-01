import crownColorHint from "../../../../images/crownColorHint.png";
import eyeStripeColorHint from "../../../../images/eyeStripeHint.png";
import beakColorHint from "../../../../images/beakColorHint.png";
import roundedBeakHint from "../../../../images/roundedBeakHint.png";
import pointedBeakHint from "../../../../images/pointedBeakHint.png";
import throatColorHint from "../../../../images/throatColorHint.png";
import breastColorHint from "../../../../images/breastColorHint.png";
import speckledPatternHint from "../../../../images/speckledPatternHint.png";
import spottedPatternHint from "../../../../images/spottedPatternHint.png";
import stripedPatternHint from "../../../../images/stripedPatternHint.png";
import upperwingColorHint from "../../../../images/upperwingColorHint.png";
import underwingColorHint from "../../../../images/underwingColorHint.png";
import pointedWingHint from "../../../../images/pointedWingHint.png";
import roundedWingHint from "../../../../images/roundedWingHint.png";
import legColorHint from "../../../../images/legColorHint.png";
import tailColorHint from "../../../../images/tailColorHint.png";
import normalLegHint from "../../../../images/defaultbird.png";
import webbedLegHint from "../../../../images/roundedWingHint.png";
import fanTailHint from "../../../../images/pointedWingHint.png";
import squareTailHint from "../../../../images/stripedPatternHint.png";
import forkedTailHint from "../../../../images/forkedTailHint.png";

//Head
export function CrownColorHelp() { 
    return (<>
    <p> Crown color refers to the color present in the area on top of the bird's head. </p>
    <p> Location: </p>
    <img src={crownColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function EyeStripeColorHelp() {
    return (<>
    <p> Eye stripe color refers to the color present in the area on the level of the bird's eyes. </p>
    <p> Location: </p>
    <img src={eyeStripeColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function BeakColorHelp() { 
    return (<>
    <p> The color of the bird's beak.</p>
    <p> Location: </p>
    <img src={beakColorHint} width={500} height={312}></img>
    </>
    );
}
export function BeakShapeHelp() { 
    return (<>
    <p> The shape of the bird's beak.</p>
    <p> For example, a regular duck has a rounded beak while a stork has a pointed beak. </p>
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
        <div>
            <p> Rounded beak: </p>
            <img src={roundedBeakHint}></img>
        </div>
        <div>
            <p> Pointed beak: </p>
            <img src={pointedBeakHint}></img>
        </div>
    </div> 
    </>
    );
}
export function BeakLengthHelp() { 
    return (<>
    <p> The length of the bird's beak.</p>
    <p> Small is around 2-5cm, medium 5-7cm and long &gt;7cm </p>
    </>
    );
}
//Body
export function ThroatColorHelp() { 
    return (<>
    <p> Throat color refers to the color present in the area under the bird's beak. </p>
    <p> Location: </p>
    <img src={throatColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function BreastColorHelp() { 
    return (<>
    <p> Breast color refers to the color present in the area of the bird's body, under the throat. </p>
    <p> Location: </p>
    <img src={breastColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function BodyPatternHelp() { 
    return (<>
    <p> Body pattern refers to the color patterns present on the bird's body. </p>
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
        <div>
            <p> Speckled pattern: </p>
            <img src={speckledPatternHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Spotted pattern: </p>
            <img src={spottedPatternHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Striped pattern: </p>
            <img src={stripedPatternHint} width={300} height={200}></img>
        </div>
    </div> 
    </>
    ); 
}
//Wing
export function UnderwingColorHelp() { 
    return (<>
    <p> Underwing color refers to the color present in the area under the bird's wing. </p>
    <p> Location: </p>
    <img src={underwingColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function UpperwingColorHelp() { 
    return (<>
    <p> Upperwing color refers to the color present in the area on top of the bird's wing. </p>
    <p> Location: </p>
    <img src={upperwingColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function WingShapeHelp() { 
    return (<>
    <p> The shape of the end of the wing. </p>
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
        <div>
            <p> Rounded wing: </p>
            <img src={roundedWingHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Pointed wing: </p>
            <img src={pointedWingHint} width={300} height={200}></img>
        </div>
    </div> 
    </>
    ); 
}
//Leg
export function LegColorHelp() { 
    return (<>
    <p> Color of the bird's legs. </p>
    <p> Location: </p>
    <img src={legColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function LegLengthHelp() { 
    return (<>
    <p> The length of the bird's leg. </p>
    <p> Small is around 2-5cm, medium 5-7cm and long &gt;7cm </p>
    </>
    ); 
}
export function LegShapeHelp() { 
    return (<>
    <p> Shape of the bird's legs. </p>
    <p> Webbed means that the toes are linked through a membrane, usually occured in birds that swim. </p>
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
        <div>
            <p> Normal leg: </p>
            <img src={normalLegHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Webbed leg: </p>
            <img src={webbedLegHint} width={300} height={200}></img>
        </div>
    </div> 
    </>
    ); 
}
//Tail
export function TailColorHelp() { 
    return (<>
    <p> Color of the bird's tail. </p>
    <p> Location: </p>
    <img src={tailColorHint} width={500} height={312}></img>
    </>
    ); 
}
export function TailLengthHelp() { 
    return (<>
    <p> Length of the bird's tail. </p>
    <p> Small is around 2-5cm, medium 5-7cm and long `&gt;`7cm </p>
    </>
    ); 
}
export function TailShapeHelp() { 
    return (<>
    <p> Shape of the bird's tail. </p>
    <div style={{display: "grid", gridTemplateColumns: "auto auto auto"}}>
        <div>
            <p> Square tail: </p>
            <img src={squareTailHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Fan tail: </p>
            <img src={fanTailHint} width={300} height={200}></img>
        </div>
        <div>
            <p> Forked tail: </p>
            <img src={forkedTailHint} width={300} height={200}></img>
        </div>
    </div> 
    </>
    ); 
}