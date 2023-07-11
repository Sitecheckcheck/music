import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import CompilMain from '../../components/compil';

function Compil() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <CompilMain />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default Compil;
