import { BackgroundImageLogo, Container, Menu, MenuOption } from "./style";
export default function Header() {
  return (
    <Container>
      <BackgroundImageLogo />
      <Menu>
        <MenuOption>SOBRE MIM</MenuOption>
        <MenuOption>FORMAÇÕES</MenuOption>
        <MenuOption>PROJETOS</MenuOption>
      </Menu>
    </Container>
  );
}
