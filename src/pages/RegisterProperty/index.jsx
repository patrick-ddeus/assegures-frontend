import React, { useState, useEffect } from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';

import { useForm, Controller } from "react-hook-form"

import Dropdown from '../../components/Dropdown';

import * as Style from "./styles";
import useDarkMode from '../../hooks/useDarkMode';

import { NumericFormat } from 'react-number-format';

function RegisterProperty() {
    const { register, handleSubmit, controll } = useForm()
    const { darkMode } = useDarkMode();

    const [estados, setEstados] = useState([]);
    const [cidades, setCidades] = useState([]);
    const [bairros, setBairros] = useState([]);

    const [estadoSelecionado, setEstadoSelecionado] = useState('Estado');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('Cidade');
    const [bairroSelecionado, setBairroSelecionado] = useState('Bairro');

    const [priceInput, setPriceInput] = useState('');
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages(files);
    };

    const onSubmitHandler = (data) => {

    }

    const onChangeHandler = (event) => {
        setPriceInput(event.target.value)
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

        if (estadoSelecionado !== 'Estado') {
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
                setBairros(data);
            } catch (error) {
                console.log('Erro ao carregar os bairros', error);
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
            <DashboardTemplate >
                <h2>Cadastrar <strong>Imóvel</strong></h2>
                <div class="divider">
                    <span class="dots">...</span>
                    <span class="line"></span>
                </div>
                <Style.WarningParagraph>
                    Lembre-se que para cadastrar o endereço é necessário preencher primeiro o estado, depois a cidade e por último o bairro.
                </Style.WarningParagraph>
                <Style.Form onSubmit={handleSubmit(onSubmitHandler)} isDark={darkMode}>
                    <Style.GridThreeColumns>
                        <Style.Input type="text" placeholder="Referência Ex: REF:2630" {...register("slogan")} />
                        <Style.Input type="text" placeholder="Slogan: Texto que ficará em destaque como título" {...register("title")} />
                        <Style.RadioGroup>
                            <label htmlFor='active'>
                                <input type="radio" id='active' name='status' {...register("status")} />
                                Ativo
                            </label>
                            <label htmlFor='inactive'>
                                <input type="radio" name='status' {...register("status")} />
                                Inativo
                            </label>
                        </Style.RadioGroup>
                    </Style.GridThreeColumns>
                    <Style.GridContainer>
                        <Style.GridColumn>
                            <Dropdown label={"Tipo de Imóvel"} top={"45px"} />
                            <Style.TextArea placeholder='Breve Descrição do Imóvel' />
                        </Style.GridColumn>
                        <Style.GridColumn>
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
                                <Style.SelectAddress top={"45px"} placeholder="Cidade">
                                    <option value="" disabled selected>Estado</option>
                                    {estados?.map(estado => (
                                        <option onClick={() => setEstadoSelecionado(estado.sigla)}>{estado.sigla}</option>
                                    ))}
                                </Style.SelectAddress>
                                <Style.SelectAddress top={"45px"}>
                                    <option value="" disabled selected>Cidade</option>
                                    {cidades?.map(cidade => (
                                        <option onClick={() => setCidadeSelecionada(cidade.id)}>{cidade.nome}</option>
                                    ))}
                                </Style.SelectAddress>
                                <Style.SelectAddress top={"45px"}>
                                    <option value="" disabled selected>Bairro</option>
                                    {bairros?.map(bairro => (
                                        <option onClick={() => setBairroSelecionado(bairro.nome)}>{bairro.nome}</option>
                                    ))}
                                </Style.SelectAddress>
                            </Style.AddressGridColumn>
                        </Style.GridColumn>

                        <Style.GridColumn>
                            <Style.GridTwoColumns>
                                <Dropdown label={"Garagem"} top={"45px"} />
                                <Style.Input type="text" placeholder="Área Total" {...register("slogan")} />
                            </Style.GridTwoColumns>

                            <Style.GridTwoColumns>

                                <Style.Input type="text" placeholder="Área Construída" {...register("slogan")} />
                            </Style.GridTwoColumns>
                        </Style.GridColumn>

                    </Style.GridContainer>

                    <h3>Valores</h3>

                    <Style.GridContainer>
                        {/* <Controller
                            controll={controll}
                            name="price"
                            render={({ field: { onChange, name, value } }) => (
                                <NumberFormat
                                    format="#### #### #### ####"
                                    name={name}
                                    value={value}
                                    onChange={onChange}
                                />
                            )} /> */}
                        <Style.Input value={priceInput} onChange={onChangeHandler} type="text" placeholder="Preço" />
                        {/* <input type="file" multiple onChange={handleImageChange} /> */}
                        {/* <div>
                            {selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt="Preview"
                                    style={{ width: '100px', height: '100px', objectFit: 'cover', marginRight: '10px' }}
                                />
                            ))}
                        </div> */}
                    </Style.GridContainer>

                </Style.Form>
            </DashboardTemplate>
        </Style.Container>
    );
}

export default RegisterProperty;