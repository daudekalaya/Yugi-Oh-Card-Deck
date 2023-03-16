// TODO: answer here
import { Box, Heading, Center } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail"

const App = () => {
  const MyRouter = () => 
  <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card/:id" element={<Detail />} />
        <Route path="*" element={<Center m={"48"}><Heading fontSize={"3xl"}>404 Page not found!</Heading></Center>} />
    </Routes>
  </div>; // TODO: replace this

  return (
    <div className="App">
      {/* Navbar */}
      <Box w={"full"} /*w="100vw"*/ bg="#b25819" p={6}>
        <Center>
          <Heading as="h1" color="#e2ded5">
            Yugi-Oh Card Deck
          </Heading>
        </Center>
      </Box>

      {/* Route */}
      <MyRouter />
    </div>
  );
};

export default App;
