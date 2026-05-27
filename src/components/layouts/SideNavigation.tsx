import { Link, NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart3,
  ShoppingCart,
  ShoppingBag,
  ChartNoAxesColumnIncreasing,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  type LucideIcon,
} from "lucide-react";
import { navigationItems, type NavigationIcon } from "../../data/navigation";
// import ProIcon from "../../assets/images/pro.png";
const iconRegistry: Record<NavigationIcon, LucideIcon> = {
  dashboard: LayoutDashboard,
  users: Users,
  leaderboard: BarChart3,
  orders: ShoppingCart,
  products: ShoppingBag,
  report: ChartNoAxesColumnIncreasing,
  messages: MessageSquare,
  settings: Settings,
  signOut: LogOut,
};

const SideNavigation = () => {
  return (
    <aside className="scrollbar-hidden z-10 h-screen w-(--d-380) shrink-0 overflow-y-auto overscroll-contain bg-white px-(--d-42) py-(--d-50)">
      <div className="flex min-h-full flex-col gap-(--d-50)">
        <Link to="/" className="flex items-center gap-(--d-24)">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            className="size-(--d-56) shrink-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="56" height="56" rx="8" fill="#5D5FEF" />
            <path
              d="M22.3743 17.6274C21.2422 18.7804 21.2422 20.6463 22.3952 21.7994L24.911 24.3151C27.28 26.6842 27.28 30.5417 24.911 32.9107L20.2988 28.2985C19.1143 27.1139 18.5168 25.5521 18.5168 24.0007C18.5168 22.4493 19.1143 20.8874 20.2988 19.7029L22.3428 17.6588C22.3533 17.6483 22.3638 17.6379 22.3743 17.6274Z"
              fill="#5D5FEF"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176"
              fill="#5D5FEF"
            />
            <path
              d="M24.3868 23.7899L22.3951 21.7983C21.2421 20.6452 21.2316 18.7898 22.3742 17.6263C23.5063 16.5151 25.3092 16.5361 26.4309 17.6577C26.9969 18.2238 27.2799 18.968 27.2799 19.7018C27.2799 20.4356 26.9969 21.1798 26.4309 21.7459L25.9591 22.2176"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M34.2715 38.2246C35.4036 37.0715 35.4036 35.2056 34.2505 34.0526L31.7348 31.5368C29.3657 29.1678 29.3657 25.3102 31.7348 22.9412L36.347 27.5535C37.5315 28.738 38.129 30.2999 38.129 31.8513C38.129 33.4027 37.5315 34.9645 36.347 36.149L34.3029 38.1931C34.282 38.2141 34.2715 38.2246 34.2715 38.2246Z"
              fill="#5D5FEF"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
            <path
              d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332"
              fill="#5D5FEF"
            />
            <path
              d="M32.2479 32.0713L34.2396 34.063C35.3926 35.2161 35.4031 37.0715 34.2606 38.235C33.1285 39.3461 31.3255 39.3252 30.2039 38.2036C29.6378 37.6375 29.3548 36.8933 29.3548 36.1595C29.3548 35.4257 29.6378 34.6815 30.2039 34.1154L30.686 33.6332"
              stroke="white"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
          <span className="font-semibold text30px-desktop text-black">
            Dabang
          </span>
        </Link>

        <nav className="flex flex-col gap-(--d-12)">
          {navigationItems.map((item) => {
            const Icon = iconRegistry[item.icon];

            return (
              <NavLink
                key={item.label}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-(--d-24) rounded-(--d-16) px-(--d-24) py-(--d-16) text18px-desktop transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-white font-semibold"
                      : "text-grayblue hover:bg-[#F6F6FB]"
                  }`
                }
              >
                <Icon size={22} strokeWidth={2.2} className="size-(--d-24)" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* <div className="mt-auto rounded-(--d-20) bg-primary px-(--d-20) py-(--d-24) text-center text-white">
          <div className="mx-auto mb-(--d-14) flex size-(--d-48) items-center justify-center rounded-(--d-16) bg-white text-primary">
            <BadgeDollarSign size={24} strokeWidth={2.4} />
          </div>
          <p className="text16px-desktop font-semibold leading-[1.4]">
            Dabang Pro
          </p>
          <p className="mx-auto mt-(--d-6) max-w-[8.5vw] text10px-desktop font-medium leading-[1.5] text-white/80">
            Get access to all features on dashboard
          </p>
          <button
            type="button"
            className="mt-(--d-16) rounded-(--d-8) bg-white px-(--d-18) py-(--d-10) text12px-desktop font-semibold text-primary transition hover:brightness-95"
          >
            Get Pro
          </button>
        </div> */}
        <div className="relative mt-auto h-[239px] w-[208px] overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#5D5FEF_0%,#5A5CF6_100%)] px-[24px] py-[30px] text-center text-white">
          {/* Top Right Shape */}
          <div className="absolute -right-[130px] -top-[120px] h-[256px] w-[256px] rounded-full bg-white/15" />

          {/* Bottom Left Shape */}
          <div className="absolute -bottom-[150px] -left-[120px] h-[242px] w-[242px] rounded-full bg-white/10" />

          <div className="relative z-[1] flex flex-col items-center">
            {/* Icon */}
            <div className="mb-[16px] flex h-[48px] w-[48px] items-center justify-center overflow-hidden rounded-[14px] bg-white">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.3733 2.01372C5.2412 3.16679 5.2412 5.03265 6.39427 6.18572L8.91004 8.7015C11.2791 11.0705 11.2791 14.928 8.91004 17.2971L4.29779 12.6848C3.11327 11.5003 2.51578 9.93842 2.51578 8.38702C2.51578 6.83563 3.11327 5.27375 4.29779 4.08924L6.34185 2.04517C6.35234 2.03469 6.36282 2.02421 6.3733 2.01372Z"
                  fill="#5D5FEF"
                />
                <path
                  d="M8.38581 8.17627L6.39415 6.18462C5.24108 5.03155 5.2306 3.17617 6.37318 2.01262C7.50528 0.901485 9.30826 0.922449 10.4299 2.04407C10.9959 2.61012 11.2789 3.35437 11.2789 4.08813C11.2789 4.8219 10.9959 5.56615 10.4299 6.1322L9.95817 6.60391"
                  fill="#5D5FEF"
                />
                <path
                  d="M18.2705 22.6109C19.4026 21.4578 19.4026 19.592 18.2496 18.4389L15.7338 15.9231C13.3648 13.5541 13.3648 9.69659 15.7338 7.32757L20.346 11.9398C21.5305 13.1243 22.128 14.6862 22.128 16.2376C22.128 17.789 21.5305 19.3509 20.346 20.5354L18.302 22.5795C18.281 22.6004 18.2705 22.6109 18.2705 22.6109Z"
                  fill="#5D5FEF"
                />
                <path
                  d="M16.247 16.4577L18.2386 18.4493C19.3917 19.6024 19.4022 21.4578 18.2596 22.6213C17.1275 23.7325 15.3245 23.7115 14.2029 22.5899C13.6368 22.0238 13.3538 21.2796 13.3538 20.5458C13.3538 19.812 13.6368 19.0678 14.2029 18.5017L14.6851 18.0195"
                  fill="#5D5FEF"
                />
              </svg>
            </div>

            {/* Title */}
            <h3 className="text-[18px] font-semibold leading-[1.2] tracking-[-0.2px] text-white">
              Dabang Pro
            </h3>

            {/* Description */}
            <p className="mt-[12px] max-w-[132px] text-center text-[11px] font-medium leading-[1.6] text-white/75">
              Get access to all
              <br />
              features on tetumbas
            </p>

            {/* Button */}
            <button
              type="button"
              className="mt-[12px] flex h-[40px] w-[116px] items-center justify-center rounded-[10px] bg-white text-[14px] font-semibold text-[#5D5FEF] transition hover:opacity-90 cursor-pointer"
            >
              Get Pro
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNavigation;
