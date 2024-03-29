import Link from "next/link";
import HeaderMenu from "./components/HeaderMenu";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 shrink-0">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>

      <nav className="ml-20">
        <ul className="text-[15px] font-medium">
          <li>
            <Link href={"/brands"}>BRANDS</Link>
          </li>
        </ul>
      </nav>

      <HeaderMenu />
    </header>
  );
}

export default Header;
