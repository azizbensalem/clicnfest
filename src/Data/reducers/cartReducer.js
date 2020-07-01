import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "../actions/action-types/cart-actions";

const initState = {
  items: [
    {
      id: 1,
      title: "Standard license",
      volume: "1 L",
      prix: 500,
      genre: "Boisson",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 2,
      title: "Mabs",
      volume: "Aziz",
      prix: 250,
      genre: "Boisson",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
   {
      id: 28,
      title: "Mailing",
      volume: "Aziz",
      prix: 265,
      genre: "Communication",
      type: "",
      img:
        "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg",
      description: "Incité les utilisateurs à s’inscrire à notre Newsletter afin de pouvoir faire notre marketing direct, toucher de nouveaux prospects, fidéliser & rester en contact .Informer et intéresser, générer des flux de visites sur notre site web..",
    },
  ],
  addedItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  //INSIDE HOME COMPONENT
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find((item) => item.id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find((item) => action.id === item.id);
    if (existed_item) {
      addedItem.quantity++;
      return {
        ...state,
        total: state.total + addedItem.prix,
      };
    } else {
      addedItem.quantity = 1;
    }
      //calculating the total
      let newTotal = state.total + addedItem.prix;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    
  }
  if (action.type === REMOVE_ITEM) {
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
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.prix;
    return {
      ...state,
      total: newTotal,
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find((item) => item.id === action.id);
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
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.prix;
      return {
        ...state,
        total: newTotal,
      };
    }
  } else {
    return state;
  }
};

export default cartReducer;
