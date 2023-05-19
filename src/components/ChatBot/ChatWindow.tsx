import { ChatRightTextFill } from "react-bootstrap-icons";
import { FC }                from "react";
import React                 from "react";


const ChatWindow: FC = () => {

  return (
    <div className=" bg-neutral-800 cursor-pointer md:hidden p-3 w-fit rounded-middle">
      <ChatRightTextFill color="#3498db" size={"25px"} />
    </div>
  )
};

export default ChatWindow;