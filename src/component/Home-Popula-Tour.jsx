import "../assets/style.css";

function HomePopularTour() {
    return(
        <>
            <section id="popular-tour">
            <div class="srn-container">
                <div class="row">
                    <div class="col-md-8">
                        <div class="main-heading">
                            <span>Heading</span>
                            <h2>Popular Tour Packages</h2>
                            <p>Rising on the banks of the river Yamuna, the city of Agra has been linked with the history of India, since ancient times. This beautiful city</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                    <div class="popular-tour-crd">
                            <div class="card-image">
                                <figure>
                                    <a href="https://www.tourmyindia.com/golden-triangle/golden-triangle-with-majestic-tiger.html">
                                        <img src="assets/images/tour-package/ranthambore-tiger.webp" alt="Img"/>
                                    </a>
                                    <span class="discount">19% OFF</span>
                                    <span class="likes"><i class="fa-regular fa-heart"></i></span>
                                </figure>
                            </div>
                            <div class="card-text">
                                {/* <span class="duration">08 Nights - 09 Days</span> */}
                                <h3><a href="https://www.tourmyindia.com/golden-triangle/golden-triangle-with-majestic-tiger.html">Manali, Himachal Pradesh, India</a></h3>
                                {/* <ul class="cover-dest">
                                    <li>Delhi(2N)<i class="fa fa-long-arrow-right" aria-hidden="true"></i></li>
                                    <li>Jaipur(2N)<i class="fa fa-long-arrow-right" aria-hidden="true"></i></li>
                                    <li>Ranthambhore(2N)<i class="fa fa-long-arrow-right" aria-hidden="true"></i></li>
                                    <li>Agra(1N)<i class="fa fa-long-arrow-right" aria-hidden="true"></i></li>
                                    <li>Delhi(1N)</li>
                                </ul> */}
                                <span class="price">Start from $2500.00pp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btm-line">
                <span class="btm-dot"></span>
            </div>
         </section>
        </>
    );
}

export default HomePopularTour