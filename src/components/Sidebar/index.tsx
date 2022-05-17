import { Text, Input, IconButton, Icon, Checkbox, HStack, Flex, Box, SlideFade, useDisclosure } from "@chakra-ui/react";
import { BsArrowRightShort, BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";
import UserInput from "../Input";

const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [hidden, setHidden] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
  };

  return (
    <Flex direction="column" justifyContent="center" alignItems="center">
      <Text my={12} fontWeight="bold" fontSize="3xl">
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
          {/*      <IconButton
            _hover={{ backgroundColor: "#f7f7f7" }}
            _focusWithin={{ backgroundColor: "#f0f0f0" }}
            colorScheme="whiteAlpha"
            aria-label="Fazer login via Google"
            icon={<Icon w={4} h={4} as={FcGoogle} />}
          ></IconButton> */}
          {/*         <IconButton
            _hover={{ backgroundColor: "#141414" }}
            _focusWithin={{ backgroundColor: "#292929" }}
            bg="black"
            aria-label="Fazer login via Apple"
            icon={<Icon color="white" w={4} h={4} as={BsApple} />}
          ></IconButton> */}
        </HStack>

        <Checkbox fontWeight="semibold" colorScheme="red">
          Manter Login
        </Checkbox>
        {/* Trocar "username.length < 2 || !password" por um state ou algo do tipo */}
        <Flex py="50%" justifyContent="center" alignItems="center">
          <IconButton
            type="submit"
            isDisabled={username.length < 2 || !password}
            size="lg"
            aria-label="Enviar"
            colorScheme="red"
            borderRadius="xl"
            _hover={{ backgroundColor: "interactable.700" }}
            bg={username.length < 2 || !password ? "#f9f9f9" : "interactable.600"}
            outline={username.length < 2 || !password ? "3px solid #e8e8e8" : "none"}
            icon={<Icon w={8} h={8} as={BsArrowRightShort} color={username.length < 2 || !password ? "#e8e8e8" : "white"} />}
          />
        </Flex>
        <Text userSelect="none" onClick={onToggle} cursor="pointer" textAlign="center" fontSize="sm" fontWeight="bold" _hover={{ color: "#0c0c0c" }} color="GrayText">
          NÃO CONSEGUE INICIAR SSESSÃO?
        </Text>
        <SlideFade in={isOpen} offsetY="20px">
          <Text textAlign="center" fontSize="sm" fontWeight="bold" color="GrayText">
            AINDA BEM!
          </Text>
        </SlideFade>
      </form>
    </Flex>
  );
};

export default Sidebar;
