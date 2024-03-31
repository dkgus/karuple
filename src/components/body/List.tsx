import React, { useEffect, useState } from "react";
import { matchType, character } from "./matchType";
import { useNavigate } from "react-router-dom";
interface Props {
  setAccessType: (value: string) => void;
}
const List = (props: Props): JSX.Element => {
  const navigate = useNavigate();
  const { setAccessType } = props;
  const [type, setType] = useState<string>("");

  const [filterData, setFilterData] =
    useState<
      { key: string; value: { name: string; image: string; tag: string[], mate:string } }[]
    >();
  const [originData, setOriginData] =
    useState<
      { key: string; value: { name: string; image: string; tag: string[], mate:string } }[]
    >();

  useEffect(() => {
    const entriesWithKeys =
      matchType &&
      Object.entries(matchType).map(([key, value]) => ({
        key,
        value,
      }));

    setOriginData(entriesWithKeys);
    setFilterData(entriesWithKeys);
  }, []);

  useEffect(() => {
    const id = localStorage.getItem("ownType");
    if (!id) {
      return;
    } else {
      setType(id);
    }
  }, []);

  return (
    <div>
      <div>전체 유형</div>
      <div className="search_zone px-4 py-1">
        <label className="input input-bordered flex items-center gap-2 h-7 bg-white">
          <input
            type="text"
            className="grow"
            placeholder="ex) 다오 or ESFP"
            onChange={(e) => {
              const inputValue = e.target.value
                .trim()
                .toLowerCase()
                .toUpperCase();
              if (!inputValue) {
                setFilterData(originData);
              } else {
                const filtered = originData.filter(
                  (item) =>
                    item.key.includes(inputValue) ||
                    item.value.name.includes(inputValue)||
                    item.value.mate.includes(inputValue)
                );
                setFilterData(filtered);
              }
            }}
          />
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
          filterData &&
          filterData.map((item) => (
            <>
              <div className="card card-side m-3 flex "
              style={{background:"white"}}
              >
                <figure style={{ maxWidth: "50%"}}>
                  <img
                    src={item.value.image}
                    style={{
                      transform: "scale(1.5)",
                      transition: "transform 0.3s",
                      //maxHeight: "20dvh",
                    }}
                    alt="img"
                  />
                </figure>
                <div className="card-body p-0 "
                
                >
                  <h2 className="text-md ">{item.value.name}</h2>
                  <p>
                    <div className="text-base">
                    관련 MBTI:{" "}
                      {item.key}
                    </div>
                    <div className="mb-2 text-base">
                    절친 MBTI: {item.value.mate}
                    </div>
                    {item.value.tag.map((item) => {
                      return (
                        <span
                          className="text-sm bg-violet-100 p-1 rounded mr-1"
                          style={{ backgroundColor: `${character[item]}` }}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </p>
                  <div
                    className="text-sm pb-2"
                    onClick={() => {
                      navigate(`/result/${item.key}`);
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
        <span className="my_btn" onClick={() => navigate(`/result/${type}`)}>
          내 유형으로 돌아가기
        </span>
        <span className= "my_btn ml-1" onClick={() => navigate("/")}>
          테스트 다시하기
        </span>
      </div>
    </div>
  );
};

export default List;
