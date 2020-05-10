

import React, {useEffect, useState} from 'react';
import ModalFinish from "./ModalFinish";
const {Winwheel}=window;

//const audio = new Audio('tick.mp3');


const Ruleta = () => {
    const [mostrarGanador, setMostrarGanador] = useState(false);
    const [numGanador, setnumGanador] = useState('0');
    var objRuleta;
    var winningSegment;
    var distnaciaX = 150;
    var distnaciaY = 50;
    var ctx ;
    var theWheel;

    useEffect(() => {
        const init = async () => {
           await crearRuleta();
           await DibujarTriangulo()
        };
        init();


    }, []);
    
    const crearRuleta=()=>{
        theWheel = new Winwheel({
            'canvasId': 'ruleta',
            'outerRadius'     : 300,        // Set outer radius so wheel fits inside the background.
            'innerRadius'     : 75,         // Make wheel hollow so segments dont go all way to center.
            'textFontSize'    : 50,         // Set default font size for the segments.
            // 'textOrientation' : 'vertical', // Make text vertial so goes down from the outside of wheel.
            'textAlignment'   : 'outer',    // Align text to outside of wheel.
            'numSegments'     : 15,         // Specify number of segments.
            'segments'        :             // Define segments including colour and text.
                [                               // font size and text colour overridden on backrupt segments.
                    {'fillStyle' : '#ee1c24', 'text' : '1'},
                    {'fillStyle' : '#3cb878', 'text' : '2'},
                    {'fillStyle' : '#f6989d', 'text' : '3'},
                    {'fillStyle' : '#00aef0', 'text' : '4'},
                    {'fillStyle' : '#f26522', 'text' : '5'},

                    {'fillStyle' : '#e70697', 'text' : '6'},
                    {'fillStyle' : '#fff200', 'text' : '7'},
                    {'fillStyle' : '#f6989d', 'text' : '8'},
                    {'fillStyle' : '#ee1c24', 'text' : '9'},
                    {'fillStyle' : '#3cb878', 'text' : '10'},
                    {'fillStyle' : '#f26522', 'text' : '11'},
                    {'fillStyle' : '#a186be', 'text' : '12'},
                    {'fillStyle' : '#fff200', 'text' : '13'},
                    {'fillStyle' : '#00aef0', 'text' : '14'},
                    {'fillStyle' : 'orange', 'text' : '15'}

                ],
            'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 10,
                    'spins'    : 10,
                    'callbackFinished' : 'alertPrize()',  // Function to call whent the spinning has stopped.
                 
                    'callbackAfter': 'DibujarTriangulo()',
                    'callbackSound'    : playSound,   // Called when the tick sound is to be played.
                    'soundTrigger'     : 'pin'  ,      // Specify pins are to trigger the sound.
                  
                },
            'pins' :                // Turn pins on.
                {
                    'number'     : 15,
                    'fillStyle'  : 'silver',
                    'outerRadius': 4,
                }
        });
    }

//Funcionar la ruleta
    const girarRuleta=()=>{

        theWheel.startAnimation();
        //DibujarTriangulo()
    }

    const closeModal=()=>{

        setMostrarGanador(false)
    }
    // Loads the tick audio sound in to an audio object.


    // This function is called when the sound is to be played.
    let audio = new Audio('tick.mp3');
    function playSound()
    {
     console.log('sonido')
        audio.pause();
        audio.currentTime = 0;

        // Play the sound.
        audio.play();
      
    }
    window.playSound=playSound;
    // Called when the animation has finished.
    function alertPrize()
    {
      

        // Play the sound.
        let afelicitaciones = new Audio('felicitaciones.mp3');
        afelicitaciones.currentTime = 0;
        afelicitaciones.play();
        winningSegment = theWheel.getIndicatedSegment();


        setMostrarGanador(true) 
        setnumGanador( winningSegment.text);
      

      
         crearRuleta();
    }


    window.alertPrize=alertPrize;

    function DibujarTriangulo() {
        distnaciaX = 210;
        distnaciaY = -0;
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
    }
    
    window.DibujarTriangulo=DibujarTriangulo;
    
    return (
        <>
            <canvas id='ruleta' width='800' height='650'>

              
            </canvas>

            <div className="section-container-highlights">
                <div className="section-highlights-box infected btnruleta" onClick={girarRuleta}>
                    <div className="section-el-number"><sub>+</sub>Girar</div>
                    <div className="section-el-name">y que gane el suertudo</div>
                </div>
               
            </div>
            
            {mostrarGanador ? <ModalFinish numero={numGanador} /> :null}
           
          
          
        </>
    );
};

export default Ruleta;