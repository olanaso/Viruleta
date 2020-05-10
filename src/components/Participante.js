import React, {useEffect, useState} from 'react';

const Participante = () => {
    const [edicion, setEdicion] = useState(false);
    const [text, settext] = useState('NINGUNO');
    

    const editar = () => {
        setEdicion(true);
    }
    const deseditar = () => {
        setEdicion(false);
    }
    const cambiar = (e) => {
        settext(
            e.target.value.toUpperCase()
        );
    }


    return (
        <div className="map-sidebar-section-item">
            <div className="map-sidebar-section-item-img"><img className="user-img" src="participante.svg"/></div>
            {
                edicion ? <input onChange={cambiar} onBlur={deseditar} value={text}/> :
                    <div className="map-sidebar-section-item-details" onClick={editar}>
                        <div className="map-sidebar-section-item-title">{text}</div>
                        <div className="map-sidebar-section-item-desc"></div>
                    </div>
            }

            <div className="map-sidebar-section-item-nb infected"></div>
        </div>
    )
        ;
};

export default Participante;