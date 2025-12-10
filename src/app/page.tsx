import Link from "next/link";
import { Container } from "@c/container";
import { Section } from "@c/section";
import { Button } from "@c/ui/button";
import { Label } from "@c/ui/label";
import { Input } from "@c/ui/input";

export default function Home() {
  return (
    <>
      <main>
        <Section>
          <Container className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <h1 className="">star wars</h1>
              <p className="mb-lg">
                Striking from a fortress hidden among the billion
                stars of the galaxy, rebel spaceships have won their
                first victory in a battle with the powerful Imperial
                Starfleet. The EMPIRE fears that another defeat could
                bring a thousand more solar systems into the
                rebellion, and Imperial control over the galaxy would
                be lost forever.
              </p>
              <div className="flex gap-4">
                <Button className="min-w-[120px]">CTA</Button>
                <Button
                  variant="secondary"
                  className="min-w-[120px]"
                >
                  Secondary
                </Button>
              </div>
            </div>
            <div className="grid place-content-center aspect-video w-full lg:max-w-sm rounded-lg bg-neutral-900 text-3xl text-white">
              Image
            </div>
          </Container>
        </Section>
        <Section className="bg-neutral-100">
          <Container>
            <h2 className="">Services</h2>
            <p className="mb-lg">
              Striking from a fortress hidden among the billion stars
              of the galaxy, rebel spaceships have won their first
              victory in a battle with the powerful Imperial
              Starfleet.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 min-h-[600px] lg:min-h-[300px]">
              <div className="bg-background rounded-lg shadow" />
              <div className="bg-background rounded-lg shadow" />
              <div className="bg-background rounded-lg shadow" />
              <div className="bg-background rounded-lg shadow" />
            </div>
          </Container>
        </Section>
        <Section>
          <Container>
            <h2 className="">Contact</h2>
            <p className="mb-lg">
              Striking from a fortress hidden among the billion stars
              of the galaxy, rebel spaceships have won their first
              victory in a battle with the powerful Imperial
              Starfleet.
            </p>
            <form
              method="POST"
              className="w-full lg:max-w-text grid gap-4 p-4 border rounded-lg shadow"
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
