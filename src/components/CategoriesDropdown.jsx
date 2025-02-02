// import React from 'react';
const CategoriesDropdown = () => {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarBrowse" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-display="static">
                Danh mục
            </a>
            <ul className="dropdown-menu dropdown-menu-arrow" aria-labelledby="navbarBrowse">
                <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">Web Development</a>
                    <ul className="dropdown-menu">
                        {['Bootstrap', 'React', 'GraphQl', 'Gatsby', 'Grunt', 'Svelte', 'Meteor', 'HTML5', 'Angular'].map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="pages/course-category.html">{item}</a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="dropdown-submenu dropend">
                    <a className="dropdown-item dropdown-list-group-item dropdown-toggle" href="#">Design</a>
                    <ul className="dropdown-menu">
                        {['Graphic Design', 'Illustrator', 'UX / UI Design', 'Figma Design', 'Adobe XD', 'Sketch', 'Icon Design', 'Photoshop'].map((item, index) => (
                            <li key={index}>
                                <a className="dropdown-item" href="pages/course-category.html">{item}</a>
                            </li>
                        ))}
                    </ul>
                </li>
                {['Mobile App', 'IT Software', 'Marketing', 'Music', 'Life Style', 'Business', 'Photography'].map((category, index) => (
                    <li key={index}>
                        <a href="pages/course-category.html" className="dropdown-item">{category}</a>
                    </li>
                ))}
            </ul>
        </li>
    );
};

const LanguageModal = () => {
    const languages = [
        "English", "Deutsch", "Español", "Français", "Indonesia", "Italiano", "日本語", "한국어", "Nederlands", "Polski", "Português", "Română", "Русский", "ภาษาไทย", "Türkçe", "Tiếng Việt", "中文(简体)", "中文(繁體)"
    ];

    return (
        <>
            <div className="dropdown me-2">
                <a
                    href="#langaugeModal"
                    className="text-inherit me-2"
                    data-bs-toggle="modal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="currentColor"
                        className="bi bi-globe text-gray-500"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                    </svg>
                </a>
                <div className="modal fade"
                    id="langaugeModal"
                    tabIndex="-1"
                    aria-labelledby="langaugeModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h3 className="modal-title" id="langaugeModalLabel">Choose a language</h3>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                                    {languages.map((language, index) => (
                                        <a key={index} className={`text-inherit fw-semibold ${language === 'English' ? 'active' : ''}`} href="#!">
                                            {language}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { CategoriesDropdown, LanguageModal };
