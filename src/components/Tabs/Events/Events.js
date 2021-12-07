import React from "react"
import "./Events.css"
import events from "./Events.png"
import { Link, Route } from "react-router-dom"
import { Mosaic, Ichip, Spybits, Commnet, Xiota, Cassandra, Digisim, Funckit, Continuum } from "./Events_Components.js"

const Event = () => {
    return (
        <>

            <div className="header">
                <img src={events} alt="Events" />
            </div>

            <Route exact path="/events">

                <div className="Event_Panel">


                    <div>
                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/mosaic">
                                Mosaic
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/ichip">
                                I-Chip
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/spybits">
                                Spybits
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/commnet">
                                Commnet
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/xiota">
                                X-IOTA
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/cassandra">
                                Cassandra
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/digisim">
                                Digisim
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/funckit">
                                Funckit
                            </Link>
                        </dl>

                        <dl>
                            <Link className="Inner_Link" to="/events/events_components/continuum">
                                Continuum
                            </Link>
                        </dl>

                    </div>

                </div>

            </Route>

            <Route path="/events/events_components/mosaic">
                <Mosaic />
            </Route>

            <Route path="/events/events_components/Ichip">
                <Ichip />
            </Route>

            <Route path="/events/events_components/spybits">
                <Spybits />
            </Route>

            <Route path="/events/events_components/commnet">
                <Commnet />
            </Route>

            <Route path="/events/events_components/xiota">
                <Xiota />
            </Route>

            <Route path="/events/events_components/cassandra">
                <Cassandra />
            </Route>

            <Route path="/events/events_components/digisim">
                <Digisim />
            </Route>

            <Route path="/events/events_components/funckit">
                <Funckit />
            </Route>

            <Route path="/events/events_components/continuum">
                <Continuum />
            </Route>


            {/* <Route exact path = "/team/senior_advisors">
            <Senior_Advisors />
        </Route>

        <Route exact path = "/team/developers">
            <Developers />
        </Route>

        <Route exact path = "/team/designers">
            <Designers />
        </Route>

        <Route exact path = "/team/content_and_creative">
            <Content_and_Creative />
        </Route>

        <Route exact path = "/team/marketing_team">
            <Marketing_Team />
        </Route>

        <Route exact path = "/team/external_affairs">
            <External_Affairs />
        </Route>

        <Route exact path = "/team/public_relations">
            <Public_Relations />
        </Route> */}



        </>
    )
}

export default Event