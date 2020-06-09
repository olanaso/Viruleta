import React from 'react';
import Siderbar from "../siderbar/Siderbar";
import ListaParticipantes from "../siderbar/ListaParticipantes";
import Ruleta from "../ruleta/Ruleta";
import RuletaContainer from "../ruleta/RuletaContainer";


const Viruleta = () => {
    return (
        <>
            <div className="row">
                <Siderbar>
                    <ListaParticipantes/>
                </Siderbar>
                <RuletaContainer>
                    <Ruleta/>
                </RuletaContainer>
            </div>
        </>
    );
};

export default Viruleta;