import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MainPage({ isLoad, setIsLoad }) {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main
          isLoad={isLoad}
          setIsLoad={setIsLoad}
        />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
