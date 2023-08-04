import React from "react";
import Card from "./Card";

import { IoHomeOutline } from "react-icons/io5";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import useDarkMode from "../../../hooks/useDarkMode";

function GeralInformation() {
  const navigate = useNavigate();
  const { darkMode } = useDarkMode();
  return (
    <>
      <h2>
        Olá <strong>Imobiliária</strong>!
      </h2>
      <ul>
        <li>
          <Card quantidade={4} descricao={"Imóveis Cadastrados"}>
            <IoHomeOutline />
          </Card>
        </li>
      </ul>
      <RegisterSection>
        <RegisterTitle isDark={darkMode}>
          <div>
            <h2>
              Cadastro de <strong>Imóveis</strong>
            </h2>
            <p>
              Cadastre, edite e gerencie tudo que precisar para dar ao usuário
              todas as informações necessárias.
            </p>
          </div>
          <div className="input-area">
            <SearchInput placeholder="Referência, slogan, etc..." />
            <SearchButton
              onClick={() =>
                navigate("/admin/painel-de-controle/cadastro-de-imovel")
              }
            >
              Novo Imóvel
            </SearchButton>
          </div>
        </RegisterTitle>
      </RegisterSection>
    </>
  );
}

const RegisterSection = styled.section`
  margin-top: 30px;
`;

const RegisterTitle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 40px;

  p {
    margin-top: 15px;
    color: ${({ isDark }) => (isDark ? "white" : "black")};
    font-size: 16px;
  }

  .input-area {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #c9c9c9;
`;

const SearchButton = styled.button`
  color: #fff;
  width: 300px;
  font-size: 16px;
  padding: 10px 20px;
  background-color: #1f9b4c;
  border-radius: 5px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #3a3a3a;
    color: white;
  }
`;

export default GeralInformation;
