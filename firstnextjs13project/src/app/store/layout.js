import Link from "next/link";

export const metadata = {
  title: "STORE"
}

export default function StoreLayout({ children }) {
  return (
    <>
      <nav>
        <h3>Store Section</h3>
        <ul>
          <li>
            <Link href="/store/electronic">Electronic</Link>
          </li>
          <li>
            <Link href="/store/electronic/computers">Computers</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
