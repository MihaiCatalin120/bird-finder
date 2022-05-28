import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";
import styles from "./form-entry.module.scss";


interface FormEntryProps {
    property: string;
    options: string[];
}

const FormEntry = ({ property, options }: FormEntryProps) => {

    const [color, setColor] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setColor(event.target.value);
    };

    return (
        //TODO: styles
        <Accordion>
            <AccordionSummary>
                <Typography>
                    {property}
                </Typography>
                <Select
                    value={color}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {options.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Help for {property}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
    
}

export default FormEntry;