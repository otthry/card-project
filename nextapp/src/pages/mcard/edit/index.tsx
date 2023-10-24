import CardRenderView from '@/components/CardRenderView';
import CardConfig from '@/components/CardConfig';
import { useRouter } from 'next/router';
import styles from "./index.module.css"
import { Grid } from '@mui/material';
export default function McardEdit() {
    const router = useRouter();
    console.log(router.query.id)
    return (<Grid container className={styles.wrapper}>
        <Grid item xs={12} md={6} lg={6}>
            <CardRenderView ></CardRenderView>
        </Grid>
        <Grid item xs={12} md={6}  lg={6}>
            <CardConfig></CardConfig>
        </Grid>
    </Grid>
    )
}

