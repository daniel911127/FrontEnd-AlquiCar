import React from 'react';
import { Menu, Button, UnstyledButton } from '@mantine/core';
import { NextLink } from '@mantine/next';

export default function DropdownAdmin() {
  const name = localStorage.getItem('name');
  const rol = localStorage.getItem('rol');
  return (
    <div>
      <Menu
        shadow='md'
        transition='rotate-right'
        exitTransitionDuration={200}
        width={200}
      >
        <Menu.Target>
          <Button>{name}</Button>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>CUENTA</Menu.Label>
          <Menu.Item component='a' href='/MyData'>
            Mis datos
          </Menu.Item>
          <Menu.Item component='a' href='/History'>
            Historial
          </Menu.Item>
          <Menu.Item component='a' href='/CreateCar'>
            Crear Carro
          </Menu.Item>
          <Menu.Item component='a' href='/UpdateCar'>
            Foto Carro
          </Menu.Item>
          <Menu.Item component='a' href='/DeleteCar'>
            Eliminar Carro
          </Menu.Item>
          <Menu.Item>
            {' '}
            <UnstyledButton
              onClick={() => {
                localStorage.removeItem('token');
                window.location.reload();
              }}
            >
              Cerrar sesion
            </UnstyledButton>
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}
