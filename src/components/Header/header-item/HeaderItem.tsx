import styles from './headerItem.module.scss'

export default function HeaderItem(props: any) {
  return (
    <div className={styles.header_item}>
      {props.children}
    </div>
  )
}
