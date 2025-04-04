/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import axiosClient from "../../../api/axios"
import { toast } from "react-toastify"

export default function ChatInput({ contentChat, setReset }) {
    const [message, setMessage] = useState('')
    const [loadingSendMessage, setLoadingSendMessage] = useState(false)
    const hanldeSendMessage = async () => {
        if (contentChat) {
            if(!message) return toast.warning('Tin nhắn không được để trống')
            try {
                setLoadingSendMessage(true)
                const data = {
                    message: message
                }
                await axiosClient.post(`/chat-rooms/${contentChat.id}/messages`, data)
                setReset(pre => !pre)
                setMessage('')
            } catch (error) {
                console.log(error);
            } finally {
                setLoadingSendMessage(false)
            }
        }
    }
    return (
        <>
            <div className="bg-light">
                <div className="bg-white p-2 rounded-3 shadow-none">
                    <div className="d-flex align-items-center">
                        <textarea
                            className="form-control border-0 form-control-simple no-resize"
                            placeholder="Soạn tin nhắn..."
                            rows={1}
                            value={message}
                            onChange={(e) => { setMessage(e.target.value) }}
                        />
                        {loadingSendMessage ?
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                disabled
                                onClick={hanldeSendMessage}
                            >
                                Gửi
                            </button> :
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                onClick={hanldeSendMessage}
                            >
                                Gửi
                            </button>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
