import { Container } from "@c/container";
import { Section } from "@c/section";

export default function UIPage() {
  return (
    <main>
      <Section>
        <Container>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
          <p>
            Paragraphs have 200% line height and are justified. They also have a
            max text width set by a CSS variable <code>--max-text-width</code>.
            This max width also applies to headers for alignment purposes.
          </p>
        </Container>
      </Section>
    </main>
  );
}
