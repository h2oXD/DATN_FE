
export default function ChatInput() {
    return (
        <>
            <div className="bg-light">
                <div className="bg-white p-2 rounded-3 shadow-sm">
                    <div className="d-flex align-items-center">
                        <textarea
                            className="form-control border-0 form-control-simple no-resize"
                            placeholder="Soạn tin nhắn..."
                            rows={1}
                            defaultValue={""}
                        />
                        <button
                            type="button"
                            className="fs-4 btn text-primary btn-focus-none"
                        >
                            <i className="fe fe-send" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
