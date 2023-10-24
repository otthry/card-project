import * as React from 'react';
import styles from "./index.module.css"

interface CardRenderViewProps{
    title: string;
    value: string;
}
export default function InputFormControl({title,value}:CardRenderViewProps ) {

    
    return (
        <>
        <div>
            <div> 
                <label className={styles.formcontrol}>
                    <span className={styles.label}>{title}</span>
                <input className={styles.input} value={value} type="text" /></label>
            </div>
        </div>
        </>
    );
}

