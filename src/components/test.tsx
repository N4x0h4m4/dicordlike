import { ExpandMoreOutlined, Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import SidebarChannle from "./SidebarChannle";
//import { useAppSelector } from "../app/hooks";
import { db, auth } from "../firebase";
import {
  collection,
  addDoc,
  DocumentData,
  DocumentReference,
} from "firebase/firestore";
import useFirebase from "../hooks/useFirebase";
import { useAppSelector, useAppDispatch } from "../app/hooks";


const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  //const user2 = useAppSelector((state) => state.user.user);
 
  // const [channels, setChannels] = useState<Channel[]>([]);

  const { documents: channels } = useFirebase("channels");
  console.log(channels);

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作成します");

    if (channelName) {
      const docRef: DocumentReference<DocumentData> = await addDoc(
        collection(db, "channels"),
        {
          channelName: channelName,
        }
      );
      // console.log(docRef);
    }
  };

  const [inputText, setInputElement] = useState("");
  const [text, setText] = useState("ここに表示されます。");
  const printText = () => {
    if(inputText !== "") {
      setText(inputText);
      setInputElement("");
    }
    else
    {
      setText("文字を入力してください。");
    }
  }


  const dispatch = useAppDispatch();
  const handleDisplayNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
        type: "setDisplayName",
        payload: event.target.value
    });
   };

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        {/* discrodIcon */}
        <div className="serverIcon">
          <img src="./discordLogo.png" alt="" />
        </div>
        <div className="serverIcon">
         <img src="./logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Nacord</h3>
          <ExpandMoreOutlined />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreOutlined />
              <h4>Testチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddChannel" onClick={addChannel} />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannle
                id={channel.id}
                channel={channel}
                key={channel.id}
              />
            ))}
            {/* <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" /> */}
          </div>

          <div className="sidebarSettings">
            <div className="sidebarAccount">
              <img
                src={user?.photo}
                alt="account"
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <Settings />
            </div>
          </div>

          <div className="sidebarSettings2">
             <div className="accountName2">
                   <div className="print">
          <p>{text}</p>
        </div>
                {/* <button onClick={handleDisplayNameChange}>表示する</button> */}
                <label>ユーザーネーム</label>
                <input value={inputText} onChange={(e) => setInputElement(e.target.value)} type="text" placeholder="usernameを入力" />
              </div>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Sidebar;
