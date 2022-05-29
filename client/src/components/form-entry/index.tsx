import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

interface FormEntryProps {
    property: string;
    options: string[];
    helpContent: JSX.Element;
    selectedOption: string;
}

const FormEntry = ({ property, options, helpContent, selectedOption }: FormEntryProps) => {

    const [currentOption, setCurrentOption] = useState(selectedOption);

    const handleChange = (event: SelectChangeEvent) => {
        setCurrentOption(event.target.value);
    };

    return (
        //TODO: styles
        <Accordion>
            <AccordionSummary>
                <Typography>
                    {property}
                </Typography>
                <Select
                    value={currentOption}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {options.map(option => (
                        <MenuItem value={option}>{option}</MenuItem>
                    ))}
                </Select>

                <Typography>
                    
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    {helpContent}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
    
}

export default FormEntry;