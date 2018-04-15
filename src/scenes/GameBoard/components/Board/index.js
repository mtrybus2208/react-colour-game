import React from "react";
import styled from 'styled-components';
 
const Board = styled.div`
  max-width: 700px;
  margin: 60px auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 10px 0;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
  @media (min-width: 576px) {
    padding: 20px;
  }
  @media (min-width: 768px) {
    padding: 60px;
  }
`;
export default Board;