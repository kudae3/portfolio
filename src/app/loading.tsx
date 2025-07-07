import { Hourglass } from "ldrs/react";

import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mx-auto py-[50px] md:py-[100px]">
      <Hourglass size="40" bgOpacity="0.1" speed="1.75" color="white" />
    </div>
  );
};

export default Loading;
