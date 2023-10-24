import styles from './index.module.css'
import axios from 'axios';
import CardTemplate from '@/components/CardTemplate'
import { JSX, Key } from 'react';
import { Grid, createTheme } from '@mui/material';

export default function Mcard({ data, ...props }) {
    return ( <Grid container  spacing={2} sx={{
        "justify-content": "center"}}>
       {data.map((item: JSX.IntrinsicAttributes & { thumbnail?: null | undefined; title: any; desc: any; price: any; saleprice: any; }, index: Key | null | undefined) => 
        <Grid item xs={12} md={6}>
                <CardTemplate {...item} key={index} index={index} ></CardTemplate>
      </Grid>
               
        )}
    </Grid>
    )
}


export async function getStaticProps() {
    try {
        const response = await axios.get(
            "http://localhost:3000/api/cardservice"
        );
        const data = response.data;
        return {
            props: {
                ...data,
            },
        };
    } catch (err) {
        console.log(err);
    }
}