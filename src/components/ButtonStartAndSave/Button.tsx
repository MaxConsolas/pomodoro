import styles from './button.module.scss'

export default function Button(props: any) {
  return (
    <button className={styles.start_button} onClick={props.onClick}
      style={{padding: props.padding}}
    >
      {props.buttonTitle}
    </button>
  )
}
