import { Card, CardContent } from "@/components/ui/card"
import { Radio, Clock, Sparkles } from "lucide-react"

export function LiveStreamSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf610_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf610_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-30" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-background to-primary/5 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-primary via-accent to-primary" />

            <CardContent className="p-8 md:p-12 space-y-6">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                    <Radio className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full mb-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-semibold text-accent">Próximamente</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-balance">Transmisión en vivo</h2>

                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
                  La transmisión en vivo estará disponible pronto. Regístrate para recibir el enlace de acceso antes del
                  evento.
                </p>
              </div>

              <div className="flex justify-center pt-4">
                <div className="flex items-center gap-3 bg-muted px-8 py-4 rounded-full">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="font-semibold text-muted-foreground">Enlace disponible el 26 de febrero</span>
                </div>
              </div>

              <p className="text-sm text-center text-muted-foreground italic pt-2 max-w-md mx-auto">
                El acceso será habilitado únicamente para participantes inscritos en la modalidad virtual.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
