import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Loginstyle.js";
import LoginProfileBoxImg from "./../../components/profileBox/LoginProfileImgBox.jsx";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { getCookie } from "./../../utils/Cookies";
import { putUser } from "api/user/putUser";
import { useNavigate } from "react-router-dom";

export default function LoginInfo() {
  const movePage = useNavigate();

  const [content, setContent] = useState("");
  const [initData, setInitData] = useState("");
  const [initImg, setInitImg] = useState();
  const len = `${content.length} / 8`;

  //처음 렌더링이 될 때만 실행
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get("https://storyge.xyz/api/user", {
          headers: {
            Authorization: getCookie("token"),
          },
        });
        console.log("로그인 추가 정보 입력");
        console.log(response.data);
        setInitImg(response.data.profileImg);
      } catch (err) {
        console.log(err);
      }
    }
    getUserData();
  }, []);

  function onChange(e) {
    setContent(e.target.value);
    if (content.length >= 8) {
      alert("닉네임은 8자 이내로 작성해주세요.");
      setContent(content.substr(0, 8));
    }
  }
  function gomain() {
    movePage("/");
  }

  async function onSubmit() {
    console.log("제출 버튼 클릭");
    console.log("이미지 파일 : " + initImg);
    console.log("수정된 닉네임 : " + content);
    putUser(initImg, content);
    alert("프로필 추가 완료");
    gomain();
  }

  return (
    <S.Login>
      <S.LoginInfoText>Set your Information</S.LoginInfoText>
      <LoginProfileBoxImg profileImg={initImg} modifyFormData={setInitImg} />
      <Box
        className="box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="NickName"
          variant="standard"
          helperText={len}
          autoFocus={true}
          onChange={onChange}
        ></TextField>
      </Box>
      <S.SubmitBtn onClick={onSubmit}>등록</S.SubmitBtn>
    </S.Login>
  );
}
