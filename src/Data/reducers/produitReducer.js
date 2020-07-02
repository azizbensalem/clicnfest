import {
  ADD_PRODUIT,
  REMOVE_PRODUIT,
  SUB_QUANTITY_PRODUIT,
  ADD_QUANTITY_PRODUIT,
  GET_PRODUIT,
} from "../actions/action-types/produit-actions";

const initState = {
  items: [

  ],
  addedItems: [],
  total: 0,
};
const produitReducer = (state = initState, action) => {
  if (action.type === GET_PRODUIT) {
            return {
              ...state,
              items: action.payload.posts,
            };
  }
  if (action.type === ADD_PRODUIT) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      existed_item.quantity++;
      let newTotal = state.total + addedItem.prix;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    } else {
      addedItem.quantity = 1;
      let newTotal = state.total + addedItem.prix;
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_PRODUIT) {
    let itemToRemove = state.addedItems.find((item) => action.id === item.id);
    let new_items = state.addedItems.filter((item) => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - itemToRemove.prix * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY_PRODUIT) {
    let addedItem = state.addedItems.find((item) => item.id === action.id);
    addedItem.quantity++;
    let newTotal = state.total + addedItem.prix;
    return {
      ...state,
      addedItems: [...state.addedItems],
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY_PRODUIT) {
    let addedItem = state.addedItems.find((item) => item.id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter((item) => item.id !== action.id);
      let newTotal = state.total - addedItem.prix;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      };
    } else {
      addedItem.quantity--;
      let newTotal = state.total - addedItem.prix;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default produitReducer;
