import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// TODO: answer here
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

const AnswerHere = () => (
  <App /> // TODO: replace this
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <AnswerHere />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
