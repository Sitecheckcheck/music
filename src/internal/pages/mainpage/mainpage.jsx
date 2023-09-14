/* eslint-disable */
import Main from '../../components/main/Main';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import { useSelectTrackContext } from '../../../contexts/selectTrack';

function MainPage({ isLoad, setIsLoad, setSelectTrack }) {
  const selectTrackContext = useSelectTrackContext();
  let { selectTrack } = selectTrackContext;

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main isLoad={isLoad} setIsLoad={setIsLoad} />
        {/* {selectTrack != null ? (
          <Bar isLoad={isLoad} />
        ) : null} */}
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
