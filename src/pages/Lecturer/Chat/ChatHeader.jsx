
export default function ChatHeader() {
    return (
        <>
            <div className="bg-white border-top border-bottom px-4 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <a href="#" className="me-2 d-xl-none d-block" data-close="">
                            <i className="fe fe-arrow-left" />
                        </a>
                        <div className="avatar avatar-md avatar-indicators avatar-online">
                            <img
                                src="../../assets/images/avatar/avatar-4.jpg"
                                alt=""
                                className="rounded-circle"
                            />
                        </div>
                        <div className="ms-2">
                            <h4 className="mb-0">Hữu Hào</h4>
                            <p className="mb-0">Online</p>
                        </div>
                    </div>
                    <div>
                        <a
                            href="#"
                            className="me-3 text-link texttooltip"
                            data-template="phone"
                        >
                            <i className="fe fe-info fs-3" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
