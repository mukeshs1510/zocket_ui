import { BiSolidLike } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { PostsType, selectPost } from "./featurs/campaignSlice";

const CampaignStep4 = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: any) => state.campaignReducer.posts);
  // console.log(features);

  const handleSelectedPost = (id: number) => {
    dispatch(selectPost({ id }));
  };

  return (
    <div className="sm:p-8 p-4 border border-[#DAE6FF] rounded-xl bg-white">
      <h2 className="text-black text-[16px] mb-2 font-bold">
        What you want to do?{" "}
        <span className="text-xs font-normal">(Step 1 of 4)</span>
      </h2>
      <hr />
      <div className="grid sm:grid-cols-4 grid-cols-1 mt-4 gap-3">
        {posts &&
          posts.map((post: PostsType) => (
            <div
              onClick={() => handleSelectedPost(post.id)}
              className={`h-fit flex select-none cursor-pointer gap-4 p-4 items-center border-2 rounded-xl relative ${
                post.selected ? "border-[#0F6EFF]" : "border-[#DAE6FF]"
              }`}
            >
              <div>
                <div className="flex gap-2">
                  <img src={post.personImg} alt={post.sourceBy} />
                  <div className="">
                    <h2 className="text-[#2B23A5] font-semibold text-sm">
                      {post.sourceBy}
                    </h2>
                    <p className="capitalize text-[12px] text-[#767676]">
                      {post.source}
                    </p>
                  </div>
                </div>
                <p className="text-sm my-3 text-black">{post.desc}</p>
                <div className="bg-[#F5F5F5]">
                  <img src={post.image} className="w-full h-40 object-cover" />
                  <div className="flex items-center justify-between px-2 py-1">
                    <p className="text-xs text-[#2B23A5]">{post.sourceBy}</p>
                    <button className="flex gap-1 items-center border-[#CED0D4] border px-3 py-[2px] my-1 text-[#4B4F56] text-[12px]">
                      <BiSolidLike />
                      Like
                    </button>
                  </div>
                </div>
                {post.selected && (
                  <div className="flex gap-2 mt-4">
                    <button className="w-full py-2 rounded-md  text-[#0F6EFF] bg-[#0F6EFF] bg-opacity-[10%]">
                      Change image
                    </button>
                    <button className="w-full py-2 rounded-md  text-[#0F6EFF] bg-[#0F6EFF] bg-opacity-[10%]">
                      Edit text
                    </button>
                  </div>
                )}
              </div>
              {post.selected && (
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

export default CampaignStep4;
