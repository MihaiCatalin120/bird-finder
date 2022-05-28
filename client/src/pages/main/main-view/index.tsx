import { observer } from "mobx-react";
import FormPage from "./bird-form";


const MainPage= () => {
    return <div>
        <FormPage />
    </div>
}

export default observer(MainPage);