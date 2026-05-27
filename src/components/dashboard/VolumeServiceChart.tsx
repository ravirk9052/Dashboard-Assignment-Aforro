import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { dashboardMetrics } from "../../data/dashboardMetrics";
import ChartTooltip from "./ChartTooltip";

const VolumeServiceChart = () => {
  return (
    <section className="h-full rounded-(--d-20) bg-white px-(--d-24) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <h2 className="mb-(--d-20) text20px-desktop font-semibold leading-[1.6] text-text">
        Volume vs Service Level
      </h2>

      <div className="mt-[10px] h-[240px] w-full px-[12px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={dashboardMetrics.volumeServiceSeries}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            barCategoryGap="35%"
          >
            <XAxis
              dataKey="label"
              tick={false}
              axisLine={false}
              tickLine={false}
            />
            <YAxis hide width={0} />
            {/* <YAxis tick={false} axisLine={false} tickLine={false} /> */}

            <Tooltip
              content={<ChartTooltip />}
              cursor={{ fill: "transparent" }}
            />

            {/* Green Background Bar */}
            <Bar
              dataKey="services"
              fill="#00E396"
              radius={[3, 3, 0, 0]}
              barSize={16}
              stackId="a"
            />

            {/* Blue Front Bar */}
            <Bar
              dataKey="volume"
              fill="#008FFB"
              radius={[3, 3, 0, 0]}
              barSize={16}
              stackId="a"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-(--d-12) flex justify-center gap-(--d-24)">
        <div className="flex items-center gap-(--d-6)">
          <span className="size-(--d-8) rounded-full bg-[#0095FF]" />
          <span className="text10px-desktop font-medium text-[#464E5F]">
            Volume 1,135
          </span>
        </div>
        <div className="flex items-center gap-(--d-6)">
          <span className="size-(--d-8) rounded-full bg-[#00E096]" />
          <span className="text10px-desktop font-medium text-[#464E5F]">
            Services 635
          </span>
        </div>
      </div>
    </section>
  );
};

export default VolumeServiceChart;
// import {
//   Bar,
//   BarChart,
//   ResponsiveContainer,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// import { dashboardMetrics } from "../../data/dashboardMetrics";
// import ChartTooltip from "./ChartTooltip";

// const VolumeServiceChart = () => {
//   return (
//     <section className="flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)]">

//       {/* Header */}
//       <div className="px-[24px] pt-[24px]">
//         <h2 className="text-[20px] font-semibold leading-[1.4] text-[#111827]">
//           Volume vs Service Level
//         </h2>
//       </div>

//       {/* Chart */}
//       <div className="mt-[10px] h-[240px] w-full px-[12px]">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={dashboardMetrics.volumeServiceSeries}
//             margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
//             barCategoryGap="38%"
//           >
//             <XAxis
//               dataKey="label"
//               tick={false}
//               axisLine={false}
//               tickLine={false}
//             />

//             <YAxis
//               tick={false}
//               axisLine={false}
//               tickLine={false}
//             />

//             <Tooltip
//               content={<ChartTooltip />}
//               cursor={{ fill: "transparent" }}
//             />

//             {/* Blue Bar */}
//             <Bar
//               dataKey="volume"
//               fill="#008FFB"
//               radius={[3, 3, 0, 0]}
//               barSize={14}
//             />

//             {/* Green Bar */}
//             <Bar
//               dataKey="services"
//               fill="#00E396"
//               radius={[3, 3, 0, 0]}
//               barSize={14}
//             />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Footer */}
//       <div className="mt-auto border-t border-[#EEF0F4] px-[24px] py-[18px]">
//         <div className="flex items-center justify-center gap-[34px]">

//           {/* Volume */}
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-[8px]">
//               <span className="h-[10px] w-[10px] rounded-full bg-[#008FFB]" />
//               <span className="text-[14px] font-medium text-[#94A3B8]">
//                 Volume
//               </span>
//             </div>

//             <span className="mt-[6px] text-[16px] font-semibold text-[#111827]">
//               1,135
//             </span>
//           </div>

//           {/* Divider */}
//           <div className="h-[34px] w-px bg-[#DDE3EC]" />

//           {/* Services */}
//           <div className="flex flex-col items-center">
//             <div className="flex items-center gap-[8px]">
//               <span className="h-[10px] w-[10px] rounded-full bg-[#00E396]" />
//               <span className="text-[14px] font-medium text-[#94A3B8]">
//                 Services
//               </span>
//             </div>

//             <span className="mt-[6px] text-[16px] font-semibold text-[#111827]">
//               635
//             </span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default VolumeServiceChart;
