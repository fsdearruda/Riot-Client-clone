import { Text, Box, Icon, Checkbox, HStack, Flex, SlideFade, useDisclosure, Image } from "@chakra-ui/react";
import { BsArrowRightShort, BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import UserInput from "../Input";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (username.length < 2 || !password) return;
    setUsername("");
    setPassword("");
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Image my={12} height="30px" src="/assets/riot-logo.png" alt="riot games logo" />
      <Text my={4} fontWeight="bold" fontSize="3xl">
        Fazer Login
      </Text>
      <form onSubmit={handleSubmit}>
        <UserInput
          type="text"
          value={username}
          onChange={(e: any) => {
            setUsername(e.target.value);
          }}
        />
        <UserInput
          type="password"
          value={password}
          onChange={(e: any) => {
            setPassword(e.target.value);
          }}
        />
        <HStack my={2} justifyContent="space-between" mb={4} spacing={5}>
          <Flex
            boxShadow="md"
            aria-label="Fazer login via Facebook"
            as="button"
            width="80px"
            justifyContent="center"
            borderRadius="md"
            p={2.5}
            bg="#1877f2"
            _hover={{ backgroundColor: "#0966de" }}
          >
            <Icon color="white" w={4} h={4} as={BsFacebook} />
          </Flex>
          <Flex
            boxShadow="md"
            aria-label="Fazer login via Google"
            as="button"
            width="80px"
            justifyContent="center"
            borderRadius="md"
            p={2.5}
            bg="#ffffff"
            _hover={{ backgroundColor: "#f7f7f7" }}
          >
            <Icon w={4} h={4} as={FcGoogle} />
          </Flex>
          <Flex
            boxShadow="md"
            aria-label="Fazer login via Apple"
            as="button"
            width="80px"
            justifyContent="center"
            borderRadius="md"
            p={2.5}
            bg="#000000"
            _hover={{ backgroundColor: "#141414" }}
          >
            <Icon color="white" w={4} h={4} as={BsApple} />
          </Flex>
        </HStack>

        <Checkbox m={1} fontWeight="semibold" colorScheme="red">
          Manter Login
        </Checkbox>

        {/* Trocar "username.length < 2 || !password" por um state ou algo do tipo */}
        <Flex my="30%" justifyContent="center" alignItems="center">
          <Flex
            cursor={username.length < 2 || !password ? "not-allowed" : "pointer"}
            justifyContent="center"
            p={4}
            as="button"
            type="submit"
            aria-label="Enviar"
            bg={username.length < 2 || !password ? "#f9f9f9" : "interactable.600"}
            _hover={{ backgroundColor: username.length < 2 || !password ? "none" : "interactable.700" }}
            borderRadius="2xl"
            outline={username.length < 2 || !password ? "2px solid #e8e8e8" : "none"}
          >
            <Icon m={0} as={BsArrowRightShort} w={8} h={8} color={username.length < 2 || !password ? "#e8e8e8" : "white"} />
          </Flex>
          {/*        <IconButton
            type="submit"
            isDisabled={username.length < 2 || !password}
            size="lg"
            aria-label="Enviar"
            colorScheme="red"
            borderRadius="xl"
            _hover={{ backgroundColor: username.length < 2 || !password ? "none" : "interactable.700" }}
            bg={username.length < 2 || !password ? "#f9f9f9" : "interactable.600"}
            outline={username.length < 2 || !password ? "2px solid #e8e8e8" : "none"}
            icon={<Icon w={8} h={8} as={BsArrowRightShort} color={username.length < 2 || !password ? "#e8e8e8" : "white"} />}
          /> */}
        </Flex>
        <Text userSelect="none" onClick={onToggle} cursor="pointer" textAlign="center" fontSize="sm" fontWeight="bold" _hover={{ color: "#0c0c0c" }} color="GrayText">
          NÃO CONSEGUE INICIAR SSESSÃO?
        </Text>
        <SlideFade in={isOpen} offsetY="20px">
          <Text userSelect="none" textAlign="center" fontSize="sm" fontWeight="bold" color="GrayText">
            AINDA BEM!
          </Text>
        </SlideFade>
      </form>
    </Flex>
  );
};

export default Sidebar;
