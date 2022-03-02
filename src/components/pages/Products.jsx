import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Products extends Component {

    constructor(props) {
        super(props)
    }

    render() {


        return (
            <div id={"main-products-page"}>
                {/*<Breadcrumb title={'Collection'}/>*/}
                <section className="collection section-b-space">
                    <div className="container">
                        <div className="row partition-collection">
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/1.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>

                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/3.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/5.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/6.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row partition-collection section-t-space">
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row partition-collection section-t-space">
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/7.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/8.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/9.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="collection-block">
                                    <img src={`${process.env.PUBLIC_URL}/assets/images/collection/11.jpg`}
                                         className="img-fluid" alt=""/>
                                    <div className="collection-content">

                                        <h3>fashion</h3>
                                        <h4>13.95 $</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry....</p>
                                        <span>Lorem ipsum dolor sit amet ipsum am.</span>
                                        <div className="rating">
                                            <i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                            <i className="fa fa-star"/><i className="fa fa-star"/>
                                        </div>
                                        <div className={"rating-num"}>4.87</div>
                                        <a href="category-page.html" className="btn btn-outline">Acheter Maintenant</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Products