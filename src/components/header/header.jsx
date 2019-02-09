import React from 'react'
import { Header, Logo } from './index-css';


export const header = () => {
  return (
    <React.Fragment>
        <Header>
          <Logo fontSize={1.5}>Temperatura</Logo>
        </Header>
    </React.Fragment>
  )
}

export default header
