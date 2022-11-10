import React from 'react';
import { Menu, Button } from '@mantine/core';
const Dropdown = () => {
  return (
    <div>
      <Menu shadow='md' width={200}>
        <Menu.Target>
          <Button>Nombre</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>CUENTA</Menu.Label>
          <Menu.Item>Mis datos</Menu.Item>
          <Menu.Item>Historial</Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default Dropdown;
