import { Container } from "react-bootstrap";



const VideoFooter = () => {
    return (
        <Container>
            <video width="100%" height="auto" controls>
                <source src='./VideoFooter.mp4'/>
            </video>
        </Container>
    )
}

export default VideoFooter;