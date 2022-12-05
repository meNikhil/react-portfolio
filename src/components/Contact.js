import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Contact.css";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    };
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({ succes: true, message: "Message sent successfully" });
        } else {
            setStatus({
                succes: false,
                message: "Something went wrong, please try again later.",
            });
        }
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <img
                                    className={
                                        isVisible
                                            ? "animate__animated animate__zoomIn"
                                            : ""
                                    }
                                    src={contactImg}
                                    alt="Contact Us"
                                />
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__fadeIn"
                                            : ""
                                    }
                                >
                                    <div className="getintouch">
                                        <h2>Get In Touch</h2>
                                        <p>
                                            My inbox is always open. Whether you
                                            have a question or just want to say
                                            hi,
                                        </p>
                                        <p>
                                            I'll try my best to get back to you!
                                        </p>
                                        <br />
                                        <div className="button__like">
                                            <a
                                                className="sayHlw"
                                                href="mailto:bipinchhetri18@gmail.com"
                                            >
                                                Say Hello
                                            </a>
                                        </div>
                                        <br />
                                        <p>OR</p>
                                        <p>Call me at +977-0000000</p>
                                    </div>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
