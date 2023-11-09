import Logo from "../assets/logo.png";
import HomeIc from "../assets/home_ic.png";
import HomeFilledIc from "../assets/home_filled_ic.png";
import CampaignIc from "../assets/campaign_ic.png";
import CampaignFilledIc from "../assets/campaign_filled_ic.png";
import ProductIc from "../assets/product_ic.png";
import ProductFilledIc from "../assets/product_filled_ic.png";
import CustomerIc from "../assets/customer_ic.png";
import CustomerFilledIc from "../assets/customer_filled_ic.png";
import { useMatch, useNavigate } from "react-router-dom";

type NavItemCompType = {
  to: string;
  activeImage: string;
  inactiveImage: string;
  label: string;
};

const Navbar = () => {
  return (
    <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-[#001738] text-white">
      <div className="flex items-center justify-center bg-[#0F51FE] rounded-full my-12 w-2/3">
        <img src={Logo} />
      </div>
      <nav className="flex flex-1 flex-col gap-y-6 w-full ">
        <NavItemComp
          to="/"
          activeImage={HomeFilledIc}
          inactiveImage={HomeIc}
          label="Home"
        />
        <NavItemComp
          to="/campaign"
          activeImage={CampaignFilledIc}
          inactiveImage={CampaignIc}
          label="Campaign"
        />
        <NavItemComp
          to="/products"
          activeImage={ProductFilledIc}
          inactiveImage={ProductIc}
          label="Products"
        />
        <NavItemComp
          to="/customer"
          activeImage={CustomerFilledIc}
          inactiveImage={CustomerIc}
          label="Customer"
        />
      </nav>
    </aside>
  );
};

const NavItemComp = ({
  to,
  activeImage,
  inactiveImage,
  label,
}: NavItemCompType) => {
  const navigate = useNavigate();
  const isActive = useMatch(to);

  const handleClick = () => {
    navigate(to);
  };
  //
  return (
    <div
      className={`nav-item flex flex-col items-center cursor-pointer gap-1 py-2 relative ${
        isActive ? "bg-[#1977F3] bg-opacity-[10%]" : ""
      }`}
      onClick={handleClick}
    >
      {isActive && (
        <div className="absolute left-0 h-full w-1.5 rounded-r-md  bg-[#1977F3] top-0"></div>
      )}
      <img src={isActive ? activeImage : inactiveImage} alt={label} />
      <span className="label text-xs">{label}</span>
    </div>
  );
};

export default Navbar;
