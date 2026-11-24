import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Applayout from './Applayout';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './pages/Login';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Details from './pages/Details';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  const router = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        { path: '/login', element: <Login /> },
        { path: '/tour/:id', element: <Details /> },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools
        initialIsOpen={false}
        position="bottom"
        buttonPosition="bottom-right"
      />
    </QueryClientProvider>
  );
}

export default App;
