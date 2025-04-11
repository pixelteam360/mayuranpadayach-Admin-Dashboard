import { LoaderPinwheel } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="md:py-10 py-5 flex justify-center items-center">
      <div className="animate-spin">
        <LoaderPinwheel className="text-primary h-8 w-8" />
      </div>
    </div>
  );
};

export default Spinner;
