import React from 'react'
import '../tabs_style.css'
import './Teams_Style.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Core_Team from './Core_Team'
import Senior_Advisors from './Senior_Advisors'
import Developers from './Developers'
import Designers from './Designers'
import Content_and_Creative from './Content_Creative'
import Marketing_Team from './Marketing'
import External_Affairs from './External_Affairs'
import Public_Relations from './Public_Relations'

const Team = () => {
    return (
        <Router>
            <h1 className="Team_head">TEAM</h1>

            <Route exact path="/team">
                {/* <Core_Team/> */}

                <div className="Teams_container">
                    <Link className="inner_box" to="/team/core_team">
                        CORE TEAM
                    </Link>

                    <Link className="inner_box" to="/team/senior_advisors">
                        SENIOR ADVISORS
                    </Link>

                    <Link className="inner_box" to="/team/developers">
                        DEVELOPERS
                    </Link>

                    <Link className="inner_box" to="/team/designers">
                        DESIGNERS
                    </Link>

                    <Link className="inner_box" to="/team/content_and_creative">
                        CONTENT AND CREATIVE
                    </Link>

                    <Link className="inner_box" to="/team/marketing_team">
                        MARKETING TEAM
                    </Link>

                    <Link className="inner_box" to="/team/external_affairs">
                        EXTERNAL AFFAIRS
                    </Link>

                    <Link className="inner_box" to="/team/public_relations">
                        PUBLIC RELATIONS
                    </Link>
                </div>
            </Route>

            <Route exact path="/team/core_team">
                <Core_Team />
            </Route>

            <Route exact path="/team/senior_advisors">
                <Senior_Advisors />
            </Route>

            <Route exact path="/team/developers">
                <Developers />
            </Route>

            <Route exact path="/team/designers">
                <Designers />
            </Route>

            <Route exact path="/team/content_and_creative">
                <Content_and_Creative />
            </Route>

            <Route exact path="/team/marketing_team">
                <Marketing_Team />
            </Route>

            <Route exact path="/team/external_affairs">
                <External_Affairs />
            </Route>

            <Route exact path="/team/public_relations">
                <Public_Relations />
            </Route>
        </Router>
    )
}

export default Team
