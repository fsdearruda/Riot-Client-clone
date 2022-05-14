import Sidebar from "./components/Sidebar";
import { Flex, Image } from "@chakra-ui/react";
function App() {
  return (
    <Flex height="100vh" alignItems="center" direction="row">
      <Flex p={10} m={0} bg="#f9f9f9" justifyContent="center" minW="20vw">
        <Sidebar />
      </Flex>
      <Flex minW="80vw">
        <Image alt="Imagem foda" src="https://images.contentstack.io/v3/assets/blt187521ff0727be24/blt31bf9f8550de0840/60ee140691d9e12c4837c20f/zaun-backstreetdeals.jpg"></Image>
      </Flex>
    </Flex>
  );
}

export default App;
