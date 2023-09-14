/* eslint-disable */
import MyTrackMain from '../../components/mytrackmain';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import { useSelectTrackContext } from '../../../contexts/selectTrack';
function MyTracks({ isLoad, setIsLoad }) {
  const selectTrackContext = useSelectTrackContext();

  let { selectTrack } = selectTrackContext;

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
