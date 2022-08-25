import styles from './shortBreakButton.module.scss'

export default function ShortBreakButton(props: any) {
  return (
    <button className={styles.button}>
      {props.buttonTitle}
    </button>
  )
}
