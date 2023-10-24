import * as React from 'react';
import styles from "./index.module.css"
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

interface CardRenderViewProps {
    title: string;
    value: string;
    array: [];
}
export default function SelectFormControl({ title, value, array }: CardRenderViewProps) {
    return (
        <>

            <FormControl fullWidth>
                <span className={styles.title}>예식시간</span>
                <Select
                    id="demo-simple-select"
                    value={value}
                    label=""
                    sx={{ 'height': '26px' }}
                >
                    {array.map((item, index) => 
                        <MenuItem key={index} value={item}>{item}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </>
    );
}

