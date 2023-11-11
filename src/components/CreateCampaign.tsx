import { useState } from "react";
import { IoBulbOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./CustomStyles.css";
import CampaignStep1 from "./CampaignStep1";
import CampaignStep2 from "./CampaignStep2";
import CampaignStep3 from "./CampaignStep3";
import CampaignStep4 from "./CampaignStep4";

type StepComplatedType = {
  step1: boolean;
  step2: boolean;
  step3: boolean;
  step4: boolean;
};

const CreateCampaign = () => {
  const [stepComplated, setStepCompleted] = useState<StepComplatedType>({
    step1: true,
    step2: false,
    step3: false,
    step4: false,
  });

  const handleForwardSteps = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (stepComplated.step1 && !stepComplated.step2) {
      setStepCompleted({
        ...stepComplated,
        step2: true,
      });
    }
    if (stepComplated.step2 && !stepComplated.step3) {
      setStepCompleted({
        ...stepComplated,
        step3: true,
      });
    }
    if (stepComplated.step3 && !stepComplated.step4) {
      setStepCompleted({
        ...stepComplated,
        step4: true,
      });
    }
    console.table(stepComplated);
  };
  const handleBackSteps = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (stepComplated.step4) {
      setStepCompleted({
        ...stepComplated,
        step4: false,
      });
    }
    if (stepComplated.step3 && !stepComplated.step4) {
      setStepCompleted({
        ...stepComplated,
        step3: false,
      });
    }
    if (stepComplated.step2 && !stepComplated.step3) {
      setStepCompleted({
        ...stepComplated,
        step2: false,
      });
    }
    console.table(stepComplated);
  };

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
          <h2 className="font-bold text-2xl">Your Ad Campaigns</h2>
          <p className="text-sm">Launch your ad in just 4 easy steps</p>
        </div>
      </div>
      <div className="flex mt-12 items-center mb-8">
        <div
          className={`flex w-[24%] step1_container ${
            stepComplated.step1 && "active"
          }`}
        >
          <div className="flex flex-col gap-2 items-center">
            {/* <div className="flex items-center"> */}
            <div className="bg-white p-2 rounded-full step1_ic_container">
              <div
                className={`flex justify-center items-center p-3 rounded-full ${
                  stepComplated.step1 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"
                }`}
              >
                <IoBulbOutline
                  size={28}
                  color={stepComplated.step1 ? "#FFFFFF" : "#ABB5C2"}
                />
              </div>
              {/* </div> */}
              {/* <div
                className={`${
                  stepComplated.step1 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-full`}
              ></div>{" "} */}
            </div>
            <p
              className={`whitespace-nowrap ${
                stepComplated.step1 ? "text-[#0B1A33]" : "text-[#ABB6C5]"
              }`}
            >
              What you want to do
            </p>
          </div>
        </div>
        <div
          className={`flex pl-[4%] w-[30%] step2_container ${
            stepComplated.step2 && "active"
          }`}
        >
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center">
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-[30%]`}
              ></div>{" "} */}
              <div className="bg-white p-2 rounded-full step2_ic_container">
                <div
                  className={`flex justify-center items-center p-3 rounded-full ${
                    stepComplated.step2 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"
                  }`}
                >
                  <RiDeleteBinLine
                    size={28}
                    color={stepComplated.step2 ? "#FFFFFF" : "#ABB5C2"}
                  />
                </div>
              </div>
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-full`}
              ></div>{" "} */}
            </div>
            <p
              className={`whitespace-nowrap ${
                stepComplated.step2 ? "text-[#0B1A33]" : "text-[#ABB6C5]"
              }`}
            >
              Choose product
            </p>
          </div>
        </div>
        <div
          className={`flex pl-[4%] w-[30%] step3_container ${
            stepComplated.step3 && "active"
          }`}
        >
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center">
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-[30%]`}
              ></div>{" "} */}
              <div className="bg-white p-2 rounded-full step3_ic_container">
                <div
                  className={`flex justify-center items-center p-3 rounded-full ${
                    stepComplated.step3 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"
                  }`}
                >
                  <SlCalender
                    size={28}
                    color={stepComplated.step3 ? "#FFFFFF" : "#ABB5C2"}
                  />
                </div>
              </div>
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-full`}
              ></div>{" "} */}
            </div>
            <p
              className={`whitespace-nowrap ${
                stepComplated.step3 ? "text-[#0B1A33]" : "text-[#ABB6C5]"
              }`}
            >
              Campaign settings
            </p>
          </div>
        </div>
        <div
          className={`flex pl-[4%] w-[16%] step4_container ${
            stepComplated.step4 && "active"
          }`}
        >
          <div className="flex flex-col gap-2 items-center">
            <div className="flex items-center">
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-[30%]`}
              ></div>{" "} */}
              <div className="bg-white p-2 rounded-full step4_ic_container">
                <div
                  className={`flex justify-center items-center p-3 rounded-full ${
                    stepComplated.step4 ? "bg-[#F29A2E]" : "bg-[#E4EAF2]"
                  }`}
                >
                  <AiOutlineCheckCircle
                    size={28}
                    color={stepComplated.step4 ? "#FFFFFF" : "#ABB5C2"}
                  />
                </div>
              </div>
              {/* <div
                className={`${
                  stepComplated.step2 ? "bg-[#FFB963]" : "bg-[#E7EAF0]"
                } h-1 w-full`}
              ></div>{" "} */}
            </div>
            <p
              className={`whitespace-nowrap ${
                stepComplated.step4 ? "text-[#0B1A33]" : "text-[#ABB6C5]"
              }`}
            >
              Ready to go
            </p>
          </div>
        </div>
      </div>
      {getStepDetails(stepComplated)}
      <div className="flex items-center justify-between">
        {stepComplated.step2 && (
          <button
            className="flex mt-3 items-center gap-2 rounded-xl px-8 py-2 bg-gray-300 text-black"
            onClick={handleBackSteps}
          >
            Back
          </button>
        )}
        <button
          className="flex ml-auto mt-5 items-center gap-2 rounded-xl px-8 py-2 bg-[#0F6EFF] text-white"
          onClick={handleForwardSteps}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const getStepDetails = (steps: StepComplatedType) => {
  if (steps.step1 && !steps.step2) {
    return <CampaignStep1 />;
  }
  if (steps.step2 && !steps.step3) {
    return <CampaignStep2 />;
  }
  if (steps.step3 && !steps.step4) {
    return <CampaignStep3 />;
  }
  if (steps.step1 && steps.step2 && steps.step3 && steps.step4) {
    return <CampaignStep4 />;
  }
};

export default CreateCampaign;
