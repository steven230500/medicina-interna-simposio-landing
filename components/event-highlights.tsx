import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Laptop, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const highlights = [
  {
    icon: Calendar,
    title: "Fecha",
    description: "26 y 27 de febrero de 2026",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Laptop,
    title: "Modalidad",
    description: "Presencial y virtual",
    color: "from-fuchsia-500 to-fuchsia-600",
  },
  {
    icon: Award,
    title: "Certificación",
    description: "Certificado de asistencia",
    color: "from-pink-500 to-pink-600",
  },
];

export function EventHighlights() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <Card className="border-2 hover:border-primary transition-all hover:shadow-xl hover:-translate-y-2 group bg-gradient-to-br from-background to-primary/5 h-full">
                  <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg">{highlight.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
