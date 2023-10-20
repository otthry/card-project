import * as React from 'react';
import styles from './footer.module.css'

export default function Footer() {
    return (<footer className={styles.footer}><div className={styles["footer-content"]}><div><div className={styles["footer-title"]}><div className={styles["footer-logo"]}>해피모먼트</div> <ul className={styles["footer-menu"]}><li><a href="#" rel="nofollow">이용약관</a></li> <li><a href="#" rel="nofollow">개인정보처리방침</a></li> <li><a href="#" rel="nofollow">제휴문의</a></li></ul></div> <ul className={styles["footer-bizinfo"]}><li>상호명 : 해피모먼트 <span>ㅣ</span> 서울시 용산구 이촌로 104 가-706</li> <li>대표자 : 세리 <span>ㅣ</span> 이메일 : support@seri.co.kr</li> <li>사업자등록번호 : 501-40-42116</li> <li>통신판매업신고 : 제 2017-서울용산-0740 호</li></ul></div></div></footer >);
}