import React from 'react'
import './Timeline.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Timeline = () => {
    return (
        <>
            <div className="d-flex flex-row-reverse">
                <img
                    src="./images/timelineImage.png"
                    alt="Timeline"
                    className="p-2 img-fluid imageTimeline"
                />
            </div>
            <div className="timeline" id="timeline-main-container">
                <div
                    className="container-time left"
                    style={{ marginTop: '0px' }}
                >
                    <div className="content-time">
                        <h2>
                            <time>5 DEC 2021</time>
                        </h2>
                        <p>
                            Phase 1 of our workshops. Join us as we start from
                            the basics of each event. Uploaded to YouTube every
                            Monday, Wednesday and Friday.
                        </p>
                    </div>
                </div>
                <div className="container-time right">
                    <div className="content-time">
                        <h2>1 JAN 2022</h2>
                        <p>
                            Phase 2 of our workshops. The continuation of the
                            workshop series, covering all the important
                            theories, technologies and tricks. Uploaded to
                            YouTube every Saturday and Sunday.
                        </p>
                    </div>
                </div>
                <div className="container-time left">
                    <div className="content-time">
                        <h2>1 FEB 2022</h2>
                        <p>
                            Phase 3 of our Workshops. Discussing the all
                            important problem statements and winding up on all
                            the learning. Uploaded to YouTube every Saturday and
                            Sunday.
                        </p>
                    </div>
                </div>
                <div className="container-time right">
                    <div className="content-time">
                        <h2>8 APRIL 2022</h2>
                        <p>
                            Buckle up for UDYAM&apos;22!! Eventwise schedule
                            coming soon.
                        </p>
                    </div>
                </div>
                {/* <div className="container-time left">
                    <div className="content-time">
                        <h2>DD MM YY</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Distinctio molestiae sequi eius doloribus
                            facilis, sed omnis, a adipisci necessitatibus quod
                            voluptas nemo architecto maxime accusamus,
                            perferendis vero? Sequi, maiores unde?
                        </p>
                    </div>
                </div> */}
            </div>
        </>
    )
}

export default Timeline
