// import { dashboardMetrics } from "../../data/dashboardMetrics";

import WorldMap from "./WorldMap";

const SalesCountryMap = () => {
  return (
    <section className="rounded-[24px] bg-white p-[26px] shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <h2 className="mb-[24px] text-[20px] font-semibold text-[#111827]">
        Sales Mapping by Country
      </h2>

      <div className="flex items-center justify-center rounded-[16px] bg-[#F8F9FC] p-[12px]">
        <div className="w-full">
          <WorldMap />
        </div>
      </div>
    </section>
  );
};

export default SalesCountryMap;
