import Image from 'next/image'
import styles from './index.module.css'
import AppBar from '@/components/AppBar '
import HomeCard from '@/components/HomeCard'
import { Typography } from '@mui/material'

export default function Home() {
  return (<>

      <div className="service">
        <Typography className={styles.h2} variant="h2" fontWeight={600}
          fontSize="15px" component="h2">
          소중하고 특별한 날을 위한 초대장
        </Typography>
        <div className={styles.homecard}>
          <HomeCard img="thumbnail.jpeg" title="모바일 청첩장" description="두 분의 소중한 추억을 담은 영상으로 <br>더욱 특별하게" />
          <HomeCard img="moveparty.webp" title="집들이 초대장" description="신혼집, 독립 나의 특별한 순간을 <br>지인들과 기념하세요" />
          <HomeCard img="birthday.webp" title="돌잔치 초대장" description="두 분의 소중한 추억을 담은 영상으로 <br>더욱 특별하게" />
          <HomeCard img="birthday.webp" title="모바일 청첩장" description="두 분의 소중한 추억을 담은 영상으로<br> 더욱 특별하게" />
          <HomeCard img="wedding.jpeg" title="집들이 초대장" description="신혼집, 독립 나의 특별한 순간을 <br>지인들과 기 념하세요" />
          <HomeCard img="wedding.jpeg" title="돌잔치 청첩장" description="두 분의 소중한 추억을 담은 영상으로 <br>더욱 특별하게" />
        </div>

      </div>
      <div className={styles.goodfit}>
        <Typography className={styles.h2} variant="h2" fontWeight={600}
          fontSize="15px" component="h2">
          이 모든 기능이 추가 금액 없이 무료
        </Typography>
        <div className={styles.homecard}>
          <HomeCard title="미리보기 무제한 수정"
            description="언제 어디서나 무제한으로 수정해요" />
          <HomeCard title="축의금"
            description="축하의 마음을 전해요" />
          <HomeCard title="방명록"
            description="실시간으로 축하 메세지를 받아보세요" />

          <HomeCard title="길찾기"
            description="예식장 정보를 쉽게 찾아보세요" />

          <HomeCard title="축의금"
            description="계좌번호로 손쉽게 축하의 마음을 전해요" />

          <HomeCard title="영구보관"
            description="영구보관 기능을 통해 행복한 순간을 오래 추억해요" />
        </div>


      </div>
</>
  )
}
