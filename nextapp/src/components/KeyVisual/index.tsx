import * as React from 'react';
import styles from './index.module.css'

export default function KeyVisual() {

    
    return (
        <div>
        <span className={styles.groom}></span>
        <span className={styles.and}></span>
        <span className={styles.bride}></span>
        <div  className={styles.date}>
      2023년 10월 27일 금요일
      <span  className={styles.time}>
        오후 1시 30분
      </span> <div className={styles.place}>더리버사이드 호텔 몽블랑홀</div></div>
        </div>
    );
}

