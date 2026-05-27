import SatisfactionTrendChart from "../components/dashboard/SatisfactionTrendChart";
import RevenueBreakdownChart from "../components/dashboard/RevenueBreakdownChart";
import SalesCountryMap from "../components/dashboard/SalesCountryMap";
import SalesOverviewCards from "../components/dashboard/SalesOverviewCards";
import SalesTargetComparison from "../components/dashboard/SalesTargetComparison";
import TrafficTrendChart from "../components/dashboard/TrafficTrendChart";
import TopProductsTable from "../components/dashboard/TopProductsTable";
import VolumeServiceChart from "../components/dashboard/VolumeServiceChart";

// const AnalyticsDashboardPage = () => {
//   return (
//     <div className="flex flex-col gap-(--d-30)">
//       <div className="flex gap-(--d-30)">
//         <div className="flex-[1.48]">
//           <SalesOverviewCards />
//         </div>
//         <div className="flex-1">
//           <TrafficTrendChart />
//         </div>
//       </div>
//       <div className="flex gap-(--d-30)">
//         <div className="flex-[1.74]">
//           <RevenueBreakdownChart />
//         </div>
//         <div className="flex-[1.13]">
//           <SatisfactionTrendChart />
//         </div>
//         <div className="flex-1">
//           <SalesTargetComparison />
//         </div>
//       </div>
//       <div className="flex gap-(--d-30) border border-red">
//         <div className="flex-[1.74] border border-green-200 border-width-2">
//           <TopProductsTable />
//         </div>
//         <div className="flex-[1.13]">
//           <SalesCountryMap />
//         </div>
//         <div className="flex-1">
//           <VolumeServiceChart />
//         </div>
//       </div>
//     </div>
//   );
// };

const AnalyticsDashboardPage = () => {
  return (
    <div className="flex flex-col gap-(--d-30) pb-28">
      {/* Row 1 */}
      <div className="grid grid-cols-[1.48fr_1fr] gap-(--d-30)">
        <SalesOverviewCards />
        <TrafficTrendChart />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-[1.74fr_1.13fr_1fr] gap-(--d-20)">
        <RevenueBreakdownChart />
        <SatisfactionTrendChart />
        <SalesTargetComparison />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-[1.74fr_1.13fr_1fr] gap-(--d-20)">
        <TopProductsTable />
        <SalesCountryMap />
        <VolumeServiceChart />
      </div>
    </div>
  );
};

export default AnalyticsDashboardPage;

// export default AnalyticsDashboardPage;
