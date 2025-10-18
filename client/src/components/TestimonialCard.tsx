import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl?: string;
}

export default function TestimonialCard({ quote, author, role, avatarUrl }: TestimonialCardProps) {
  const initials = author.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <Card className="p-6 hover-elevate h-full flex flex-col" data-testid="card-testimonial">
      <div className="mb-4">
        <Quote className="h-8 w-8 text-primary/40" />
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
        {quote}
      </p>
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatarUrl} alt={author} />
          <AvatarFallback className="bg-primary text-primary-foreground">
            {initials}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-semibold text-foreground">{author}</div>
          <div className="text-sm text-muted-foreground">{role}</div>
        </div>
      </div>
    </Card>
  );
}
