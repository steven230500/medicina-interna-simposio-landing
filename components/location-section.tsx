import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock } from "lucide-react";

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-accent/10 px-5 py-2 rounded-full border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">
                Ubicación del Evento
              </span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            ¿Dónde nos encontraremos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            El evento se realizará en las instalaciones del Hospital
            Universitario del Valle Evaristo García Valle
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Map Container - Full Width */}
          <Card className="overflow-hidden border-2 hover:shadow-2xl transition-all group">
            <CardContent className="p-0">
              <div className="relative w-full h-[450px] bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.589139599544!2d-76.54416042424853!3d3.374921696528775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a1c868019045%3A0xc3af344485775d73!2sHospital%20Universitario%20Del%20Valle%20Evaristo%20Garc%C3%ADa!5e0!3m2!1ses!2sco!4v1709664567890!5m2!1ses!2sco"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              </div>
            </CardContent>
          </Card>

          {/* Event Details Grid - 2 columns symmetrical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Sede del Evento</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Hospital Universitario del Valle Evaristo García
                      <br />
                      Cali, Valle del Cauca
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-lg">Horario</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Información del horario próximamente
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Button - Full Width */}
          <Button
            size="lg"
            className="w-full shadow-lg hover:shadow-xl transition-all group bg-gradient-to-r from-primary to-accent"
            asChild
          >
            <a
              href="https://maps.app.goo.gl/UfPVenmYAU39PBGk8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
              Abrir en Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
