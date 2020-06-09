import React, {useEffect, useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {actualizarMonto, actualizarTipoJuego} from "../../actions/participantes/Actions";

const HeaderSiderbar = () => {


    const [montoview, setMontoView] = useState(1);

    /*================VINCULADO A FUNCIONES LOCALES LOS ACTIONS===============*/
    const dispatch = useDispatch();
    const actualizarMontoAction = (monto) => dispatch(actualizarMonto(monto));
    const actualizarTipoJuegoAction = (factor) => dispatch(actualizarTipoJuego(factor));

    /*================OBTENIENDO LOS ESTADOS DEL LOS REDUCERS==================================*/
    const monto = useSelector(state => state.participantes.monto);


    const cambiarMonto = (e) => {
        // alert(e.target.value)
        let valor = e.target.value.trim() == 0 ? 1 : e.target.value;
        setMontoView(e.target.value);
        actualizarMontoAction(valor);
    }

    const cambiarTipoJuego = (e) => {

        if (e.target.value === '1') {

            actualizarTipoJuegoAction(10)
        }
        if (e.target.value === '3') {

            actualizarTipoJuegoAction(5)
        }
        if (e.target.value === '2') {

            actualizarTipoJuegoAction(15)
        }
        //alert()
    }

    return (
        <>
            <div className="sidebar-sticky pt-3">
                <form>
                    <div className="form-row align-items-center">

                        <div className="col-lg-6">
                            <label htmlFor="firstName"> Modo</label>
                            <select className="form-control custom-select mr-sm-2" id="inlineFormCustomSelect"
                                    onChange={cambiarTipoJuego}>


                                <option value="1">Regular</option>
                                <option value="3">Promoción</option>
                                <option value="2">Apagon</option>
                            </select>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="firstName"> S/.</label>
                            <input type="text" className="form-control" value={montoview} onChange={cambiarMonto}
                                   placeholder="Monto de Juego"/>
                        </div>

                    


                    </div>
                </form>

            </div>
        </>
    );
};

export default HeaderSiderbar;