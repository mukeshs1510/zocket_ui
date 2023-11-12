import { createSlice } from "@reduxjs/toolkit";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { PiCursorClickLight } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { TbDeviceMobileDown, TbNotes } from "react-icons/tb";
import { IconType } from "react-icons";
import BlueBerryProduct from "../../assets/blueberry_product.png";
import CakeImage from "../../assets/cake_img.png";
import PersonImage from "../../assets/person_profile.png";

export type FeaturesType = {
  id: number;
  icon: IconType;
  selected: boolean;
  title: string;
  desc: string;
};
export type ProductsType = {
  id: number;
  image: string;
  selected: boolean;
  title: string;
  desc: string;
};
export type PostsType = {
  id: number;
  personImg: string;
  sourceBy: string;
  source: string;
  desc: string;
  image: string;
  like: boolean;
  selected: boolean;
};

const initialState = {
  features: [
    {
      id: 1,
      icon: FiPhoneCall,
      selected: false,
      title: "Get Leads as calls",
      desc: "Reach broad audience and get leads through calls",
    },
    {
      id: 2,
      icon: BiMessageDetail,
      selected: false,
      title: "Get Leads as Facebook messages",
      desc: "Get more FB messages from Leads",
    },
    {
      id: 3,
      icon: FiUserPlus,
      selected: false,
      title: "Increase page followers",
      desc: "Encourage customers to follow your page",
    },
    {
      id: 4,
      icon: FiUsers,
      selected: false,
      title: "Get Customer Leads",
      desc: "Encourage customers to take action",
    },
    {
      id: 5,
      icon: AiOutlineEye,
      selected: false,
      title: "Get more youtube views",
      desc: "Increase organic views by obtaining user attention",
    },
    {
      id: 6,
      icon: PiCursorClickLight,
      selected: false,
      title: "Get more website traffic",
      desc: "Get the right people to visit your website",
    },
    {
      id: 7,
      icon: BsShopWindow,
      selected: false,
      title: "Increase Live store traffic",
      desc: "Drive visits to local stores, restaurants & Dealerships",
    },
    {
      id: 8,
      icon: TbDeviceMobileDown,
      selected: false,
      title: "Increase your App installs",
      desc: "Get more installs, interactions for your app",
    },
    {
      id: 9,
      icon: TbNotes,
      selected: false,
      title: "Increase the catalogue sales",
      desc: "Drive the sales of your catalogue and get more leads",
    },
  ],
  products: [
    {
      id: 1,
      image: BlueBerryProduct,
      selected: false,
      title: "Bluberry cake with raw toppings",
      desc: "Rs: 2,290",
    },
    {
      id: 2,
      image: BlueBerryProduct,
      selected: false,
      title: "Chocolate truffle cake",
      desc: "Rs: 2,830",
    },
    {
      id: 3,
      image: BlueBerryProduct,
      selected: false,
      title: "Browine cake with fluffy cream",
      desc: "Rs: 3,590",
    },
    {
      id: 4,
      image: BlueBerryProduct,
      selected: false,
      title: "Ferro rocher cake",
      desc: "Rs: 3,760",
    },
    {
      id: 5,
      image: BlueBerryProduct,
      selected: false,
      title: "Custurd mixed with fruit cake",
      desc: "Rs: 1,120",
    },
    {
      id: 6,
      image: BlueBerryProduct,
      selected: false,
      title: "Best raw topping choco cake",
      desc: "Rs: 2,230",
    },
    {
      id: 7,
      image: BlueBerryProduct,
      selected: false,
      title: "Green cup cakes",
      desc: "Rs: 3,090",
    },
    {
      id: 8,
      image: BlueBerryProduct,
      selected: false,
      title: "Blueberry topping cakes",
      desc: "Rs: 4,690",
    },
    {
      id: 9,
      image: BlueBerryProduct,
      selected: false,
      title: "Strawberry cakes with blueberry",
      desc: "Rs: 1,290",
    },
  ],
  posts: [
    {
      id: 1,
      personImg: PersonImage,
      sourceBy: "Mukund Cake Shop",
      source: "Sponsored",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image: CakeImage,
      like: false,
      selected: false,
    },
    {
      id: 2,
      personImg: PersonImage,
      sourceBy: "Mukund Cake Shop",
      source: "Sponsored",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image: CakeImage,
      like: false,
      selected: false,
    },
    {
      id: 3,
      personImg: PersonImage,
      sourceBy: "Mukund Cake Shop",
      source: "Sponsored",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image: CakeImage,
      like: false,
      selected: false,
    },
    {
      id: 4,
      personImg: PersonImage,
      sourceBy: "Mukund Cake Shop",
      source: "Sponsored",
      desc: "We are the best bakery around you. Please like my page to get updates on exciting offers and discounts",
      image: CakeImage,
      like: false,
      selected: false,
    },
  ],
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    updateFeatures: (state, action) => {
      // console.log("action.payload", action.payload);
      const updatedFeatures = state.features.map((feature) => {
        if (feature.id === action.payload.id) {
          return { ...feature, selected: !feature.selected };
        } else {
          return feature;
        }
      });
      state.features = updatedFeatures;
    },
    updateProducts: (state, action) => {
      const updatedProducts = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return { ...product, selected: !product.selected };
        } else {
          return { ...product, selected: false };
        }
      });
      state.products = updatedProducts;
    },
    selectPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, selected: !post.selected };
        } else {
          return { ...post, selected: false };
        }
      });
      state.posts = updatedPosts;
    },
  },
});

export const { updateFeatures, updateProducts, selectPost } =
  campaignSlice.actions;

export default campaignSlice.reducer;
