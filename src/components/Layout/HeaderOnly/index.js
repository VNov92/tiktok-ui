import { Container, Row, Col } from 'react-bootstrap';
import Header from '~/components/Layout/components/Header';

function DefaultLayout({ children }) {
    return (
        <>
            <Container>
                <Header />
                <Row>
                    <Col md={4}></Col>
                    <Col md={8}>{children}</Col>
                </Row>
            </Container>
        </>
    );
}

export default DefaultLayout;
