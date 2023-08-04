import React, { useState, useEffect } from "react";

import Dropdown from "../../../components/Dropdown";
import Input from "../../../components/Input";

import * as Style from "./styles";
import useDarkMode from "../../../hooks/useDarkMode";
import { useForm } from "../../../hooks/useForm";
import FormValidations from "./FormValidations";

import { Radio } from "@mui/material";

const propertyList = [
  {
    id: 1,
    type_name: "Residencial",
    sub_types: [{ id: 1, name: "Casa" }],
  },
  {
    id: 2,
    type_name: "Comercial",
    sub_types: [{ id: 2, name: "Escritório" }],
  },
];

function RegisterProperty() {
  const { darkMode } = useDarkMode();
  const { data, setData, handleSubmit, handleChange } = useForm({
    initialValue: {
      ref: "",
      title: "",
      mapAddress: "",
      type_id: "",
      subtype_id: "",
      status: "true",
      goal: "",
    },
    validations: FormValidations,
  });

  const [goalLabel, setGoalLabel] = useState("Finalidade");

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [bairros, setBairros] = useState([]);

  const [estadoSelecionado, setEstadoSelecionado] = useState("Estado");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("Cidade");
  const [bairroSelecionado, setBairroSelecionado] = useState("Bairro");

  const [priceInput, setPriceInput] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const onChangeHandler = (event) => {
    setPriceInput(event.target.value);
  };

  useEffect(() => {
    const carregarEstados = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await response.json();
        setEstados(data);
      } catch (error) {
        console.log("Erro ao carregar os estados", error);
      }
    };

    carregarEstados();
  }, []);

  useEffect(() => {
    const carregarCidades = async () => {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
        );
        const data = await response.json();
        setCidades(data);
      } catch (error) {
        console.log("Erro ao carregar as cidades", error);
      }
    };

    if (estadoSelecionado !== "Estado") {
      carregarCidades();
    } else {
      setCidades([]);
    }
  }, [estadoSelecionado]);

  // Carrega os bairros quando a cidade selecionada muda
  useEffect(() => {
    const carregarBairros = async () => {
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeSelecionada}/distritos`
        );
        const data = await response.json();
        setBairros(data);
      } catch (error) {
        console.log("Erro ao carregar os bairros", error);
      }
    };

    if (cidadeSelecionada !== "Cidade") {
      carregarBairros();
    } else {
      setBairros([]);
    }
  }, [cidadeSelecionada]);

  return (
    <Style.Container>
      <h2>
        Cadastrar <strong>Imóvel</strong>
      </h2>
      <div class="divider">
        <span class="dots">...</span>
        <span class="line"></span>
      </div>
      <Style.WarningParagraph>
        Lembre-se que para cadastrar o endereço é necessário preencher primeiro
        o estado, depois a cidade e por último o bairro.
      </Style.WarningParagraph>
      <Style.Form onSubmit={handleSubmit} isDark={darkMode}>
        <Style.GridContainer grid={"1fr 3fr 1fr"}>
          <Input
            type="text"
            name="ref"
            label={"Referência Ex: REF:2630"}
            variant={"outlined"}
            size={"normal"}
            maxLength={"10"}
            mask="ref:99999"
            value={data.ref}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="title"
            label={"Slogan: Texto que ficará em destaque como título"}
            variant={"outlined"}
            size={"normal"}
            value={data.title}
            onChange={handleChange}
          />

          <Style.RadioGroup>
            <label>
              <Radio
                checked={data.status === "true"}
                value={"true"}
                name="status"
                onChange={handleChange}
              />
              Ativo
            </label>
            <label>
              <Radio
                checked={data.status === "false"}
                value={"false"}
                name="status"
                onChange={handleChange}
              />
              Inativo
            </label>
          </Style.RadioGroup>
        </Style.GridContainer>

        <Style.GridContainer grid={"2fr 2fr 1fr"}>
          <Style.GridColumn>
            <Input
              variant={"outlined"}
              size={"normal"}
              value={data.mapAddress}
              onChange={handleChange}
              name="mapAddress"
              label={"Endereço para mapa. Ex: Rua Fulano, bairro, rua"}
            />
          </Style.GridColumn>

          <Style.GridColumn>
            <Dropdown
              p={"16.5px 14px"}
              m={"5px 0"}
              label={"Tipo de Imóvel"}
              top={"20px"}
            >
              {propertyList?.map((property) => (
                <div key={property.id}>
                  <h4>{property.type_name}</h4>
                  {property.sub_types.map((sub_type) => (
                    <li key={sub_type.id} onClick={() => {}}>
                      {sub_type.name}
                    </li>
                  ))}
                </div>
              ))}
            </Dropdown>
          </Style.GridColumn>

          <Style.GridColumn>
            <Dropdown
              label={goalLabel}
              top={"20px"}
              p={"16.5px 14px"}
              m={"5px 0"}
              suggestsBg={"grey"}
              name="goal"
            >
              {["Compra", "Venda"].map((option) => (
                <li
                  onClick={() => {
                    setData({ ...data, goal: option });
                    setGoalLabel(option);
                  }}
                >
                  {option}
                </li>
              ))}
            </Dropdown>
          </Style.GridColumn>
        </Style.GridContainer>

        <Style.GridContainer grid={"1fr 1fr"}>
          <Style.GridColumn>
            <Style.TextArea placeholder="Breve Descrição do Imóvel" />
          </Style.GridColumn>
          <Style.GridColumn>
            <Style.TextArea placeholder="Descrição do Imóvel" />
          </Style.GridColumn>
        </Style.GridContainer>

        <h3>Informações do Imóvel</h3>
        <Style.GridContainer grid={"1fr 1fr"}>
          <Style.GridColumn>
            <Style.GridContainer grid={"1fr 3fr 1fr"}>
              <Dropdown
                top={"20px"}
                p={"16.5px 14px"}
                m={"5px 0"}
                label={"Quartos"}
              />
              <Dropdown
                top={"20px"}
                p={"16.5px 14px"}
                m={"5px 0"}
                label={"Banheiros"}
              />
              <Dropdown
                top={"20px"}
                p={"16.5px 14px"}
                m={"5px 0"}
                label={"Suítes"}
              />
            </Style.GridContainer>

            <Style.GridContainer grid={"1fr 2fr 2fr"}>
              <Style.SelectAddress top={"6px"} placeholder="Cidade">
                <option value="" disabled selected>
                  Estado
                </option>
                {estados?.map((estado) => (
                  <option onClick={() => setEstadoSelecionado(estado.sigla)}>
                    {estado.sigla}
                  </option>
                ))}
              </Style.SelectAddress>
              <Style.SelectAddress top={"6px"}>
                <option value="" disabled selected>
                  Cidade
                </option>
                {cidades?.map((cidade) => (
                  <option onClick={() => setCidadeSelecionada(cidade.id)}>
                    {cidade.nome}
                  </option>
                ))}
              </Style.SelectAddress>
              <Style.SelectAddress top={"6px"}>
                <option value="" disabled selected>
                  Bairro
                </option>
                {bairros?.map((bairro) => (
                  <option onClick={() => setBairroSelecionado(bairro.nome)}>
                    {bairro.nome}
                  </option>
                ))}
              </Style.SelectAddress>
            </Style.GridContainer>
          </Style.GridColumn>

          <Style.GridColumn>
            <Style.GridContainer grid={"1fr 1fr"}>
              <Dropdown
                top={"20px"}
                p={"16.5px 14px"}
                m={"5px 0"}
                label={"Garagem"}
              />
              <Input type="text" placeholder="Área Total" />
            </Style.GridContainer>

            <Style.GridContainer grid={"1fr 1fr"}>
              <Style.Input type="text" placeholder="Área Construída" />
            </Style.GridContainer>
          </Style.GridColumn>
        </Style.GridContainer>

        <h3>Valores</h3>

        <Style.GridContainer grid={"1fr 1fr"}>
          <Style.Input
            value={priceInput}
            onChange={onChangeHandler}
            type="text"
            placeholder="Preço"
          />
        </Style.GridContainer>
        <button type="submit">Click-me</button>
      </Style.Form>
    </Style.Container>
  );
}

export default RegisterProperty;
