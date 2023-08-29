import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MainPage({ isLoad, setIsLoad, selectTrack, setSelectTrack }) {
  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <Main
          isLoad={isLoad}
          setIsLoad={setIsLoad}
          selectTrack={selectTrack}
          setSelectTrack={setSelectTrack}
        />
        {selectTrack != null ? (
          <Bar isLoad={isLoad} selectTrack={selectTrack} />
        ) : null}
        <Footer />
      </Container>
    </Wrapper>
  );
}

export default MainPage;
