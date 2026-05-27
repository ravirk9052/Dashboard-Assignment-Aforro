import type { ReactNode } from "react";
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

type SummaryItemProps = {
	icon: ReactNode;
	label: string;
	sublabel?: string;
	value: string;
	valueColor: string;
};

const SummaryItem = ({ icon, label, sublabel, value, valueColor }: SummaryItemProps) => (
	<div className="flex items-center gap-[3.646vw]">
		<div className="flex items-center gap-(--d-10)">
			<div className="flex size-(--d-36) items-center justify-center rounded-(--d-10) bg-[#F7F9FB]">{ icon }</div>
			<div>
				<p className="text12px-desktop font-semibold leading-[1.3] text-text">{ label }</p>
				<p className="text10px-desktop leading-[1.6] text-grayblue">{ sublabel }</p>
			</div>
		</div>
		<span className="text14px-desktop font-medium leading-[1.4] pb-[.2vw]" style={ { color: valueColor } }>{ value }</span>
	</div>
);

const ShoppingBagIcon = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-[0.885vw] h-auto" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_8121_977" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
			<rect width="17.28" height="17.28" fill="white" />
		</mask>
		<g mask="url(#mask0_8121_977)">
			<path fillRule="evenodd" clipRule="evenodd" d="M11.4005 15.4799C13.6083 15.4799 15.302 14.6825 14.821 11.473L14.2607 7.12331C13.9642 5.52184 12.9427 4.90894 12.0464 4.90894H4.71786C3.80839 4.90894 2.8462 5.56798 2.50349 7.12331L1.94331 11.473C1.53471 14.32 3.18231 15.4799 5.39009 15.4799H11.4005Z" stroke="#4AB58E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M5.29102 4.75083C5.29102 3.03286 6.6837 1.64016 8.40166 1.64016C9.22894 1.63666 10.0235 1.96284 10.6098 2.54659C11.196 3.13033 11.5255 3.92354 11.5255 4.75083" stroke="#4AB58E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M6.2666 7.99341H6.29956" stroke="#4AB58E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
			<path d="M10.4648 7.99341H10.4978" stroke="#4AB58E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
		</g>
	</svg>

);

