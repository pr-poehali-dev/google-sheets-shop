import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart }: ProductCatalogProps) => {
  return (
    <section id="catalog" className="py-20 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1.5s'}} />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent animate-fade-in">
            Каталог таблиц
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Выберите готовое решение для вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {products.map((product, index) => (
            <div key={product.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;