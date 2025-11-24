import { Product } from '@/types';
import ProductCard from './ProductCard';

interface ProductCatalogProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductCatalog = ({ products, onAddToCart }: ProductCatalogProps) => {
  return (
    <section id="catalog" className="py-20 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Каталог таблиц
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выберите готовое решение для вашего бизнеса
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
