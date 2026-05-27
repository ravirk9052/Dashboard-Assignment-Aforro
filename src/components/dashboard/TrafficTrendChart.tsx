import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  type DotItemDotProps,
} from "recharts";
import { dashboardMetrics } from "../../data/dashboardMetrics";
import ChartTooltip from "./ChartTooltip";

type LegendItemProps = {
  color: string;
  label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => (
  <div className="flex items-center gap-(--d-4)">
    <div className="size-(--d-12)" style={{ backgroundColor: color }} />
    <span className="text12px-desktop font-medium text-[#464E5F]">{label}</span>
  </div>
);

const TrafficTrendChart = () => {
  return (
    <div className="rounded-(--d-20) bg-white px-(--d-30) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <h2 className="text20px-desktop font-semibold text-text leading-[1.6] mb-(--d-30)">
        Visitor Insights
      </h2>

      <div className="h-[9.375vw] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={dashboardMetrics.trafficSeries}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <XAxis
              dataKey="month"
              tick={{ fontSize: 10, fill: "#aaa" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#aaa" }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 100, 200, 300, 400]}
            />
            <Tooltip content={<ChartTooltip />} />
            <ReferenceLine x="Jul" stroke="#F64E60" strokeDasharray="4 4" />

            <Line
              type="monotone"
              dataKey="loyal"
              name="Loyal Customers"
              stroke="#845ef7"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#845ef7" }}
            />
            <Line
              type="monotone"
              dataKey="new"
              name="New Customers"
              stroke="#e64980"
              strokeWidth={2.5}
              dot={(props: DotItemDotProps) => {
                const { cx, cy, index } = props;
                if (index === 6 && cx !== undefined && cy !== undefined) {
                  return (
                    <circle key="peak" cx={cx} cy={cy} r={6} fill="#e64980" />
                  );
                }
                return null;
              }}
              activeDot={{ r: 5, fill: "#e64980" }}
            />
            <Line
              type="monotone"
              dataKey="unique"
              name="Unique Customers"
              stroke="#51cf66"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 5, fill: "#51cf66" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-[1.198vw] flex justify-center items-center gap-(--d-16)">
        <LegendItem color="#845ef7" label="Loyal Customers" />
        <LegendItem color="#e64980" label="New Customers" />
        <LegendItem color="#51cf66" label="Unique Customers" />
      </div>
    </div>
  );
};

export default TrafficTrendChart;
