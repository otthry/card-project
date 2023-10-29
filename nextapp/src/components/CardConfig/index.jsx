import * as React from 'react';
import styles from "./index.module.css"
import InputFormControl from '../InputFormControl';
import SelectFormControl from '../SelectFormControl';
import ConfigCard from '../ConfigCard';
import { useState } from 'react';

export default function CardConfig() {

    const [state, setState] = useState( {
        groom : {
            FirstName : '',
            LastName : '',
            momName : '',
            dadName : '',
            relative : '',
            firstOrder : true,
        },
        bride : {
            FirstName : '',
            LastName : '',
            momName : '',
            dadName : '',
        }
    } );

    return (
        <>
        <div>
            <ConfigCard title="신랑측 정보">

                <InputFormControl title="신랑 성"   value={state.groom.FirstName} />
                <InputFormControl title="신랑 이름"   value={state.groom.LastName} />
                <InputFormControl title="어머님" value={state.groom.momName} />
                <InputFormControl title="아버님"  value={state.groom.dadName} />
                <InputFormControl title="관계"   value={state.groom.relative} />
                <InputFormControl title="신랑측 먼저  모든 항목 신랑측 먼저 표시"   value={state.groom.firstOrder} checkbox="true"/>
                
            </ConfigCard>
            <ConfigCard title="신부측 정보">
                <InputFormControl title="신랑 성"   value={state.bride.FirstName} />
                <InputFormControl title="신랑 이름"   value={state.bride.LastName} />
                <InputFormControl title="어머님" value={state.bride.momName} />
                <InputFormControl title="아버님"  value={state.bride.dadName} />
                <InputFormControl title="관계"   value={state.bride.relative} />
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

