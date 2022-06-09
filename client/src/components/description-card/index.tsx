import { Grid, Paper } from "@mui/material";

interface DescriptionCardProps {
    imageAlignment: "left" | "right";
    imageURL: string;
    descriptionContent: JSX.Element;
}


const DescriptionCard = ({imageAlignment, imageURL, descriptionContent}: DescriptionCardProps) => {

    const leftXS = (imageAlignment === "left") ? 3 : 9;
    const rightXS = (imageAlignment === "left") ? 9 : 3;

    return (
        <Paper sx={{p: 2, width:'99vw'}}>
            <Grid container sx={{width: '99vw'}}>
                <Grid item xs={leftXS} sx={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center", 
                    margin: "auto",
                    padding: "2em"
                }}>
                    {(imageAlignment === "left") && (
                        <img src={imageURL} width={350} height={500}></img>
                    ) || (
                        <>{descriptionContent}</>
                    )}
                </Grid>
                <Grid item xs={rightXS} sx={{
                    display: "flex",
                    flexDirection: "column", 
                    alignItems: "center", 
                    margin: "auto",
                    padding: "2em"
                }}>
                    {(imageAlignment === "right") && (
                        <img src={imageURL} width={350} height={500}></img>
                    ) || (
                        <>{descriptionContent}</>
                    )}
                </Grid>
            </Grid>
        </Paper>
    );
}

export default DescriptionCard;