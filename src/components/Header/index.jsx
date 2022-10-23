import { Link } from "react-router-dom";
import {
  BackgroundImageLogo,
  Container,
  Menu,
  MenuOption,
  Content,
} from "./style";

import logo_image from "../../assets/images/logo_image.jpg";
export default function Header() {
  return (
    <Container>
      <Content>
        <Link to="/">
          <BackgroundImageLogo src={logo_image} />
        </Link>
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
