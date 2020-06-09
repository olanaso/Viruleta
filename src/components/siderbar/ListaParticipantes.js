import React from 'react';
import Participante from "./Participante";
import {useDispatch, useSelector} from 'react-redux';

const ListaParticipantes = () => {
    const listaparticipantes = useSelector(state => state.participantes.listaparticipantes);
    return (
        <>
            <div className="titulo-participantes">
                <label htmlFor="firstName"> Participantes</label>
            </div>
            <ul className="list-group mb-3">
                {
                    listaparticipantes.map(participante=>
                        <Participante {...participante} /> 
                    )
                }
              
            </ul>
        </>
    );
};

export default ListaParticipantes;