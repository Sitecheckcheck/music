import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MainPage() {
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

export default MainPage;
