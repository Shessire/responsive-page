import { Col, Container, Row } from "react-bootstrap";


const Services = () => {
    return (
        <Container>
            <Row className='text-center'>
                <Col xs={6} lg={4}>
                    <img src="./service icon/1.png" className='service-icon' alt="service-icon-1" />
                    <p>รับเขียนแบบ</p>
                </Col>
                <Col xs={6} lg={4}>
                    <img src="./service icon/2.png" className='service-icon' alt="service-icon-2" />
                    <p>ประเมิณราคา</p>
                </Col>
                <Col xs={6} lg={4}>
                    <img src="./service icon/3.png" className='service-icon' alt="service-icon-3" />
                    <p>รับเหมาสร้างบ้าน</p>
                </Col>
                <Col xs={6} lg={4}>
                    <img src="./service icon/4.png" className='service-icon' alt="service-icon-4" />
                    <p>ประหยัดงบ ไม่บานปลาย</p>
                </Col>
                <Col xs={6} lg={4}>
                    <img src="./service icon/5.png" className='service-icon' alt="service-icon-5" />
                    <p>รับงานทั่วภาคอีสาน</p>
                </Col>
                <Col xs={6} lg={4}>
                    <img src="./service icon/6.png" className='service-icon' alt="service-icon-6" />
                    <p>ทีมช่างมืออาชีพ</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Services;