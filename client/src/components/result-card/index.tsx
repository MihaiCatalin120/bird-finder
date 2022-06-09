import { Grid, Typography, Paper } from "@mui/material";
import { IMAGES_URL } from "../../accessors/constants";
import { BirdSummary } from "../../accessors/types"

interface ResultCardProps {
    birdSummary: BirdSummary
}


const ResultCard = ({ birdSummary }: ResultCardProps) => {

    const accuracy = Math.round((birdSummary.accuracy + Number.EPSILON) * 100) / 100;

    return (
        <Paper variant="outlined">
        <Grid container spacing={1} sx={{p:2}}>
            <Grid item xs={3}>
                <img src={`${IMAGES_URL}${birdSummary.name.toString().replace(/\s+/g, '')}.jpg`} width={300} height={200} alt={birdSummary.name}></img>
            </Grid>
            <Grid container item direction="column" xs>
                <Grid container item spacing={1} alignItems='center' xs={3}>
                    <Grid item>
                        <Typography variant="h6">
                            {birdSummary.name} 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={{fontStyle: 'italic'}}>
                            {birdSummary.scientificName}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    {(accuracy > 70) && (
                        <Typography sx={{color: 'success.main', fontStyle: 'bold'}}>
                            (accuracy: {accuracy}%)
                        </Typography>
                    ) || (accuracy > 40) && (
                        <Typography sx={{color: 'warning.main', fontStyle: 'bold'}}>
                            (accuracy: {accuracy}%)
                        </Typography>
                    ) || (
                        <Typography sx={{color: 'error.main', fontStyle: 'bold'}}>
                            (accuracy: {accuracy}%)
                        </Typography>
                    ) }
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Rarity: {
                            birdSummary.rarity === "A" && ("Common") 
                            || birdSummary.rarity === "B" && ("Uncommon")
                            || birdSummary.rarity === "C" && ("Rare")
                            || birdSummary.rarity === "D" && ("Very rare")
                            || birdSummary.rarity === "E" && ("Extremely rare (only in zoos)")
                        }
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography>
                        Wikipedia link: <a href={birdSummary.wikiLink}> {birdSummary.wikiLink}</a>
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
        </Paper>
    );
}

export default ResultCard;