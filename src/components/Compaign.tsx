import AddCircleIc from "../assets/add-circle.png";
import SearchIc from "../assets/search_ic.png";
import ArrowDownIc from "../assets/down_arrow_md.png";
import CampaignImg from "../assets/campaign_table_img.png";
import TrashIC from "../assets/trash_ic.png";
import EditIc from "../assets/edit_ic.png";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../App.css";
import { Link } from "react-router-dom";

const Compaign = () => {
  const dummyData = [
    {
      isOn: true,
      campaign: {
        img: CampaignImg,
        title: "Blueberry cake Campaign",
        desc: "Created on 14 july",
      },
      dateFrom: "25 jul 2022",
      dateTo: "01 Aug 2022",
      clicks: 300,
      budget: 2.33,
      location: "Chennai",
      plateform: "facebook",
      status: "l",
    },
    {
      isOn: false,
      campaign: {
        img: CampaignImg,
        title: "Chocolate cake Campaign",
        desc: "Created on 20 jun",
      },
      dateFrom: "25 jul 2022",
      dateTo: "01 Aug 2022",
      clicks: 210,
      budget: 4.33,
      location: "Bengaluru",
      plateform: "google",
      status: "p",
    },
    {
      isOn: true,
      campaign: {
        img: CampaignImg,
        title: "Browine cake Campaign",
        desc: "Created on 19 jan",
      },
      dateFrom: "25 jul 2020",
      dateTo: "05 oct 2020",
      clicks: 189,
      budget: 2.19,
      location: "Erode",
      plateform: "youtube",
      status: "e",
    },
    {
      isOn: true,
      campaign: {
        img: CampaignImg,
        title: "Blueberry cake Campaign",
        desc: "Created on 14 july",
      },
      dateFrom: "25 jul 2022",
      dateTo: "01 Aug 2022",
      clicks: 300,
      budget: 2.33,
      location: "Chennai",
      plateform: "facebook",
      status: "l",
    },
    {
      isOn: false,
      campaign: {
        img: CampaignImg,
        title: "Chocolate cake Campaign",
        desc: "Created on 20 jun",
      },
      dateFrom: "25 jul 2022",
      dateTo: "01 Aug 2022",
      clicks: 210,
      budget: 4.33,
      location: "Bengaluru",
      plateform: "google",
      status: "p",
    },
    {
      isOn: true,
      campaign: {
        img: CampaignImg,
        title: "Browine cake Campaign",
        desc: "Created on 19 jan",
      },
      dateFrom: "25 jul 2020",
      dateTo: "05 oct 2020",
      clicks: 189,
      budget: 2.19,
      location: "Erode",
      plateform: "youtube",
      status: "e",
    },
  ];

  return (
    <div
      className="py-8 px-10 bg-[#f6f9ff] h-screen"
      style={{
        maxHeight: "calc(100vh - 80px)",
        overflowY: "auto",
      }}
    >
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Your Campaigns</h2>
          <p className="text-sm">Check the list of campaigns you created</p>
        </div>
        <Link to="/campaign/create">
          <button className="flex items-center gap-2 rounded-xl px-4 py-2 bg-[#0F6EFF] text-white">
            <img src={AddCircleIc} alt="add" />
            Create new campaign
          </button>
        </Link>
      </div>
      <div className="mt-4 bg-white rounded-xl p-4 border border-[#DAE6FF]">
        <div className="flex justify-between">
          <div className="w-1/4 py-2 px-3 border rounded-lg flex items-center gap-2">
            <img src={SearchIc} alt="search" />
            <input
              className="border-none  focus-visible:border-none focus-visible:outline-none active:border-none active:outline-none"
              type="text"
              name="search"
              placeholder="Search for the campaign"
            />
          </div>
          <div className="flex gap-1 items-center">
            <div className="text-gray-400">Plateform: </div>
            <button className="items-center rounded-md flex p-2 text-black border border-gray-300 gap-2">
              All Platform <img src={ArrowDownIc} />
            </button>
            <div className="ml-1 text-gray-400">Status: </div>
            <button className="items-center rounded-md flex p-2 text-black border border-gray-300 gap-2">
              All Status <img src={ArrowDownIc} />
            </button>
            <button className="items-center rounded-md ml-1 flex p-2 text-black border border-gray-300 gap-2">
              Last 30 days <img src={ArrowDownIc} />
            </button>
          </div>
        </div>
        <div className="relative overflow-x-auto mt-5">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-[#EAEAEA] rounded-t-xl">
              <tr>
                <th scope="col" className="p-4 rounded-l-xl">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </div>
                </th>
                <th scope="col" className="px-6 py-3">
                  On/Off
                </th>
                <th scope="col" className="px-6 py-3">
                  Campaign
                </th>
                <th scope="col" className="px-6 py-3">
                  Date Range
                </th>
                <th scope="col" className="px-6 py-3">
                  Clicks
                </th>
                <th scope="col" className="px-6 py-3">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Platform
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-xl">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {dummyData.length > 0 &&
                dummyData.map((data) => (
                  <tr className="bg-white hover:bg-gray-50 ">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                        />
                        <label className="sr-only"></label>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={data.isOn}
                        />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      </label>
                    </td>
                    <td
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap "
                    >
                      <img
                        className="w-14 h-14"
                        src={data.campaign.img}
                        alt="Campaign Image"
                      />
                      <div className="pl-3">
                        <div className="text-base font-semibold">
                          {data.campaign.title}
                        </div>
                        <div className="font-normal text-gray-500">
                          {data.campaign.desc}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      {data.dateFrom} - {data.dateTo}
                    </td>
                    <td className="px-6 py-4">{data.clicks}</td>
                    <td className="px-6 py-4">INR {data.budget}</td>
                    <td className="px-6 py-4">{data.location}</td>
                    <td className="px-6 py-4">
                      <div className="flex justify-center">
                        {getPlatformIcon(data.plateform)}
                      </div>
                    </td>
                    <td className="px-6 py-4">{getStatus(data.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2 items-center">
                        <img
                          className="cursor-pointer"
                          src={EditIc}
                          alt="edit"
                        />
                        <img
                          className="cursor-pointer"
                          src={TrashIC}
                          alt="delete"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const getPlatformIcon = (platform: string) => {
  switch (platform) {
    case "facebook":
      return <BsFacebook color={"#1977F3"} size={24} />;
    case "google":
      return <FcGoogle size={24} />;
    case "youtube":
      return <BsYoutube color={"#E52D27"} size={24} />;
    default:
      break;
  }
};

const getStatus = (status: string) => {
  switch (status) {
    case "l":
      return (
        <div className="px-2 py-1 bg-[#E1FFE0] text-[#317C2E] rounded-full flex justify-center">
          Live now
        </div>
      );
    case "p":
      return (
        <div className="px-2 py-1 bg-[#FFF8E0] text-[#D1A307] rounded-full flex justify-center">
          Paused
        </div>
      );
    case "e":
      return (
        <div className="px-2 py-1 bg-[#FFDEDE] text-[#FC3F3F] rounded-full flex justify-center">
          Exhausted
        </div>
      );
    default:
      break;
  }
};

export default Compaign;
