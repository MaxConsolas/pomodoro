import React from 'react'

import styles from './select.module.scss'

import arrow from '../../../images/arrow.svg'

import { useRef } from 'react'
import Button from '../../ButtonStartAndSave/Button'

const soundsData: Array<{id: number, title: string, src: string}> = [
  {id: 0, title: 'Shni Sna Snapi', src: '/audio/1.mp3'},
  {id: 1, title: 'sounds 2', src: '/audio/2.mp3'},
  {id: 2, title: 'sounds 3', src: '/audio/3.mp3'},
  {id: 3, title: 'sounds 4', src: '/audio/4.mp3'},
  {id: 4, title: 'sounds 5', src: '/audio/5.mp3'},
]

export default function Select(props: any) {

  const title = useRef<HTMLParagraphElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const arrowRef = useRef<HTMLImageElement>(null)

  let audio = new Audio()

  //! FIX: music load a lot of times, fix it

  function startPlayingSoung(src: string, e: React.MouseEvent<HTMLLIElement>): void {

    audio.src = src;
    audio.addEventListener('canplay', () => {
      audio.play()
    })

    if (null !== title.current) {
      title.current.innerText = e.currentTarget.innerHTML;
      
      if (null !== list.current && null !== arrowRef.current) {
        list.current.classList.remove(styles.active)
        arrowRef.current.classList.remove(styles.active)
      }
    }
  }

  function listToggle(): void {
    if (null !== list.current) {
      list.current.classList.toggle(styles.active)
    }
    if (null !== arrowRef.current) {
      arrowRef.current.classList.toggle(styles.active)
    }
  }

  function soundsVolume(e: React.ChangeEvent<HTMLInputElement>) {
    audio.volume = Number(e.currentTarget.value);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.alarmBox}>
        <p className={props.classNameForLabel}>Alarm Sounds</p>
        <div className={styles.select}>
          <img ref={arrowRef} src={arrow} alt="arrow" />
          <p className={styles.title} onClick={listToggle} ref={title}>Choose..</p>
        </div>
        <ul className={styles.list} ref={list}>
          { soundsData.map(({id, title, src}) => (
            <li className='title' key={id} onClick={(e) => startPlayingSoung(src, e)}>
              {title}            
            </li>
          ))}
        </ul>
      </div>
      <input 
        type="range" 
        className={styles.range}  
        min="0" 
        max="1" 
        step="0.1"
        onChange={(e) => soundsVolume(e)}
      />
      <Button
        padding='8px 50px'
        onClick={props.onClick}
        buttonTitle='SAVE'
      />
    </div>
  )
}


// onClick={() => startPlayingSoung(src)} - если нужно прокинуть аргументы в ф-ю
// onClick={listToggle} - для ф-й без аргументов
