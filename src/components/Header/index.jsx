import { Link } from "react-router-dom";
import {
  BackgroundImageLogo,
  Container,
  Menu,
  MenuOption,
  Content,
} from "./style";
export default function Header() {
  return (
    <Container>
      <Content>
        <BackgroundImageLogo />
        <Menu>
          <Link to="/">
            <MenuOption>SOBRE MIM</MenuOption>
          </Link>
          <Link to="/formacoes">
            <MenuOption>FORMAÇÕES</MenuOption>
          </Link>
          <Link to="/projetos">
            <MenuOption>PROJETOS</MenuOption>
          </Link>
        </Menu>
      </Content>
    </Container>
  );
}
