const Storage = (cartItems) =>{
    sessionStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems : []));
} 

export const CartReducer = (state, action) =>{

    //debugger;
    let index = -1;

    if(action.payload){
        index = state.cartItems.findIndex(x => x.id === action.payload.id);
    } 
    let newItems = [...state.cartItems];

    switch(action.type) {
        case "ADD":
        case "INCREASEQTY":
            if(index === -1){
                newItems.push({ ...action.payload, quantity: 1 });
            }else{
                newItems[index].quantity++; 
            }
            break;

        case "REMOVE":
            if(index > -1){
                newItems = state.cartItems.filter((item) => item.id !== action.payload.id);          
            }
            break;
        
        case "DECREASEQTY":
            if(index > -1){
                if (newItems[index].quantity > 1)
                    newItems[index].quantity--;
            }       
            break;
        
        case "CLEAR":
            newItems = [];          
            break;
        
        default:
    }
    state.cartItems = newItems;
    Storage(newItems);
    
    return state;
}