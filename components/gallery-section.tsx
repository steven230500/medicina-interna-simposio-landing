"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"
import { ImageOff, Clock, Sparkles } from "lucide-react"

const galleryImages = [
  {
    id: 1,
    src: "/medical-symposium-presentation-auditorium.jpg",
    alt: "Presentación en el simposio",
  },
  {
    id: 2,
    src: "/medical-professionals-networking-event.jpg",
    alt: "Profesionales de la salud en networking",
  },
  {
    id: 3,
    src: "/medical-conference-workshop-session.jpg",
    alt: "Taller práctico",
  },
  {
    id: 4,
    src: "/medical-symposium-audience-auditorium.jpg",
    alt: "Audiencia en el auditorio",
  },
  {
    id: 5,
    src: "/medical-panel-discussion-doctors.jpg",
    alt: "Panel de discusión",
  },
  {
    id: 6,
    src: "/certificate-ceremony-medical-event.jpg",
    alt: "Ceremonia de certificación",
  },
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [isComingSoon, setIsComingSoon] = useState(true)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Próximamente</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-balance">Memorias del Simposio</h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Las memorias y la galería fotográfica estarán disponibles después del evento
          </p>
        </div>

        {isComingSoon ? (
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="p-12 md:p-20 space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <ImageOff className="w-10 h-10 text-primary/60" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold">Galería en preparación</h3>
                  <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Después del XIV Simposio, podrás acceder a todas las presentaciones, fotografías y material
                    complementario del evento.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
                  <Clock className="w-4 h-4" />
                  <span>Disponible a partir del 28 de febrero de 2026</span>
                </div>
              </div>
            </Card>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card
                key={image.id}
                className="overflow-hidden cursor-pointer group hover:shadow-lg transition-all border-2 hover:border-primary"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
