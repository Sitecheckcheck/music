import MainMyTrackMain from '../../components/mytrackmain';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MyTracks() {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <MainMyTrackMain />
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MyTracks;
