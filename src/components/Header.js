import React from 'react';

const Header = () => {
    return (
        <header><i class="feather feather-menu header-hamburger"></i>
        <div class="header-inner">
        <div class="header-logo">The Coronavirus App</div>
    <div class="header-sections">
        <div class="header-section active"><i class="fa fa-map-marker"></i>
        <div>Mapa</div>
        </div>
        <div class="header-section"><i class="fa fa-bolt"></i>
        <div>API</div>
        </div>
        <div class="header-section"><i class="fa fa-code"></i>
        <div>Integrar</div>
        </div>
        <div class="header-section"><i class="fa fa-flag"></i>
        <div>Añadir Región</div>
    </div>
    <div class="header-section"><i class="fa fa-at"></i>
        <div>Contáctanos</div>
        </div>
        <div class="header-section"><i class="feather feather-plus-circle"></i>
        <div>Instalar la aplicación</div>
    </div>
    </div><button class="donate-btn"><img src="https://coronavirus.app/assets/img/coffee-buy.png" />Regálanos un cafecito!</button>
    <div class="header-settings">
        <div class="header-settings-title">Preferencias</div>
        <div class="header-settings-el">
        <div class="header-settings-el-title">Tema</div>
        <div class="header-settings-el-content">
        <div class="dark-mode-toggle"><input type="checkbox" id="KBkFketXisV" /><label for="KBkFketXisV"></label></div>
    </div>
    </div>
    <div class="header-settings-el">
        <div class="header-settings-el-title">Lenguaje</div>
        <div class="header-settings-el-content">
        <div class="language-selector">
        <div class="language-selector-inner">
        <div class="language-selector-button"><img src="https://coronavirus.app/assets/img/flags/PE.svg" />
        <span class="language-selector-title" >
        Español</span>
        </div>
    </div>
    </div>
    </div>
    </div>
    <div class="header-settings-el">
        <div class="header-settings-el-title">Grafico</div>
        <div class="header-settings-el-content">
        <div class="chart-scale-selector">Logarítmico</div>
        </div>
        </div>
        </div>
        <div class="header-language-attribution">
        Spanish translation by Luis Astorquiza, Wilmar Echeverry, Julio Gustavo Bustamante Mera, Mateo Llera, Alejandro Ortiz Obregon, Gerard López López, Jesus Antonio Castro, David Domínguez Martínez, Daniel Ramos, Joana Fernández, Frederick Ferro, Hugo Villegas, Timothy Arce, Francisco Javier Rojas, Andrés Aguirre, Ismael Jorge HP, Carlos Ivan Rivera Avalos, Julia Manuela Rizo, Laura Rivas, Luis G. Corral, Pablo de Andres, Fernando Sancho, Hector A Lopez Rdz, Sebastián Haddad, Darwin Josue Pilaloa Zea, Alexis Noria, Jonathan Vargas Vargas, Luisa Fernanda Vaca Correa, Ferney Palacio, Sergio Nicolás Melo Torres 
    </div>
    <div class="header-legalese">
        <span>© 2020 Scriby, Inc. All Rights Reserved. <br/> <a target="_blank" href="https://www.notion.so/coronavirus/Terms-and-conditions-90a31bc4c9e64f54992cb3660e2e5b28">Terms</a> 
        | <a target="_blank" href="https://www.iubenda.com/privacy-policy/37070270">Privacy</a> | 
        <a target="_blank" href="https://www.iubenda.com/privacy-policy/37070270/cookie-policy">Cookie Policy</a>
    </span> </div>
        </div>
    </header>
        )
    ;
};

export default Header;