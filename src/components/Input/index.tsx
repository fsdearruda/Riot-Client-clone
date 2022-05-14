import "./style.css";
import { Text, Input, IconButton, Icon, Checkbox, HStack, Flex, InputGroup, InputRightElement, SlideFade, useDisclosure } from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

type UserInputProps = {
  type: "text" | "password";
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
};

const UserInput = ({ type, value, onChange, placeholder }: UserInputProps) => {
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(true);

  return type === "password" ? (
    <InputGroup className={`password-input${focused || value ? " active" : ""}`}>
      <Input
        p="0.5rem"
        bg="#ededed"
        _hover={{ backgroundColor: "#e7e7e7" }}
        _focusWithin={{ backgroundColor: "#f9f9f9" }}
        pr="4.5rem"
        height="60px"
        value={value}
        onChange={onChange}
        onFocus={e => setFocused(true)}
        onBlur={e => setFocused(false)}
        my={2}
        maxW="50ch"
        focusBorderColor="black"
        type={hidden ? "password" : "text"}
      />
     {/*  {focused && ( */}
        <InputRightElement as="span" onClick={(e: any) => e.stopPropagation()}>
          <IconButton
            bg="transparent"
            _hover={{ backgroundColor: "transparent" }}
            _focusWithin={{ backgroundColor: "transparent" }}
            transform="auto"
            translateY="4"
            translateX="-1"
            h="2rem"
            aria-label={hidden ? "Mostrar conteúdo" : "Esconder conteúdo"}
            icon={<Icon w={5} h={5} as={hidden ? AiOutlineEyeInvisible : AiOutlineEye}></Icon>}
            onClick={(e: any) => {
              setHidden(!hidden);
            }}
          ></IconButton>
        </InputRightElement>
    {/*   )} */}
    </InputGroup>
  ) : (
    <InputGroup className={`username-input${focused || value ? " active" : ""}`}>
      <Input
        p="0.5rem"
        bg="#ededed"
        height="60px"
        _hover={{ backgroundColor: "#e7e7e7" }}
        _focusWithin={{ backgroundColor: "#f9f9f9" }}
        value={value}
        onChange={onChange}
        onFocus={e => setFocused(true)}
        onBlur={e => setFocused(false)}
        my={2}
        maxW="50ch"
        focusBorderColor="black"
        type="text"
      />
    </InputGroup>
  );
};

export default UserInput;
