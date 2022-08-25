import styles from './tabsButton.module.scss'

export default function TabsButton(props: any) {

  const allTabsButtons = document.querySelectorAll<HTMLElement>('.tabs_button')

  function tabsButtonClick(e: React.MouseEvent<HTMLButtonElement>): void {
    for(let i: number = 0; i < allTabsButtons.length; i++) {
      allTabsButtons[i].classList.remove('active')
    }
    e.currentTarget.classList.add('active')
  }
  return (
    <button className={styles.tabs_button} onClick={tabsButtonClick}>
      {props.buttonTitle}
    </button>
  )
}
