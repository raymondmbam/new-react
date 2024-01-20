import React from "react";
import RecentTransferCard from "../components/homepage/recentTransferCard";
import InsightCard from "../components/homepage/insightCard";
import OrderCard from "../components/homepage/orderCard";
import BalanceOverview from "../components/homepage/balanceOverview";
import Header from "../components/homepage/header";
import LaunchAssistant from "../components/homepage/launchAssistant";

const Homepage = () => {
  return (
    <div>
      <RecentTransferCard />
      <InsightCard />
      <OrderCard />
      <BalanceOverview />
      <Header />
      <LaunchAssistant />
    </div>
  );
};

export default Homepage;
