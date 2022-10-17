import { Link } from "react-router-dom";
import {
  BackgroundImageLogo,
  Container,
  Fixed,
  Menu,
  MenuOption,
} from "./style";
export default function Header() {
  return (
    <Fixed>
      <Container>
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
      </Container>
    </Fixed>
  );
}
