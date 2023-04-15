import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import Map from "./components/Map";
import Footer from "./components/Footer";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Map />
      <Footer />
    </QueryClientProvider>
  );
};

export default App;
