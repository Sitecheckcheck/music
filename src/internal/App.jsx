import './App.css';
import Main from './components/Main';
import Bar from './components/Bar';
import Footer from './components/Footer';
import GlobalStyle, { Wrapper, Container } from './styles';

function App() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default App;
