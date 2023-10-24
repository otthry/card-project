import * as React from 'react';
import styles from "./index.module.css"
import KeyVisual from '../KeyVisual';

export default function CardRenderView() {

    
    return (
        <div className={styles.wrapper}>
        <KeyVisual></KeyVisual>
        </div>
    );
}

