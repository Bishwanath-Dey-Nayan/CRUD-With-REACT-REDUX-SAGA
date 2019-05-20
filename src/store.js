import {createStore,applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootreducer from './reducer/rootreducer';
import rootWatcher from './sagas/saga';



const middleware = createSagaMiddleware();
const initialState = {};

const store = createStore(rootreducer,
    initialState,
    compose(
        applyMiddleware(middleware),
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    )
    
    );
middleware.run(rootWatcher);

export default store;