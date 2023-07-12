import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import ListdayMain from '../../components/listday';

function Listday() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <ListdayMain />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default Listday;
