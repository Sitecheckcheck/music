/* eslint-disable */
import React, { useState } from 'react';
import Main from '../../components/main/Main';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';

export const NameUser = React.createContext(localStorage.getItem('user'));

function MainPage({ isLoad, setIsLoad }) {
  const [selectTrack, setSelectTrack] = useState(null);

  let user = localStorage.getItem('user');
  if (user) {
    const index = user.lastIndexOf('@');
    user = user.substring(0, index);
  }

  return (
    <NameUser.Provider value={user || ''}>
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
    </NameUser.Provider>
  );
}

export default MainPage;
