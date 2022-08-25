import styles from './wrapper.module.scss'

export default function Wrapper(props: any) {
  return (
    <div className={styles.wrapper} style={{background: props.background}}>
      {props.children}
    </div>
  )
}
