import { Main } from '../../components/main/Main';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MainPage = ({ isLoad, setIsLoad }) => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <Main isLoad={isLoad} setIsLoad={setIsLoad} />
      <Footer />
    </Container>
  </Wrapper>
);
