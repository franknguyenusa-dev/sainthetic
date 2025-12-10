import { Button } from '@/components/ui/button';
import { Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-6xl tracking-[0.1em] mb-6">
              JOIN THE<br />COLLECTIVE
            </h2>
            <p className="font-body text-sm text-background/60 max-w-md">
              Subscribe for exclusive drops, early access, and a glimpse behind the curtain of creation.
            </p>
          </div>
          
          <div className="flex items-end">
            <form className="w-full max-w-md">
              <div className="flex border-b border-background/30">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="flex-1 bg-transparent font-body text-sm tracking-[0.1em] py-4 placeholder:text-background/40 focus:outline-none"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="text-background hover:bg-background/10"
                >
                  <ArrowUpRight size={20} />
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/20 mb-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <a href="#" className="font-display text-2xl tracking-[0.3em]">
              SAINTHETIC
            </a>
            
            <nav className="flex flex-wrap gap-6 md:gap-8">
              <a href="#" className="font-body text-xs tracking-[0.2em] text-background/60 hover:text-background transition-colors">
                SHIPPING
              </a>
              <a href="#" className="font-body text-xs tracking-[0.2em] text-background/60 hover:text-background transition-colors">
                RETURNS
              </a>
              <a href="#" className="font-body text-xs tracking-[0.2em] text-background/60 hover:text-background transition-colors">
                FAQ
              </a>
              <a href="#" className="font-body text-xs tracking-[0.2em] text-background/60 hover:text-background transition-colors">
                PRIVACY
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-background/60 hover:text-background transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <span className="font-body text-xs tracking-[0.1em] text-background/40">
              © 2025 SAINTHETIC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
