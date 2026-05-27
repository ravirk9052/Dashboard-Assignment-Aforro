import { appPaths } from "../routes/paths";

export type NavigationIcon =
	| "dashboard"
	| "users"
	| "leaderboard"
	| "orders"
	| "products"
	| "report"
	| "messages"
	| "settings"
	| "signOut";

export type NavigationItem = {
	label: string;
	path: string;
	icon: NavigationIcon;
};

export const navigationItems: NavigationItem[] = [
	{ label: "Dashboard", path: appPaths.dashboard, icon: "dashboard" },
	{ label: "Users", path: appPaths.users, icon: "users" },
	{ label: "Leaderboard", path: appPaths.leaderboard, icon: "leaderboard" },
	{ label: "Order", path: appPaths.orders, icon: "orders" },
	{ label: "Products", path: appPaths.products, icon: "products" },
	{ label: "Sales Report", path: appPaths.reports, icon: "report" },
	{ label: "Messages", path: appPaths.messages, icon: "messages" },
	{ label: "Settings", path: appPaths.settings, icon: "settings" },
	{ label: "Sign Out", path: appPaths.signOut, icon: "signOut" },
];
