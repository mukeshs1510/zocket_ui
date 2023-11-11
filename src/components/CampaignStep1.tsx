import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CampaignType, updateCampaign } from "./featurs/campaignSlice";

const CampaignStep1 = () => {
  const dispatch = useDispatch();
  const features = useSelector((state: any) => state.campaignReducer.campaigns);
  // console.log(features);

  const handleSelectedFeature = (id: number) => {
    dispatch(updateCampaign(id));
  };

  return (
    <div className="p-8 border border-[#DAE6FF] rounded-xl bg-white">
      <h2 className="text-black text-sm mb-2">
        What you want to do? <span className="">(Step 1 of 4)</span>
      </h2>
      <hr />
      <div className="grid grid-cols-3 mt-4 gap-3">
        {features &&
          features.map((feature: CampaignType) => (
            <div
              onClick={() => handleSelectedFeature(feature.id)}
              className={`flex select-none cursor-pointer gap-4 p-4 items-center border-2 rounded-xl relative ${
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
