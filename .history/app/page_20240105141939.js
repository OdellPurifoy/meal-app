import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <ul>
        <li><Link href="/meals">Checkout our meals</Link></li>
        <li><Link href="/meals/share">Share your meal</Link></li>
        <li><Link href="/community">Explore our community</Link></li>
      </ul>
    </main>
  );
}
