import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import List100Main from '../../components/list100';

function List100() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <List100Main />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default List100;
