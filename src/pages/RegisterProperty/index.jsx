import React from 'react';
import DashboardTemplate from '../../components/DashboardTemplate';
import * as Style from "./styles";

function RegisterProperty() {
    return (
        <Style.Container>
            <DashboardTemplate >
                <h2>Cadastrar <strong>Imóvel</strong></h2>
                <div class="divider">
                    <span class="dots">...</span>
                    <span class="line"></span>
                </div>
            </DashboardTemplate>
        </Style.Container>
    );
}

export default RegisterProperty;