import PremiumIc from "../assets/premium_ic.png";
import GiftIc from "../assets/gift.png";
import NotificationIc from "../assets/notification.png";
import UserIc from "../assets/user_ic.png";
import DownArrowIc from "../assets/down_arrow_ic.png";
import LanguageIc from "../assets/language_ic.png";

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-3 mr-4">
          <p className="text-gray-400 text-sm">Free trial ends in 2 days</p>
          <button className="px-3 py-2 flex gap-1 items-center bg-[#F29A2E] bg-opacity-[10%] rounded-md">
            <img src={PremiumIc} alt="premium" />
            <p className="text-[#FF8C00]">Buy Plan</p>
          </button>
          <img src={GiftIc} alt="gift" />
          <img src={NotificationIc} alt="notification" />
          <img src={UserIc} alt="user" />
          <p>Mukund cake shop</p>
          <img src={DownArrowIc} alt="arrow" />
          <img src={LanguageIc} alt="language" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
