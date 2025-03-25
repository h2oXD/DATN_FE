import { useEffect, useRef } from "react";
import ChatLeft from "./ChatLeft";
import ChatRight from "./ChatRight";

export default function ChatContent() {
    const chatEndRef = useRef(null);

    useEffect(() => {
        // Mỗi khi `messages` thay đổi, cuộn xuống dưới cùng
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);
    return (
        <>
            <div className="px-4 py-4 tw-max-h-[454px] tw-min-h-[454px] tw-overflow-auto">
                <ChatLeft />
                <ChatRight />
                <div ref={chatEndRef} />
            </div>
        </>
    )
}
