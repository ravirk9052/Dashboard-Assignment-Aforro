export type SalesMetricIcon = "chart" | "order" | "check" | "user";

export type SalesMetricCard = {
	id: string;
	label: string;
	value: string;
	change: string;
	bgColor: string;
	iconBg: string;
	icon: SalesMetricIcon;
};

export type TrafficPoint = {
	month: string;
	loyal: number;
	new: number;
	unique: number;
};

export type RevenuePoint = {
	day: string;
	online: number;
	offline: number;
};

export type SatisfactionPoint = {
	label: string;
	lastMonth: number;
	thisMonth: number;
};

export type TargetPoint = {
	month: string;
	reality: number;
	target: number;
};

export type ProductPerformance = {
	id: string;
	name: string;
	popularity: number;
	sales: number;
	color: string;
};

export type CountrySales = {
	country: string;
	value: string;
	color: string;
	x: number;
	y: number;
};

export type VolumeServicePoint = {
	label: string;
	volume: number;
	services: number;
};

export type SummaryStat = {
	label: string;
	value: string;
	sublabel?: string;
};

const salesCards: SalesMetricCard[] = [
	{
		id: "gross-sales",
		label: "Total Sales",
		value: "$1k",
		change: "+8% from yesterday",
		bgColor: "#FFE2E5",
		iconBg: "#FA5A7D",
		icon: "chart",
	},
	{
		id: "orders-created",
		label: "Total Order",
		value: "300",
		change: "+5% from yesterday",
		bgColor: "#FFF4DE",
		iconBg: "#FF947A",
		icon: "order",
	},
	{
		id: "sold-items",
		label: "Product Sold",
		value: "5",
		change: "+1.2% from yesterday",
		bgColor: "#DCFCE7",
		iconBg: "#3CD856",
		icon: "check",
	},
	{
		id: "fresh-customers",
		label: "New Customers",
		value: "8",
		change: "+0.5% from yesterday",
		bgColor: "#F3E8FF",
		iconBg: "#BF83FF",
		icon: "user",
	},
];

const trafficSeries: TrafficPoint[] = [
	{ month: "Jan", loyal: 280, new: 240, unique: 340 },
	{ month: "Feb", loyal: 260, new: 280, unique: 310 },
	{ month: "Mar", loyal: 290, new: 200, unique: 290 },
	{ month: "Apr", loyal: 240, new: 160, unique: 270 },
	{ month: "May", loyal: 220, new: 200, unique: 300 },
	{ month: "Jun", loyal: 250, new: 260, unique: 320 },
	{ month: "Jul", loyal: 300, new: 360, unique: 280 },
	{ month: "Aug", loyal: 320, new: 320, unique: 240 },
	{ month: "Sep", loyal: 280, new: 260, unique: 220 },
	{ month: "Oct", loyal: 240, new: 210, unique: 250 },
	{ month: "Nov", loyal: 210, new: 190, unique: 230 },
	{ month: "Dec", loyal: 200, new: 220, unique: 210 },
];

const revenueSeries: RevenuePoint[] = [
	{ day: "Monday", online: 12000, offline: 10000 },
	{ day: "Tuesday", online: 16000, offline: 8000 },
	{ day: "Wednesday", online: 6000, offline: 21000 },
	{ day: "Thursday", online: 15000, offline: 5000 },
	{ day: "Friday", online: 11000, offline: 7000 },
	{ day: "Saturday", online: 14000, offline: 11000 },
	{ day: "Sunday", online: 20000, offline: 9000 },
];

const satisfactionSeries: SatisfactionPoint[] = [
	{ label: "Week 1", lastMonth: 3200, thisMonth: 4100 },
	{ label: "Week 2", lastMonth: 3800, thisMonth: 3600 },
	{ label: "Week 3", lastMonth: 3400, thisMonth: 4200 },
	{ label: "Week 4", lastMonth: 2900, thisMonth: 3800 },
	{ label: "Week 5", lastMonth: 3100, thisMonth: 4000 },
	{ label: "Week 6", lastMonth: 2800, thisMonth: 3500 },
	{ label: "Week 7", lastMonth: 3000, thisMonth: 4400 },
	{ label: "Week 8", lastMonth: 3200, thisMonth: 4700 },
];

const targetSeries: TargetPoint[] = [
	{ month: "Jan", reality: 7000, target: 9000 },
	{ month: "Feb", reality: 8000, target: 10000 },
	{ month: "Mar", reality: 9500, target: 11500 },
	{ month: "Apr", reality: 7500, target: 9500 },
	{ month: "May", reality: 8500, target: 12000 },
	{ month: "Jun", reality: 9000, target: 11000 },
	{ month: "Jul", reality: 8823, target: 12122 },
];

const productPerformance: ProductPerformance[] = [
	{ id: "01", name: "Home Decor Range", popularity: 45, sales: 45, color: "#0095FF" },
	{ id: "02", name: "Disney Princess Pink Bag", popularity: 29, sales: 29, color: "#00E096" },
	{ id: "03", name: "Bathroom Essentials", popularity: 18, sales: 18, color: "#884DFF" },
	{ id: "04", name: "Apple Smartwatches", popularity: 25, sales: 25, color: "#FF8F0D" },
];

const countrySales: CountrySales[] = [
	{ country: "United States", value: "$12.4k", color: "#FFB200", x: 23, y: 38 },
	{ country: "Brazil", value: "$8.6k", color: "#FF4D6D", x: 36, y: 68 },
	{ country: "India", value: "$10.1k", color: "#00B8A9", x: 68, y: 52 },
	{ country: "China", value: "$9.7k", color: "#884DFF", x: 76, y: 41 },
	{ country: "Australia", value: "$5.3k", color: "#00E096", x: 82, y: 72 },
];

const volumeServiceSeries: VolumeServicePoint[] = [
	{ label: "Jan", volume: 900, services: 650 },
	{ label: "Feb", volume: 1135, services: 635 },
	{ label: "Mar", volume: 980, services: 560 },
	{ label: "Apr", volume: 850, services: 500 },
	{ label: "May", volume: 700, services: 420 },
	{ label: "Jun", volume: 760, services: 455 },
];

export const dashboardMetrics = {
	salesCards,
	trafficSeries,
	revenueSeries,
	satisfaction: {
		series: satisfactionSeries,
		summary: {
			lastMonth: { label: "Last Month", value: "$3,004" },
			thisMonth: { label: "This Month", value: "$4,504" },
		} satisfies Record<string, SummaryStat>,
	},
	targets: {
		series: targetSeries,
		summary: {
			reality: { label: "Reality Sales", sublabel: "Global", value: "8,823" },
			target: { label: "Target Sales", sublabel: "Commercial", value: "12,122" },
		} satisfies Record<string, SummaryStat>,
	},
	productPerformance,
	countrySales,
	volumeServiceSeries,
};
