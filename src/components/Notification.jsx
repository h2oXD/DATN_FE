import { useContext, useEffect, useState } from "react"
import axiosClient from "../api/axios"
import { format, parseISO } from "date-fns"
import { StoreContext } from "../contexts/StoreProvider"
import echo from "../api/pusher"
import { toast } from "react-toastify"

export default function Notification() {
    const [notification, setNotification] = useState(null)
    const { user } = useContext(StoreContext);
    const [reset, setReset] = useState(false)
    useEffect(() => {
        const fetchNoti = async () => {
            try {
                const res = await axiosClient.get(`/notifications`)
                setNotification(res.data.data)
                // console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchNoti()
    }, [reset])

    useEffect(() => {
        const userId = user.id
        const channel = echo.private(`notifications-client.${userId}`);

        channel.notification((notification) => {
            toast.info(notification.data.message ?? 'Thông báo')
            setReset(pre => !pre)
        });

        return () => {
            channel.stopListening(`notifications-client.${userId}`);
        };
    }, [user.id])

    return (
        <>
            <li className="dropdown d-inline-block stopevent position-static">
                <a
                    className="btn btn-light btn-icon rounded-circle"
                    href="#"
                    role="button"
                    id="dropdownNotificationSecond"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <i className="fe fe-bell"></i>
                </a>
                <div
                    className="dropdown-menu dropdown-menu-end dropdown-menu-lg position-absolute mx-3 my-5"
                    aria-labelledby="dropdownNotificationSecond"
                >
                    <div>
                        <div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
                            <span className="h5 mb-0">Thông báo</span>
                            <a href="# ">
                                <span className="align-middle">
                                    <i className="fe fe-settings me-1"></i>
                                </span>
                            </a>
                        </div>
                        <ul className="list-group list-group-flush" id="response-noti">
                            {notification && notification.length <= 0 && <h5 className="text-center mt-4">Chưa có thông báo nào</h5>}
                            {notification && notification.length > 0 && notification.map((noti, index) => (
                                <li key={index} className="list-group-item">
                                    <div className="row">
                                        <div className="col ps-0">
                                            <a className="text-body" href="#">
                                                <div className="d-flex">
                                                    <div className="ms-3">
                                                        <h5 className="fw-bold mb-1">{noti.data && 'Thông báo hệ thống:'}</h5>
                                                        <p className="mb-2 text-body">
                                                            {noti.data && noti.data.message}
                                                        </p>
                                                        <span className="fs-6">
                                                            <span className="ms-1">{format(parseISO(noti.data.created_at), "dd/MM/yyyy HH:mm:ss")}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-auto text-center me-2">
                                            <a
                                                href="#"
                                                className="badge-dot bg-secondary"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                title="Mark as unread"
                                            ></a>
                                        </div>
                                    </div>
                                </li>))
                            }
                        </ul>
                        {/* <div className="border-top px-3 pt-3 pb-0">
                            <a
                                href="../pages/notification-history.html"
                                className="text-link fw-semibold"
                            >
                                See all Notifications
                            </a>
                        </div> */}
                    </div>
                </div>
            </li>
        </>
    )
}
