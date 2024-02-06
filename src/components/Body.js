import React from 'react'
import HeroImg from './images/ThinkBig.png'
import SmartImg from './images/smart.png'
import StrongImg from './images/strong.png'
import StableImg from './images/stable.png'
import Placeholder from './images/150x150.png'

function Body() {

    return (
        <div className="container">
            <HeroImage />
            <Carousel />
            <BlogsRow />
            <Services />
        </div>
    )

}

function HeroImage() {

    return (

        <div className="row heroImage">
            <div className="col-sm-12 text-center">
                <img src={HeroImg} className="img-fluid rounded" alt="Hero" />
            </div>
        </div>
    )
}

function Carousel() {

    return (

        <div className="row justify-content-center carouselGroup">
            <div className="com-sm-4">
                <ul className="list-group list-group-horizontal d-flex justify-content-center">
                    <li>
                        <input className="list-group-item carouselButton rounded-circle" type="button" value="" />
                    </li>
                    <li>
                        <input className="list-group-item carouselButton rounded-circle" type="button" value="" />
                    </li>
                    <li>
                        <input className="list-group-item carouselButton rounded-circle" type="button" value="" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

function BlogsRow() {

    return (

        <div className="row">

            <div className="col-sm-4 blogBorder">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>SMART</h1>
                        </div>
                    </div>

                    <div className="row blogImg">
                        <div className="com-sm-12">
                            <img src={SmartImg} alt="smart image" />
                        </div>
                    </div>

                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam? Libero, quod accusantium voluptas voluptatum soluta dolore omnis amet, sequi sunt ducimus natus exercitationem, itaque reprehenderit qui rem numquam iusto.</p>
                        </div>
                    </div>

                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 blogBorder">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>STRONG</h1>
                        </div>
                    </div>

                    <div className="row blogImg">
                        <div className="com-sm-12">
                            <img src={StrongImg} alt="strong image" />
                        </div>
                    </div>

                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam? Libero, quod accusantium voluptas voluptatum soluta dolore omnis amet, sequi sunt ducimus natus exercitationem, itaque reprehenderit qui rem numquam iusto.</p>
                        </div>
                    </div>

                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4 blogBorderTop">
                <div className="container">
                    <div className="row blogTitle">
                        <div className="col-sm-12">
                            <h1>STABLE</h1>
                        </div>
                    </div>

                    <div className="row blogImg">
                        <div className="com-sm-12">
                            <img src={StableImg} alt="stable image" />
                        </div>
                    </div>

                    <div className="row blogDescription">
                        <div className="col-sm-12">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. A, quisquam? Libero, quod accusantium voluptas voluptatum soluta dolore omnis amet, sequi sunt ducimus natus exercitationem, itaque reprehenderit qui rem numquam iusto.</p>
                        </div>
                    </div>

                    <div className="row blogButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

function Services() {

    return (

        <div className="row serviceBackgroundColor">
            <div className="col-sm-4 position-relative">
                <div className="container">
                    <div className="row serviceTitle">
                        <div className="col-sm-12">
                            <h1>SERVICES</h1>
                        </div>
                    </div>

                    <div className="row serviceBulletList">
                        <div className="col-sm-12">
                            <ul>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                                <li>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row serviceButton position-absolute bottom-0 start-0">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-sm-4 "> 
                <div className="container">
                    <div className="row oppTitle">
                        <div className="col-sm-12">
                            <h1>OPPORTUNITIES</h1>
                        </div>
                    </div>

                    <div className="row oppBulletList">
                        <div className="col-sm-12">
                            <ul>
                                <li>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa unde saepe ullam. Facere, laborum beatae. A nulla inventore esse adipisci?</p>
                                </li>
                                <li>
                                    <h3>Lorem ipsum dolor sit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa unde saepe ullam. Facere, laborum beatae. A nulla inventore esse adipisci?</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row OppButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-4">
                <div className="container">

                    <div className="row newsTitle">
                        <div className="col-sm-12">
                            <h1>NEWS</h1>
                        </div>
                    </div>

                    <div className="row newsLinkOne">
                        <div className="col-sm-3 newsImage">
                            <img src={Placeholder} className="img-fluid" alt="x" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus suscipit quaerat aut. </p>
                        </div>
                    </div>

                    <div className="row newsLinkTwo">
                        <div className="col-sm-3 newsImage">
                            <img src={Placeholder} className="img-fluid" alt="x" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus suscipit quaerat aut. </p>
                        </div>
                    </div>

                    <div className="row newsLinkThree">
                        <div className="col-sm-3 newsImage">
                            <img src={Placeholder} className="img-fluid" alt="x" />
                        </div>
                        <div className="col-sm-9 newsDescrip">
                            <h4>Lorem ipsum dolor sit amet.</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi necessitatibus suscipit quaerat aut. </p>
                        </div>
                    </div>

                    <div className="row newsButton">
                        <div className="col-sm-12">
                            <input type="button" className="rounded" value="MORE" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Body