const TagIcon = () => (
	<svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-[0.885vw] h-auto" xmlns="http://www.w3.org/2000/svg">
		<mask id="mask0_8121_991" style={ { maskType: "luminance" } } maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
			<rect width="17.28" height="17.28" fill="white" />
		</mask>
		<g mask="url(#mask0_8121_991)">
			<path fillRule="evenodd" clipRule="evenodd" d="M1.44115 5.14268C1.44125 3.49525 2.77666 2.15991 4.42411 2.15991H12.8567C14.5043 2.15991 15.8388 3.49535 15.839 5.14247M15.839 5.14247L15.8404 7.08863C15.8405 7.23192 15.7837 7.36937 15.6824 7.47073C15.5811 7.57208 15.4437 7.62903 15.3004 7.62903C14.7055 7.62903 14.2276 8.10686 14.2276 8.70112C14.2276 9.29481 14.7057 9.7732 15.3004 9.7732C15.5987 9.7732 15.8404 10.015 15.8404 10.3132V12.2572C15.8404 13.9046 14.5058 15.2402 12.8575 15.2402H4.42267C2.77495 15.2402 1.44043 13.9045 1.44043 12.2572V10.3132C1.44043 10.015 1.6822 9.7732 1.98043 9.7732C2.57428 9.7732 3.05251 9.29497 3.05251 8.70112C3.05251 8.13442 2.60292 7.69167 1.98043 7.69167C1.83718 7.69167 1.6998 7.63475 1.59852 7.53344C1.49725 7.43213 1.44038 7.29473 1.44043 7.15148L1.44115 5.14268C1.44115 5.14261 1.44115 5.14274 1.44115 5.14268M2.52115 5.14287L2.5206 6.67617C3.4332 6.89864 4.13251 7.6769 4.13251 8.70112C4.13251 9.70488 3.44859 10.5461 2.52043 10.7851V12.2572C2.52043 13.3085 3.37183 14.1602 4.42267 14.1602H12.8575C13.9091 14.1602 14.7604 13.3084 14.7604 12.2572V10.7852C13.8318 10.5463 13.1476 9.7051 13.1476 8.70112C13.1476 7.69655 13.8317 6.85595 14.7601 6.61706L14.759 5.14327C14.759 4.09202 13.9076 3.23991 12.8567 3.23991H4.42411C3.37306 3.23991 2.52115 4.09183 2.52115 5.14287ZM1.44115 5.14268L15.839 5.14247L1.44115 5.14268Z" fill="#FFA800" />
			<path fillRule="evenodd" clipRule="evenodd" d="M9.26767 6.09744L9.7686 7.11195L10.8904 7.27509C11.4608 7.35971 11.6932 8.06174 11.2772 8.46833L11.2763 8.46915L10.4656 9.25802L10.6572 10.3739C10.7559 10.9499 10.1513 11.3778 9.64277 11.1126L9.64112 11.1118L8.63965 10.5851L7.63654 11.1126C7.12797 11.3778 6.5234 10.9501 6.62205 10.3742L6.81375 9.2579L6.00358 8.46901L6.00287 8.46833C5.58683 8.06173 5.81922 7.35971 6.38962 7.27509L6.39111 7.27487L7.51069 7.11197L8.01218 6.09632L8.0128 6.09508C8.26907 5.5794 9.00978 5.57347 9.26732 6.09673C9.26744 6.09696 9.26756 6.0972 9.26767 6.09744ZM8.35344 7.84456C8.27479 8.00386 8.12281 8.11428 7.947 8.13986L7.30898 8.23269L7.77077 8.68236C7.89821 8.80645 7.95637 8.98534 7.92626 9.16065L7.81688 9.79756L8.38832 9.49706C8.54566 9.41432 8.73364 9.41432 8.89099 9.49706L9.46243 9.79756L9.35304 9.16065C9.32293 8.98527 9.38114 8.80632 9.50867 8.68223L9.97066 8.23269L9.33234 8.13987C9.15652 8.1143 9.00452 8.00387 8.92586 7.84456L8.63965 7.26492L8.35344 7.84456Z" fill="#FFA800" />
		</g>
	</svg>
);

const SalesTargetComparison = () => {
	const { reality, target } = dashboardMetrics.targets.summary;

	return (
		<div className="h-full rounded-(--d-20) bg-white px-(--d-24) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
			<h2 className="mb-(--d-20) mt-0 text20px-desktop font-semibold leading-[1.6] text-text">
				Target vs Reality
			</h2>

			<div className="h-[9.375vw] w-full">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={ dashboardMetrics.targets.series } margin={ { top: 10, right: 0, left: -60, bottom: 0 } } barCategoryGap="10%" barGap={ 4 }>
						<CartesianGrid vertical={ false } stroke="#f0f0f0" />
						<XAxis dataKey="month" tick={ { fontSize: 10, fill: "#aaa" } } axisLine={ false } tickLine={ false } />
						<YAxis tick={ false } axisLine={ false } tickLine={ false } />
						<Tooltip content={ <ChartTooltip /> } cursor={ { fill: "rgba(0,0,0,0.03)" } } />
						<Bar dataKey="reality" name="Reality Sales" fill="#51cf66" radius={ [3, 3, 3, 3] } />
						<Bar dataKey="target" name="Target Sales" fill="#fcc419" radius={ [3, 3, 3, 3] } />
					</BarChart>
				</ResponsiveContainer>
			</div>

			<div className="mt-(--d-16) flex flex-col gap-[0.781vw] border-t border-[#f0f0f0] pt-(--d-14)">
				<SummaryItem icon={ <ShoppingBagIcon /> } label={ reality.label } sublabel={ reality.sublabel } value={ reality.value } valueColor="#51cf66" />
				<SummaryItem icon={ <TagIcon /> } label={ target.label } sublabel={ target.sublabel } value={ target.value } valueColor="#fcc419" />
			</div>
		</div>
	);
};

export default SalesTargetComparison;
