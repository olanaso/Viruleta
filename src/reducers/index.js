import {combineReducers} from 'redux';
import participantesReducers from './participantesReducers';


export default combineReducers({
    participantes: participantesReducers,
  
});