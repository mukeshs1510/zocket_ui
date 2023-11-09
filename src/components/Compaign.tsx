import AddCircleIc from "../assets/add-circle.png";
import SearchIc from "../assets/search_ic.png";
import ArrowDownIc from "../assets/down_arrow_md.png";

const Compaign = () => {
  return (
    <div className="py-8 px-10 bg-[#f6f9ff]">
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-2xl">Your Campaigns</h2>
          <p className="text-sm">Check the list of campaigns you created</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl px-4 py-2 bg-[#0F6EFF] text-white">
          <img src={AddCircleIc} alt="add" />
          Create new campaign
        </button>
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
      </div>
    </div>
  );
};

export default Compaign;
