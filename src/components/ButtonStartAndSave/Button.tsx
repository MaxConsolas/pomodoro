import styles from './button.module.scss'

export default function Button(props: any) {
  return (
    <button className={styles.start_button} onClick={props.onClick}>
      {props.buttonTitle}
    </button>
  )
}
