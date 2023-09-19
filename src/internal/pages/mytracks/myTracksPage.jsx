import { MyTrackMain } from '../../components/mytrackmain';
import { Footer } from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const MyTracks = ({ isLoad, setIsLoad }) => (
  <Wrapper>
    <Container>
      <GlobalStyle />
      <MyTrackMain isLoad={isLoad} setIsLoad={setIsLoad} />

      <Footer />
    </Container>
  </Wrapper>
);
