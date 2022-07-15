import Sidebar from "./components/Sidebar";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
function App() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex justifyContent="center" height="100vh" alignItems="center" direction="row">
      <Flex
        height="80vh"
        p={10}
        m={0}
        bg="#f9f9f9"
        justifyContent="center"
        minW={isDesktop ? "20vw" : "80vw"}
        borderRadius={isDesktop ? "none" : "3xl"}
        boxShadow={isDesktop ? "none" : "2xl"}
      >
        <Sidebar />
      </Flex>
      {isDesktop && (
        <Flex maxW="80vw">
          <Image height="80vh" draggable={false} alt="Cover Image" src="/assets/cover.png"></Image>
        </Flex>
      )}
    </Flex>
  );
}

export default App;
