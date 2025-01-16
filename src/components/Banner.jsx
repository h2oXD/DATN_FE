export default function Banner() {
    return (
        <>
            <section className="pb-6 pt-2">
                <div className="">
                    <div className="row">
                        <div className="col-xl-10 offset-xl-1 col-md-12 col-12">
                            <div className="bg-primary py-6 px-6 px-xl-0 rounded-4 ">
                                <div className="row align-items-center">
                                    <div className="offset-xl-1 col-xl-5 col-md-6 col-12">
                                        <div>
                                            <h2 className="h1 text-white mb-3">Let’s find the right course for you!</h2>
                                            <p className="text-white fs-4">…and achieve their learning goals. With our expert tutors, your goals are
                                                closer
                                                than ever!</p>
                                            <button className="btn btn-dark">Start learning</button>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-md-6 col-12">
                                        <div className="text-center">
                                            <img src="../assets/images/education/course.png" alt="learning" className="img-fluid"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}