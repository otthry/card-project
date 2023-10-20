import Typography from '@mui/material/Typography'
import style from './appbar.module.css'
import Link from 'next/link'
import { AppBar } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger';

export default function Appbar() {
  
  const trigger = useScrollTrigger();

  return (
    <nav class={style.navbar}>
     <div class={style.wrapper}>
     <div class={style.logo}>
      </div>
      <div  class={style['nav-elements']}>
        <ul>
          <li><Link href="/home">홈</Link> </li>
          <li><Link href="/mcard">모바일청첩장</Link> </li>
          {/* <li><Link href="/home">집들이 초대장</Link> </li>
          <li><Link href="/home">돌잔치 초대장</Link> </li>
          <li><Link href="/home">행사 초대장</Link> </li>
          <li><Link href="/home">이벤트</Link> </li>
          <li><Link href="/home">고객문의</Link> </li> */}
        </ul>
      </div>
      {/* <AppBar in={!trigger} position={trigger ? 'fixed' : ''}>모바일 청첩장</AppBar> */}
     </div>
    </nav>
  )
}
