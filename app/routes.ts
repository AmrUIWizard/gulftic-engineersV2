import { type RouteConfig, index, route } from "@react-router/dev/routes";
import withProtectedRoute from "./components/withProtectedRoute";

const protectedRoutes = [
  {
    path: "/dashboard",
    file: "./routes/dashboard/dashboard.tsx",
    children: [{ path: "settings", file: "./routes/dashboard/settings.tsx" }],
  },
];

export default [
  index("./routes/home.tsx"),
  route("login", "./routes/login.tsx"),

  ...protectedRoutes.map((route) => ({
    path: route.path,
    file: route.file, // Ensure `file` is present
    element: withProtectedRoute(route.file, "/login"), // Apply HOC
    children: route.children?.map((child) => ({
      path: child.path,
      file: child.file, // Ensure `file` is present
      element: withProtectedRoute(child.file, "/login"), // Apply HOC for children
    })),
  })),
] satisfies RouteConfig;
