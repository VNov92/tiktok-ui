import { Container, Row, Col } from 'react-bootstrap';
import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Container>
                <Header />
                <Row>
                    <Col md={4}>
                        <Sidebar />
                    </Col>
                    <Col md={8}>{children}</Col>
                </Row>
            </Container>
        </>
    );
}

export default DefaultLayout;
