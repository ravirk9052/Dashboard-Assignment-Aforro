import {
	ResponsiveContainer,
	AreaChart,
	Area,
	XAxis,
	YAxis,
	Tooltip,
	CartesianGrid,
} from "recharts";
import { dashboardMetrics } from "../../data/dashboardMetrics";
import ChartTooltip from "./ChartTooltip";

type SummaryItemProps = {
	color: string;
	label: string;
	value: string;
};

const SummaryItem = ({ color, label, value }: SummaryItemProps) => (
	<div className="flex flex-col items-center gap-(--d-4)">
		<div className="flex items-center gap-(--d-8)">
			<div className="relative h-0.5 w-[0.990vw] rounded-full" style={ { backgroundColor: color } }>
				<div className="absolute left-1/2 top-1/2 size-[0.469vw] -translate-x-1/2 -translate-y-1/2 rounded-full" style={ { backgroundColor: color } } />
			</div>
			<span className="text16px-desktop text-[#96A5B8] leading-[1.8]">{ label }</span>
		</div>
		<span className="text14px-desktop font-medium text-text">{ value }</span>
	</div>
);

const SatisfactionTrendChart = () => {
	const { lastMonth, thisMonth } = dashboardMetrics.satisfaction.summary;

	return (
		<div className="h-full rounded-(--d-20) bg-white px-(--d-24) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
			<h2 className="mb-(--d-20) mt-0 text20px-desktop font-semibold leading-[1.6] text-text">
				Customer Satisfaction
			</h2>

			<div className="h-[11.698vw] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<AreaChart data={ dashboardMetrics.satisfaction.series } margin={ { top: 10, right: 10, left: -40, bottom: 0 } } >
						<defs>
							<linearGradient id="gradThisMonth" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#38d9a9" stopOpacity={ 0.3 } />
								<stop offset="95%" stopColor="#38d9a9" stopOpacity={ 0.02 } />
							</linearGradient>

							<linearGradient id="gradLastMonth" x1="0" y1="0" x2="0" y2="1">
								<stop offset="5%" stopColor="#74c0fc" stopOpacity={ 0.2 } />
								<stop offset="95%" stopColor="#74c0fc" stopOpacity={ 0.02 } />
							</linearGradient>
						</defs>
						<CartesianGrid vertical={ false } stroke="#f0f0f0" />
						<XAxis dataKey="label" tick={ false } axisLine={ false } tickLine={ false } />
						<YAxis tick={ false } axisLine={ false } tickLine={ false } />
						<Tooltip content={ <ChartTooltip /> } />
						<Area type="monotone" dataKey="lastMonth" name="Last Month" stroke="#4dabf7" strokeWidth={ 2.5 } fill="url(#gradLastMonth)" dot={ { r: 4, fill: "#4dabf7", strokeWidth: 0 } } activeDot={ { r: 6 } } />
						<Area type="monotone" dataKey="thisMonth" name="This Month" stroke="#38d9a9" strokeWidth={ 2.5 } fill="url(#gradThisMonth)" dot={ { r: 4, fill: "#38d9a9", strokeWidth: 0 } } activeDot={ { r: 6 } } />
					</AreaChart>
				</ResponsiveContainer>
			</div>

			<div className="flex items-start justify-center gap-(--d-24) border-t border-[#f0f0f0] pt-(--d-14)">
				<SummaryItem color="#4dabf7" label={ lastMonth.label } value={ lastMonth.value } />
				<div className="h-(--d-24) w-px mt-(--d-4) bg-[#BDC9D3]" />
				<SummaryItem color="#38d9a9" label={ thisMonth.label } value={ thisMonth.value } />
			</div>
		</div>
	);
};

export default SatisfactionTrendChart;
