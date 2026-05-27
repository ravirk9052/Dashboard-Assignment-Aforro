import { dashboardMetrics } from "../../data/dashboardMetrics";

const TopProductsTable = () => {
	return (
		<section className="h-full rounded-(--d-20) bg-white px-(--d-24) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
			<h2 className="mb-(--d-18) text20px-desktop font-semibold leading-[1.6] text-text">
				Top Products
			</h2>

			<div className="grid grid-cols-[0.4fr_2.1fr_1.1fr_0.7fr] border-b border-[#EDF2F6] pb-(--d-10) text12px-desktop font-medium text-[#A3AED0]">
				<span>#</span>
				<span>Name</span>
				<span>Popularity</span>
				<span className="text-right">Sales</span>
			</div>

			<div className="flex flex-col">
				{ dashboardMetrics.productPerformance.map((product) => (
					<div
						key={ product.id }
						className="grid grid-cols-[0.4fr_2.1fr_1.1fr_0.7fr] items-center border-b border-[#EDF2F6] py-(--d-12) last:border-b-0"
					>
						<span className="text12px-desktop font-medium text-[#464E5F]">{ product.id }</span>
						<span className="text12px-desktop font-medium text-[#464E5F]">{ product.name }</span>
						<div className="h-(--d-4) overflow-hidden rounded-full bg-[#EDF2F6]">
							<div
								className="h-full rounded-full"
								style={ { width: `${product.popularity}%`, backgroundColor: product.color } }
							/>
						</div>
						<div className="flex justify-end">
							<span
								className="rounded-(--d-8) border px-(--d-8) py-(--d-4) text10px-desktop font-semibold"
								style={ {
									borderColor: product.color,
									color: product.color,
									backgroundColor: `${product.color}12`,
								} }
							>
								{ product.sales }%
							</span>
						</div>
					</div>
				)) }
			</div>
		</section>
	);
};

export default TopProductsTable;
