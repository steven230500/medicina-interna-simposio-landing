import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, TrendingUp, Clock, MessageCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const pricingPhases = [
  {
    title: "Fase 1",
    subtitle: "Hasta el 15 de enero de 2026",
    icon: Zap,
    prices: [
      { label: "Simposio", amount: "$130.000 COP" },
      { label: "Talleres", amount: "$40.000 COP" },
      {
        label: "Combo (Simposio + Talleres)",
        amount: "$150.000 COP",
        featured: true,
      },
    ],
  },
  {
    title: "Fase 2",
    subtitle: "Hasta el 15 de febrero de 2026",
    icon: TrendingUp,
    prices: [
      { label: "Simposio", amount: "$150.000 COP" },
      { label: "Talleres", amount: "$50.000 COP" },
      {
        label: "Combo (Simposio + Talleres)",
        amount: "$180.000 COP",
        featured: true,
      },
    ],
    highlighted: true,
    badge: "Más popular",
    badgeColor: "bg-primary",
  },
  {
    title: "Fase 3",
    subtitle: "Hasta el 26 de febrero de 2026",
    icon: Clock,
    prices: [
      { label: "Simposio", amount: "$170.000 COP" },
      { label: "Talleres", amount: "$60.000 COP" },
      {
        label: "Combo (Simposio + Talleres)",
        amount: "$200.000 COP",
        featured: true,
      },
    ],
  },
];

export function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-primary/5 to-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
            Planes de inscripción
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige la fase que mejor se ajuste a tus necesidades y ahorra
            inscribiéndote temprano
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 max-w-6xl mx-auto">
          {pricingPhases.map((phase, index) => {
            const PhaseIcon = phase.icon;
            return (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card
                  className={`relative transition-all hover:shadow-2xl ${
                    phase.highlighted
                      ? "border-primary border-2 shadow-xl md:scale-105 bg-gradient-to-br from-background to-primary/10"
                      : "hover:border-primary/50"
                  }`}
                >
                  {phase.badge && (
                    <div
                      className={`absolute -top-4 left-1/2 -translate-x-1/2 ${phase.badgeColor} text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2`}
                    >
                      <PhaseIcon className="w-4 h-4" />
                      {phase.badge}
                    </div>
                  )}
                  <CardHeader className="text-center pb-6 pt-8">
                    <CardTitle className="text-2xl font-bold">
                      {phase.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2">
                      {phase.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {phase.prices.map((price, priceIndex) => (
                      <div
                        key={priceIndex}
                        className={`flex items-start justify-between gap-3 p-4 rounded-xl transition-all ${
                          price.featured
                            ? "bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30 shadow-sm"
                            : "bg-muted/30"
                        }`}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <Check
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                              price.featured
                                ? "text-primary"
                                : "text-muted-foreground"
                            }`}
                          />
                          <span
                            className={`text-sm leading-relaxed ${
                              price.featured ? "font-semibold" : ""
                            }`}
                          >
                            {price.label}
                          </span>
                        </div>
                        <span
                          className={`font-bold text-sm whitespace-nowrap ${
                            price.featured ? "text-primary text-base" : ""
                          }`}
                        >
                          {price.amount}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="text-center space-y-6">
          <p className="text-sm text-muted-foreground italic">
            *El combo incluye acceso completo al Simposio + Talleres
            especializados
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto text-lg px-8 py-6 h-auto font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-wrap text-center"
            >
              <a
                href="https://forms.gle/ExEzybUFxahugFax5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir al formulario de inscripción
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto text-lg px-8 py-6 h-auto font-medium border-2 hover:bg-muted text-wrap text-center"
            >
              <a
                href="https://wa.me/573045747146?text=Hola,%20ya%20realicé%20el%20pago%20de%20mi%20inscripción.%20Adjunto%20el%20comprobante."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-green-600 shrink-0" />
                <span>Ya pagué? Enviar comprobante</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
