import "./style.css";
import { Input, Icon, InputGroup, InputRightElement } from "@chakra-ui/react";
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

  // Refazer o css usando styled components

  return type === "password" ? (
    <InputGroup className={`password-input${focused || value ? " active" : ""}`}>
      <Input
        p="0.5rem"
        pt="1rem"
        bg="#ededed"
        _hover={{ backgroundColor: "#e7e7e7" }}
        _focusWithin={{ backgroundColor: "#f9f9f9" }}
        pr="4.5rem"
        height="3.5rem"
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        my={2}
        maxW="50ch"
        focusBorderColor="black"
        type={hidden ? "password" : "text"}
      />
      {focused && (
        <InputRightElement>
          <Icon
            bg="transparent"
            _hover={{ backgroundColor: "transparent" }}
            _focusWithin={{ backgroundColor: "transparent" }}
            transform="auto"
            translateY="4"
            translateX="-1"
            w={5}
            h={5}
            cursor="pointer"
            aria-label={hidden ? "Mostrar conteúdo" : "Esconder conteúdo"}
            as={hidden ? AiOutlineEyeInvisible : AiOutlineEye}
            onClick={() => setHidden(!hidden)}
            onMouseDown={(e: any) => e.preventDefault()}
            onMouseUp={(e: any) => e.preventDefault()}
          ></Icon>
        </InputRightElement>
      )}
    </InputGroup>
  ) : (
    <InputGroup className={`username-input${focused || value ? " active" : ""}`}>
      <Input
        p="0.5rem"
        pt="1rem"
        bg="#ededed"
        height="3.5rem"
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
