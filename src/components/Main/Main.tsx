import React from 'react'
import styles from './main.module.scss'

import Button from '../ButtonStartAndSave/Button'
import TabsButton from './tabs-button/TabsButton'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.tabs_wrapper}>
        <TabsButton buttonTitle="Work Time"/>
        <TabsButton buttonTitle="Short Break"/>
        <TabsButton buttonTitle="Long Break"/>
      </div>
      <p className={styles.time}>40:00</p>
      <p className={styles.session}>session #1</p>
      <Button 
        buttonTitle="START"
      />
    </div>
  )
}
