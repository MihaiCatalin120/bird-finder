import { observer } from "mobx-react";
import FormPage from "./bird-form";
import WelcomePage from "./welcome-section";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import backgroundImage1 from "../../../images/background.jpg";
import backgroundImage2 from "../../../images/background2.jpg";
import descriptionImage1 from "../../../images/description1.jpg";
import descriptionImage2 from "../../../images/description2.jpg";
import DescriptionCard from "../../../components/description-card";
import { Description1, Description2 } from "./description-contents";


const MainPage= () => {
    return <div>
        <Parallax pages={5}>
            <ParallaxLayer speed={0.5} offset={0} style={{
                backgroundImage: `url(${backgroundImage1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
                <WelcomePage />
            </ParallaxLayer>

            <ParallaxLayer speed={0.6} factor={1.75} offset={0.999} style={{
                backgroundImage: `url(${backgroundImage2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></ParallaxLayer>

            <ParallaxLayer speed={1.5} offset={0.999} style={{
                display: 'flex',
                height: '600px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <DescriptionCard 
                imageAlignment="right" 
                imageURL={descriptionImage1} 
                descriptionContent={Description1()}
                />
            </ParallaxLayer>

            <ParallaxLayer speed={1.5} offset={1} style={{
                display: 'flex',
                height: '600px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <DescriptionCard 
                imageAlignment="left" 
                imageURL={descriptionImage2} 
                descriptionContent={Description2()}
                />
            </ParallaxLayer>

            <ParallaxLayer speed={1} offset={1.999}>
                <FormPage />
            </ParallaxLayer>

        </Parallax>
    </div>
}

export default observer(MainPage);