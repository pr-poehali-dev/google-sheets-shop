import { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0 bg-white hover:border-purple-200 hover:border-2 animate-scale-in">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/20 group-hover:to-fuchsia-600/20 transition-all duration-500 z-10" />
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white border-0 shadow-lg animate-bounce-in z-20 relative">
            {product.price.toLocaleString('ru-RU')} ₽
          </Badge>
        </div>
      </div>
      
      <CardHeader className="space-y-3 pb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-all duration-300 group-hover:scale-105">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-2 pb-4">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-purple-600 flex-shrink-0 group-hover:scale-125 transition-transform" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-md hover:shadow-xl transition-all hover:scale-105"
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;