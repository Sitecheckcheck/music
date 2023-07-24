import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MainPage({ isLoad, setIsLoad }) {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main isLoad={isLoad} setIsLoad={setIsLoad} />
        <Bar isLoad={isLoad} />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
