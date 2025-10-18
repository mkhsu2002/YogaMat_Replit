interface Step {
  number: string;
  title: string;
  description: string;
}

interface NumberedStepsProps {
  steps: Step[];
  columns?: 2 | 3 | 4;
}

export default function NumberedSteps({ steps, columns = 3 }: NumberedStepsProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4"
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {steps.map((step, index) => (
        <div key={index} className="relative" data-testid={`step-${index}`}>
          <div className="flex flex-col items-start">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-primary">{step.number}</span>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              {step.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
