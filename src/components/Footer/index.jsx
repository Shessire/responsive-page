import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12}>
                    <div id='contact'>
                        <Row>
                            <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
                                <img src="qr_code rz.jpg" alt="qrcode" className="img-fluid" style={{ maxWidth: "100%", height: "auto" }} />
                            </Col>
                            <Col xs={12} lg={6}>
                                <ul className='contact-icon'>
                                    <li><img src="./contact icon/tel.png" className='icon' alt="tel-icon" />087-2525889</li>
                                    <li><img src="./contact icon/fb.png" className='icon' alt="fb-icon" />สร้างบ้าน บ้านสวย โดย สเตป คอนสตรัคชั่น 2020 จำกัด</li>
                                    <li><img src="./contact icon/line.png" className='icon' alt="line-icon" />@0812525889</li>
                                    <li><img src="./contact icon/mail.png" className='icon' alt="mail-icon" />Yongyut_kr@hotmail.com</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;
