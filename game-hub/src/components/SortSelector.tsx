import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Relevance</MenuItem>

        <MenuItem>Date added</MenuItem>

        <MenuItem>name</MenuItem>

        <MenuItem>Release Date</MenuItem>

        <MenuItem>Popularity</MenuItem>

        <MenuItem>Avarage rating</MenuItem>
      </MenuList>
    </Menu>
  );
  <div>SortSelector</div>;
};

export default SortSelector;
