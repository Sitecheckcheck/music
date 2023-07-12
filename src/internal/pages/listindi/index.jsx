import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import ListindiMain from '../../components/listindi';

function Listindi() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <ListindiMain />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default Listindi;
