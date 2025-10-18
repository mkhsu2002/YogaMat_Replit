import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaPrimary: { text: string; url: string };
  ctaSecondary: { text: string; url: string };
}

export default function HeroSection({ title, subtitle, ctaPrimary, ctaSecondary }: HeroSectionProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="min-w-[200px]" 
            data-testid="button-cta-primary"
            onClick={() => window.open(ctaPrimary.url, '_blank')}
          >
            {ctaPrimary.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
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
        </div>
      </div>
    </section>
  );
}
