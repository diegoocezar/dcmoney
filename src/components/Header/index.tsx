import React from 'react'
import logoImg from '../../assets/logo.svg';

import {Container, Content} from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export default function Header({onOpenNewTransactionModal}: HeaderProps) {
 
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
        
      </Content>
    </Container>
  )
}
