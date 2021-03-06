import Container from './styles'

function Header() {
    return(
        <Container>
            <Container.Content>
                <Container.LogoContainer>
                    <Container.LogoIcon src="/images/logoIcon.png"></Container.LogoIcon>
                    <Container.Logo src="/images/logo.png"></Container.Logo>

                 </Container.LogoContainer>   
                 
                 <Container.Options>
                    <Container.Icon src="/images/uploadIcon.svg"></Container.Icon>

                    <Container.Avatar>
                        <img src="/images/perfil.jpg" alt="perfil"/>
                    </Container.Avatar>
                </Container.Options>
                     
            </Container.Content>
        </Container>
    );
};

export default Header;