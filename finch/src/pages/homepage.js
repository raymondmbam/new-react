import React from "react";
import RecentTransferCard from "../components/homepage/recentTransferCard";
import InsightCard from "../components/homepage/insightCard";
import OrderCard from "../components/homepage/orderCard";
import BalanceOverview from "../components/homepage/balanceOverview";
import Header from "../components/homepage/header";

const Homepage = () => {
  return (
    <div>
      <RecentTransferCard />
      <InsightCard />
      <OrderCard />
      <BalanceOverview />
      <Header />
    </div>
  );
};

export default Homepage;
