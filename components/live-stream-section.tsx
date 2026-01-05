import { Card, CardContent } from "@/components/ui/card";
import { Radio, Clock, Sparkles } from "lucide-react";
import { ParallaxBackground } from "@/components/ui/parallax-background";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function LiveStreamSection() {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 text-white relative overflow-hidden">
      <ParallaxBackground
        className="opacity-40"
        circleClassName="bg-violet-600/20"
      />

      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-2xl bg-zinc-900/50 backdrop-blur-md overflow-hidden text-zinc-100">
              <div className="h-2 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600" />

              <CardContent className="p-8 md:p-12 space-y-6">
                <ScrollReveal delay={0.2}>
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-violet-600/30 rounded-full blur-2xl animate-pulse" />
                      <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center shadow-xl border border-zinc-700">
                        <Radio className="w-12 h-12 text-violet-400" />
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="text-center space-y-4">
                  <ScrollReveal delay={0.3}>
                    <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-2 rounded-full mb-2 border border-violet-500/20">
                      <Sparkles className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-semibold text-violet-300">
                        Próximamente
                      </span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.4}>
                    <h2 className="text-3xl md:text-4xl font-bold text-balance text-white">
                      Transmisión en vivo
                    </h2>
                  </ScrollReveal>

                  <ScrollReveal delay={0.5}>
                    <p className="text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
                      La transmisión en vivo estará disponible pronto.
                      Regístrate para recibir el enlace de acceso antes del
                      evento.
                    </p>
                  </ScrollReveal>
                </div>

                <div className="flex justify-center pt-4">
                  <ScrollReveal delay={0.6}>
                    <div className="flex items-center gap-3 bg-zinc-800/80 px-8 py-4 rounded-full border border-zinc-700">
                      <Clock className="h-5 w-5 text-zinc-400" />
                      <span className="font-semibold text-zinc-300">
                        Enlace disponible el 26 de febrero
                      </span>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal delay={0.7}>
                  <p className="text-sm text-center text-zinc-500 italic pt-2 max-w-md mx-auto">
                    El acceso será habilitado únicamente para participantes
                    inscritos en la modalidad virtual.
                  </p>
                </ScrollReveal>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
