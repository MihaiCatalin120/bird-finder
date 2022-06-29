import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select, SelectChangeEvent, Typography, Button, IconButton } from "@mui/material";
import HelpIcon from '@mui/icons-material/Help';
import { useState } from "react";

interface FormEntryProps {
    property: string;
    options: string[];
    helpContent: JSX.Element;
    selectedOption: Object;
    propertySetter: (selectedOption: string) => void;
}

const FormEntry = ({ property, options, helpContent, selectedOption, propertySetter }: FormEntryProps) => {

    const handleChange = (event: SelectChangeEvent) => {
        propertySetter(event.target.value);
        selectedOption = event.target.value;
    };

    const [expand, setExpand] = useState(false);
    const toggleHelp = () => {
        setExpand((prev) => !prev);
    };

    return (
        <Accordion expanded={expand}>
            <AccordionSummary>
                <Typography
                    sx={{ mt: 2, mr: 1 }}
                >
                    {property}
                </Typography>
                <Select
                    value={selectedOption.toString()}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    {options.map(option => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
                <IconButton
                    sx={{ ml: "auto", mr: 0, my: "auto" }}
                    onClick={toggleHelp}
                >
                    <HelpIcon />
                </IconButton>
            </AccordionSummary>
            <AccordionDetails>
                {helpContent}
            </AccordionDetails>
        </Accordion>
    );
    
}

export default FormEntry;