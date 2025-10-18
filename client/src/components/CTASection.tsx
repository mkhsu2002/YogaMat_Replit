import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title: string;
  description?: string;
  ctaPrimary: { text: string; url: string };
  ctaSecondary?: { text: string; url: string };
  variant?: "default" | "highlight";
}

export default function CTASection({ 
  title, 
  description, 
  ctaPrimary, 
  ctaSecondary,
  variant = "default" 
}: CTASectionProps) {
  const bgClass = variant === "highlight" ? "bg-muted" : "bg-background";
  
  return (
    <section className={`${bgClass} py-16`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="min-w-[200px]" 
            data-testid="button-cta"
            onClick={() => window.open(ctaPrimary.url, '_blank')}
          >
            {ctaPrimary.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          {ctaSecondary && (
            <Button 
              size="lg" 
              variant="outline" 
              className="min-w-[200px]" 
              data-testid="button-cta-secondary"
              onClick={() => window.open(ctaSecondary.url, '_blank')}
            >
              {ctaSecondary.text}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
