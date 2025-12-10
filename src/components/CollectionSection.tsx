import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';

const products = [
  {
    id: 1,
    name: 'VOID HOODIE',
    price: '$285',
    image: product1,
    category: 'ESSENTIALS',
  },
  {
    id: 2,
    name: 'ASCENSION COAT',
    price: '$420',
    image: product2,
    category: 'OUTERWEAR',
  },
  {
    id: 3,
    name: 'MONOLITH CARGO',
    price: '$195',
    image: product3,
    category: 'BOTTOMS',
  },
];

const CollectionSection = () => {
  return (
    <section id="collection" className="py-32 bg-fog">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <p className="font-body text-xs tracking-[0.4em] text-muted-foreground mb-4">
            FW/25
          </p>
          <h2 className="font-display text-5xl md:text-7xl tracking-[0.1em] text-foreground">
            THE COLLECTION
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 bg-background">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="font-body text-xs tracking-[0.3em] text-background bg-foreground px-6 py-3">
                    VIEW
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <p className="font-body text-[10px] tracking-[0.3em] text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-display text-xl tracking-[0.1em] text-foreground group-hover:tracking-[0.15em] transition-all duration-300">
                  {product.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-4 font-body text-xs tracking-[0.3em] text-foreground hover:gap-6 transition-all duration-300 group"
          >
            VIEW ALL PIECES
            <span className="w-12 h-px bg-foreground group-hover:w-20 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
