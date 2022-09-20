import React, { useRef, useState } from 'react'
import styles from './main.module.scss'

import Button from '../ButtonStartAndSave/Button'
import TabsButton from './tabs-button/TabsButton'
import { useSelector } from 'react-redux'
import setTime from '../TimeFunction/TimeFunction'

export default function Main() {
  let currentTab = useSelector((state:any) => state.currentTab.currentTab);

  let sessionTime = useSelector((state: any) => state.time.sessionTime);
  let smallBreakTime = useSelector((state: any) => state.time.smallBreakTime);
  let longBreakTime = useSelector((state: any) => state.time.longBreakTime);

  // TODO: тип данных для рефа
  const timeParagraph:any = useRef();
  const [buttonToggle, setButtonToggle] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.tabs_wrapper}>
        <TabsButton buttonTitle="Work Time"/>
        <TabsButton buttonTitle="Short Break"/>
        <TabsButton buttonTitle="Long Break"/>
      </div>
      <p ref={timeParagraph} className={styles.time}>{
        (currentTab === 'Work Time') ? sessionTime :
        (currentTab === 'Short Break') ? smallBreakTime :
        (currentTab === 'Long Break') ? longBreakTime : sessionTime
      }:00</p>
      <p className={styles.session}>session #1</p>
      <Button 
        buttonTitle={buttonToggle ? "STOP" : "START"}
        onClick = {() => {
          setButtonToggle(!buttonToggle);
          setTime(
            (currentTab === 'Work Time') ? sessionTime :
            (currentTab === 'Short Break') ? smallBreakTime :
            (currentTab === 'Long Break') ? longBreakTime : sessionTime, 
            timeParagraph.current, 
            buttonToggle
          );
        }}
      />
    </div>
  )
}
