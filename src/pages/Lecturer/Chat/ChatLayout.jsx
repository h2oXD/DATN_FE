import ChatHeader from "./ChatHeader";
import ChatList from "./ChatList";
import ChatContent from "./ChatContent";
import ChatInput from "./ChatInput";

export default function ChatLayout() {
    
    return (
        <>
            <section className="container-fluid px-0">
                <div className="row g-1">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-3 d-none d-md-block">
                        <ChatList />
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-12">
                        <ChatHeader />
                        <ChatContent />
                        <ChatInput />
                    </div>
                </div>
            </section>
        </>
    )
}
