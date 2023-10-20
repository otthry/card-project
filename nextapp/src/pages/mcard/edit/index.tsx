import Image from 'next/image'
import styles from './index.module.css'
import axios from 'axios';
import AppBar from '@/components/appbar/'
import CardTemplate from '@/components/CardTemplate'
import { Typography } from '@mui/material'

export default function Mcard({ data, ...props }) {
    console.log(props)
    console.log(data)
    return (<>
       <div>
       {data.map((item, index) => 
             <div key={index}>
                <CardTemplate {...item}></CardTemplate>
            </div>
        )}
       </div>
    </>
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