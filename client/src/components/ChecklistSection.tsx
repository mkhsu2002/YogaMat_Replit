import { Check } from "lucide-react";

interface ChecklistItem {
  title: string;
  description: string;
}

interface ChecklistSectionProps {
  items: ChecklistItem[];
}

export default function ChecklistSection({ items }: ChecklistSectionProps) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="flex gap-4 items-start p-4 rounded-lg hover-elevate bg-card"
          data-testid={`checklist-item-${index}`}
        >
          <div className="flex-shrink-0 mt-1">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Check className="h-4 w-4 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
            <p className="text-muted-foreground text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
