import { useEffect } from 'react';
import { tns } from 'tiny-slider/src/tiny-slider';
export default function CourseSale() {
    useEffect(() => {
        const slider = tns({
            container: '.sliderFirst',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            controlsContainer: '#sliderFirstControls',
            nav: false,
            autoplayButtonOutput: false,
            mouseDrag: true,
            responsive: {
                640: {
                    items: 2,
                },
                900: {
                    items: 3,
                },
            },
        });

        // Cleanup on unmount
        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            <section className="py-xl-8 py-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-12 mx-auto">
                            <div className="d-flex flex-column gap-2 text-center mb-xl-7 mb-5">
                                <h2 className="mb-0 h1">Khoá học đang giảm giá</h2>
                                <p className="mb-0">Whether you want to advance your career, learn a new skill, or explore a passion, we have the right course for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative">
                        <ul className="controls" id="sliderFirstControls">
                            <li className="prev">
                                <i className="fe fe-chevron-left"></i>
                            </li>
                            <li className="next">
                                <i className="fe fe-chevron-right"></i>
                            </li>
                        </ul>
                        <div className="sliderFirst">
                            <div className="item">
                                <div className="card border">
                                    <a href="#!">
                                        <img src="../assets/images/course/figma.jpg" alt="figma" className="card-img-top img-fluid w-100" />
                                    </a>
                                    <div className="card-body d-flex flex-column gap-4">
                                        <div className="d-flex flex-column gap-2">
                                            <div>
                                                <span className="badge text-light-emphasis bg-light-subtle border border-light-subtle rounded-pill">Design</span>
                                            </div>
                                            <h3 className="mb-0 h4">
                                                <a href="#!" className="text-inherit">Figma UI UX Design Course for the Beginner</a>
                                            </h3>
                                            <small className="text-secondary">Jitu Chauhan</small>
                                            <div className="lh-1">
                                                <span className="text-secondary fw-semibold">5.0</span>
                                                <span className="align-text-top">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                                        </svg>
                                                    ))}
                                                </span>
                                                <span className="text-gray-500">(245)</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row gap-2 align-items-center">
                                            <span className="fw-semibold text-dark">$599</span>
                                            <span className="fw-semibold text-gray-400">
                                                <del>$3,499</del>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Additional items */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center mt-8">
                                <a href="#!" className="btn btn-outline-primary">
                                    <span>Show All Courses</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
