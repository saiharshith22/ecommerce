import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
  Image,
} from "@nextui-org/react";
import { Logo } from "./Icons";
import { CiShoppingCart } from "react-icons/ci";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Cart", "SignIn"];
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white text-black dark:bg-dmBlack-dark dark:text-dmWhite-light flex"
      maxWidth="full"
    >
      <NavbarContent
        className="sm:hidden"
        style={{ flexGrow: "0" }}
        justify="start"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo className="h-[36px] w-[36px] mr-2 rounded-full" />
          <p className="font-bold text-inherit">SwiftSoleShoes</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 text-black dark:text-dmWhite-light grow"
        // justify="end"
      >
        <NavbarBrand>
          <Logo className="h-[48px] w-[48px] min-h-[48px] min-w-[48px] rounded-full" />
          <p className="font-bold text-inherit pl-2">SwiftSoleShoes</p>
        </NavbarBrand>

        <NavbarItem className="flex justify-center items-center gap-1">
          <Link className="text-black dark:text-dmWhite-dark" href="#">
            Cart
          </Link>
          <Badge
            content={0}
            size="sm"
            // isInvisible={isInvisible}
            shape="circle"
          >
            <CiShoppingCart size={25} />
          </Badge>
        </NavbarItem>
        <NavbarItem
          isActive
          className="border-black dark:border-dmWhite-dark border-2 rounded-lg"
        >
          <Link
            href="#"
            className="text-black dark:text-dmWhite-dark px-2 py-1"
            aria-current="page"
          >
            SignIn
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-white text-black dark:bg-dmBlack-light dark:text-dmWhite-light">
        <NavbarMenuItem className="flex justify-center items-center">
          <Link
            className="w-full text-dmWhite-dark flex gap-1"
            href="#"
            size="lg"
          >
            Cart
            <Badge
              content={0}
              size="sm"
              // isInvisible={isInvisible}
              shape="circle"
            >
              <CiShoppingCart size={25} />
            </Badge>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="w-full text-dmWhite-dark" href="#" size="lg">
            SignIn
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavBar;
