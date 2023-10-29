import * as React from 'react';
import styles from "./index.module.css"

export default function InputFormControl({title,value} ) {
    return (
        <>
        <div className={styles.wrapper}>
            <div> 
                <label className={styles.formcontrol}>
                    <span className={styles.label}>{title}</span>
                <input className={styles.input} value={value} type="text" /></label>
            </div>
        </div>
        </>
    );
}

