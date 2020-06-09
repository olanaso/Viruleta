import React, {useEffect, useState,useRef } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { actualizarNombre,actualizarJuego} from "../../actions/participantes/Actions";
import UIfx from 'uifx';
import ClickOutside from 'react-click-outside'
import imgApuesta from './assets/img/ficha.svg'
import imgGana from './assets/img/gana.svg'
import equix from './assets/img/negocio.svg';
import apilar from './assets/img/apilar.svg';
import tickAudio from './assets/sound/mario-coin.mp3';
import quitarMoneda from './assets/sound/010707105_prev.mp3';
import focus from './assets/sound/button-3.mp3';

const beep = new UIfx(tickAudio);
const quitarMon = new UIfx(quitarMoneda);
const focusSound = new UIfx(focus);


const Participante = ({nro,nombres,monto,ganacia,isselecionado}) => {

   

    const [activadoDinero, setActivadoDinero] = useState(false);
    const [nombresParticipante, setnombresParticipante] = useState(false);
    const [editarParticipantes, seteditarParticipantes] = useState(false);
    const [mostrarMontos, setmostrarMontos] = useState(false);
    //const [inputref, setmostrarMontos] = useRef(null);
    const inputEl = useRef(null);
 


    useEffect(() => {
        const init = async () => {
            setnombresParticipante(nombres);
           
        };
        init();


    }, []);

    /*================VINCULADO A FUNCIONES LOCALES LOS ACTIONS===============*/
    const dispatch = useDispatch();
    const actualizarNombreAction = (participante) => dispatch(actualizarNombre(participante));
    const actualizarJuegoAction = (participante) => dispatch(actualizarJuego(participante));
    

    const activarPago=()=>{
        
        !activadoDinero ? beep.play()  : quitarMon.play()
        setActivadoDinero(!activadoDinero);
        actualizarJuegoAction({nro,isselecionado:!activadoDinero});
       
    }

    const activarEditarParticipante=()=>{
      //  e.target.select();
        seteditarParticipantes(true)
      
        //inputEl.current.focus();

    }

    const desactivarEditarParticipante=()=>{
        seteditarParticipantes(false)

    }

    const editarNombre=(e)=>{
        
        
        if(e.target.value.trim()===''){
            setnombresParticipante('NINGUNO');
            actualizarNombreAction({nro,nombres:'NINGUNO'});
          
          
        }else{
            setnombresParticipante(e.target.value);
            actualizarNombreAction({nro,nombres:e.target.value});
        }
      
       

    }

    const MostrarMontos=(e)=>{
      setmostrarMontos(true)

    }
    const NoMostrarMontos=(e)=>{
        setmostrarMontos(false)

    }
    
    
    return (
        <>
            <li onMouseEnter={MostrarMontos} onMouseLeave={NoMostrarMontos} id={`container_${nro}`} className="list-group-item d-flex justify-content-between lh-condensed participante" >
                <div className="row" >
                    <div className="col-lg-2">
                        <h1 className="numero-participante">{nro}</h1>
                    </div>
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-lg-12 content-name-participante">
                                { !editarParticipantes? <label id={nro}  onClick={activarEditarParticipante}  className={`nomb-participante ${activadoDinero ? 'dinero': 'sindinero'} ${ganacia}`}>   {nombresParticipante} </label> :
                                    <ClickOutside onClickOutside={desactivarEditarParticipante}>  
                                        <input ref={inputEl} onKeyPress={(e)=>{ if(e.key === 'Enter')  desactivarEditarParticipante()   }}  className="nombre-participante" onChange={editarNombre} value={nombresParticipante}/>
                                    </ClickOutside>
                                
                                }
                                
                                
                            </div>
                            <div className="col-lg-12">
                                { mostrarMontos ?
                                    <div className="row">
                                        <div className="col-lg-6">
                                                    <span className="d-inline-block" tabIndex="0" data-toggle="tooltip"
                                                          title="JUEGA">
                                                        <img src={imgApuesta} className="ficha-participante"></img>
                                                        <label className="dinero">S/. {monto}
                                                        </label>
                                                    </span>
                                        </div>
                                        <div className="col-lg-6">
                                                    <span className="d-inline-block" tabIndex="0" data-toggle="tooltip"
                                                          title="GANA !!!">
                                                        <img src={imgGana} className="ficha-participante"></img>
                                                        <label className={`dinero ${activadoDinero? 'activadodinero': ''}` } >S/. {ganacia}
                                                        </label>
                                                    </span>
                                        </div>
                                    </div>
                                    : null
                                
                                
                                }
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <img src={!activadoDinero ? equix : apilar} onClick={activarPago} className="activatePago"></img>
                    </div>
                </div>
            </li>
        </>
    );
};

export default Participante;

