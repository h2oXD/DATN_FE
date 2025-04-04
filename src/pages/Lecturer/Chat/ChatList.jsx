import { useContext, useEffect, useState } from "react"
import axiosClient from "../../../api/axios"
import { Link } from "react-router-dom"
import { StoreContext } from "../../../contexts/StoreProvider";
import { getImageUrl } from "../../../api/common";

export default function ChatList({ setRoomId }) {
    const [room, setRoom] = useState(null)
    const { user } = useContext(StoreContext);
    useEffect(() => {
        const fetchRoom = async () => {
            try {
                const res = await axiosClient.get(`/chat-rooms`)
                console.log(res);
                setRoom(res.data.room)
            } catch (error) {
                console.log(error);
            }
        }
        fetchRoom()
    }, [])
    return (
        <>
            <div className="d-flex tw-bg-white flex-column">
                <div className="px-4 py-2">
                    <div className="d-flex justify-content-between">
                        <div>
                            <h1 className="mb-0 fw-bold h2">Tin nhắn</h1>
                        </div>
                        <div>
                            <a
                                href="#"
                                className="btn btn-primary rounded-circle btn-icon texttooltip"
                                data-template="newchat"
                                data-bs-toggle="modal"
                                data-bs-target="#newchatModal"
                            >
                                <i className="fe fe-edit" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2 mt-2">
                        <a href="#" className="text-link">
                            <div className="d-flex">
                                <div className="avatar avatar-md avatar-indicators avatar-online">
                                    <img
                                        src={user && user.profile_picture ? getImageUrl(user.profile_picture) : '/avatarDefault.jpg'}
                                        alt=""
                                        className="rounded-circle"
                                    />
                                </div>
                                <div className="ms-2">
                                    <h5 className="mb-0">{user && user.name}</h5>
                                    <p className="mb-0">Online</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="mt-3 mb-3">
                        <input
                            type="search"
                            className="form-control form-control-sm"
                            placeholder="Tìm kiếm tin nhắn  "
                        />
                    </div>
                </div>
                <ul className="nav nav-line-bottom" id="tab" role="tablist">
                    <li className="nav-item">
                        <a
                            className="nav-link active py-2"
                            id="recent-tab"
                            data-bs-toggle="pill"
                            href="#recent"
                            role="tab"
                            aria-controls="recent"
                            aria-selected="true"
                        >
                            Tin nhắn
                        </a>
                    </li>
                </ul>
                <div className="tab-content" id="tabContent">
                    <div className="tab-pane fade show active" id="recent" role="tabpanel" aria-labelledby="recent-tab">
                        <ul className="list-unstyled contacts-list tw-overflow-auto tw-max-h-[374px] tw-min-h-[374px]">
                            {room && room.length > 0 && room.map((r, index) => (
                                <li key={index} className="py-3 px-4 chat-item contacts-item">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <Link to={'#'} onClick={() => { setRoomId(r.chat_room_id) }} className="text-link contacts-link">
                                            <div className="d-flex align-items-center">
                                                <i className="fe fe-hash"></i>
                                                <div className="ms-2">
                                                    <h5 className="mb-0 fw-bold">{r && r.chat_room.name}</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                            {room && room.length <= 0 && <h4 className="text-center mt-3">Chưa có tin nhắn nào</h4>}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
