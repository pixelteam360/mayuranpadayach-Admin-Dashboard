import Image from "next/image";
import userIcon from "../../../assets/placeholders/user-placeholder.jpg";
import DeleteModal from "@/components/common/DeleteModal";

const ReportCard = () => {
  const item = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
      {item.map((item, idx) => (
        <div
          key={idx}
          className="bg-[#eef1ed] p-4 grid grid-cols-4 rounded-3xl border border-white gap-1"
        >
          <div className="col-span-3 space-y-2">
            <div className="flex items-center gap-2">
              <Image
                src={userIcon}
                alt="user"
                width={100}
                height={100}
                className="h-10 w-10 rounded-full"
              />
              <p className="font-medium">Anonymous 001</p>
            </div>
            <p className="text-[#B8B8B8] line-clamp-4 text-[14px]">
              Started off really charming, but over time became super
              possessive. Would constantly check my phone and get upset if I
              didn’t reply fast enough. Be careful!
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <Image
              src={userIcon}
              alt="user"
              width={1000}
              height={1000}
              className="rounded-3xl"
            />
            <DeleteModal btn="btn" type="user" id=""/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportCard;
