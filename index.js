// console.log("from index.js")

const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleWare = redux.applyMiddleware

//creating actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'



function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        
    }
}

//reducer

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCream : 20
// }

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE : return{
            ...state,
            numOfCakes: state.numOfCakes - 1

        }
        

        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        
        case BUY_ICECREAM : return{
            ...state,
            numOfIceCream: state.numOfIceCream - 1

        }

        default: return state
    }
}


const rootReducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducers, applyMiddleWare(logger))
console.log("initial state", store.getState())

// const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
const unsubscribe = store.subscribe(() => {})


store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()
