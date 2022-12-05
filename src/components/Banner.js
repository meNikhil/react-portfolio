import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import './Banner.css'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ['Game Developer.', 'Level Designer.', 'UI/UX Designer.']
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex((prevIndex) => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex((prevIndex) => prevIndex + 1)
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='aligh-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__fadeIn'
                                            : ''
                                    }
                                >
                                    <span className='tagline'>
                                        Hi, my name is
                                    </span>
                                    <h1>
                                        {`Bipin Chhetri.`} <br />{' '}
                                        <span
                                            className='txt-rotate'
                                            dataPeriod='1000'
                                            data-rotate='[ "Game Developer.", "Level Designer.", "UI/UX Designer." ]'
                                        >
                                            <span className='wrap'>{text}</span>
                                        </span>
                                    </h1>
                                    <p>
                                        I'm a <a href=''>Customer-focused</a>{' '}
                                        Game Engineer with superior
                                        communication skills and expertise in
                                        various technical platforms. Understands
                                        and meets client and employer needs and
                                        develops highly functional, robust and
                                        easy-to-use applications. And currently
                                        working on <a href=''>Yarsa Labs</a> as
                                        an Intern.
                                    </p>
                                    <button
                                        onClick={() => console.log('connect')}
                                    >
                                        Let’s Connect{' '}
                                        <ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? 'animate__animated animate__zoomIn'
                                            : ''
                                    }
                                >
                                    <img src={headerImg} alt='Header Img' />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
