import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import styles from './ResumeClinic.module.css'

function ResumeClinic() {
    return (
        <>
            <Container
                className={`ms-auto mt-5 p-lg-5 p-3 ${styles['wrap-conatiner']}`}
                fluid
            >
                <Row xs="1" lg="2">
                    <Col>
                        <img
                            src="/images/ResumeClinic.jpeg"
                            width="100%"
                            height="100%"
                        />
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center flex-column">
                        <p
                            className={`pt-3 pt-md-3 pt-lg-0 ${styles['text-container']}`}
                        >
                            Nullcon presents Resume & Career Clinic, a virtual
                            edition of career guidance series to connect
                            individuals with security experts and leaders for
                            providing counseling in resume building, providing
                            interview tips, and general career advice in
                            specific areas of the InfoSec industry.{' '}
                        </p>
                        <p className={`${styles['text-container']}`}>
                            Our community reviewers, who have a humungous amount
                            of combined experience in the security industry, of
                            being interviewers and vetting candidates are all
                            set to put their experiences to work in the Resume &
                            Career Clinic by providing individuals one-on-one
                            feedback and guidance over a virtual session.
                        </p>
                        <Button className={`${styles['event-button']}`}>
                            {' '}
                            <a
                                href="https://share.hsforms.com/1T5T3nwyOQoGnqpQUxjiTpw4d2c8"
                                target="_blank"
                                rel="noreferrer"
                                className="text-decoration-none text-white"
                            >
                                Sign Up
                            </a>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ResumeClinic
