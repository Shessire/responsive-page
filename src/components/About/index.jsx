import { Col, Container, Row } from "react-bootstrap"

const About = () => {
    return (
        <>
            <Container>
            <Row className="justify-content-md-center align-items-center">
                <Col xs={12} lg={6}>
                    <div className=" ">
                        <h2>ABOUT STEP CONTRUCTION</h2>
                        <span className="circle"></span>
                        <p>บริษัท สเตปคอนสตรัคชั่น 2020 เราเป็นบริษัทรับสร้างบ้าน <br />
                        เพื่อตอบโจทย์ ผู้อยู่อาศัย ในงบประมาณที่ไม่บานปลาย <br />
                        โด่ดเด่นด้วยผลงานสไตล์นอร์ดิก และ คอนเทมโพรารี่ <br />
                        ตามด้วยสไตล์ โมเดิร์น จะชาวไทยหรือชาวต่างชาติ <br />
                        เรารับงานในราคามิตรภาพ <br />
                        Build a home for foreigners but Thai price.</p>
                    </div>
                </Col>
                <Col xs={12} lg={6}> 
                    <img src="./ABOUT PHOTO.jpg" alt="about-photo" /> 
                </Col>
            </Row>
            </Container>
        </>
    )
}

export default About