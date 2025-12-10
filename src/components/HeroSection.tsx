import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80" />
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] text-muted-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            ETHEREAL STREETWEAR
          </p>
          
          <h1 className="font-display text-[12vw] md:text-[10vw] lg:text-[8vw] leading-[0.85] tracking-[0.05em] text-foreground mb-8 animate-fade-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            SAINTHETIC
          </h1>
          
          <p className="font-body text-sm md:text-base text-muted-foreground max-w-md mx-auto mb-12 animate-fade-up opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            Where raw brutalism meets ethereal transcendence. 
            Fashion that exists between worlds.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-up opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
            <Button variant="brutalist" size="xl">
              EXPLORE COLLECTION
            </Button>
            <Button variant="outline" size="xl">
              READ MANIFESTO
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#collection" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="font-body text-[10px] tracking-[0.3em]">SCROLL</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
