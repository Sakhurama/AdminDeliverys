"use client";

import React, { useEffect, useState, ReactNode } from "react";
import Loader from "@/components/common/Loader";
import { ApolloProvider } from "@apollo/client";
import { useGraphQLClient } from "@/libs/adapters/apollo/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


interface ClientProviderProps {
  children: ReactNode;
}

export default function ClientProvider({ children }: ClientProviderProps) {
  const client = useGraphQLClient(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      {loading ? <Loader /> : children}
    </ApolloProvider>
  );
}
