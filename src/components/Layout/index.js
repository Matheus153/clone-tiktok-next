import Header from '../Header'
import Sidebar from '../Sidebar'
import Container from './styles'

function Layout({ children }) {
    return (
        <>
            <Header></Header>
            <Container>
                <Container.Sidebar>
                    <Sidebar></Sidebar>
                </Container.Sidebar>

                <Container.Content>{children}</Container.Content>
            </Container>

        </>
    );
};

export default Layout;