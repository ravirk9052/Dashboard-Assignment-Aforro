import { useEffect, useMemo, useState } from "react";
import {
	type ColumnDef,
	flexRender,
	getCoreRowModel,
	getSortedRowModel,
	type SortingState,
	useReactTable,
} from "@tanstack/react-table";
import axios from "axios";
import { ArrowDownAZ, ArrowUpDown, ArrowUpZA, RefreshCw } from "lucide-react";

const USERS_API = "https://jsonplaceholder.typicode.com/users";

type ApiUser = {
	id: number;
	name: string;
	email: string;
	company?: {
		name?: string;
	};
	address?: {
		city?: string;
	};
};

type UserRow = {
	id: number;
	name: string;
	email: string;
	companyName: string;
	city: string;
};

const UserDirectoryTable = () => {
	const [users, setUsers] = useState<UserRow[]>([]);
	const [search, setSearch] = useState("");
	const [cityFilter, setCityFilter] = useState("");
	const [sorting, setSorting] = useState<SortingState>([]);

	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchUsers = async () => {
		try {
			setLoading(true);
			setError("");

			const { data } = await axios.get<ApiUser[]>(USERS_API);

			const formattedUsers = data.map((user) => ({
				id: user.id,
				name: user.name,
				email: user.email,
				companyName: user.company?.name || "-",
				city: user.address?.city || "-",
			}));

			setUsers(formattedUsers);
		} catch (err) {
			setError(axios.isAxiosError(err) ? err.message : "Something went wrong while fetching users");
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	const cities = useMemo(() => {
		const uniqueCities = new Set(users.map((user) => user.city));
		return Array.from(uniqueCities).sort();
	}, [users]);

	const filteredUsers = useMemo(() => {
		const searchValue = search.trim().toLowerCase();

		return users.filter((user) => {
			const matchesSearch =
				user.name.toLowerCase().includes(searchValue) ||
				user.email.toLowerCase().includes(searchValue);

			const matchesCity = cityFilter ? user.city === cityFilter : true;

			return matchesSearch && matchesCity;
		});
	}, [users, search, cityFilter]);

	const columns = useMemo<ColumnDef<UserRow>[]>(
		() => [
			{
				accessorKey: "name",
				header: "Name",
				cell: (info) => info.getValue(),
				enableSorting: true,
			},
			{
				accessorKey: "email",
				header: "Email",
				cell: (info) => info.getValue(),
				enableSorting: false,
			},
			{
				accessorKey: "companyName",
				header: "Company Name",
				cell: (info) => info.getValue(),
				enableSorting: false,
			},
			{
				accessorKey: "city",
				header: "City",
				cell: (info) => info.getValue(),
				enableSorting: false,
			},
		],
		[]
	);

	// TanStack Table returns table helper functions that the React compiler rule cannot memoize safely.
	// eslint-disable-next-line react-hooks/incompatible-library
	const table = useReactTable({
		data: filteredUsers,
		columns,
		state: {
			sorting,
		},
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	const handleSortByName = (order: "asc" | "desc") => {
		setSorting([
			{
				id: "name",
				desc: order === "desc",
			},
		]);
	};

	const clearFilters = () => {
		setSearch("");
		setCityFilter("");
		setSorting([]);
	};

	if (loading) {
		return (
			<section className="rounded-(--d-20) bg-white px-(--d-30) py-(--d-24) shadow">
				<div className="flex min-h-[18vw] items-center justify-center">
					<div className="text-center">
						<div className="mx-auto mb-(--d-12) size-(--d-32) animate-spin rounded-full border-2 border-[#EDF2F6] border-t-primary" />
						<p className="text14px-desktop font-medium text-[#464E5F]">
							Loading users...
						</p>
					</div>
				</div>
			</section>
		);
	}

	if (error) {
		return (
			<section className="rounded-(--d-20) bg-white px-(--d-30) py-(--d-24) shadow">
				<div className="flex min-h-[18vw] items-center justify-center">
					<div className="rounded-(--d-16) border border-[#ffd6d6] bg-[#fff5f5] px-(--d-24) py-(--d-20) text-center">
						<p className="mb-(--d-16) text14px-desktop font-medium text-[#e03131]">
							{ error }
						</p>

						<button
							type="button"
							onClick={ fetchUsers }
							className="inline-flex items-center gap-(--d-8) rounded-(--d-10) bg-[#e03131] px-(--d-16) py-(--d-10) text13px-desktop font-semibold text-white transition hover:bg-[#c92a2a]"
						>
							<RefreshCw size={ 14 } strokeWidth={ 2.4 } />
							Retry
						</button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="rounded-(--d-20) bg-white px-(--d-30) py-(--d-24) shadow">
			<div className="mb-(--d-30) flex items-start justify-between gap-(--d-20)">
				<div>
					<h2 className="mt-0 text20px-desktop font-semibold leading-[1.6] text-text">
						Users
					</h2>
				</div>
				<button type="button" onClick={ clearFilters } className="flex cursor-pointer items-center gap-1.5 rounded-(--d-8) border border-[#C3D3E2] bg-white duration-200 hover:bg-[#c3d3e2aa] px-(--d-16) py-(--d-10) text14px-desktop font-medium text-text leading-[1.4]">
					Clear Filters
				</button>
			</div>

			<div className="mb-(--d-24) flex items-center justify-between gap-(--d-12)">
				<input type="text" value={ search } onChange={ (e) => setSearch(e.target.value) } placeholder="Search by name or email" className="focus:outline-0 focus:ring-0 px-(--d-14) py-(--d-10) w-[25vw] placeholder:text-black text-black text16px-desktop border border-[#E6E8F0] bg-[#F8F9FC] rounded-(--d-8)" />

				<div className="flex items-center gap-(--d-12)">

					<div className="relative">
						<select
							value={ cityFilter }
							onChange={ (e) => setCityFilter(e.target.value) }
							className="h-(--d-48) w-full appearance-none rounded-(--d-8) border border-[#E6E8F0] bg-[#F8F9FC] px-(--d-16) pr-(--d-40) text16px-desktop text-black outline-none transition"
						>
							<option value="">All Cities</option>
							{ cities.map((city) => (
								<option key={ city } value={ city }>
									{ city }
								</option>
							)) }
						</select>

						<span className="pointer-events-none absolute right-(--d-8) top-1/2 -translate-y-1/2 text-[#96A5B8]">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='w-(--d-24) shrink-0 h-auto duration-300 group-hover:-rotate-180' xmlns="http://www.w3.org/2000/svg">
								<path d="M7.99976 9.49585C8.10019 9.49585 8.19773 9.52582 8.28003 9.58081L8.3562 9.64331L11.6462 12.9431L11.9998 13.2976L12.3533 12.9431L15.6208 9.67456C15.7156 9.59587 15.8364 9.55554 15.9597 9.5603C16.0855 9.56517 16.2047 9.61688 16.2937 9.70581C16.3827 9.79477 16.4352 9.9141 16.4402 10.0398C16.4449 10.163 16.4026 10.2829 16.324 10.3777L12.3474 14.3552C12.2543 14.4474 12.1288 14.4992 11.9978 14.4998H11.9968C11.9312 14.5001 11.8662 14.4874 11.8054 14.4626C11.775 14.4502 11.7458 14.4348 11.7185 14.4167L11.6423 14.3552L7.64331 10.3562C7.54889 10.2617 7.49585 10.1334 7.49585 9.99976C7.4959 9.86613 7.54882 9.7378 7.64331 9.64331C7.7378 9.54882 7.86613 9.4959 7.99976 9.49585Z" fill="#A098AE" stroke="#A098AE" />
							</svg>
						</span>
					</div>
					<div className="relative">
						<select
							value={ sorting.length ? (sorting[0].desc ? "desc" : "asc") : "" }
							onChange={ (e) => {
								if (!e.target.value) {
									setSorting([]);
									return;
								}

								handleSortByName(e.target.value as "asc" | "desc");
							} }
							className="h-(--d-48) w-full appearance-none rounded-(--d-8) border border-[#E6E8F0] bg-[#F8F9FC] px-(--d-16) pr-(--d-40) text16px-desktop text-black outline-none transition"
						>
							<option value="">Sort</option>
							<option value="asc">Name A-Z</option>
							<option value="desc">Name Z-A</option>
						</select>

						<span className="pointer-events-none absolute right-(--d-8) top-1/2 -translate-y-1/2 text-[#96A5B8]">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='w-(--d-24) shrink-0 h-auto duration-300 group-hover:-rotate-180' xmlns="http://www.w3.org/2000/svg">
								<path d="M7.99976 9.49585C8.10019 9.49585 8.19773 9.52582 8.28003 9.58081L8.3562 9.64331L11.6462 12.9431L11.9998 13.2976L12.3533 12.9431L15.6208 9.67456C15.7156 9.59587 15.8364 9.55554 15.9597 9.5603C16.0855 9.56517 16.2047 9.61688 16.2937 9.70581C16.3827 9.79477 16.4352 9.9141 16.4402 10.0398C16.4449 10.163 16.4026 10.2829 16.324 10.3777L12.3474 14.3552C12.2543 14.4474 12.1288 14.4992 11.9978 14.4998H11.9968C11.9312 14.5001 11.8662 14.4874 11.8054 14.4626C11.775 14.4502 11.7458 14.4348 11.7185 14.4167L11.6423 14.3552L7.64331 10.3562C7.54889 10.2617 7.49585 10.1334 7.49585 9.99976C7.4959 9.86613 7.54882 9.7378 7.64331 9.64331C7.7378 9.54882 7.86613 9.4959 7.99976 9.49585Z" fill="#A098AE" stroke="#A098AE" />
							</svg>
						</span>
					</div>
				</div>
			</div>

			{/* Table */ }
			<div className="overflow-x-auto">
				<table className="w-full min-w-[52vw] border-collapse text-left">
					<thead>
						{ table.getHeaderGroups().map((headerGroup) => (
							<tr key={ headerGroup.id }>
								<th className="border-b border-[#EDF2F6] px-(--d-16) py-(--d-14) text13px-desktop text-[#A3AED0]">
									#
								</th>

								{ headerGroup.headers.map((header) => (
									<th
										key={ header.id }
										className="border-b border-[#EDF2F6] px-(--d-16) py-(--d-14) text13px-desktop text-[#A3AED0]"
									>
										{ header.isPlaceholder ? null : (
											<button
												type="button"
												onClick={
													header.column.getCanSort()
														? header.column.getToggleSortingHandler()
														: undefined
												}
												className={
													header.column.getCanSort()
														? "flex items-center gap-(--d-6) transition hover:text-text"
														: "cursor-default"
												}
											>
												{ flexRender(
													header.column.columnDef.header,
													header.getContext()
												) }

												{ header.column.getCanSort() && (
													<span className="text-inherit pl-(--d-4)">
														{ header.column.getIsSorted() === "asc" ? (
															<ArrowDownAZ size={ 15 } className="w-(--d-12) h-auto shrink-0" strokeWidth={ 2.2 } />
														) : header.column.getIsSorted() === "desc" ? (
															<ArrowUpZA size={ 15 } className="w-(--d-12) h-auto shrink-0" strokeWidth={ 2.2 } />
														) : (
															<ArrowUpDown size={ 15 } className="w-(--d-12) h-auto shrink-0" strokeWidth={ 2.2 } />
														) }
													</span>
												) }
											</button>
										) }
									</th>
								)) }
							</tr>
						)) }
					</thead>

					<tbody>
						{ table.getRowModel().rows.length > 0 ? (
							table.getRowModel().rows.map((row, index) => (
								<tr key={ row.id } className="transition hover:bg-[#F8F9FC]">
									<td className="border-b border-[#EDF2F6] px-(--d-16) py-(--d-16) text14px-desktop text-[#464E5F]">
										{ String(index + 1).padStart(2, "0") }
									</td>

									{ row.getVisibleCells().map((cell) => (
										<td
											key={ cell.id }
											className="border-b border-[#EDF2F6] px-(--d-16) py-(--d-16) text14px-desktop text-[#464E5F]"
										>
											{ flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											) }
										</td>
									)) }
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan={ columns.length + 1 }
									className="px-(--d-16) py-(--d-40) text-center text14px-desktop font-medium text-[#A3AED0]"
								>
									No users found.
								</td>
							</tr>
						) }
					</tbody>
				</table>
			</div>

			{/* Footer */ }
			<div className="flex items-center justify-between pt-(--d-18)">
				<p className="text13px-desktop font-medium text-[#A3AED0]">
					Showing{ " " }
					<span className="font-semibold text-[#464E5F]">
						{ table.getRowModel().rows.length }
					</span>{ " " }
					of{ " " }
					<span className="font-semibold text-[#464E5F]">
						{ users.length }
					</span>{ " " }
					users
				</p>
			</div>
		</section>
	);
};

export default UserDirectoryTable;
