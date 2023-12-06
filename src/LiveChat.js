import React, { useEffect, useState } from 'react'
import ChatMesaage from './ChatMesaage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from './Utils/ChatSlice';
import { YOUTUBE_LIVE_CHAT } from './Utils/Constansts';
import { generateRandomName, makeRandomMessage } from './Utils/helper';

const LiveChat = () => {

    const dispatch = useDispatch();

    const [liveMessage, setLiveMessage] = useState("");

    const chatMessages = useSelector(store => store.chat.messages)

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }))
        }, 2000)

        return () => clearInterval(i)
    }, [])


    return (
        <>
            <div className='w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                <div>
                    {chatMessages.map((cm, i) =>
                        <ChatMesaage
                            key={i}
                            name={cm.name}
                            message={cm.message}
                        />
                    )}
                </div>
            </div>
            <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addMessage({
              name: "Akshay Saini",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
        </>


    )
}

export default LiveChat