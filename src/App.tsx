import Sidebar from "./components/Sidebar";
import { Flex, Image, useBreakpointValue } from "@chakra-ui/react";
function App() {
  const isDesktop = useBreakpointValue({ base: false, md: true });
  return (
    <Flex justifyContent="center" height="100vh" alignItems="center" direction="row">
      <Flex justifyContent="center">
        <Sidebar />
      </Flex>
      {isDesktop && (
        <Flex maxW="80vw">
          <Image height="90vh" draggable={false} alt="Cover Image" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg"></Image>
        </Flex>
      )}
    </Flex>
  );
}

export default App;
