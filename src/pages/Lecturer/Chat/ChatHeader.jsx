/* eslint-disable react/prop-types */

export default function ChatHeader({ contentChat }) {
    return (
        <>
            <div className="bg-white border-top border-bottom px-4 py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <a href="#offcanvasChatList" className="me-2 d-xl-none d-block" data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasChatList">
                            <i className="fe fe-arrow-left" />
                        </a>
                        <i className="fe fe-hash"></i>
                        <div className="ms-2">
                            <h4 className="mb-0">{contentChat && contentChat.name}</h4>
                        </div>
                    </div>
                    <div>
                        <a
                            href="#offcanvasChatInfo"
                            data-bs-toggle="offcanvas" role="button" aria-controls="offcanvasChatInfo"
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
