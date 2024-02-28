import React, { useEffect, useState } from "react";
import { matchType, friendMatchData } from "./matchType";
import { useNavigate } from "react-router-dom";
interface Props {
  setAccessType: (value: string) => void;
}
const List = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { setAccessType } = props;
  const [type, setType] = useState<string>("");
  const btnClass = "text-sm bg-base-100/50 p-2 rounded ";

  useEffect(() => {
    const id = localStorage.getItem("type");
    if (!id) {
      return;
    } else {
      setType(id);
    }
  }, []);
  return (
    <div>
      <div>전체 유형</div>
      <div className="search_zone px-3 py-1">
        <label className="input input-bordered flex items-center gap-2 h-7">
          <input type="text" className="grow" placeholder="ex) 다오" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div
        className="custom_scroll "
        style={{ maxHeight: "76dvh", overflowY: "scroll" }}
      >
        {Object.keys(matchType).length > 0 &&
          Object.keys(matchType).map((item) => (
            <>
              <div className="card card-side bg-base-100  m-3">
                <figure>
                  <img
                    src={matchType[item].image}
                    style={{
                      transform: "scale(1.4)",
                      transition: "transform 0.3s",
                      maxHeight: "20dvh",
                    }}
                    alt="img"
                  />
                </figure>
                <div className="card-body p-0 ">
                  <h2 className="text-md ">{matchType[item].name}</h2>
                  <p className="text-sm">
                    관련 MBTI:{" "}
                    <span className="text-sm bg-red-300 p-1 rounded">
                      {friendMatchData[matchType[item].name]?.type}
                    </span>
                    <br />
                    절친 MBTI:YYYY
                    <br />
                    {matchType[item].tag.map((item) => (
                      <span className="text-sm bg-violet-100 p-1 rounded mr-1">
                        {item}
                      </span>
                    ))}
                  </p>
                  <div
                    className="text-sm "
                    onClick={() => {
                      navigate(`/result/${item}`);
                      setAccessType("A");
                    }}
                  >
                    자세히보기
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
      <div className="btn_box w-full pt-3">
        <span className={btnClass} onClick={() => navigate(`/result/${type}`)}>
          내 유형으로 돌아가기
        </span>
        <span className={btnClass + "ml-1"} onClick={() => navigate("/")}>
          테스트 다시하기
        </span>
      </div>
    </div>
  );
};

export default List;
