import { Accordion, AccordionDetails, AccordionSummary, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";

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

    return (
        <Accordion>
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
                <Typography
                    sx={{ ml: "auto", mr: 0, my: "auto" }}
                >
                    Need help?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {helpContent}
            </AccordionDetails>
        </Accordion>
    );
    
}

export default FormEntry;