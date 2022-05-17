import Sidebar from "./components/Sidebar";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
function App() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex justifyContent="center" height="100vh" alignItems="center" direction="row">
      <Flex
        height="81vh"
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
        <Flex minW="80vw">
          <Image
            height="81vh"
            draggable={false}
            alt="Imagem foda"
            src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt31bf9f8550de0840/60ee140691d9e12c4837c20f/zaun-backstreetdeals.jpg"
          ></Image>
        </Flex>
      )}
    </Flex>
  );
}

export default App;
