import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";
import { dashboardMetrics } from "../../data/dashboardMetrics";
import ChartTooltip from "./ChartTooltip";

type LegendItemProps = {
	color: string;
	label: string;
};

const LegendItem = ({ color, label }: LegendItemProps) => (
	<div className="flex items-center gap-(--d-4)">
		<div
			className="size-(--d-10) rounded-full"
			style={ { backgroundColor: color } }
		/>
		<span className="text12px-desktop font-medium text-[#666]">
			{ label }
		</span>
	</div>
);

const RevenueBreakdownChart = () => {
	return (
		<div className="box-border h-full rounded-(--d-20) bg-white px-(--d-24) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
			{/* Title */ }
			<h2 className="mb-(--d-20) mt-0 text20px-desktop font-semibold leading-[1.6] text-text">
				Total Revenue
			</h2>

			{/* Chart */ }
			<div className="h-[13.542vw] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						data={ dashboardMetrics.revenueSeries }
						margin={ { top: 10, right: 10, left: -20, bottom: 0 } }
						barCategoryGap="30%"
						barGap={ 4 }
					>
						<CartesianGrid vertical={ false } stroke="#f0f0f0" />

						<XAxis
							dataKey="day"
							tick={ { fontSize: 11, fill: "#aaa" } }
							axisLine={ false }
							tickLine={ false }
						/>

						<YAxis
							tick={ { fontSize: 11, fill: "#aaa" } }
							axisLine={ false }
							tickLine={ false }
							tickFormatter={ (v) => `${v / 1000}k` }
							ticks={ [0, 5000, 10000, 15000, 20000, 25000] }
						/>

						<Tooltip
							content={ <ChartTooltip /> }
							cursor={ { fill: "rgba(0,0,0,0.03)" } }
						/>

						<Bar
							dataKey="online"
							name="Online Sales"
							fill="#4dabf7"
							radius={ [2, 2, 0, 0] }
						/>

						<Bar
							dataKey="offline"
							name="Offline Sales"
							fill="#51cf66"
							radius={ [2, 2, 0, 0] }
						/>
					</BarChart>
				</ResponsiveContainer>
			</div>

			{/* Legend */ }
			<div className="mt-(--d-12) flex justify-center gap-(--d-20) pl-(--d-4)">
				<LegendItem color="#4dabf7" label="Online Sales" />
				<LegendItem color="#51cf66" label="Offline Sales" />
			</div>
		</div>
	);
};

export default RevenueBreakdownChart;
