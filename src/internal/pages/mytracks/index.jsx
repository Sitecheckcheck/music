import MainMyTrackMain from '../../components/mytrackmain';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import { useSelectTrackContext } from '../../../contexts/selectTrack';
/* eslint-disable */
function MyTracks({ isLoad, setIsLoad, setSelectTrack }) {
  const selectTrackContext = useSelectTrackContext();

  let { selectTrack } = selectTrackContext;

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <MainMyTrackMain
          isLoad={isLoad}
          setIsLoad={setIsLoad}
          selectTrack={selectTrack}
          setSelectTrack={setSelectTrack}
        />
        {selectTrack != null ? (
          <Bar isLoad={isLoad} />
        ) : null}
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MyTracks;
