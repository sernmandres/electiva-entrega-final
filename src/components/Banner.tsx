
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonAction from './ButtonAction';

export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["consectetur ", "adipiscing elit", "egestas eu ornar", "volutpat tincidunt"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(250 - Math.random() * 100);
    const period = 250;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;  
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <div id='home'>
            <div className='homeBanner'>
            </div>
            <Container>
            <Row className='align-items-center textoBannerHome'>
                    <Col>
                        <h1 className='tagline'>Lorem ipsum dolor sit amet <span className='wrap'>{text}</span></h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla diam mauris, egestas eu ornare et, ultrices et lectus. 
                        In volutpat tincidunt tincidunt. Sed sagittis mauris at massa tincidunt tristique. Donec efficitur nunc vitae gravida lobortis.
                        </p>
                        <div>
                        <ButtonAction />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}