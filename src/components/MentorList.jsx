export default function MentorList() {
    return (
        <>
            <h2 className="text-center mt-2">Giảng viên nổi bật</h2>
            <div className="container position-relative d-flex overflow-x-hidden py-lg-2 pt-2">
                <div className="animate-marquee d-flex gap-3">
                    {[{
                        name: "Andrew Lupien",
                        role: "Quality Assurance Engineer",
                        image: "../assets/images/mentor/mentor-img-2.jpg"
                    }, {
                        name: "Bernice Perry",
                        role: "Senior Business Analyst",
                        image: "../assets/images/mentor/mentor-img-3.jpg"
                    }, {
                        name: "Patrice Long",
                        role: "Senior Data Engineer",
                        image: "../assets/images/mentor/mentor-img-4.jpg"
                    }, {
                        name: "Akshay Sharma",
                        role: "Frontend Engineer",
                        image: "../assets/images/mentor/mentor-img-5.jpg"
                    }, {
                        name: "Jessica Lupien",
                        role: "UI/UX Designer",
                        image: "../assets/images/mentor/mentor-img-6.jpg"
                    }, {
                        name: "Cathy Diehl",
                        role: "Quality Assurance Engineer",
                        image: "../assets/images/mentor/mentor-img-7.jpg"
                    }, {
                        name: "Patrice Long",
                        role: "Software Engineer",
                        image: "../assets/images/mentor/mentor-img-8.jpg"
                    }, {
                        name: "James Anderson",
                        role: "UI/UX Designer",
                        image: "../assets/images/mentor/mentor-img-1.jpg"
                    }, {
                        name: "Bernice Perry",
                        role: "Senior Business Analyst",
                        image: "../assets/images/mentor/mentor-img-3.jpg"
                    }, {
                        name: "Patrice Long",
                        role: "Senior Data Engineer",
                        image: "../assets/images/mentor/mentor-img-4.jpg"
                    }, {
                        name: "Akshay Sharma",
                        role: "Frontend Engineer",
                        image: "../assets/images/mentor/mentor-img-5.jpg"
                    }, {
                        name: "Jessica Lupien",
                        role: "UI/UX Designer",
                        image: "../assets/images/mentor/mentor-img-6.jpg"
                    }, {
                        name: "Cathy Diehl",
                        role: "Quality Assurance Engineer",
                        image: "../assets/images/mentor/mentor-img-7.jpg"
                    }, {
                        name: "Patrice Long",
                        role: "Software Engineer",
                        image: "../assets/images/mentor/mentor-img-8.jpg"
                    }, {
                        name: "James Anderson",
                        role: "UI/UX Designer",
                        image: "../assets/images/mentor/mentor-img-1.jpg"
                    }].map((mentor, index) => (
                        <a key={index} href="mentor-single.html" className="bg-white text-center shadow-sm text-wrap rounded-4 w-300 border card-lift border important-style">
                            <div className="p-3">
                                <img src={mentor.image} alt={mentor.name} className="avatar avatar-xl rounded-circle" />
                                <div className="mt-3">
                                    <h3 className="mb-0 h4">{mentor.name}</h3>
                                    <span className="text-gray-800">{mentor.role}</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}