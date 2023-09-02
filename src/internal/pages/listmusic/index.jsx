import { useParams } from 'react-router-dom';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import Nav from '../../components/nav/Nav';
import SMain from '../../components/main/mainStyle';
import ListindiCenterBlock from '../../components/listindi/listindicenterblock';
import { ListNames } from '../../../constans';
import Sidebar from '../../components/sidebar/Sidebar';

export function ListMusic({ isLoad, setIsLoad, selectTrack }) {
  const params = useParams();

  const ListName = ListNames.find(
    (listname) => listname.id === Number(params.id),
  );

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <SMain>
          <Nav />
          <ListindiCenterBlock listNam={ListName.listName} />
          <Sidebar isLoad={isLoad} setIsLoad={setIsLoad} playlist />
        </SMain>
        {selectTrack != null ? (
          <Bar isLoad={isLoad} />
        ) : null}
        <Footer />
      </Container>
    </Wrapper>
  );
}
