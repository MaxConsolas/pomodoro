import styles from './shortBreakButton.module.scss'

export default function ShortBreakButton(props: any) {
  
  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.buttonTitle}
    </button>
  )
}
