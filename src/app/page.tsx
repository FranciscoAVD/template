import Link from "next/link";
import { Container } from "@c/container";
import { Section } from "@c/section";
import { Button } from "@c/ui/button";
import { Label } from "@c/ui/label";
import { Input } from "@c/ui/input";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 flex items-center h-16 bg-background shadow">
        <Container className="grid grid-cols-3 items-center">
          <span className="font-semibold text-2xl">Logo</span>
          <nav className="flex items-center gap-4 mx-auto">
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>
            <Link href="/">Link</Link>{" "}
          </nav>
          <Button className="ml-auto">Secondary</Button>
        </Container>
      </header>
      <main>
        <Section>
          <Container className="flex items-center justify-between flex-wrap">
            <div>
              <h1 className="text-[84px] leading-[84px] -tracking-[2px] font-bold mb-default">
                Hero. Section.
              </h1>
              <p className="max-w-lg mb-related text-muted-foreground">
                Striking from a fortress hidden among the billion stars of the
                galaxy, rebel spaceships have won their first victory in a
                battle with the powerful Imperial Starfleet. The EMPIRE fears
                that another defeat could bring a thousand more solar systems
                into the rebellion, and Imperial control over the galaxy would
                be lost forever.
              </p>
              <div className="flex gap-4">
                <Button className="min-w-[120px]">CTA</Button>
                <Button variant="secondary" className="min-w-[120px]">
                  Secondary
                </Button>
              </div>
            </div>
            <div className="grid place-content-center aspect-video w-sm rounded-lg bg-neutral-900 text-3xl text-white">
              Image
            </div>
          </Container>
        </Section>
        <Section className="">
          <Container>
            <h2 className="text-[64px] font-bold leading-[64px] -tracking-[1.5px] mb-default">
              Services
            </h2>
            <p className="max-w-lg text-muted-foreground mb-related">
              Striking from a fortress hidden among the billion stars of the
              galaxy, rebel spaceships have won their first victory in a battle
              with the powerful Imperial Starfleet.
            </p>
            <div className="grid grid-cols-4 gap-4 min-h-[300px]">
              <div className="bg-neutral-100 rounded-lg shadow" />
              <div className="bg-neutral-100 rounded-lg shadow" />
              <div className="bg-neutral-100 rounded-lg shadow" />
              <div className="bg-neutral-100 rounded-lg shadow" />
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <h2 className="text-[64px] font-bold leading-[64px] -tracking-[1.5px] mb-default">
              Contact
            </h2>
            <p className="max-w-lg text-muted-foreground mb-related">
              Striking from a fortress hidden among the billion stars of the
              galaxy, rebel spaceships have won their first victory in a battle
              with the powerful Imperial Starfleet.
            </p>
            <form
              method="POST"
              className="max-w-md grid gap-4 p-4 rounded-lg shadow"
            >
              <div className="flex flex-col gap-1">
                <Label htmlFor="">Name</Label>
                <Input
                  type="text"
                  className="bg-white"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor="">Email</Label>
                <Input
                  type="email"
                  className="bg-white"
                  placeholder="john.doe@example.com"
                />
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Container>
        </Section>
      </main>
      <footer className="py-16 bg-neutral-100">
        <Container>
          <small>Victoriano LLC&copy;2025</small>
        </Container>
      </footer>
    </>
  );
}
