import React from 'react'
import CustomCheckbox from './custom-checkbox/CustomCheckbox'
import styles from './settings.module.scss'
import ShortBreakButton from './short-break-button/ShortBreakButton'

export default function Settings(props: any) {
  return (
    <div className={styles.settings}>

      <div className={styles.right_box}>

        <div>
          <div className={`${styles.label_input_cont} ${styles.mr}`}>
            <label className={styles.label} htmlFor="workTime">Work Time</label>
            <input className={styles.input} id="workTime" type="text" placeholder="in minutes"/>
          </div>
          <div className={styles.label_input_cont}> 
            <label className={styles.label} htmlFor="longBreak">Long Break</label>
            <input className={styles.input} id="longBreak" type="text" placeholder="in minutes"/>
          </div>
        </div>

        <div>
          <div>
            <p className={styles.label}>Short Break</p>
            <div className={styles.short_break_button_wrapper}>
              <ShortBreakButton buttonTitle="5" />
              <ShortBreakButton buttonTitle="10" />
              <ShortBreakButton buttonTitle="15" />
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
          <input className={`${styles.input} ${styles.small}`} type='text' />
        </div>
        <div>
          <p className={styles.label}>Alarm Sounds</p>
          {/* //TODO: make a custom select+options */}
        </div>
      </div>
    </div>
  )
}
