import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals">Checkout our meals</Link>
      <Link href="/meals/share">Share your meal</Link>
      <Link href="/community">Explore our community</Link>
    </main>
  );
}
