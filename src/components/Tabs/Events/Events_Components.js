import React, { useState } from 'react'
import './Events.css'
import Modal from 'react-modal'

import mosaicimage from './Events_Images/mosaicimage.png'
import ichipimage from './Events_Images/ichipimage.png'
import spybitsimage from './Events_Images/spybitsimage.png'
import commnetimage from './Events_Images/commnetimage.png'
import xiotaimage from './Events_Images/xiotaimage.png'
import cassandraimage from './Events_Images/cassandraimage.png'
import digisimimage from './Events_Images/digisimimage.png'
import funckitimage from './Events_Images/funckitimage.png'
import continuumimage from './Events_Images/continuumimage.png'

const Mosaic = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '49.99%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>

            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={mosaicimage}
                    alt="Mosaic"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                MOSAIC
            </h3>

            <div className="Events_Text_Box">
                An image processing and machine learning-based event to decipher
                canonical problems based on the intriguing subject of Machine
                Learning and Computer Vision. Its problem statements involve
                Computer Vision cum ML for creating Captcha Recognizers,
                Hand-Recognition Video Simulations, Real-time License Plate
                Detections etc.
            </div>

            <div className="Events_Link_Holder">
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS1
                </button>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
            </div>
            {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
        </>
    )
}

const Ichip = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={ichipimage}
                    alt="I-Chip"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                I-CHIP
            </h3>

            <div className="Events_Text_Box">
                I-Chip is a Verilog-based event associated with designing,
                simulating, validating, and debugging digital systems, from
                flip-flops to microprocessors, using Verilog HDL, and working
                with FPGA Boards using industrial tools like Xilinx Vivado and
                ModelSim. Last year, participants had to design and verify a
                Verilog code for the implementation of different modes of
                popular cryptography algorithm- Advanced Encryption Standard
                (AES-128).
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/15zKn4x2BvTr15m-DgQvn3HSrPACS334U/view"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Spybits = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={spybitsimage}
                    alt="Spybits"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                SPYBITS
            </h3>

            <div className="Events_Text_Box">
                A technological event based on Cybersecurity, Cryptography, and
                Cryptanalysis demonstrated through innovative puzzles,
                challenging beginners, and expert hackers’ imagination with
                exposure to Block Ciphers, Encryption, Digital Signatures, and
                other Cybersecurity Tools. This event focuses on both classical
                and modern implementations on the web, along with
                programming-based applications in Cryptography.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/open?id=1OtWvrjY8NNegzTGaFDK5VJtP7k5ublFg&authuser=0"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Commnet = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={commnetimage}
                    alt="Commnet"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                COMMNET
            </h3>

            <div className="Events_Text_Box">
                A Digital communications-based event focused upon Network
                Architecture and MATLAB implementation of coding theory,
                compression algorithms, signal processing, modulation, and
                demodulation techniques. It gives attention to information
                theory and in-depth knowledge of the popular and versatile
                software, MATLAB.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1K-Q769eI4hD5HQTjU-G_cNm_K-4oOSci/view"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Xiota = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={xiotaimage}
                    alt="X-Iota"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                XIOTA
            </h3>

            <div className="Events_Text_Box">
                An event focused on practical applications of the Internet of
                Things(IoT) based on electronic sensors, microcontrollers,
                cloud, data analytics, cybersecurity, and other technologies
                where participants implement a feasible solution to existing
                problems. It involves the utilization of IoT components like
                Arduino, Raspberry Pi, and other tools to provide optimized
                solutions to real-life issues.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/open?id=1CdabWn5e1M5zkaULRjl6_Wcw8fURCFZL&authuser=0"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    href=""
                    style={{ textDecoration: 'none' }}
                    rel="noreferrer"
                    target="_blank"
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    href=""
                    style={{ textDecoration: 'none' }}
                    rel="noreferrer"
                    target="_blank"
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Cassandra = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={cassandraimage}
                    alt="Cassandra"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                CASSANDRA
            </h3>

            <div className="Events_Text_Box">
                A Data Science event where data analysts design a model that
                learns and optimizes the dataset provided implementing Machine
                Learning algorithms in industrial problems and gives an exposure
                to the ABCs of data science - data cleaning, feature
                engineering, among others. Participants need to train an ML
                model using the given dataset and make predictions accordingly.
            </div>

            <div className="Events_Link_Holder">
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS1
                </button>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Digisim = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={digisimimage}
                    alt="Digisim"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                DIGISIM
            </h3>

            <div className="Events_Text_Box">
                A Digital Electronics based event involving designing optimized
                digital systems and their Proteus Simulations. It develops a
                strong foundation in computer architecture and digital system
                designing and strengthens debugging and logic-building skills.
                Its previous problem statements include Tetris game, Pacman
                ghost’s algorithm, Merge Sort Algorithm using Proteus.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1_v6-E_On3Rchj5jCJhrEB2ZBic3U3fpw/view"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Funckit = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={funckitimage}
                    alt="Funckit"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                FUNCKIT
            </h3>

            <div className="Events_Text_Box">
                An event that tests a participant’s problem-solving abilities
                through low-level programming and building gate-level circuitry
                to optimize the logic, hardware and decrease execution time.
                This is an entry-level event designed to create a foundation for
                both programming and utilization of digital circuits.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/18OYrP2A3DCehWsXbrnh_3RTVmBLlJxaD/view"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

const Continuum = () => {
    const customStyles = {
        overlay: {
            opacity: '1',
            backgroundColor: 'rgba(2, 32, 73,0.5)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(2,32,73,1)',
            width: '28vw',
            height: '25vh',
            textAlign: 'center',
            color: 'rgba(144, 224, 239, 0.7)',
            paddingTop: '50px',
            opacity: '1',
            postion: 'fixed',
            minWidth: '275px',
            minHeight: '200px',
            fontFamily: 'Raleway',
            overflowY: 'hidden',
        },
    }
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles}
            >
                <h2>Problem Statement is coming soon</h2>
                <button
                    style={{ marginTop: '10px' }}
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(false)}
                >
                    Close
                </button>
            </Modal>
            <div>
                <img
                    className="Events_Photo"
                    align="center"
                    src={continuumimage}
                    alt="Continuum"
                />
            </div>

            <h3 className="Events_Inner_Header" align="center">
                CONTINUUM
            </h3>

            <div className="Events_Text_Box">
                Continuum is an Analog Electronics based event aimed at
                designing and simulating analog circuits and filters to perform
                computations using CAD tools to implement and validate their
                designs on hardware. Participants design computational devices
                using filters and circuits made of only analog components.
            </div>

            <div className="Events_Link_Holder">
                <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://drive.google.com/file/d/1eQ6UC5jFU72BPlzIFa-C9Kvc78xOWu15/view"
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>
                <button
                    className="Events_Inner_Link"
                    onClick={() => setModalIsOpen(true)}
                >
                    PS2
                </button>
                {/* <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS1</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS2</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS3</div>
                </a>

                <a
                    rel="noreferrer"
                    target="_blank"
                    href=""
                    style={{ textDecoration: 'none' }}
                >
                    <div className="Events_Inner_Link">PS4</div>
                </a> */}
            </div>
        </>
    )
}

export {
    Mosaic,
    Ichip,
    Spybits,
    Commnet,
    Xiota,
    Cassandra,
    Digisim,
    Funckit,
    Continuum,
}
