import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import AppShell from "../components/layouts/AppShell";
import AnalyticsDashboardPage from "../pages/AnalyticsDashboardPage";
import ComingSoonPage from "../pages/ComingSoonPage";
import UserDirectoryPage from "../pages/UserDirectoryPage";
import { appPaths } from "./paths";

export const appRouter = createBrowserRouter(
	createRoutesFromElements(
		<Route element={ <AppShell /> }>
			<Route index element={ <AnalyticsDashboardPage /> } />
			<Route path={ appPaths.users } element={ <UserDirectoryPage /> } />
			<Route path={ appPaths.leaderboard } element={ <ComingSoonPage title="Leaderboard" /> } />
			<Route path={ appPaths.orders } element={ <ComingSoonPage title="Order Management" /> } />
			<Route path={ appPaths.products } element={ <ComingSoonPage title="Products" /> } />
			<Route path={ appPaths.reports } element={ <ComingSoonPage title="Sales Report" /> } />
			<Route path={ appPaths.messages } element={ <ComingSoonPage title="Messages" /> } />
			<Route path={ appPaths.settings } element={ <ComingSoonPage title="Settings" /> } />
			<Route path={ appPaths.signOut } element={ <ComingSoonPage title="Sign Out" description="Authentication is not connected in this assignment build yet." /> } />
			<Route path="*" element={ <ComingSoonPage title="Page Not Found" description="The route you opened is not available in this dashboard." /> } />
		</Route>,
	),
);
