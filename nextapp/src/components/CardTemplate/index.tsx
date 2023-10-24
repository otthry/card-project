import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ButtonGroup, Button, Stack, styled } from '@mui/material';
import styles from './index.module.css'
import Link from 'next/link';

export default function CardTemplate({ thumbnail = null, title, desc, index, price, saleprice }) {

    const BootstrapButton = styled(Button)({
        margin: "2px",
        height: "37px",
        textAlign: "center",
        fontSize: "12px",
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
        <Card elevation={0}>
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
                    <div className={styles.titleprice}>
                        <span className={styles.title}>
                            {title}
                        </span>
                        <span className={styles.price}>
                            <span className={styles.price}>{price}</span>
                            <i className={styles.saleprice}>{saleprice}</i>
                        </span>

                    </div>

                    <Stack direction="row" spacing={2} sx={{
                        "alignItems": "center",
                        "place-content": "space-between"
                    }} className={styles.btngroup} >
<a href="http://iore8655.iptime.org:18100/" target="_blank">
                        <BootstrapButton >샘플보기</BootstrapButton></a>
                        <Link href={`/mcard/edit/`}>
                        <BootstrapButton  sx={{color: '#fff',
                "background":"#f19a79"}}>제작하기</BootstrapButton>
                </Link>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

