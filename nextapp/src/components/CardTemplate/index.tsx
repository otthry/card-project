import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ButtonGroup, Button, Stack, styled } from '@mui/material';
import styles from './index.module.css'

export default function CardTemplate({ thumbnail = null, title, desc, price, saleprice }) {

    const BootstrapButton = styled(Button)({
        margin: "4px",
        height: "37px",
        textAlign: "center",
        fontSize: "14px",
        boxSizing: "border-box",
        cursor: "pointer",
        padding: "0 16px",
        lineHeight: "35px",
        border: "1px solid #d5d5d5",
        borderRadius: "4px",
        color: "#575757",
        background: "#fff",
        boxShadow: "1px 1px 3px rgba(0,0,0,.05);",
        '&:hover': {
            backgroundColor: '#cbbeb9',
            borderColor: '#f19a79',
            boxShadow: 'none',
            color: '#fff'
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#cbbeb9',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    });

    return (
        <Card sx={{ maxWidth: 500 }}>
            {thumbnail && <CardMedia
                component="img"
                height="500"
                image={thumbnail}
                alt=""
            />}
            <CardContent>
                <Stack direction="row" spacing={2} sx={{
                    "place-content": "space-between"
                }} >
                    <Stack direction="column" spacing={2}>
                        <Typography gutterBottom variant="h5"
                            fontSize="15px" component="div">
                            {title}
                        </Typography>

                        <Typography gutterBottom
                            fontSize="13px" component="div">
                            <span className={styles.price}>{price}</span>
                            <span className={styles.saleprice}>{saleprice}</span>
                        </Typography>

                    </Stack>

                    <Stack direction="row" spacing={2} sx={{
                        "alignItems": "center",
                        "place-content": "space-between"
                    }} className={styles.btngroup} >

                        <BootstrapButton>샘플보기</BootstrapButton>
                        <BootstrapButton  sx={{color: '#fff',
                "background":"#f19a79"}}>제작하기</BootstrapButton>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

