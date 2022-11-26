import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CryptoHomePage } from "./features/CryptoHomePage/CryptoHomePage";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <CryptoHomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
