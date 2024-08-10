const reducer=(state=0,action)=>{
    switch(action.type){
        case "deposit":
            return state+action.payLoad
        case "withdraw":
            return state-action.payLoad
        default:
            return state
    }
}
export default reducer