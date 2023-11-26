import Link from "next/link";

export default function Home() {
  return (
    <main className="text-cyan-500 font-quicksand">
      <h1 className="text-5xl">Mario Brusarosco</h1>

      <ul>
        <li>
          <Link href={"/skills"}>skills</Link>
        </li>
        <li>
          <Link href={"/experience"}>experience</Link>
        </li>
      </ul>dasdsa
    </main>
  );
}

