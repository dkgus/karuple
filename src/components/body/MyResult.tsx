import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../asset/data";
import Dao from "./img/dao.jpg";
import Home from "./img/home.png";

const MyResult = (): JSX.Element => {
  const navigate = useNavigate();
  const [record, setRecord] = useState<number[]>([]);

  useEffect(() => {
    const answer = JSON.parse(localStorage.getItem("record") || "[]");
    if (!answer) {
      return;
    } else {
      setRecord(answer);
    }
  }, []);

  return (
    <div className="p-3">
      <div>내가 선택한 답변</div>
      <div
        className="custom_scroll pt-10"
        style={{ maxHeight: "79dvh", overflowY: "scroll" }}
      >
        {data.map((item, index) => (
          <>
            <div className="chat chat-start" key={index}>
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
                {item.answers.map((elem, idx) => (
                  <div
                    key={idx}
                    className={
                      record[index] === idx
                        ? "text-xs text-green-500"
                        : "text-xs"
                    }
                  >
                    {elem.text}
                  </div>
                ))}
              </div>
            </div>
          </>
        ))}
      </div>
      <div>
        <img
          src={Home}
          className="w-7 mx-auto pt-6"
          onClick={() => navigate("/")}
        />
      </div>
    </div>
  );
};

export default MyResult;
