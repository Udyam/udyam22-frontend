import React from 'react'
import './Timeline.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const Timeline = () => {
    return (
        <div>
            {/* <h1 style={{color: "white"}}>This is timeline</h1> */}

            <img src="./images/Line.png" className="middleLine" alt="" />

            <div className="d-flex flex-row-reverse">
                <img src="./images/timelineImage.png" alt="Timeline" className="p-2 img-fluid"/>
            </div>

            <div className="mainContainer">
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id at beatae eaque sapiente ex consectetur eligendi perspiciatis magni quaerat tempora sint, voluptas officia quisquam iste, totam repellendus labore eius?</p>
                </div>
                <div className="hidden">

                </div>
            </div>

            <div className="mainContainer">
                <div className="hidden">

                </div>
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non accusamus blanditiis impedit vero, facere reiciendis ducimus quasi incidunt voluptate, eligendi omnis ab accusantium minima tenetur maxime perferendis deleniti molestiae sequi!</p>
                </div>
            </div>

            <div className="mainContainer">
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio molestiae sequi eius doloribus facilis, sed omnis, a adipisci necessitatibus quod voluptas nemo architecto maxime accusamus, perferendis vero? Sequi, maiores unde?</p>
                </div>
                <div className="hidden">

                </div>
            </div>
            
            <div className="mainContainer">
                <div className="hidden">

                </div>
                <div className="visible">
                    <h2>DD MM YY</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda sunt nisi distinctio error quibusdam numquam quod labore, quia natus ipsa quisquam consequuntur vero magni est perferendis, ut molestiae quam nihil!</p>
                </div>
            </div>



        </div>
    )
}

export default Timeline

        //     <div className="container">

        //         <div className="card-group vgr-cards">

        //             <div className="cards">
        //                 {/* <div className="card-img-body">
        //                     <img className="card-img" src="https://picsum.photos/500/230" alt="Card image cap"/>
        //                 </div> */}
        //                 <div className="card-body">
        //                     <h4 className="card-title">Card title</h4>
        //                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little
        //                 bit longer.</p>
        //                     <a href="#" className="btn btn-outline-primary">Primary</a>
        //                 </div>
        //             </div>

        //             <div className="cards">
        //                 {/* <div className="card-img-body">
        //                     <img className="card-img" src="https://picsum.photos/400/200" alt="Card image cap"/>
        //                 </div> */}
        //                 <div className="card-body">
        //                     <h4 className="card-title">Card title</h4>
        //                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This card has supporting text below as a natural lead-in to additional content.</p>
        //                     <a href="#" className="btn btn-outline-primary">Primary</a>
        //                 </div>
        //             </div>

        //             <div className="cards">
        //                 {/* <div className="card-img-body">
        //                     <img className="card-img" src="https://picsum.photos/450/250" alt="Card image cap"/>
        //                 </div> */}
        //                 <div className="card-body">
        //                     <h4 className="card-title">Card title</h4>
        //                     <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action. This is a wider card with supporting text below as a natural lead-in
        //   to additional content. This content is a little bit longer.</p>
        //                 <a href="#" className="btn btn-outline-primary">Primary</a>
        //                 </div>
        //             </div>

        //             <div className="cards">
        //                 {/* <div className="card-img-body">
        //                     <img className="card-img" src="https://picsum.photos/400/200" alt="Card image cap"/>
        //                 </div> */}
        //                 <div className="card-body">
        //                     <h4 className="card-title">Card title</h4>
        //                     <p className="card-text">This card has supporting text below as a natural lead-in to additional content. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This card has supporting text below as a natural lead-in to additional content.</p>
        //                     <a href="#" className="btn btn-outline-primary">Primary</a>
        //                 </div>
        //             </div>


        //         </div>
        //     </div>