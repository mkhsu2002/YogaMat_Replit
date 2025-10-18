import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Feature {
  icon?: LucideIcon;
  number?: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-6`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card 
            key={index} 
            className="p-6 hover-elevate" 
            data-testid={`card-feature-${index}`}
          >
            {feature.number && (
              <div className="text-4xl font-bold text-primary mb-4">
                {feature.number}
              </div>
            )}
            {Icon && (
              <div className="mb-4">
                <Icon className="h-10 w-10 text-primary" />
              </div>
            )}
            <h3 className="text-xl font-bold text-foreground mb-3">
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </Card>
        );
      })}
    </div>
  );
}
