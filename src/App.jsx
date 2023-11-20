import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const AppLayout = lazy(() => import("./ui/AppLayout"));
const Home = lazy(() => import("./ui/Home"));
const Menu = lazy(() => import("./features/menu/Menu"));
const Cart = lazy(() => import("./features/cart/Cart"));
const CreateOrder = lazy(() => import("./features/order/CreateOrder"));
const Order = lazy(() => import("./features/order/Order"));
const Error = lazy(() => import("./ui/Error"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/delivery/",
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/delivery/",
        element: <Home />,
      },
      {
        path: "/delivery/menu",
        element: <Menu />,
      },
      {
        path: "/delivery/cart",
        element: <Cart />,
      },
      {
        path: "/delivery/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/delivery/order/:orderId",
        element: <Order />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
