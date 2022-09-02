import React from 'react'
import { useDispatch } from 'react-redux'
import { setBgColor } from '../../store/slices/changeColorSlice'

import styles from './colorPalette.module.scss'

const colors = [
  {title: 'black', color: '#333333'},
  {title: 'darkRed', color: '#D95550'},
  {title: 'darkOrange', color: '#EA9633'},
  {title: 'darkYellow', color: '#E3CE0A'},
  {title: 'darkGreen', color: '#5BD950'},
  {title: 'darkCyan', color: '#19DAC3'},
  {title: 'darkBlue', color: '#5055D9'},
  {title: 'darkViolet', color: '#BE50D9'},
  {title: 'darkPink', color: '#D95079'},

  {title: 'white', color: '#f5f3f3'},
  {title: 'lightRed', color: '#FF9595'},
  {title: 'lightOrange', color: '#FFBB95'},
  {title: 'lightYellow', color: '#FFE195'},
  {title: 'lightGreen', color: '#B7FF95'},
  {title: 'lightCyan', color: '#95FFF2'},
  {title: 'lightBlue', color: '#95B3FF'},
  {title: 'lightViolet', color: '#EA95FF'},
  {title: 'lightPink', color: '#FF95BB'},
]

export default function ColorPalette(props: any) {

  const dispatch = useDispatch()

  function setColor(color: string) {
    dispatch(setBgColor(color))
  }

  return (
    <div className={styles.color} style={{display: props.displayColor}}>
      {colors.map(({title, color}) => 
        <div 
          className={styles.colorItem}
          style={{background: color}}
          placeholder={title}
          key={title}
          onClick={() => setColor(color)}
        ></div>
      )}
    </div>
  )
}

/*
TODO: нужно сделать пропес цвет текса *(или инлайн стиль)
и как-то реализовать смену в зависимости от title?
*/ 
