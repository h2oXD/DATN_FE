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
        <div className="modal fade" id="langaugeModal" tabIndex="-1" aria-labelledby="langaugeModalLabel" aria-hidden="true">
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
    );
};

export { CategoriesDropdown, LanguageModal };
