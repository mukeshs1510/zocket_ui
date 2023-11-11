import { createSlice } from "@reduxjs/toolkit";
import { FiPhoneCall } from "react-icons/fi";
import { BiMessageDetail } from "react-icons/bi";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { PiCursorClickLight } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { TbDeviceMobileDown, TbNotes } from "react-icons/tb";
import { IconType } from "react-icons";

export type CampaignType = {
  id: number;
  icon: IconType;
  selected: boolean;
  title: string;
  desc: string;
};

const initialState = {
  campaigns: [
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
};

export const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    updateCampaign: (state, action) => {
      console.log("action.payload", action.payload);
      const updatedFeatures = state.campaigns.map((feature) => {
        if (feature.id === action.payload) {
          return { ...feature, selected: !feature.selected };
        } else {
          return feature;
        }
      });
      state.campaigns = updatedFeatures;
    },
  },
});

export const { updateCampaign } = campaignSlice.actions;

export default campaignSlice.reducer;
