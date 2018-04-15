import React from "react";
import styled from 'styled-components';



export const BoardHeader = styled.div`
  display: flex;  
  background: #fdfdfd;
  border-bottom: 1px solid #e9e4ea;
  div {
    color: #a692aa;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    padding: 15px;
    &:first-child {
      border-right: 1px solid #e9e4ea;
    }
  }
  
`
export const BoardBody = styled.div`
  padding: 10px 0;
  padding-bottom: 10px; 
  border-top: 1px solid #fffcfc;
  padding-top: 10px;

  @media (min-width: 576px) {
    padding: 20px;
    padding-top: 30px;
    padding-bottom: 30px; 
  }
  @media (min-width: 768px) {
    padding: 60px;
    padding-top: 0;
    padding-bottom: 40px; 
    padding-top: 40px;
  }
`

export const Board = styled.div`
  max-width: 700px;
  margin: 60px auto;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`; 