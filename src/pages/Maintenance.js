import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";

function Maintenance() {
  return (
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Title>🚧 점검 중입니다 🚧</Title>
        <SubTitle>
          오후 3시부터 3시 40분까지 데이터 최신화가 진행됩니다.
        </SubTitle>
      </div>
    </div>
  );
}

const Title = styled(Typography)`
  font-size: 35px;
  font-weight: 500;
`;

const SubTitle = styled(Typography)`
  margin-top: 20px;
  font-size: 25px;
  font-weight: 500;
`;

export default Maintenance;
