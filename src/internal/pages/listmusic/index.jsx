import { NavLink, useParams } from 'react-router-dom';
import Bar from '../../components/bar/Bar';
import Footer from '../../components/footer/Footer';
import GlobalStyle, { Wrapper, Container } from '../../styles';
import Nav from '../../components/nav/Nav';
import { MainSidebar, SidebarPersonal } from '../../components/sidebar/styles';
import SMain from '../../components/main/mainStyle';
import ListindiCenterBlock from '../../components/listindi/listindicenterblock';
import { ListNames } from '../../../constans';

export function ListMusic() {
  const params = useParams();

  const ListName = ListNames.find(
    (listname) => listname.id === Number(params.id)
  );

  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <SMain>
          <Nav />
          <ListindiCenterBlock listNam={ListName.listName} />
          <MainSidebar>
            <SidebarPersonal>
              <NavLink to="/mytrack">Sergey.Ivanov</NavLink>
              <div />
            </SidebarPersonal>
          </MainSidebar>
        </SMain>
        <Bar />
        <Footer />
      </Container>
    </Wrapper>
  );
}
