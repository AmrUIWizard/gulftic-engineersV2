import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("login", "./routes/login.tsx"),
  layout("components/logged-wrapper.tsx", [
    route("dashboard", "routes/dashboard/dashboard.tsx"),
  ]),
] satisfies RouteConfig;
