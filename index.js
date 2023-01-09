const redux = require('redux');
const createStore = redux.legacy_createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}
function buyIcecream() {
    return {
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}
const initialCakeState = {
    numOfCakes:10
}
const initialIcecreamState = {
    numOfIcecream:20
}
const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream:state.numOfIcecream - 1
        }
        default: return state
    }
}
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
}
const reducer = redux.combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store = createStore(reducer);
console.log('Initial state',store.getState());
const unsubscribe = store.subscribe(()=> console.log('Updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
//console.log(store.getState().numOfCakes);
unsubscribe();