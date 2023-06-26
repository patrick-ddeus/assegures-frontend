import React, { useState, useEffect } from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';

import { useForm } from "react-hook-form"

import Dropdown from '../../components/Dropdown';

import * as Style from "./styles";
import useDarkMode from '../../hooks/useDarkMode';

function RegisterProperty() {
    const { register, handleSubmit } = useForm()
    const { darkMode } = useDarkMode();

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [bairros, setBairros] = useState([]);

    const [estadoSelecionado, setEstadoSelecionado] = useState('Estado');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('Cidade');
    const [bairroSelecionado, setBairroSelecionado] = useState('Bairro');

    const onSubmitHandler = (data) => {

    }

    useEffect(() => {
        const carregarEstados = async () => {
            try {
                const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
                const data = await response.json();
                setEstados(data);
            } catch (error) {
                console.log('Erro ao carregar os estados', error);
            }
        };

        carregarEstados();
    }, []);

    useEffect(() => {
        const carregarCidades = async () => {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`);
                const data = await response.json();
                
                setCidades(data);
            } catch (error) {
                console.log('Erro ao carregar as cidades', error);
            }
        };

        if (estadoSelecionado) {
            carregarCidades();
        } else {
            setCidades([]);
        }
    }, [estadoSelecionado]);

    // Carrega os bairros quando a cidade selecionada muda
    useEffect(() => {
        const carregarBairros = async () => {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidadeSelecionada}/distritos`);
                const data = await response.json();
                console.log(data)
                setBairros(data);
            } catch (error) {
                console.log('Erro ao carregar os bairros', error);
            }
        };

        if (cidadeSelecionada) {
            carregarBairros();
        } else {
            setBairros([]);
        }
    }, [cidadeSelecionada]);

    return (
        <Style.Container>
            <DashboardTemplate >
                <h2>Cadastrar <strong>Imóvel</strong></h2>
                <div class="divider">
                    <span class="dots">...</span>
                    <span class="line"></span>
                </div>
                <Style.Form onSubmit={handleSubmit(onSubmitHandler)} isDark={darkMode}>
                    <Style.GridContainer>
                        <Style.GridColumn>
                            <Style.Input type="text" placeholder="Referência Ex: REF:2630" {...register("slogan")} />
                            <Dropdown label={"Tipo de Imóvel"} top={"45px"} />
                            <Style.TextArea placeholder='Breve Descrição do Imóvel' />
                        </Style.GridColumn>
                        <Style.GridColumn>
                            <Style.Input type="text" placeholder="Slogan: Texto que ficará em destaque como título" {...register("title")} />
                            <Dropdown
                                label={"Finalidade"}
                                top={"55px"}
                                list={["Compra", "Venda"]}
                                suggestsBg={"grey"} />
                            <Style.TextArea placeholder='Descrição do Imóvel' />
                        </Style.GridColumn>
                    </Style.GridContainer>
                    <h3>Informações do Imóvel</h3>

                    <Style.GridContainer>

                        <Style.GridColumn>
                            <Style.GridThreeColumns>
                                <Dropdown label={"Quartos"} top={"45px"} />
                                <Dropdown label={"Banheiros"} top={"45px"} />
                                <Dropdown label={"Suítes"} top={"45px"} />
                            </Style.GridThreeColumns>

                            <Style.AddressGridColumn>
                                <Dropdown label={estadoSelecionado} top={"45px"} >
                                    {estados.map(estado => (
                                        <li onClick={() => setEstadoSelecionado(estado.sigla)}>{estado.sigla}</li>
                                    ))}
                                </Dropdown>
                                <Dropdown label={cidadeSelecionada} top={"45px"}>
                                    {cidades?.map(cidade => (
                                        <li onClick={() => setCidadeSelecionada(cidade.nome)}>{cidade.nome}</li>
                                    ))}
                                </Dropdown>
                                <Dropdown label={bairroSelecionado} top={"45px"}>
                                   
                                </Dropdown>
                            </Style.AddressGridColumn>
                        </Style.GridColumn>

                        <Style.GridColumn>
                            <Style.GridTwoColumns>
                                <Dropdown label={"Garagem"} top={"45px"} />
                                <Dropdown label={"Área Total"} top={"45px"} />
                            </Style.GridTwoColumns>

                            <Style.GridTwoColumns>
                                <Style.Input type="text" placeholder="Área Total" {...register("slogan")} />
                                <Style.Input type="text" placeholder="Área Construída" {...register("slogan")} />
                            </Style.GridTwoColumns>
                        </Style.GridColumn>

                    </Style.GridContainer>
                </Style.Form>
            </DashboardTemplate>
        </Style.Container>
    );
}

export default RegisterProperty;