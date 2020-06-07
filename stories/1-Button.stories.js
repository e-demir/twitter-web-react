import React from 'react'
import Button from '../components/button'
import MenuButton from '../components/nav-button'
import Navigation from "../components/navigation"

export default {
  title: 'Button'
}

export const Normal = () => <Button>Normal</Button>
export const NavigationButton = () => <MenuButton>Menu</MenuButton>
export const Nav = () => <Navigation selectedKey="home"/>
