import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineCheck } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import { FiUserPlus, FiUsers } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { PiCursorClickLight } from "react-icons/pi";
import { BsShopWindow } from "react-icons/bs";
import { TbDeviceMobileDown, TbNotes } from "react-icons/tb";

const CampaignStep1 = () => {
  const features = [
    {
      icon: FiPhoneCall,
      selected: true,
      title: "Get Leads as calls",
      desc: "Reach broad audience and get leads through calls",
    },
    {
      icon: BiMessageDetail,
      selected: false,
      title: "Get Leads as Facebook messages",
      desc: "Get more FB messages from Leads",
    },
    {
      icon: FiUserPlus,
      selected: false,
      title: "Increase page followers",
      desc: "Encourage customers to follow your page",
    },
    {
      icon: FiUsers,
      selected: false,
      title: "Get Customer Leads",
      desc: "Encourage customers to take action",
    },
    {
      icon: AiOutlineEye,
      selected: false,
      title: "Get more youtube views",
      desc: "Increase organic views by obtaining user attention",
    },
    {
      icon: PiCursorClickLight,
      selected: false,
      title: "Get more website traffic",
      desc: "Get the right people to visit your website",
    },
    {
      icon: BsShopWindow,
      selected: false,
      title: "Increase Live store traffic",
      desc: "Drive visits to local stores, restaurants & Dealerships",
    },
    {
      icon: TbDeviceMobileDown,
      selected: false,
      title: "Increase your App installs",
      desc: "Get more installs, interactions for your app",
    },
    {
      icon: TbNotes,
      selected: false,
      title: "Increase the catalogue sales",
      desc: "Drive the sales of your catalogue and get more leads",
    },
  ];

  return (
    <div className="p-8 border border-[#DAE6FF] rounded-xl bg-white">
      <h2 className="text-black text-sm mb-2">
        What you want to do? <span className="">(Step 1 of 4)</span>
      </h2>
      <hr />
      <div className="grid grid-cols-3 mt-4 gap-3">
        {features &&
          features.map((feature) => (
            <div
              className={`flex gap-4 p-4 items-center border-2 rounded-xl relative ${
                feature.selected ? "border-[#0F6EFF]" : "border-[#DAE6FF]"
              }`}
            >
              <feature.icon
                color={feature.selected ? "#0F6EFF" : "#8B8B8B"}
                size={24}
              />
              <div>
                <h4 className="font-semibold text-[#0B1A33]">
                  {feature.title}
                </h4>
                <p className="text-xs text-black text-opacity-[30%]">
                  {feature.desc}
                </p>
              </div>
              {feature.selected && (
                <div className="absolute right-0 -top-2 bg-[#0F6EFF] p-1 rounded-full">
                  <AiOutlineCheck color="white" size={12} />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CampaignStep1;
