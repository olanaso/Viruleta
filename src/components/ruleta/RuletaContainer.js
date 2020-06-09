import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import UIfx from 'uifx';

import Astronomia from './audio/Astronomia.mp3';
import exorcist from './audio/exorcist.mp3';
import guile from './audio/guile-theme.mp3';
import psycho from './audio/psycho.mp3';
import sensual from './audio/careless-whisper.mp3';
import xfile from './audio/xfile.mp3';
import {LISTAR_JUGADORES} from "../../actions/participantes/types";

const AstronomiaSound = new UIfx(Astronomia);
const exorcistSound = new UIfx(exorcist);
const guileSound = new UIfx(guile);
const psychoSound = new UIfx(psycho);
const sensualSound = new UIfx(sensual);
const xfileSound = new UIfx(xfile);

const RuletaContainer = ({children}) => {


    const participantes = useSelector(state => state.participantes);
    const [participantess, setParticipantes] = useState(participantes);

    const playSound = (sound) => {

        switch (sound) {
            case 'AstronomiaSound':
                AstronomiaSound.play();
                break;
            case 'exorcistSound':
                exorcistSound.play();
                break;
            case 'guileSound':
                guileSound.play();
                break;
            case 'psychoSound':
                psychoSound.play();
                break;   
                case 'sensualSound':
                    sensualSound.play();
                break;      
                case 'xfileSound':
                    xfileSound.play();
                break;
        }
    }

    return (
        <>
            <main role="main" className="col-md-8 ml-sm-auto col-lg-9 px-md-4">
                <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10">
                        <ul className="navbar-nav">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown"
                                   aria-haspopup="true" aria-expanded="false">Music</a>
                                <div className="dropdown-menu" aria-labelledby="dropdown10">
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('AstronomiaSound')}>Negro Meme</a>
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('sensualSound')}>Sensual</a>
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('xfileSound')}>XFiles</a>
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('exorcistSound')}>Exorcista</a>
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('psychoSound')}>Terror</a>
                                    <a className="dropdown-item" href="#" onClick={()=> playSound('guileSound')}>Guille</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="">
                    {children}
                </div>
            </main>
        </>
    );
};

export default RuletaContainer;