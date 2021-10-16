import React from 'react'
import './Timeline.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Timeline = () => {
    return (
        <div>
            <img src="./images/Line.png" className="middleLine" alt="" />

            <div className="d-flex flex-row-reverse">
                <img
                    src="./images/timelineImage.png"
                    alt="Timeline"
                    className="p-2 img-fluid"
                />
            </div>

            <div className="mainContainer">
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Qui id at beatae eaque sapiente ex consectetur eligendi
                        perspiciatis magni quaerat tempora sint, voluptas
                        officia quisquam iste, totam repellendus labore eius?
                    </p>
                </div>
                <div className="hidden"></div>
            </div>

            <div className="mainContainer">
                <div className="hidden"></div>
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Non accusamus blanditiis impedit vero, facere reiciendis
                        ducimus quasi incidunt voluptate, eligendi omnis ab
                        accusantium minima tenetur maxime perferendis deleniti
                        molestiae sequi!
                    </p>
                </div>
            </div>

            <div className="mainContainer">
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Distinctio molestiae sequi eius doloribus facilis,
                        sed omnis, a adipisci necessitatibus quod voluptas nemo
                        architecto maxime accusamus, perferendis vero? Sequi,
                        maiores unde?
                    </p>
                </div>
                <div className="hidden"></div>
            </div>

            <div className="mainContainer">
                <div className="hidden"></div>
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Assumenda sunt nisi distinctio error quibusdam
                        numquam quod labore, quia natus ipsa quisquam
                        consequuntur vero magni est perferendis, ut molestiae
                        quam nihil!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Timeline
