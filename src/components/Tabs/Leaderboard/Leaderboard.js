import React from 'react'
import './Leaderboard.css'
import Leader_board from './Leader_board.png'

const Leaderboard = () => {
    return (
        <div >
            <div align="right">
                <img className="leaderboard_head" src={Leader_board} alt="leaderboard_heading" />
            </div>


            {/* <div className = "Leaderboard_container">

            <div className="container-sponsors">
                <div className="row-1">
                    <table>
                        <tr>
                            <th>Company</th>
                            <th>Contact</th>
                            <th>Country</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                         </tr>
                    </table>
                </div>
            </div>

            </div> */}


            <div className = "Leaderboard_Temporary_Message">
                    Leaderboard shall be visible after completion of all the events.
            </div>

        </div>
    )
}

export default Leaderboard