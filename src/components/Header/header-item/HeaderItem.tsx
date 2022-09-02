import styles from './headerItem.module.scss'

export default function HeaderItem(props: any) {
  return (
    <div className={styles.header_item} onClick={props.onClick}>
      {props.children}
    </div>
  )
}
