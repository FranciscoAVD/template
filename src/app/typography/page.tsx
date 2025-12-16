import { Container } from "@c/container";
import { Section } from "@c/section";

export default function UIPage() {
  return (
    <main>
      <Section>
        <Container>
          <h1>This is a</h1>
          <h2>major 3rd.</h2>
          <h3>This is a</h3>
          <h4>major 3rd.</h4>
          <h5>This is a</h5>
          <h6>major 3rd.</h6>
          <p data-role="paragraph">
            Paragraphs have 200% line height and are justified. They
            also have a max text width set by a CSS variable{" "}
            <code>--max-text-width</code>. This max width also applies
            to headers for alignment purposes.
          </p>
        </Container>
      </Section>
    </main>
  );
}
