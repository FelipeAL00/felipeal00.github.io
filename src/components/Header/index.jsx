import { BackgroundImageLogo, Container, Menu } from "./style";
export default function Header() {
  return (
    <Container>
      <BackgroundImageLogo />
      <Menu>
        <li>SOBRE MIM</li>
        <li>FORMAÇÕES</li>
        <li>PROJETOS</li>
      </Menu>
    </Container>
  );
}
