import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Info, Calendar, MapPin, Sparkles } from "lucide-react";
import { ParallaxBackground } from "@/components/ui/parallax-background";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary/95 to-accent text-primary-foreground overflow-hidden">
      <ParallaxBackground
        className="opacity-60"
        circleClassName="bg-white/10"
      />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-2 h-2 bg-white rounded-full animate-pulse opacity-60" />
        <div
          className="absolute top-40 right-[15%] w-3 h-3 bg-white rounded-full animate-pulse opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-32 left-[20%] w-2 h-2 bg-white rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-[25%] w-2 h-2 bg-white rounded-full animate-pulse opacity-70"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.png"
              alt="Logo XIV Simposio de Medicina Interna"
              width={250}
              height={250}
              className="h-auto w-auto max-h-48 drop-shadow-xl"
              priority
            />
          </div>

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">XIV Edición</span>
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Simposio de <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                Medicina Interna
              </span>
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold opacity-95 text-balance">
              Universidad del Valle
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-lg md:text-xl py-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">26 y 27 de febrero, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Presencial + Virtual</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform font-bold text-lg px-10 py-7 h-auto shadow-xl"
            >
              <a
                href="https://forms.gle/ExEzybUFxahugFax5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Inscribirme ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-colors font-semibold text-lg px-10 py-7 h-auto bg-transparent backdrop-blur-sm"
            >
              <Info className="mr-2 h-5 w-5" />
              Más información
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,0 C150,80 350,0 600,40 C850,80 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="oklch(0.99 0.005 280)"
          />
        </svg>
      </div>
    </section>
  );
}
