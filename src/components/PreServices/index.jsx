import { Col, Container, Row } from "react-bootstrap";


const PreServices = () => {
    return (
        <Container fluid>
            <Row>
                <Col xs={12} md={6} order={1} id='service' className="d-flex align-items-center justify-content-center p-2">
                    <div className="">
                        <p>SERVICE 1</p>
                        <ul>
                            <li>ออกแบบบ้านตามโจทย์ความต้องการของผู้อยู่อาศัย</li>
                            <li>เราใส่ใจทุกรายละเอียดการก่อสร้าง</li>
                            <li>ออกแบบบ้านให้เหมาะสม กับ Lifestyle</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={12} md={6} order={2} className="d-flex justify-content-end px-2">
                    <img src="./services/1.png" className='service-img' alt="service-img-1" style={{ transform: 'translate(10px, 0)' }} />
                </Col> 
                <Col xs={12} md={6} order={4} className="d-flex justify-content-start px-2">
                    <img src="./services/2.png" className='service-img' alt="service-img" style={{ transform: 'translate(-20px, 0)' }} />
                </Col>
                <Col xs={12} md={6} order={3} className="d-flex align-items-center justify-content-center p-2">
                    <div className="" style={{ direction: 'rtl', textAlign: 'right' }}>
                        <p>SERVICE 2</p>
                        <ul>
                            <li>สร้างตามงบ จบตรงกำหนดเวลา</li>
                            <li>ฟรีออกแบบ เขียนแบบ เพื่อยื่นกู้กับธนาคาร</li>
                            <li>มีรับประกันผลงานหลังการก่อสร้าง</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default PreServices;