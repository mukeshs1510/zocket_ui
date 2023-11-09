import AddCircleIc from "../assets/add-circle.png";

const Compaign = () => {
  return (
    <div className="p-6 bg-[#f6f9ff]">
      <div className="flex justify-between">
        <div>
          <h2>Your Campaigns</h2>
          <p>Check the list of campaigns you created</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl px-4 py-2 bg-[#0F6EFF] text-white">
          <img src={AddCircleIc} alt="add" />
          Create new campaign
        </button>
      </div>
    </div>
  );
};

export default Compaign;
