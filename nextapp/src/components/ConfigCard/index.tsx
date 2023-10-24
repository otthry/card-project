import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ConfigCard({title,children} : any) {
    return (
        <Card sx={{ maxWidth: 500 }}>
            <Typography  sx={{padding: '15px' , fontWeight : 700}}>{title}</Typography>
            <CardContent>{children}
            </CardContent>
        </Card>
    );
}

