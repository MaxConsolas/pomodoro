
import styles from './header.module.scss'

import tomato from '../../images/tomato.png'
import settings from '../../images/settings.svg'
import palette from '../../images/color.svg'

import HeaderItem from './header-item/HeaderItem'

export default function Header(props: any) {
  return (
    <div className={styles.header}>
      <div className={`${styles.wrapper} ${styles.logo_wrapper}`}>
        <img className={styles.logo} src={tomato} alt="logo"/>
        <h1>Pomodoro</h1>
      </div>
      <div className={styles.wrapper}>
        <HeaderItem>
          <img src={settings} alt="settings" />
        </HeaderItem>
        <HeaderItem>
          <img src={palette} alt="color palette" />
        </HeaderItem>
      </div>
    </div>
  )
}
