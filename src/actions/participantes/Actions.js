import {
    ACTUALIZAR_JUGADOR,ACTIVAR_PAGADO,LISTAR_JUGADORES,ACTUALIZAR_MONTO,ACTUALIZAR_TIPO_JUEGO,ACTUALIZAR_NOMBRE_JUGADOR,ACTUALIZAR_JUEGO
} from './types';


export const listarjugadores = () => async dispatch => {
 
    dispatch({
        type: LISTAR_JUGADORES,
        payload: null
    })
}

export const actualizarjugadores = jugador => async dispatch => {
   
    dispatch({
        type: ACTUALIZAR_JUGADOR,
        payload: jugador
    })
}

export const actualizarMonto = monto => async dispatch => {
    //alert(monto)
    dispatch({
        type: ACTUALIZAR_MONTO,
        payload: monto
    })
}

export const actualizarTipoJuego = factor => async dispatch => {
    dispatch({
        type: ACTUALIZAR_TIPO_JUEGO,
        payload: factor
    })
}

export const actualizarNombre = nombre => async dispatch => {
    dispatch({
        type: ACTUALIZAR_NOMBRE_JUGADOR,
        payload: nombre
    })
}

export const actualizarJuego  = participante => async dispatch => {
    dispatch({
        type: ACTUALIZAR_JUEGO,
        payload: participante
    })
}



