import React from 'react'
import { Header} from '../../css/header';
import Logo from '../../images/logo.png'
import {LogoText} from '../../css/header';

export const header = () => {
  return (
    <React.Fragment>
        <Header>
          <img style={{width: '50px', height: '50px'}} src={Logo} alt=""/>
          <LogoText fontSize={1.7}>Conversor de moeda</LogoText>
        </Header>
    </React.Fragment>
  )
}

export default header
