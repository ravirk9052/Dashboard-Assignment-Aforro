# Dabang Technical Assignment - React Developer Role

This repository contains my implementation of the technical assignment for the React Developer position at **Dabang**. The project is a robust React application focused on clean architecture, efficient state management, and a responsive user experience.

## 🚀 Implementation Approach

My approach focused on scalability, maintainability, and following modern React best practices:

### 1. Data Fetching & Networking
- **Axios:** Used as the primary HTTP client for all API interactions. It was chosen for its robust interceptor support, easy error handling, and ability to handle asynchronous requests efficiently.
- **Centralized API Logic:** I implemented a clean pattern for API calls to ensure that the networking layer is separated from the UI components, making the code easier to test and maintain.

### 2. Component Architecture
- **Modular Design:** Components are organized into small, reusable units following Atomic Design principles for better maintainability.
- **Data Visualization:** Integrated **Recharts** for interactive and responsive data visualization.
- **Advanced Data Grids:** Leveraged **TanStack Table** for high-performance, feature-rich data display and manipulation.
- **Responsive UI:** Styled to ensure compatibility across mobile, tablet, and desktop views.

### 4. Code Quality
- **Modern React:** Built using **React 19**, taking advantage of the latest performance improvements and features.
- **ESLint:** Configured to enforce a consistent coding style and catch common errors early.
- **Type Safety:** If TypeScript was used, interfaces are strictly defined for all API responses and component props.

---

## 🛠️ Tech Stack

- **Frontend:** React.js (v19)
- **Build Tool:** Vite (v8)
- **HTTP Client:** Axios
- **State Management:** React Hooks / Context API
- **Styling:** Tailwind CSS (v4)
- **Key Libraries:** TanStack Table, Recharts, Lucide-React

---

## ⚙️ Setup and Installation

Follow these steps to run the project locally:

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-github-repo-link-dabang>
   cd dabang
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add any necessary API keys or base URLs:
   ```env
   VITE_API_BASE_URL=https://api.example.com
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🎥 Submission Details
As requested by the Dabang recruitment team, the walk-through video explaining the code logic and the final build can be found [Link to your video or mention if it's attached].