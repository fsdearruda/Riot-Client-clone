import { Text, Input, IconButton, Icon, Checkbox, HStack, Flex, InputGroup, InputRightElement, SlideFade, useDisclosure } from "@chakra-ui/react";
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
        <HStack my={2} justifyContent="flex-start" mb={4} spacing={5}>
          <IconButton colorScheme="facebook" aria-label="Fazer login via Facebook" icon={<Icon w={4} h={4} as={BsFacebook} />}></IconButton>
          <IconButton
            _hover={{ backgroundColor: "#f7f7f7" }}
            _focusWithin={{ backgroundColor: "#f0f0f0" }}
            colorScheme="whiteAlpha"
            aria-label="Fazer login via Google"
            icon={<Icon w={4} h={4} as={FcGoogle} />}
          ></IconButton>
          <IconButton
            _hover={{ backgroundColor: "#141414" }}
            _focusWithin={{ backgroundColor: "#292929" }}
            bg="black"
            aria-label="Fazer login via Apple"
            icon={<Icon color="white" w={4} h={4} as={BsApple} />}
          ></IconButton>
        </HStack>

        <Checkbox fontWeight="semibold" colorScheme="red">
          Manter Login
        </Checkbox>

        <Flex py="50%" justifyContent="center" alignItems="center">
          <IconButton
            type="submit"
            isDisabled={username.length < 2 || !password}
            size="lg"
            aria-label="Enviar"
            colorScheme="red"
            borderRadius="xl"
            _hover={{ backgroundColor: "interactable.700" }}
            bg="interactable.600"
            icon={<Icon w={8} h={8} as={BsArrowRightShort} />}
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

      {/*    <form onSubmit={handleSubmit}>
        <Input
          bg="#ededed"
          _hover={{ backgroundColor: "#e7e7e7" }}
          _focusWithin={{ backgroundColor: "#f9f9f9" }}
          value={username}
          onChange={e => setUsername(e.target.value)}
          my={2}
          maxW="50ch"
          focusBorderColor="black"
          placeholder="NOME DE USUÁRIO"
          type="text"
        />
        <InputGroup>
          <Input
            bg="#ededed"
            _hover={{ backgroundColor: "#e7e7e7" }}
            _focusWithin={{ backgroundColor: "#f9f9f9" }}
            pr="4.5rem"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={e => setPasswordFocus(true)}
            my={2}
            maxW="50ch"
            focusBorderColor="black"
            placeholder="SENHA"
            type={hidden ? "password" : "text"}
          />
          {passwordFocus && (
            <InputRightElement onClick={(e: any) => e.stopPropagation()}>
              <IconButton
                bg="transparent"
                _hover={{ backgroundColor: "transparent" }}
                _focusWithin={{ backgroundColor: "transparent" }}
                transform="auto"
                translateY="2"
                translateX="-1"
                h="2rem"
                aria-label={hidden ? "Mostrar conteúdo" : "Esconder conteúdo"}
                icon={<Icon w={5} h={5} as={hidden ? AiOutlineEyeInvisible : AiOutlineEye}></Icon>}
                onClick={(e: any) => {
                  setHidden(!hidden);
                }}
              ></IconButton>
            </InputRightElement>
          )}
        </InputGroup>

        <HStack my={2} justifyContent="flex-start" mb={4} spacing={5}>
          <IconButton colorScheme="facebook" aria-label="Fazer login via Facebook" icon={<Icon w={4} h={4} as={BsFacebook} />}></IconButton>
          <IconButton
            _hover={{ backgroundColor: "#f7f7f7" }}
            _focusWithin={{ backgroundColor: "#f0f0f0" }}
            colorScheme="whiteAlpha"
            aria-label="Fazer login via Google"
            icon={<Icon w={4} h={4} as={FcGoogle} />}
          ></IconButton>
          <IconButton
            _hover={{ backgroundColor: "#141414" }}
            _focusWithin={{ backgroundColor: "#292929" }}
            bg="black"
            aria-label="Fazer login via Apple"
            icon={<Icon color="white" w={4} h={4} as={BsApple} />}
          ></IconButton>
        </HStack>

        <Checkbox fontWeight="semibold" colorScheme="red">
          Manter Login
        </Checkbox>

        <Flex py="50%" justifyContent="center" alignItems="center">
          <IconButton
            type="submit"
            isDisabled={username.length < 2 || !password}
            size="lg"
            aria-label="Enviar"
            colorScheme="red"
            borderRadius="xl"
            _hover={{ backgroundColor: "interactable.700" }}
            bg="interactable.600"
            icon={<Icon w={8} h={8} as={BsArrowRightShort} />}
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
      </form> */}
    </Flex>
  );
};

export default Sidebar;
