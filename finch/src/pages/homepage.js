import React from "react";
import RecentTransferCard from "../components/homepage/recentTransferCard";
import InsightCard from "../components/homepage/insightCard";
import OrderCard from "../components/homepage/orderCard";

const Homepage = () => {
  return (
    <div>
      <RecentTransferCard />
      <InsightCard />
      <OrderCard />
    </div>
  );
};

export default Homepage;
