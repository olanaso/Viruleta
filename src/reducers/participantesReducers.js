import {
    LISTAR_JUGADORES, ACTIVAR_PAGADO, ACTUALIZAR_JUGADOR,ACTUALIZAR_MONTO,ACTUALIZAR_TIPO_JUEGO,ACTUALIZAR_NOMBRE_JUGADOR,ACTUALIZAR_JUEGO
}
    from '../actions/participantes/types';

const cantParticipantes=15;

// cada reducer tiene su propio state
const getlistadoParticipantes = () => {
    let arrayParticipantes = [];
    for (var i = 1; i <= cantParticipantes; i++) {
        arrayParticipantes.push(
            {nro: i, nombres: 'NINGUNO', monto: 1, ganacia: 10, isselecionado: false}
        )
    }
    return arrayParticipantes;
}


const initialState = {
    listaparticipantes: getlistadoParticipantes(),
    monto:1,
    multiplicador:10,
    modojuego:'Regular'
}

export default function (state = initialState, action) {

    switch (action.type) {
        case LISTAR_JUGADORES:
            return {
                ...state
            }
        case ACTUALIZAR_JUGADOR:
            return {
                ...state,
                listaparticipantes: state.listaparticipantes.map(
                    participante => participante.nro === action.payload.nro
                        ? (participante = action.payload)
                        : participante
                )
            }
        case ACTUALIZAR_MONTO:
            //alert(action.payload)
            return {
                ...state,
                monto: action.payload,
                listaparticipantes: state.listaparticipantes.map( participante =>  {
                     participante.monto=action.payload;
                    participante.ganacia=action.payload*state.multiplicador;
                     return participante;
                })
                
            }

        case ACTUALIZAR_TIPO_JUEGO:
            //alert(action.payload)
            return {
                ...state,
                multiplicador: action.payload
                ,
                listaparticipantes: state.listaparticipantes.map( participante =>  {
                  //  participante.monto=action.payload;
                    participante.ganacia=state.monto*action.payload;
                    return participante;
                })

            }

        case ACTUALIZAR_NOMBRE_JUGADOR:
            //alert(action.payload)
            return {
                ...state,
                listaparticipantes: state.listaparticipantes.map( participante =>  {
                   // console.log(participante)
                   // console.log(action.payload)
                    if(parseInt(participante.nro)==parseInt(action.payload.nro)) {
                     
                        participante.nombres=action.payload.nombres;
                    }
                    return participante;
                })

            }

        case ACTUALIZAR_JUEGO:
            //alert(action.payload)
            return {
                ...state,
                listaparticipantes: state.listaparticipantes.map( participante =>  {
                    // console.log(participante)
                    // console.log(action.payload)
                    if(parseInt(participante.nro)==parseInt(action.payload.nro)) {
                        participante.isselecionado=action.payload.isselecionado;
                    }
                    return participante;
                })

            }
        default:
            return state;
    }
}