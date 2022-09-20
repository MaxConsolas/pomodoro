import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {setSessionTime, setSmallBreakTime, setLongBreakTime} from '../../store/slices/timeSlice'
import CustomCheckbox from './custom-checkbox/CustomCheckbox'
import Select from './select/Select'
import styles from './settings.module.scss'
import ShortBreakButton from './short-break-button/ShortBreakButton'

export default function Settings(props: any) {

  const [workTime, setWorkTime] = useState('');
  const [shortBreak, setShortBreak] = useState('');
  const [longBreak, setLongBreak] = useState('');

  const dispatch = useDispatch();

  function setShortTimeBreak(e: React.MouseEvent<HTMLLIElement>): void {
    setShortBreak(e.currentTarget.innerHTML)
  }

  return (
    <div className={styles.settings} style={{display: props.displaySettings}}>

      <div className={styles.right_box}>

        <div>
          <div className={`${styles.label_input_cont} ${styles.mr}`}>
            <label className={styles.label} htmlFor="workTime" >Work Time</label>
            <input className={styles.input} id="workTime" type="text" placeholder="in minutes" onInput={(e) => setWorkTime(e.currentTarget.value)}/>
          </div>
          <div className={styles.label_input_cont}> 
            <label className={styles.label} htmlFor="longBreak">Long Break</label>
            <input className={styles.input} id="longBreak" type="text" placeholder="in minutes" onInput={(e) => setLongBreak(e.currentTarget.value)}/>
          </div>
        </div>

        <div>
          <div>
            <p className={styles.label}>Short Break</p>
            <div className={styles.short_break_button_wrapper}>
              <ShortBreakButton buttonTitle="5" 
                onClick={
                  setShortTimeBreak
                }
              />
              <ShortBreakButton buttonTitle="10" 
                onClick={
                  setShortTimeBreak
                }
              />
              <ShortBreakButton buttonTitle="15" 
                onClick={
                  setShortTimeBreak
                }
              />
            </div>
          </div>
          <div style={{marginLeft: '20px'}}>
            <p className={styles.label}>Auto play</p>
            <CustomCheckbox />
          </div>
        </div>

      </div>

      <div className={styles.left_box}>
        <div style={{marginBottom: '20px', display: 'flex', alignItems: 'center'}}>
          <p className={styles.label}>Long Break Interval</p>
          <input className={`${styles.input} ${styles.small}`} type='text' placeholder='sessions' />
        </div>
        <Select 
          classNameForLabel={styles.label}
          onClick = {
            () => {
              dispatch(
                setSessionTime(Number(workTime))
              )
              dispatch(
                setLongBreakTime(Number(longBreak))
              )
              dispatch(
                setSmallBreakTime(Number(shortBreak))
              )
            }
          }
        />

      </div>
    </div>
  )
}
