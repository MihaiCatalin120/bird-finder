import {
    Container, ListItem, Stack
} from "@mui/material";
import { observer } from "mobx-react";
import { useContext } from "react";
import FormEntry from "../../../../components/form-entry";
import { BirdFormContext } from "./bird-form-store";

const FormPage = () => {
    const { bird } = useContext(BirdFormContext);

    const crownColorOptions = ["none", "black", "white", "red", "green", "blue", "brown", "beige", "pink", "orange", "grey"];

    return (
        <Stack>
            <FormEntry property="crownColor" options={crownColorOptions}></FormEntry>
        </Stack>
    );
}

export default observer(FormPage);