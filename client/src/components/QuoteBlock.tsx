interface QuoteBlockProps {
  quote: string;
  author?: string;
}

export default function QuoteBlock({ quote, author }: QuoteBlockProps) {
  return (
    <blockquote className="border-l-4 border-primary pl-6 py-4 my-8" data-testid="quote-block">
      <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-2">
        「{quote}」
      </p>
      {author && (
        <cite className="text-muted-foreground not-italic">— {author}</cite>
      )}
    </blockquote>
  );
}
