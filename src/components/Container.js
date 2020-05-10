import React from 'react';
import './../index.css'
import ListaParticipantes from "./ListaParticipantes";
import RuletaContent from "./RuletaContent";


const Container = () => {
    return (

        <>
            <div id="mainContainer">
                <section  className="margin-left" id="CNkLDEBYAUhdwIZurEvB" tabindex="0" >
                    <RuletaContent></RuletaContent>
                </section>
                <div class="map-sidebar-numbers" data-infected="4076136" data-recovered="1385087" data-dead="279279">
                    <div class="map-sidebar-section">
                        <div class="map-sidebar-card active" data-title="infected">
                            <img class="logo-ruleta" src="ruleta-de-la-fortuna.svg"></img>
                        </div>
                    </div>
                    <div class="map-sidebar-section">
                        <div class="api-shop-title">
                            Participantes 15 Max.
                        </div>
                    </div>
                </div>
                <div class="map-sidebar">
                    <div class="map-sidebar-section column">
                        <div class="map-sidebar-section-content">
<ListaParticipantes/>

                        </div>
                    </div>
                </div>
            </div>
        </>
)
    ;
};

export default Container;