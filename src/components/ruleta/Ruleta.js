import React, {useEffect, useState} from 'react';
import champions from './audio/champions.mp3';
import felicitaciones from './img/felicidades-animadas.gif';
import negros from './img/negros.gif';
import UIfx from 'uifx';
import Astronomia from "./audio/Astronomia.mp3";

const {Winwheel, $} = window;

const championsSound = new UIfx(champions);
const AstronomiaSound = new UIfx(Astronomia);

//const audio = new Audio('tick.mp3');



const Ruleta = () => {
    const [mostrarGanador, setMostrarGanador] = useState(false);
    const [girando, setGirando] = useState('GIRAR LA RULETA');
    const [ganador, setganador] = useState('-');
    const [estadoGanador, setestadoGanador] = useState('');
    const [nro, setNro] = useState('0');
    const [img, setImg] = useState('0');
    var objRuleta;
    var winningSegment;
    var distnaciaX = 150;
    var distnaciaY = 50;
    var ctx;
    var theWheel;

    useEffect(() => {
        const init = async () => {
            await crearRuleta();
            await DibujarTriangulo()
        };
        init();


    }, []);

    const crearRuleta = () => {
        theWheel = new Winwheel({
            'canvasId': 'ruleta',
            'outerRadius': 210,        // Set outer radius so wheel fits inside the background.
            'innerRadius': 75,         // Make wheel hollow so segments dont go all way to center.
            'textFontSize': 50,         // Set default font size for the segments.

            // 'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
            'textAlignment': 'outer',    // Align text to outside of wheel.
            'numSegments': 15,         // Specify number of segments.
            'segments':             // Define segments including colour and text.
                [                               // font size and text colour overridden on backrupt segments.
                    {'fillStyle': '#ee1c24', 'text': '1'},
                    {'fillStyle': '#3cb878', 'text': '2'},
                    {'fillStyle': '#f6989d', 'text': '3'},
                    {'fillStyle': '#00aef0', 'text': '4'},
                    {'fillStyle': '#f26522', 'text': '5'},

                    {'fillStyle': '#e70697', 'text': '6'},
                    {'fillStyle': '#fff200', 'text': '7'},
                    {'fillStyle': '#f6989d', 'text': '8'},
                    {'fillStyle': '#ee1c24', 'text': '9'},
                    {'fillStyle': '#3cb878', 'text': '10'},
                    {'fillStyle': '#f26522', 'text': '11'},
                    {'fillStyle': '#a186be', 'text': '12'},
                    {'fillStyle': '#fff200', 'text': '13'},
                    {'fillStyle': '#00aef0', 'text': '14'},
                    {'fillStyle': 'orange', 'text': '15'}

                ],
            'animation':           // Specify the animation to use.
                {
                    'type': 'spinToStop',
                    'duration': 45,
                    'spins': 45,
                    'callbackFinished': 'alertPrize()',  // Function to call whent the spinning has stopped.
                    'callbackAfter': 'DibujarTriangulo()',
                    'callbackSound': playSound,   // Called when the tick sound is to be played.
                    'soundTrigger': 'pin',      // Specify pins are to trigger the sound.

                },
            'pins':                // Turn pins on.
                {
                    'number': 15,

                    'fillStyle': 'silver',
                    'outerRadius': 4,
                }
        });
    }

//Funcionar la ruleta
    const girarRuleta = () => {
        theWheel.startAnimation();


        //DibujarTriangulo()
    }

    const reiniciar = () => {
        window.location.reload()


        //DibujarTriangulo()
    }
    const closeModal = () => {

        setMostrarGanador(false)
    }
    // Loads the tick audio sound in to an audio object.


    // This function is called when the sound is to be played.
    let audio = new Audio('tick.mp3');

    function playSound() {
        console.log('sonido')
        //  setGirando(true);
        audio.pause();
        audio.currentTime = 0;

        // Play the sound.
        audio.play();

    }

    window.playSound = playSound;

    // Called when the animation has finished.
    function alertPrize() {


        // Play the sound.

        winningSegment = theWheel.getIndicatedSegment();


        setMostrarGanador(true)
        const demoId = document.getElementById(winningSegment.text);
        setNro(winningSegment.text)
        if (demoId.classList[1] == 'sindinero') {
            AstronomiaSound.play()
            setestadoGanador(`Hubieses Ganado !!! S/. ${demoId.classList[2]}` )
            setImg(negros)
            $(`#container_` + winningSegment.text).addClass('perdiste')
        } else {
            championsSound.play()
            setestadoGanador(`Ganaste !!!  S/. ${demoId.classList[2]}`)
            setImg(felicitaciones)
            $(`#container_` + winningSegment.text).addClass('ganaste')
        }
        setganador(demoId.textContent)

        $('#modalGanador').modal('show')


        //  crearRuleta();
    }


    window.alertPrize = alertPrize;

    function DibujarTriangulo() {
        distnaciaX = 25;
        distnaciaY = -10;
        ctx = theWheel.ctx;
        ctx.strokeStyle = 'navy';
        ctx.fillStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(distnaciaX + 170, distnaciaY + 5);
        ctx.lineTo(distnaciaX + 230, distnaciaY + 5);
        ctx.lineTo(distnaciaX + 200, distnaciaY + 40);
        ctx.lineTo(distnaciaX + 171, distnaciaY + 5);
        ctx.stroke();
        ctx.fill();
        //   setGirando(true);
    }

    window.DibujarTriangulo = DibujarTriangulo;

    return (
        <>


            <div className="">
                <div>

                    <button onClick={reiniciar} type="button" className="btn  btn-lg " data-toggle="modal"
                            data-target="#staticBackdrop">
                        Reiniciar
                    </button>
                    <button onClick={girarRuleta} type="button" className="btn btn-primary  btn-lg " data-toggle="modal"
                            data-target="#staticBackdrop">
                        Girar la Ruleta
                    </button>
                    <button type="button" className="btn  btn-lg " data-toggle="modal" data-target="#staticBackdrop">
                        Ganadores
                    </button>
                </div>
                <div className="row ruleta-container">
                    <canvas id='ruleta' width='450' height='450'
                            data-responsiveMinWidth="180"
                            data-responsiveScaleHeight="true"   /* Optional Parameters */
                            data-responsiveMargin="50"
                    >


                    </canvas>
                   

                </div>


                <div className="modal fade" id="modalGanador" data-backdrop="static" data-keyboard="false"
                     tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">

                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <img src={img} className="img-modal"/>
                                <h1>{nro} -> {ganador}</h1>
                                <h1> {estadoGanador}</h1>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="modal fade" id="modalGanador" data-backdrop="static" data-keyboard="false"
                     tabIndex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <input type="text" placeholder="Ingrese Clave"/>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default Ruleta;