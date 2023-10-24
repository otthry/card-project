import * as React from 'react';
import styles from "./index.module.css"
import InputFormControl from '../InputFormControl';
import SelectFormControl from '../SelectFormControl';
import ConfigCard from '../ConfigCard';

export default function CardRenderView() {

    
    return (
        <>
        <div>
            <ConfigCard title="신랑측">
                <InputFormControl title="신랑이름" value="" />
            </ConfigCard>
            <ConfigCard title="신부측">
                <InputFormControl title="신랑이름" value="" />
            </ConfigCard>
            <ConfigCard title="신부측">
                <InputFormControl title="웨딩홀 이룸" value="" />
                <InputFormControl title="예식 날짜 " value="" />
                <SelectFormControl title="예식시간" array={["오전 7시","오전 8시","오전 9시","오전 10시","오전 11시",]} value="" />
            </ConfigCard>
            <div>
                <SelectFormControl title="예식시간" array={["오전 7시","오전 8시","오전 9시","오전 10시","오전 11시",]} value="" />
            </div>

        </div>
        </>
    );
}

