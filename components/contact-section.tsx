import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, Instagram } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/50 via-primary/5 to-accent/5 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-xl bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-shadow">
            <CardContent className="p-8 md:p-12 text-center space-y-6">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-xl opacity-30 animate-pulse" />
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <MessageCircle className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  ¿Tienes preguntas?
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Estamos aquí para ayudarte. Contáctanos por correo electrónico
                  y resolveremos todas tus dudas.
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:simposio14internaunivalle@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold text-lg transition-all hover:scale-105 bg-primary/10 px-6 py-4 rounded-xl w-full md:w-auto justify-center"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email</span>
                </a>

                <a
                  href="https://wa.me/573045747146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold text-lg transition-all hover:scale-105 bg-green-50 px-6 py-4 rounded-xl w-full md:w-auto justify-center border border-green-100"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href="https://www.instagram.com/medicinainternaunivalle?igsh=NWI5OXloNHZ2eDFu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-bold text-lg transition-all hover:scale-105 bg-pink-50 px-6 py-4 rounded-xl w-full md:w-auto justify-center border border-pink-100"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
