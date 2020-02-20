import {cartActionConstants} from "../_constants/cartConstants"

export const cartActions = {
    add_to_cart,
    remove_item,
    sub_quantity,
    add_quantity,
};


//add to cart action
function add_to_cart(id) {
    return { type: cartActionConstants.ADD_TO_CART, id };
}

//remove item action
function remove_item(id) {
    return { type: cartActionConstants.REMOVE_ITEM, id };
}

//subtract qt action
function sub_quantity(id) {
    return { type: cartActionConstants.SUB_QUANTITY, id };
}

//add qt action
function add_quantity(id) {
    return { type: cartActionConstants.ADD_QUANTITY, id };
}
