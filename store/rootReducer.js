import {combineReducers} from 'redux'
// import goalState from './goalHandling';
// import calculations from './calculations';
import navigation from './navigation/reducers/index';
import goals from './goals/reducers/index';
import submissions from './submissions/reducers/index';

export default combineReducers({navigation, goals, submissions});
