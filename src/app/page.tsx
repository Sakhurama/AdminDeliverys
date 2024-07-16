"use client"

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { useGraphQLClient } from "@/libs/adapters/apollo/client";
import Login from "@/components/Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TablesPage = () => {
  const client = useGraphQLClient(null);



  return (
    <ApolloProvider client={client}>
      <ToastContainer />
      <Login />
    </ApolloProvider>
  );
};

export default TablesPage;