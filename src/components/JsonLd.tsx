/**
 * Renders one or more schema.org objects as a JSON-LD script tag.
 * Server component — the markup is emitted at build time (static export),
 * so crawlers see the structured data in the initial HTML.
 */
type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[];
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline; escape "<" to avoid any
      // chance of prematurely closing the script element.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
