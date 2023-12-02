import React from 'react';
import { HStack, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';

import UpArrowIcon from 'assets/icons/Arrow/UpArrowIcon';
import DownArrowIcon from 'assets/icons/Arrow/DownArrowIcon';
import CalendarIcon from 'assets/icons/CalendarIcon';

interface DocumentFirstFilterProps {
  onFilterChange: (value: string) => void;
  sortOrder: string;
}

const DocumentFirstFilter: React.FC<DocumentFirstFilterProps> = ({ onFilterChange, sortOrder }) => {
  const getIcon = (menuItemValue: string) => {
    switch (menuItemValue) {
      case 'asc':
        return <Icon as={UpArrowIcon} w="12px" h="12px" />;
      case 'desc':
        return <Icon as={DownArrowIcon} w="12px" h="12px" />;
      case 'newest':
      case 'oldest':
        return <Icon as={CalendarIcon} />;
      default:
        return null;
    }
  };

  return (
    <HStack spacing="8px">
      <Menu defaultIsOpen>
        <MenuButton as={HStack} bg="white" p="4px 12px" border="1px" borderColor="blue.700" borderRadius="32">
          <span>Options de tri</span>
          {getIcon(sortOrder)}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => onFilterChange('newest')}>
            {getIcon('newest')} Plus récent
          </MenuItem>
          <MenuItem onClick={() => onFilterChange('oldest')}>
            {getIcon('oldest')} Plus ancien
          </MenuItem>
          <MenuItem onClick={() => onFilterChange('asc')}>
            {getIcon('asc')} Tri alphabétique
          </MenuItem>
          <MenuItem onClick={() => onFilterChange('desc')}>
            {getIcon('desc')} Tri antialphabétique
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default DocumentFirstFilter;
