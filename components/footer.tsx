import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-bold">
              XIV Simposio de Medicina Interna – Universidad del Valle
            </h3>
            <p className="text-primary-foreground/80">Facultad de Salud</p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://www.instagram.com/medicinainternaunivalle?igsh=NWI5OXloNHZ2eDFu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-2 bg-white/10 rounded-full"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/573053089923"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform p-2 bg-white/10 rounded-full"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>

          <p className="text-sm text-primary-foreground/60 pt-4 border-t border-primary-foreground/10 w-full max-w-md mx-auto">
            © 2026 Universidad del Valle. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
