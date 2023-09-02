import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import { useSelectTrackContext } from '../../../contexts/selectTrack';
/* eslint-disable */

function MainPage({ isLoad, setIsLoad, setSelectTrack }) {

  const selectTrackContext = useSelectTrackContext()

  let { selectTrack } = selectTrackContext

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main
          isLoad={isLoad}
          setIsLoad={setIsLoad}
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

export default MainPage;
