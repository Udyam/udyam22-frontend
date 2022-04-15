import React from 'react'
import './Leaderboard.css'

const Leaderboard = () => {
    return (
        <div>
            <h1 className="Leaderboard_head">LEADERBOARD</h1>

            <div className="leaderboardcontainer" id="Leaderboard_Scrollbar">
                <h1 className="Header1">I-CHIP</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="Rank_Column">
                                1
                            </th>
                            <td className="TeamNameLB">PFLOPS or Nothing</td>
                            <td className="MembernameLB">
                                Vignesh Bharadwaj (BITS Pilani Hyderabad)
                            </td>
                        </tr>
                        {/* <tr>
                            <td className = "MembernameLB">Another small cell</td>
                        </tr>
                        <tr>
                            <td className = "MembernameLB">Another small cell</td>
                        </tr> */}
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Sky Breakers
                            </td>
                            <td className="MembernameLB">
                                Divyam Taneja (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Shambhavi Shrivastav (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Mavens
                            </td>
                            <td className="MembernameLB">
                                Sandeepan Ghosh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sanyam Jha (IIT BHU)
                            </td>
                        </tr>

                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Chip Bit
                            </td>
                            <td className="MembernameLB">
                                Naveen Kumar Yadav (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sachin Shaw (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="Header1">DIGISIM</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Sky Breakers
                            </td>
                            <td className="MembernameLB">
                                Divyam Taneja (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Shambhavi Shrivastav (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Cheems Instruments
                            </td>
                            <td className="MembernameLB">
                                Udit Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Kalpit Adhao (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                HighBit
                            </td>
                            <td className="MembernameLB">
                                Sandeepan Ghosh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sachin Shaw (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="Header1">CONTINUUM</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Resonant Oscillators
                            </td>
                            <td className="MembernameLB">
                                Ayush Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">Kanchan (IIT BHU)</td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Blade Runner
                            </td>
                            <td className="MembernameLB">
                                Sushil S S (NIT TRICHY)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sathish Kumar L (NIT TRICHY)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                CONTINUUM
                            </td>
                            <td className="MembernameLB">
                                Rakshit Sawhney (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Simarpreet Singh (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="Header1">COMMNET</h1>

                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                Connected
                            </td>
                            <td className="MembernameLB">
                                Ayush Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sandeepan Ghosh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="TeamNameLB">
                                Special Mention
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                BRB
                            </td>
                            <td className="MembernameLB">
                                Vishal Gosain (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Dhruv Agarwal (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="Header1">X-IOTA</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="1" className="TeamNameLB">
                                Fusion
                            </td>
                            <td className="MembernameLB">
                                Trushang Patel (VIT)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="2" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="2" className="TeamNameLB">
                                BINARY BEASTS
                            </td>
                            <td className="MembernameLB">
                                Vaibhav Bansal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Mehul Kumar Sahoo (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                SKY BREAKERS
                            </td>
                            <td className="MembernameLB">
                                Vaibhav Gupta (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Divyam Taneja (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Shambhavi Shrivastav (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="Header1">FUNCKIT</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="1" className="TeamNameLB">
                                Digit
                            </td>
                            <td className="MembernameLB">
                                Mamalesh Rajkumar Hake (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Devour
                            </td>
                            <td className="MembernameLB">
                                Rakshit Sawhney (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Lalit Singh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Kanishk Kashyap (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Sky Breakers
                            </td>
                            <td className="MembernameLB">
                                Divyam Taneja (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Shambhavi Shrivastav (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Kumar Sonu (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h1 className="Header1">MOSAIC</h1>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Chaos
                            </td>
                            <td className="MembernameLB">
                                Dhruv Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Atharva Bhatt (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Ayush Gangwani (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                SNP
                            </td>
                            <td className="MembernameLB">
                                Shubham Kumar (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Nikhil Kumar Singh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Parthasarthi Aggarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Breachers
                            </td>
                            <td className="MembernameLB">
                                Devanshu Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Suhani Agrawal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sandeepan Ghosh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Drishyam
                            </td>
                            <td className="MembernameLB">
                                Aryaman Gupta (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Ankur Agrawal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Vivek Agarwal (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="Header1">CASSANDRA</h1>

                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                GREEKGODS
                            </td>
                            <td className="MembernameLB">
                                Dhruv Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Aryaman Gupta (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Vivek Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Akatsuki
                            </td>
                            <td className="MembernameLB">
                                Vaibhav Tripathi (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Eshaan Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Utkarsh Pandey (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Har Har Mahadev
                            </td>
                            <td className="MembernameLB">
                                Ayush Gangwani (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Atharva Bhatt (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Sandeepan Ghosh (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                PAV-BHU-JEE
                            </td>
                            <td className="MembernameLB">
                                Parthasarthi Aggarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Ayush Agarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Vishal Gosain (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>

                <h1 className="Header1">SPYBITS</h1>

                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr></tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                TEAM NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                MEMBER NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td rowSpan="1" className="TeamNameLB">
                                Newbs
                            </td>
                            <td className="MembernameLB">Tushar Gupta</td>
                        </tr>
                        <tr>
                            <th rowSpan="3" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td rowSpan="3" className="TeamNameLB">
                                Scotts Tots
                            </td>
                            <td className="MembernameLB">
                                Eshaan Aggarwal (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Siddanth Shetty (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <td className="MembernameLB">
                                Aakash Sharma (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td rowSpan="1" className="TeamNameLB">
                                f_society
                            </td>
                            <td className="MembernameLB">
                                Pratyush Chowdhury (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th
                                scope="col"
                                colSpan="2"
                                className="danger TitleFont"
                            >
                                INDIVIDUAL BEST PERFORMERS
                            </th>
                        </tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                NAME
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td className="MembernameLB">
                                Adrito Mukherjee (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td className="MembernameLB">
                                Jasnoor Sandhu (IIT BHU)
                            </td>
                        </tr>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td className="MembernameLB">
                                Dhruv Jain (IIT BHU)
                            </td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th
                                scope="col"
                                colSpan="3"
                                className="danger TitleFont"
                            >
                                CP CONTEST WINNERS
                            </th>
                        </tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                RANK
                            </th>
                            <th scope="col" className="danger TitleFont">
                                NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                HANDLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                1
                            </th>
                            <td className="MembernameLB">
                                Kushagra Goel (IIT BHU)
                            </td>
                            <td className="MembernameLB">kugo</td>
                        </tr>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                2
                            </th>
                            <td className="MembernameLB">
                                Achintya Eeshan (IIT Delhi)
                            </td>
                            <td className="MembernameLB">cudefreak777</td>
                        </tr>
                        <tr>
                            <th rowSpan="1" scope="row" className="Rank_Column">
                                3
                            </th>
                            <td className="MembernameLB">Anshul Chaudhary</td>
                            <td className="MembernameLB">canshul</td>
                        </tr>
                    </tbody>
                </table>

                <table className="table table-hover Table1 table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th
                                scope="col"
                                colSpan="2"
                                className="danger TitleFont"
                            >
                                SPECIAL MENTIONS
                            </th>
                        </tr>
                        <tr>
                            <th scope="col" className="danger TitleFont">
                                NAME
                            </th>
                            <th scope="col" className="danger TitleFont">
                                HANDLE
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th
                                rowSpan="1"
                                scope="row"
                                className="MembernameLB"
                            >
                                Ayush Gangwani (IIT BHU)
                            </th>
                            <td className="MembernameLB">ayush_7219</td>
                        </tr>
                        <tr>
                            <th
                                rowSpan="1"
                                scope="row"
                                className="MembernameLB"
                            >
                                Shubham Garg (IIT BHU)
                            </th>
                            <td className="MembernameLB">shubham_grg</td>
                        </tr>
                        <tr>
                            <th
                                rowSpan="1"
                                scope="row"
                                className="MembernameLB"
                            >
                                Komal Garg (IIT BHU)
                            </th>
                            <td className="MembernameLB">komal_garg_25</td>
                        </tr>
                        <tr>
                            <th
                                rowSpan="1"
                                scope="row"
                                className="MembernameLB"
                            >
                                Anas Khan (IIT BHU)
                            </th>
                            <td className="MembernameLB">phoenix91</td>
                        </tr>
                        <tr>
                            <th
                                rowSpan="1"
                                scope="row"
                                className="MembernameLB"
                            >
                                Archit Pattanaik (IIT BHU)
                            </th>
                            <td className="MembernameLB">papun_2003</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

{
    /* <h1 className="Header1">DIGISIM</h1>

<table className="table table-hover Table1 table-bordered">
    <thead className="thead-light">
        <tr></tr>
        <tr>
            <th scope="col" className="danger TitleFont">
                RANK
            </th>
            <th scope="col" className="danger TitleFont">
                TEAM NAME
            </th>
            <th scope="col" className="danger TitleFont">
                MEMBER NAME
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowSpan="3" scope="row" className = "Rank_Column">
                1
            </th>
            <td rowSpan="3" className="TeamNameLB">
                PFLOPS or Nothing
            </td>
            <td className = "MembernameLB">Vignesh Bharadwaj (BITS Pilani Hyderabad)</td>
            
        </tr>
        <tr>
            <td className = "MembernameLB">Another small cell</td>
        </tr>
        <tr>
            <td className = "MembernameLB">Another small cell</td>
        </tr>
        <tr>
            <th rowSpan="3" scope="row" className = "Rank_Column">
                2
            </th>
            <td rowSpan="3" className="TeamNameLB">
                Mark
            </td>
            <td className = "MembernameLB" >Mark</td>
           
        </tr>
        <tr>
            <td className = "MembernameLB" >Another small cell</td>
        </tr>
        <tr>
            <td className = "MembernameLB" >Another small cell</td>
        </tr>
        <tr>
            <th rowSpan="3" scope="row" className = "Rank_Column">
                3
            </th>
            <td rowSpan="3" className="TeamNameLB">
                Mark
            </td>
            <td className = "MembernameLB" >Mark</td>
            
        </tr>
        <tr>
            <td className = "MembernameLB" >Another small cell</td>
        </tr>
        <tr>
            <td className = "MembernameLB" >Parthasarthi small cell</td>
        </tr>
    </tbody>
</table> */
}

export default Leaderboard
