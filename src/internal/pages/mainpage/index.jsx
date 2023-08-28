/* eslint-disable */
import React, { useState } from 'react';
import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

function MainPage({ isLoad, setIsLoad }) {
  const [selectTrack, setSelectTrack] = useState(null);

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
