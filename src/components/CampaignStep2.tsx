import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { ProductsType, updateProducts } from "./featurs/campaignSlice";

const CampaignStep2 = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.campaignReducer.products);

  const handleSelectedProducts = (id: number) => {
    dispatch(updateProducts({ id }));
  };
  return (
    <div className="sm:p-8 p-4 border border-[#DAE6FF] rounded-xl bg-white">
      <h2 className="text-black text-[16px] mb-2 font-bold">
        Choose a product{" "}
        <span className="text-xs font-normal">(Step 2 of 4)</span>
      </h2>
      <hr />
      <div className="grid sm:grid-cols-3 grid-cols-1 mt-4 gap-3">
        {products &&
          products.map((product: ProductsType) => (
            <div
              onClick={() => handleSelectedProducts(product.id)}
              className={`flex select-none cursor-pointer gap-4 p-4 items-center border-2 rounded-xl relative ${
                product.selected ? "border-[#0F6EFF]" : "border-[#DAE6FF]"
              }`}
            >
              <img src={product.image} alt={product.title} />
              <div>
                <h4 className="font-semibold text-[#0B1A33]">
                  {product.title}
                </h4>
                <p className="text-xs text-black text-opacity-[30%]">
                  {product.desc}
                </p>
              </div>
              <div
                className={`absolute right-5 ${
                  product.selected ? "bg-[#0F6EFF]" : "border border-[#0F6EFF]"
                } p-1 rounded-full`}
              >
                <AiOutlineCheck
                  color={!product.selected ? "#0F6EFF" : "white"}
                  size={12}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CampaignStep2;
