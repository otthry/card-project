import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function HomeCard({ img = null, subtitle = "", title, description }) {
    return (
        <Card sx={{ maxWidth: 500 }}>
            {img && <CardMedia
                component="img"
                height="500"
                image={img}
                alt=""
            />}
            <CardContent>
                <Typography gutterBottom variant="h5"
                    fontSize="15px" component="div">
                    {title}
                </Typography>
                {subtitle !== "" && <Typography gutterBottom variant="h5"
                    fontSize="12px" component="div">
                    {subtitle}
                </Typography>}
                <Typography fontSize="10px" sx={{ mt: 1, whiteSpace: 'pre-line' }}>
                    {description.split("<br>").map((i, key) => {
                        console.log(i)
                        return <span key={key}>{i}</span>;
                    })}
                </Typography>
            </CardContent>
        </Card>
    );
}

