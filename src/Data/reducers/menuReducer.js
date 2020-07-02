import {
  ADD_MENU,
  REMOVE_MENU,
  SUB_QUANTITY_MENU,
  ADD_QUANTITY_MENU,
  GET_MENU,
} from "../actions/action-types/menu-actions";

const initState = {
  items: [
    {
      id: 1,
      nom_menu: "Pack mabs",
      description: "Hamburger + Coca 0,5L",
      prix: 500,
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
    },
  ],
  addedItems: [],
  total: 0,
};
const menuReducer = (state = initState, action) => {
  // if (action.type === FETCH_POSTS_SUCCESS) {
  //           return {
  //             ...state,
  //             items: action.payload.posts,
  //           };
  // }
    if (action.type === ADD_MENU) {
      let addedItem = state.items.find((item) => item.id === action.id);
      let existed_item = state.addedItems.find((item) => action.id === item.id);
      if (existed_item) {
        existed_item.quantity++;
        return {
          ...state,
          addedItems: [...state.addedItems],
          total: state.total + addedItem.prix,
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
  if (action.type === REMOVE_MENU) {
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
  if (action.type === ADD_QUANTITY_MENU) {
    let addedItem = state.addedItems.find((item) => item.id === action.id);
    addedItem.quantity++;
    let newTotal = state.total + addedItem.prix;
    return {
      ...state,
      addedItems: [...state.addedItems],
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY_MENU) {
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
    } 
    else {
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

export default menuReducer;
