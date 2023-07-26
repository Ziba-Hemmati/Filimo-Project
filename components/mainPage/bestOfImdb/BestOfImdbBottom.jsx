import BestOfImdbBanner from "@/components/mainPage/bestOfImdb/BestOfImdbBanner";
import BestOfImdbDetail from "@/components/mainPage/bestOfImdb/BestOfImdbDetail";

const BestOfImdbBottom = () => {
  return (
    <div
      className={
        "flex flex-col items-center w-full h-[272px] relative pt-6 lg2:h-80"
      }
    >
      <BestOfImdbBanner />
      <BestOfImdbDetail />
    </div>
  );
};

export default BestOfImdbBottom;
