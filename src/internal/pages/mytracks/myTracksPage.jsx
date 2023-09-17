import MyTrackMain from '../../components/mytrackmain';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MyTracks({ isLoad, setIsLoad }) {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <MyTrackMain isLoad={isLoad} setIsLoad={setIsLoad} />

        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MyTracks;
