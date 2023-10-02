import { MyTrackMain } from '../../components/mytrackmain/mytrackmain';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MyTracks = () => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <MyTrackMain />

      <Footer />
    </Container>
  </Wrapper>
);
