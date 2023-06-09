import React from "react";
import { Profile } from "./Profile";
import { TodayPlan } from "./TodayPlan";
import { MonthlyPinned } from "./MonthlyPinned";

export const Dashboard = () => {
  return (
    <div className="h-full lg:h-screen flex flex-col lg:flex-row lg:gap-0">
      <TodayPlan />
      <MonthlyPinned />
      <Profile />
    </div>
  );
};
