import { useState } from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import IndiaFlag from "../assets/india_flag.png";

const CampaignStep3 = () => {
  const [budgetTimeline, setBudgetTimeline] = useState("lifetime");
  const [locationType, setLocationType] = useState("radius");

  const handleBudgetTimelineTabChange = () => {
    budgetTimeline == "lifetime"
      ? setBudgetTimeline("daily")
      : setBudgetTimeline("lifetime");
  };
  const handleLocationTypeTabChange = () => {
    locationType == "radius"
      ? setLocationType("location")
      : setLocationType("radius");
  };

  const PrettoSlider = styled(Slider)({
    color: "#1977F3",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&:before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 100,
      height: 32,
      borderRadius: "4px",
      backgroundColor: "#1977F3",
      transformOrigin: "bottom left",
      // transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&:before": { display: "none" },
      // "&.MuiSlider-valueLabelOpen": {
      //   transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      // },
      // "& > *": {
      //   transform: "rotate(45deg)",
      // },
    },
  });

  return (
    <div className="p-8 border border-[#DAE6FF] rounded-xl bg-white">
      <h2 className="text-black text-[16px] mb-2 font-bold">
        Campaign Settings{" "}
        <span className="text-xs font-normal">(Step 3 of 4)</span>
      </h2>
      <hr />
      <div className="flex gap-2 mt-6">
        <div className="flex pt-2 flex-col items-center">
          <div
            className="w-[30px] h-[30px]
          flex justify-center items-center
           text-white bg-[#0F6EFF] rounded-full mb-4"
          >
            1
          </div>
          <div
            className="w-[1px] bg-gray-300"
            style={{ height: "calc(50% - 2.4rem)" }}
          ></div>
          <div
            className="w-[30px] h-[30px]
          flex justify-center items-center
           text-white bg-[#0F6EFF] rounded-full mb-4"
          >
            2
          </div>
        </div>
        <div className="sm:w-2/3 w-full">
          <div className="p-4">
            <h2 className="font-semibold text-sm text-black underline">
              Budget and dates info
            </h2>
            <div className="my-6">
              <p className="text-sm">Budget Timeline</p>
              <div className="flex w-64 h-12 relative mt-2">
                <button
                  className={`${
                    budgetTimeline == "lifetime"
                      ? "w-[60%] z-10 rounded-full bg-[#0F6EFF] text-white"
                      : "w-1/2 rounded-l-full bg-[#F0F0F0] text-[#999999]"
                  } flex items-center absolute h-full left-0 justify-center`}
                  onClick={handleBudgetTimelineTabChange}
                >
                  Lifetime
                </button>
                <button
                  className={`${
                    budgetTimeline == "daily"
                      ? "w-[60%] z-10 rounded-full bg-[#0F6EFF] text-white"
                      : "w-1/2 rounded-r-full bg-[#F0F0F0] text-[#999999]"
                  } flex absolute right-0 h-full items-center justify-center`}
                  onClick={handleBudgetTimelineTabChange}
                >
                  Daily
                </button>
              </div>
            </div>
            <form className="w-full sm:flex-row flex-col flex gap-4">
              <div className="sm:w-1/2 w-full">
                <label htmlFor="startDate">Start date</label>
                <input
                  id="startDate"
                  className="border p-3 w-full"
                  type="date"
                  name="startdate"
                />
              </div>
              <div className="sm:w-1/2 w-full">
                <label htmlFor="enddate">End date</label>
                <input
                  className="border p-3 w-full"
                  type="date"
                  name="enddate"
                  id="endDate"
                />
              </div>
            </form>
            <div className="mt-10 mb-6">
              <div className="flex justify-between">
                <p className="text-sm">Enter campaign budget</p>
                <div className="flex gap-1 items-center">
                  <img src={IndiaFlag} alt="india" />
                  <p className="text-sm font-semibold">India</p>
                </div>
              </div>
              <PrettoSlider
                max={100000}
                valueLabelDisplay="on"
                valueLabelFormat={(value: number) => "Rs. " + value}
                aria-label="pretto slider"
                defaultValue={0}
              />
              <div className="flex justify-between">
                <p className="text-sm">Rs. 100</p>
                <p className="text-sm">Rs. 1,00,000</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="p-4 w-full">
            <h2 className="font-semibold text-sm text-black underline">
              Location info
            </h2>
            <div className="my-6">
              <p className="text-sm">Location type</p>
              <div className="flex w-64 h-12 relative mt-2">
                <button
                  className={`${
                    locationType == "location"
                      ? "w-[60%] z-10 rounded-full bg-[#0F6EFF] text-white"
                      : "w-1/2 rounded-l-full bg-[#F0F0F0] text-[#999999]"
                  } flex items-center absolute h-full left-0 justify-center`}
                  onClick={handleLocationTypeTabChange}
                >
                  Location
                </button>
                <button
                  className={`${
                    locationType == "radius"
                      ? "w-[60%] z-10 rounded-full bg-[#0F6EFF] text-white"
                      : "w-1/2 rounded-r-full bg-[#F0F0F0] text-[#999999]"
                  } flex absolute right-0 h-full items-center justify-center`}
                  onClick={handleLocationTypeTabChange}
                >
                  Radius
                </button>
              </div>
            </div>
            <form className="w-full flex gap-4">
              <div className="w-full">
                <label htmlFor="location">Select Location</label>
                <input
                  id="location"
                  className="border p-3 w-full"
                  type="text"
                  name="location"
                  placeholder="Select a place name, address or coordinates"
                />
              </div>
            </form>
            <div className="mt-10 mb-6">
              <p className="text-sm">Select target radius</p>
              <PrettoSlider
                max={30}
                valueLabelDisplay="on"
                valueLabelFormat={(value: number) => value + " Km"}
                aria-label="pretto slider"
                defaultValue={0}
              />
              <div className="flex justify-between">
                <p className="text-sm">1</p>
                <p className="text-sm">30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignStep3;
