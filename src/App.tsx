import styled from 'styled-components'
import { GlobalStyle } from './styles/global'
import Header from './components/Header';



export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
}