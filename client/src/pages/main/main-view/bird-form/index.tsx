import {
    Stepper, Step, StepContent, Button, Box, Paper, Typography, StepLabel, CircularProgress, Grid, Dialog, DialogContent
} from "@mui/material";
import { observer } from "mobx-react";
import { useContext, useState } from "react";
import FormEntry from "../../../../components/form-entry";
import { BirdFormContext } from "./bird-form-store";
import {
    CrownColorHelp, EyeStripeColorHelp, BeakColorHelp, BeakShapeHelp, BeakLengthHelp,
    BodySizeHelp, ThroatColorHelp, BreastColorHelp, BodyPatternHelp,
    UnderwingColorHelp, UpperwingColorHelp, WingShapeHelp,
    LegColorHelp, LegLengthHelp, LegShapeHelp,
    TailColorHelp, TailLengthHelp, TailShapeHelp
} from "./bird-form-help-sections";
import ResultCard from "../../../../components/result-card";

const FormPage = () => {
    const {
        bird,
        activeStep,
        resultBirds,
        submitPressed,
        resultsLoaded,
        nextStep,
        backStep,
        resetStep,
        setCrownColor,
        setEyeStripeColor,
        setBeakColor,
        setBeakShape,
        setBeakLength,
        setBodySize,
        setThroatColor,
        setBreastColor,
        setColorPattern,
        setUpperwingColor,
        setUnderwingColor,
        setWingShape,
        setLegColor,
        setLegLength,
        setLegShape,
        setTailColor,
        setTailLength,
        setTailShape,
        submitDetails
    } = useContext(BirdFormContext);

    const handleNext = () => {
        nextStep();
    };

    const handleBack = () => {
        backStep();
    };

    const handleReset = () => {
        resetStep();
    };

    const handleSubmit = () => {
        submitDetails();
    }

    const colorOptions = ["none 🚫 / don't know 🤔", "black ⬛", "white ⬜", "red 🟥", "green 🟩", "blue 🟦", "brown 🟫", "beige (lighter 🟫)", "pink 🌸", "orange 🟧", "grey 💿"];
    const shapeOptions = ["none 🚫 / don't know 🤔", "pointed", "rounded"];
    const lengthOptions = ["none 🚫 / don't know 🤔", "small", "medium", "long"];
    const bodySizeOptions = ["none 🚫 / don't know 🤔", "small", "medium", "big"];
    const patternOptions = ["none 🚫 / don't know 🤔", "striped", "spotted", "speckled"];
    const legShapeOptions = ["none 🚫 / don't know 🤔", "normal", "webbed"];
    const tailShapeOptions = ["none 🚫 / don't know 🤔", "fan", "forked", "squared"];

    const steps = [
        {
            label: 'Select crown color:',
            component: <FormEntry property="Crown color:" options={colorOptions} helpContent={CrownColorHelp()} selectedOption={bird.head.crownColor} propertySetter={setCrownColor}></FormEntry>
        },
        {
            label: 'Select eye stripe color:',
            component: <FormEntry property="Eye stripe color:" options={colorOptions} helpContent={EyeStripeColorHelp()} selectedOption={bird.head.eyeStripeColor} propertySetter={setEyeStripeColor}></FormEntry>
        },
        {
            label: 'Select beak color:',
            component: <FormEntry property="Beak color:" options={colorOptions} helpContent={BeakColorHelp()} selectedOption={bird.head.beakColor} propertySetter={setBeakColor}></FormEntry>
        },
        {
            label: 'Select beak length:',
            component: <FormEntry property="Beak length:" options={lengthOptions} helpContent={BeakLengthHelp()} selectedOption={bird.head.beakLength} propertySetter={setBeakLength}></FormEntry>
        },
        {
            label: 'Select beak shape:',
            component: <FormEntry property="Beak shape:" options={shapeOptions} helpContent={BeakShapeHelp()} selectedOption={bird.head.beakShape} propertySetter={setBeakShape}></FormEntry>
        },
        {
            label: 'Select body size:',
            component: <FormEntry property="Body size:" options={bodySizeOptions} helpContent={BodySizeHelp()} selectedOption={bird.body.size} propertySetter={setBodySize}></FormEntry>
        },
        {
            label: 'Select throat color:',
            component: <FormEntry property="Throat color:" options={colorOptions} helpContent={ThroatColorHelp()} selectedOption={bird.body.throatColor} propertySetter={setThroatColor}></FormEntry>
        },
        {
            label: 'Select breast color:',
            component: <FormEntry property="Breast color:" options={colorOptions} helpContent={BreastColorHelp()} selectedOption={bird.body.breastColor} propertySetter={setBreastColor}></FormEntry>
        },
        {
            label: 'Select color pattern:',
            component: <FormEntry property="Pattern:" options={patternOptions} helpContent={BodyPatternHelp()} selectedOption={bird.body.pattern} propertySetter={setColorPattern}></FormEntry>
        },
        {
            label: 'Select upperwing color:',
            component: <FormEntry property="Upper wing color:" options={colorOptions} helpContent={UpperwingColorHelp()} selectedOption={bird.wing.upperColor} propertySetter={setUpperwingColor}></FormEntry>
        },
        {
            label: 'Select underwing color:',
            component: <FormEntry property="Under wing color:" options={colorOptions} helpContent={UnderwingColorHelp()} selectedOption={bird.wing.underColor} propertySetter={setUnderwingColor}></FormEntry>
        },
        {
            label: 'Select wing shape:',
            component: <FormEntry property="Shape:" options={shapeOptions} helpContent={WingShapeHelp()} selectedOption={bird.wing.shape} propertySetter={setWingShape}></FormEntry>
        },
        {
            label: 'Select leg color:',
            component: <FormEntry property="Leg color:" options={colorOptions} helpContent={LegColorHelp()} selectedOption={bird.leg.color} propertySetter={setLegColor}></FormEntry>
        },
        {
            label: 'Select leg length:',
            component: <FormEntry property="Leg length:" options={lengthOptions} helpContent={LegLengthHelp()} selectedOption={bird.leg.length} propertySetter={setLegLength}></FormEntry>
        },
        {
            label: 'Select leg shape:',
            component: <FormEntry property="Tail shape:" options={legShapeOptions} helpContent={LegShapeHelp()} selectedOption={bird.tail.shape} propertySetter={setLegShape}></FormEntry>
        },
        {
            label: 'Select tail color:',
            component: <FormEntry property="Tail color:" options={colorOptions} helpContent={TailColorHelp()} selectedOption={bird.tail.color} propertySetter={setTailColor}></FormEntry>
        },
        {
            label: 'Select tail length:',
            component: <FormEntry property="Tail length:" options={lengthOptions} helpContent={TailLengthHelp()} selectedOption={bird.tail.length} propertySetter={setTailLength}></FormEntry>
        },
        {
            label: 'Select tail shape:',
            component: <FormEntry property="Tail shape:" options={tailShapeOptions} helpContent={TailShapeHelp()} selectedOption={bird.tail.shape} propertySetter={setTailShape}></FormEntry>
        }
    ];

    return (
        <Box
            sx={{ p: 2, backgroundColor: 'white' }}
        >
            <Box>
                <Typography variant="h3">
                    Ready?
                </Typography>
                <Typography>
                    General hints before you begin:
                    <ul>
                        <li>Only choose the options that you are sure about.</li>
                        <li>Otherwise, just choose the don't know option.</li>
                        <li>If multiple colors are present on a part, choose the most predominant one.</li>
                        <li>You can always go back to a previous selected option.</li>
                    </ul>
                    Notice: For now, we only have coverage over Romania's teritorry, with time we will add more later.
                </Typography>
            </Box>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                index >= 0 && index < 5 ? (
                                    <Typography variant="caption">Head section</Typography>
                                ) :
                                    index >= 5 && index < 8 ? (
                                        <Typography variant="caption">Body section</Typography>
                                    ) :
                                        index >= 8 && index < 11 ? (
                                            <Typography variant="caption">Wing section</Typography>
                                        ) :
                                            index >= 11 && index < 14 ? (
                                                <Typography variant="caption">Leg section</Typography>
                                            ) :
                                                index >= 14 && index < 17 ? (
                                                    <Typography variant="caption">Tail section</Typography>
                                                ) :
                                                    index === 17 ? (
                                                        <Typography variant="caption">Tail section (Last step)</Typography>
                                                    ) : null
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.component}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        onKeyDown={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>Well done! Click submit to see results.</Typography>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Submit
                    </Button>
                    <Button
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Back
                    </Button>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reset
                    </Button>
                </Paper>
            )}
            <Box>
            <Dialog open={submitPressed && !resultsLoaded}>
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Typography>
                                Please wait..
                            </Typography>
                        </Grid>
                        <Grid item>
                            <CircularProgress/>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            {(resultsLoaded && resultBirds.length > 0) && (
                <Typography variant="h3" sx={{mb: 2}}>
                    Results:
                </Typography>
            )}
            {(resultsLoaded && resultBirds.length > 0) && resultBirds.map((bird) => (
                <ResultCard birdSummary={bird}></ResultCard>
            ))
            || resultsLoaded && (
                <Typography>
                    No results found.
                </Typography>
            )}
            </Box>
            
        </Box>
    );
}

export default observer(FormPage);