
import styles from './app.module.scss'
import '../../styles/variables.scss'

import Wrapper from '../Wrapper/Wrapper'

import tomato from '../../images/tomato.png'
import bazilik from '../../images/bazilik.png'

import Header from '../Header/Header'
import Main from '../Main/Main'
import Settings from '../Settings/Settings'
import ColorPalette from '../ColorPalette/ColorPalette'
import { useState } from 'react'
import { useSelector } from 'react-redux'


function App() {
  const [settings, setSettings] = useState('flex')
  const [color, setColor] = useState('none')

  const currentBgColor = useSelector((state: any) => state.color.color)

  return (
    <Wrapper background={currentBgColor}>
      {/* картиношки на фоне start */}
        <img src={tomato} alt="tomato" style={{position: 'absolute', transform: 'rotate(15deg)', width: '120px', top: '-30px', left: '-30px'}} />
        <img src={tomato} alt="tomato" style={{position: 'absolute', transform: 'rotate(-30deg)', width: '560px', bottom: '-100px', left: '-180px'}} />
        <img src={tomato} alt="tomato" style={{position: 'absolute', transform: 'rotate(15deg)', width: '320px', right: '-110px', top: '40%'}} />
        <img src={bazilik} alt="bazilik" style={{position: 'absolute', width: '180px', top: '30%', left: '140px'}} />
        <img src={bazilik} alt="bazilik" style={{position: 'absolute', width: '150px', bottom: '70px', right: '200px'}} />
        <img src={bazilik} alt="bazilik" style={{position: 'absolute', width: '100px', top: '50px', right: '150px'}} />
      {/* картиношки на фоне end */}

      <div className={styles.box}>
        <Header 
          onClickSettings={() => {
            setSettings('flex')
            setColor('none')
          }}
          onClicColorPalette={() => {
            setSettings('none')
            setColor('flex')
          }}
        />
        <Main />
        <Settings displaySettings={settings}/> 
        <ColorPalette displayColor={color}/>
        {/* // TODO: поднять проспсы стилей на дисплей и передать в хэдэровские функции */}
      </div>
    </Wrapper>
  );
}

export default App;
