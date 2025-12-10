const ManifestoSection = () => {
  return (
    <section id="manifesto" className="py-32 bg-background relative overflow-hidden">
      {/* Background Typography */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
        <span className="font-display text-[40vw] tracking-[0.2em] text-foreground">
          S
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="font-body text-xs tracking-[0.4em] text-muted-foreground mb-4">
              OUR PHILOSOPHY
            </p>
            <h2 className="font-display text-5xl md:text-7xl tracking-[0.1em] text-foreground">
              MANIFESTO
            </h2>
          </div>

          {/* Manifesto Content */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            <div className="space-y-8">
              <p className="font-body text-lg md:text-xl leading-relaxed text-foreground">
                We exist in the space between the sacred and the profane. 
                Our garments are monuments to the collision of raw industrial 
                power and otherworldly grace.
              </p>
              <p className="font-body text-base leading-relaxed text-muted-foreground">
                SAINTHETIC is not just clothing—it's an architectural statement, 
                a meditation on form and void. Each piece is designed to transform 
                the body into a brutalist sculpture, while maintaining an ethereal 
                lightness that defies gravity.
              </p>
            </div>

            <div className="space-y-8">
              <div className="border-l-2 border-foreground pl-6">
                <p className="font-display text-2xl md:text-3xl tracking-[0.05em] text-foreground leading-tight">
                  "TRANSCENDENCE THROUGH STRUCTURE"
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-concrete">01</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[0.1em] text-foreground mb-2">RAW MATERIALS</h3>
                    <p className="font-body text-sm text-muted-foreground">Heavy cottons, industrial canvas, and technical fabrics.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-concrete">02</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[0.1em] text-foreground mb-2">MONUMENTAL SILHOUETTES</h3>
                    <p className="font-body text-sm text-muted-foreground">Oversized forms that command space and presence.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-concrete">03</span>
                  <div>
                    <h3 className="font-display text-lg tracking-[0.1em] text-foreground mb-2">ETHEREAL DETAILS</h3>
                    <p className="font-body text-sm text-muted-foreground">Floating layers and ghostly transparencies.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
