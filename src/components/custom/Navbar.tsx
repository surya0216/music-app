"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function NavbarDemo() {
  return (
    
      <Navbar className="top-10" />
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={null} item="Home"/>
        </Link>
        
        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/#">All courses</HoveredLink>
            <HoveredLink href="/#">Basic music theory</HoveredLink>
            <HoveredLink href="/#">Advanced composition theory</HoveredLink>
            <HoveredLink href="/#">Song writting</HoveredLink>
            <HoveredLink href="/#">Music production</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"#"}>
          <MenuItem setActive={setActive} active={null} item="Contact us"/>
        </Link>
      </Menu>
    </div>
  );
}
