import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

type SortOption = {
  value: string;
  label: string;
};

interface SortSelectorProps {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

export function SortSelector({
  onSelectSortOrder,
  sortOrder,
}: SortSelectorProps) {
  const sortOptions: SortOption[] = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder: SortOption =
    sortOptions.find((order) => order.value === sortOrder) || sortOptions[0];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label}
      </MenuButton>

      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem
            onClick={() => onSelectSortOrder(option.value)}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
