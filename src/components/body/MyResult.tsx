import React from "react";
import data from "../asset/data";
import Dao from "./img/dao.jpg";
const MyResult = (): JSX.Element => {
  return (
    <div className="h-dvh overflow-y-auto p-3">
      <div>내가 선택한 답변</div>
      {data.map((item) => (
        <>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-7 rounded-full">
                <img alt="img" src={Dao} />
              </div>
            </div>
            <div className="chat-bubble text-xs">
              {item.id}. {item.question}
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble">
              {item.answers.map((elem) => (
                <div className="text-xs">{elem.text}</div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default MyResult;
