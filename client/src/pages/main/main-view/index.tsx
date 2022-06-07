import { observer } from "mobx-react";
import FormPage from "./bird-form";
import WelcomePage from "./welcome-section";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImage from "../../../images/background.jpg";


const MainPage= () => {
    return <div>
        <Parallax pages={2}>
            <ParallaxLayer speed={0.5} offset={0} style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <WelcomePage />
            </ParallaxLayer>
            <ParallaxLayer speed={1} offset={0.999}>
                <FormPage />
            </ParallaxLayer>
        </Parallax>
        
        
    </div>
}

export default observer(MainPage);