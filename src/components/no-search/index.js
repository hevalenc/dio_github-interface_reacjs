import React from "react";
import * as S from "./styled";
import git from '../../image/git.png'

const NoSearch = () => {
  return (
    <S.Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
      <img src={git} alt=""/>
    </S.Wrapper>
  );
};

export default NoSearch;
