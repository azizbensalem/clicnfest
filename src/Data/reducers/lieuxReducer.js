import { ADD_LIEUX, REMOVE_LIEUX, GET_LIEUX } from "../actions/action-types/lieux-actions";

const initState = {
  items: [
    {
      id: 1,
      nom: "Movenmpick",
      ville: "Sousse",
      prix: 500,
      capacite: 100,
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "Aaaaaa",
    },
    {
      id: 2,
      nom: "Bilionnaire",
      ville: "Gammarth",
      prix: 200,
      capacite: 100,
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "Aaaaaa",
    },
  ],
  addedItems: [],
  total: 0,
};
const lieuxReducer = (state = initState, action) => {
  // if (action.type === FETCH_POSTS_SUCCESS) {
  //           return {
  //             ...state,
  //             items: action.payload.posts,
  //           };
  // }
  if (action.type === ADD_LIEUX) {
    let addedItem = state.items.find((item) => item.id === action.id);
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (!existed_item) {
      addedItem.quantity = 1;
      let newTotal = addedItem.prix;
      return {
        ...state,
        addedItems: [addedItem],
        total: newTotal,
      };
    }
  }
  if (action.type === REMOVE_LIEUX) {
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
  else {
    return state;
  }
};

export default lieuxReducer;
