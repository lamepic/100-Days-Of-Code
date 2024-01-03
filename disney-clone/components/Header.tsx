import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

function Header() {
  return (
    <header
      className="flex justify-between fixed w-full z-20 top-0 items-center p-5
    bg-gradient-to-t from-gray-200/0 via-gray-900/25"
    >
      <Link href="/">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="logo"
          className="cursor-pointer invert-0 dark:invert"
          priority
        />
      </Link>

      <div className="flex space-x-2 items-center">
        <GenreDropdown />
        <SearchInput />
        <ModeToggle />
      </div>
    </header>
  );
}

export default Header;
