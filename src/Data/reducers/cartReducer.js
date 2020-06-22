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
      id: 3,
      title: "license",
      volume: "1 L",
      prix: 500,
      genre: "Boisson",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 4,
      title: "Noussa",
      volume: "Aziz",
      prix: 25,
      genre: "Boisson",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 5,
      title: "CA",
      volume: "1 L",
      prix: 500,
      genre: "Boisson",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 6,
      title: "isamm",
      volume: "Aziz",
      prix: 250,
      genre: "Boisson",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 7,
      title: "Coca",
      volume: "1 L",
      prix: 500,
      genre: "Boisson",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 8,
      title: "Tunisie",
      volume: "Aziz",
      prix: 250,
      genre: "Menu",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 9,
      title: "Standard license",
      volume: "1 L",
      prix: 500,
      genre: "Menu",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 10,
      title: "Mabs",
      volume: "Aziz",
      prix: 250,
      genre: "Menu",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 11,
      title: "license",
      volume: "1 L",
      prix: 500,
      genre: "Menu",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 12,
      title: "Noussa",
      volume: "Aziz",
      prix: 25,
      genre: "Menu",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 13,
      title: "CA",
      volume: "1 L",
      prix: 500,
      genre: "Menu",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 14,
      title: "isamm",
      volume: "Aziz",
      prix: 250,
      genre: "Menu",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 15,
      title: "Coca",
      volume: "1 L",
      prix: 500,
      genre: "Menu",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 16,
      title: "Tunisie",
      volume: "Aziz",
      prix: 250,
      genre: "Menu",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 17,
      title: "Standard license",
      volume: "1 L",
      prix: 500,
      genre: "Lieux",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 18,
      title: "Mabs",
      volume: "Aziz",
      prix: 250,
      genre: "Lieux",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 19,
      title: "license",
      volume: "1 L",
      prix: 500,
      genre: "Extra",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 20,
      title: "Noussa",
      volume: "Aziz",
      prix: 25,
      genre: "Extra",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 21,
      title: "CA",
      volume: "1 L",
      prix: 500,
      genre: "Extra",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 22,
      title: "isamm",
      volume: "Aziz",
      prix: 250,
      genre: "Extra",
      type: "Jus",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 23,
      title: "Coca",
      volume: "1 L",
      prix: 500,
      genre: "Extra",
      type: "Boisson gazeuse",
      img:
        "https://sc01.alicdn.com/kf/UTB8wEL.nFPJXKJkSahVq6xyzFXaG/Newly-Stock-Coca-Cola-Soft-Drink-In.jpg",
      description: "",
    },
    {
      id: 24,
      title: "Tunisie",
      volume: "Aziz",
      prix: 250,
      genre: "Extra",
      type: "Jus",
      img:
        "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg",
      description: "",
    },
    {
      id: 25,
      title: "Réseaux sociaux",
      volume: "",
      prix: 500,
      genre: "Communication",
      type: "",
      img:
        "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg",
      description: "Donner le droit et l’accès aux utilisateurs de partager les évènements ainsi que le site dans les réseaux sociaux, publier des affiches et des articles sur notre nouveau concept dans nos pages Facebook etc.. ",
    },
    {
      id: 26,
      title: "Parrainage",
      volume: "",
      prix: 250,
      genre: "Communication",
      type: "",
      img:
        "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg",
      description: "Donner l’accès aux utilisateurs de parrainer leurs entourages pour utiliser notre site et le partager avec leurs amis. Encourager les utilisateurs pour faire cette étape en lui offrant un tarif réduit, des tickets de boissons soft, etc.., lorsqu’il atteint un nombre précis d’invitations validés",
    },
    {
      id: 27,
      title: "Web radio",
      volume: "1 L",
      prix: 500,
      genre: "Communication",
      type: "",
      img:
        "https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FFAC.2Fvar.2Ffemmeactuelle.2Fstorage.2Fimages.2Fcuisine.2Fnews-cuisine.2Fboissons-sucrees-combien-sucres-par-verre-51791.2F15025615-1-fre-FR.2Fboissons-sucrees-combien-de-sucres-par-verre.2Ejpg/850x478/quality/90/crop-from/center/boissons-sucrees-combien-de-sucres-par-verre.jpeg",
      description: "Essayer de promouvoir notre site et notre concept au moins une fois par semaine dans notre web radio.",
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
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.prix,
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.prix;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal,
      };
    }
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
