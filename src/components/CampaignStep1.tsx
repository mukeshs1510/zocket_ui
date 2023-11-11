import { FiPhoneCall } from "react-icons/fi";

const CampaignStep1 = () => {
  return (
    <div className="p-8 flex border border-[] rounded-xl">
      <h2 className="text-black text-sm">
        What you want to do? <span className="">(Step 1 of 4)</span>
      </h2>
      <hr />
      <div className="grid grid-cols-3">
        <div className="flex gap-2 p-3 items-center">
          <FiPhoneCall />
          <div>
            <h4>Get Leads as calls</h4>
            <p className="text-xs">
              Reach broad audience and get leads through calls
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStep1;
