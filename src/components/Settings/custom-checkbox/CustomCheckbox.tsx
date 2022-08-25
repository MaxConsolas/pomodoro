import styles from './customCheckbox.module.scss'

export default function CustomCheckbox() {
  return (
    <>
      <input type="checkbox" id="switch"/>
      <label className={styles.checkbox} htmlFor="switch">Toggle</label>
    </>
  )
}
