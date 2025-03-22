
export default function ChatRight() {
    return (
        <>
            {/* chat-right */}
            <div className="d-flex justify-content-end mb-4">
                <div className="d-flex">
                    <div className="me-3 text-end">
                        <small>Bạn , 09:35</small>
                        <div className="d-flex">
                            <div className="card mt-2 rounded-top-md-end-0 bg-primary text-white">
                                <div className="card-body text-start p-3">
                                    <p className="mb-0">
                                        I just start Bootstrap, SCSS and Gulp development &amp;
                                        setup github repository.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        src="../../assets/images/avatar/avatar-1.jpg"
                        alt=""
                        className="rounded-circle avatar-md"
                    />
                </div>
            </div>
        </>
    )
}
