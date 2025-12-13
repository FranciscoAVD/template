import Link from "next/link";
import { Container } from "@c/container";
import { Button } from "@c/ui/button";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 flex items-center h-16 bg-background shadow">
        <Container className="grid grid-cols-3 items-center">
          <Link
            href="/"
            className="font-semibold text-2xl"
          >
            Logo
          </Link>
          <nav className="flex items-center gap-4 mx-auto">
            <Link href="/">Home</Link>
            <Link href="/typography">Typography</Link>
          </nav>
          <Button className="ml-auto">CTA</Button>
        </Container>
      </header>{" "}
      <main></main>
    </>
  );
}
