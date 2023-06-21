import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface SearchInputProps {
    onSearch: (searchTerm: string) => void;
}

export function SearchInput({ onSearch }: SearchInputProps) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form

      onSubmit={(event) => {
        event.preventDefault();
        if(ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder={"Search games..."}
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
}
