import { Main } from '../../components/main/Main';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MainPage = () => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <Main />
      <Footer />
    </Container>
  </Wrapper>
);
