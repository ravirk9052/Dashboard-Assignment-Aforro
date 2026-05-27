import type { ReactNode } from "react";
import {
  dashboardMetrics,
  type SalesMetricCard,
  type SalesMetricIcon,
} from "../../data/dashboardMetrics";

const icons: Record<SalesMetricIcon, ReactNode> = {
  chart: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="w-(--d-24) shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3C3.89543 3 3 3.89545 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89545 20.1046 3 19 3H5ZM8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13V17C6 17.5523 6.44772 18 7 18C7.55228 18 8 17.5523 8 17V13ZM12 9C12.5523 9 13 9.44769 13 10V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V10C11 9.44769 11.4477 9 12 9ZM18 7C18 6.44769 17.5523 6 17 6C16.4477 6 16 6.44769 16 7V17C16 17.5523 16.4477 18 17 18C17.5523 18 18 17.5523 18 17V7Z"
        fill="white"
      />
    </svg>
  ),
  order: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="w-(--d-24) shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 6C4 3.79086 5.79086 2 8 2H14V6C14 8.20914 15.7909 10 18 10H20V18C20 20.2091 18.2091 22 16 22H8C5.79086 22 4 20.2091 4 18V6ZM8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H8ZM8 15C7.44772 15 7 15.4477 7 16C7 16.5523 7.44772 17 8 17H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H8ZM16.6818 4.19879L16.5509 6.16288C16.5106 6.76656 17.0115 7.26743 17.6152 7.22718L19.5792 7.09624C20.4365 7.03909 20.8274 5.99887 20.2198 5.39135L18.3867 3.5582C17.7792 2.95068 16.7389 3.34153 16.6818 4.19879Z"
        fill="white"
      />
    </svg>
  ),
  check: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="w-(--d-24) shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6261 5.26532L13.3263 5.73673C12.8222 5.80875 12.4103 6.04904 12.1162 6.38114L4.41674 14.0806C3.6357 14.8616 3.63566 16.1279 4.41674 16.909L7.24517 19.7374C8.02625 20.5185 9.29255 20.5185 10.0736 19.7374L17.773 12.038C18.1051 11.7439 18.3454 11.332 18.4174 10.8279L18.8888 7.52803C19.0775 6.20815 17.946 5.07671 16.6261 5.26532ZM14.3162 9.83793C14.7067 10.2284 15.3399 10.2285 15.7305 9.83793C16.121 9.4474 16.1209 8.81421 15.7305 8.42371C15.34 8.03322 14.7068 8.03319 14.3162 8.42372C13.9257 8.81424 13.9257 9.44743 14.3162 9.83793Z"
        fill="white"
      />
    </svg>
  ),
  user: (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="w-(--d-24) shrink-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8C14 10.2091 12.2091 12 10 12C7.79086 12 6 10.2091 6 8C6 5.79086 7.79086 4 10 4C12.2091 4 14 5.79086 14 8ZM10 13C6.13401 13 3 15.2386 3 18C3 19.1046 3.89543 20 5 20H15C16.1046 20 17 19.1046 17 18C17 15.2386 13.866 13 10 13ZM18 6C18.5523 6 19 6.44772 19 7V8H20C20.5523 8 21 8.44772 21 9C21 9.55228 20.5523 10 20 10H19V11C19 11.5523 18.5523 12 18 12C17.4477 12 17 11.5523 17 11V10H16C15.4477 10 15 9.55228 15 9C15 8.44771 15.4477 8 16 8H17V7C17 6.44772 17.4477 6 18 6Z"
        fill="white"
      />
    </svg>
  ),
};

type StatCardProps = {
  item: SalesMetricCard;
};

const StatCard = ({ item }: StatCardProps) => (
  <div
    style={{ backgroundColor: item.bgColor }}
    className="flex min-w-0 flex-1 flex-col rounded-(--d-20) p-(--d-20)"
  >
    <div
      style={{ backgroundColor: item.iconBg }}
      className="flex size-(--d-40) items-center justify-center rounded-full"
    >
      {icons[item.icon]}
    </div>
    <p className="text24px-desktop font-semibold leading-[1.3] text-text mt-(--d-16)">
      {item.value}
    </p>
    <p className="text16px-desktop font-medium text-[#425166] leading-normal mt-(--d-8)">
      {item.label}
    </p>
    <p className="text-[#4079ED] text12px-desktop font-medium leading-[1.3] mt-(--d-8)">
      {item.change}
    </p>
  </div>
);

const SalesOverviewCards = () => {
  return (
    <div className="rounded-(--d-20) bg-white px-(--d-30) py-(--d-24) shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      <div className="flex items-start justify-between mb-[2.240vw]">
        <div className="space-y-(--d-4)">
          <h2 className="text20px-desktop font-semibold text-text leading-[1.6]">
            Today's Sales
          </h2>
          <p className="text16px-desktop text-grayblue leading-[1.875]">
            Sales Summary
          </p>
        </div>

        <button className="flex cursor-pointer items-center gap-1.5 rounded-(--d-8) border border-[#C3D3E2] bg-white px-(--d-16) py-(--d-10) text14px-desktop font-medium text-text leading-[1.4]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="size-(--d-16) shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.1007 5.11257L8.43899 2.83138C8.31472 2.72244 8.15784 2.66671 8.00013 2.66663C7.89223 2.66657 7.78393 2.69257 7.68544 2.74541C7.64154 2.76889 7.59984 2.79757 7.56128 2.83138L4.89959 5.11257C4.62003 5.35217 4.58763 5.77303 4.82723 6.0526C5.06683 6.33216 5.4877 6.36456 5.76726 6.12496L7.33342 4.78268V9.94578C7.33342 10.314 7.6319 10.6124 8.00009 10.6124C8.36828 10.6124 8.66676 10.314 8.66676 9.94578L8.66676 4.78261L10.233 6.12496C10.5126 6.36456 10.9334 6.33216 11.173 6.0526C11.4126 5.77303 11.3802 5.35217 11.1007 5.11257ZM4.00008 9.33329C4.00008 8.9651 4.29856 8.66663 4.66675 8.66663H5.66675C6.03494 8.66663 6.33341 8.36815 6.33341 7.99996C6.33341 7.63177 6.03494 7.33329 5.66675 7.33329H4.66675C3.56218 7.33329 2.66675 8.22872 2.66675 9.33329V11.3333C2.66675 12.4379 3.56218 13.3333 4.66675 13.3333H11.3334C12.438 13.3333 13.3334 12.4379 13.3334 11.3333V9.33329C13.3334 8.22872 12.438 7.33329 11.3334 7.33329H10.3334C9.96522 7.33329 9.66675 7.63177 9.66675 7.99996C9.66675 8.36815 9.96522 8.66663 10.3334 8.66663H11.3334C11.7016 8.66663 12.0001 8.9651 12.0001 9.33329V11.3333C12.0001 11.7015 11.7016 12 11.3334 12H4.66675C4.29856 12 4.00008 11.7015 4.00008 11.3333V9.33329Z"
              fill="#0F3659"
            />
          </svg>
          Export
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {dashboardMetrics.salesCards.map((item) => (
          <StatCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default SalesOverviewCards;
