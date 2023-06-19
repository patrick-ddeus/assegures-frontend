import React, { useState } from 'react';
import useDarkMode from '../../hooks/useDarkMode';
import Sidebar from '../../components/SideBar';
import { IoHomeOutline } from 'react-icons/io5';
import * as Style from './styles';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const { darkMode, sidebarClosed, handleToggleTheme, handleToggleSidebar } = useDarkMode();
    const navigate = useNavigate()

    return (
        <Style.Container>
            <Sidebar
                darkMode={darkMode}
                handleToggleTheme={handleToggleTheme}
                handleToggleSidebar={handleToggleSidebar}
                sidebarClosed={sidebarClosed}
            />
            <Style.Main isDark={darkMode} isClosed={sidebarClosed}>
                <Style.MainContainer isDark={darkMode}>
                    <h2>Olá <strong>Imobiliária</strong>!</h2>
                    <ul>
                        <li>
                            <Card quantidade={4} descricao={"Imóveis Cadastrados"}>
                                <IoHomeOutline />
                            </Card>
                        </li>
                    </ul>
                    <Style.RegisterSection>
                        <Style.RegisterTitle isDark={darkMode}>
                            <div>
                                <h2>Cadastro de <strong>Imóveis</strong></h2>
                                <p>Cadastre, edite e gerencie tudo que precisar para dar ao usuário todas as informações necessárias.</p>
                            </div>
                            <div className="input-area">
                                <Style.SearchInput placeholder="Referência, slogan, etc..."/>
                                <Style.SearchButton onClick={() => navigate('/admin/painel-de-controle/cadastro-de-imovel')}>
                                    Novo Imóvel
                                </Style.SearchButton>
                            </div>
                        </Style.RegisterTitle>
                    </Style.RegisterSection>
                </Style.MainContainer>
            </Style.Main>
        </Style.Container>
    );
}

export default Dashboard;