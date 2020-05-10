import React from 'react';

const ModalFinish = ({numero=0}) => {
    
    
    return (
        <>
            <div className="share-modal backdrop">
                <div className="share-modal-inner modal"><i className="share-modal-close feather feather-x" ></i>
                    <img className="img-felicitacione" src="felicitaciones.svg"/>
                    <h3>Felicitaciones el ganador es: <i><h1 className="ganador">{numero} </h1></i></h3>
                    <div className="share-modal-list">
                       
                    </div>
                </div>
            </div>   
        </>
    );
};

export default ModalFinish;