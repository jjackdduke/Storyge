import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as G from "../../styles";
import * as S from "./Music.js";
import { OpenAI } from "../../openai/OpenAI";
// import { reject } from "q";
// import { resolve } from "path";

export default function Music() {
  const movePage = useNavigate();
  const [result, setResult] = useState("");

  function getMusic() {}

  function gomusicresult() {
    movePage("/musicresult");
  }
  return (
    <G.BodyContainer>
      <S.Rectangle placeholder="음악 추천을 받고 싶은 사연을 작성해주세요." />
      <G.longBtnDefault
        onClick={async () => {
          setResult(
            await OpenAI({
              input: "나는 오늘 피곤하다. 또 월요일이다.",
              type: 0,
            })
          );
        }}
        style={{ marginBottom: "20px" }}
      >
        <S.Text>분석하기</S.Text>
      </G.longBtnDefault>
      <div>{result}</div>
    </G.BodyContainer>
  );
}
