import { useDispatch } from 'react-redux'
import { setCurrentTab } from '../../../store/slices/currentTab'
import styles from './tabsButton.module.scss'

export default function TabsButton(props: any) {

  const dispatch: any = useDispatch()

  function tabsButtonClick(e: React.MouseEvent<HTMLButtonElement>): void {
    // for(let i: number = 0; i < allTabsButtons.length; i++) {
    //   allTabsButtons[i].classList.remove(styles.active)
    // }
    // e.currentTarget.classList.add(styles.active)
    dispatch(setCurrentTab(e.currentTarget.innerHTML))
  }

  return (
    <button className={styles.tabs_button} onClick={(e) => { tabsButtonClick(e) }}>
      {props.buttonTitle}
    </button>
  )
}
