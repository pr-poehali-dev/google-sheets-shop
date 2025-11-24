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
    <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-gradient-to-r from-blue-600 to-green-600 text-white border-0 shadow-lg">
            {product.price.toLocaleString('ru-RU')} ₽
          </Badge>
        </div>
      </div>
      
      <CardHeader className="space-y-3 pb-4">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {product.description}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-2 pb-4">
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <Icon name="Check" size={16} className="text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">{feature}</span>
          </div>
        ))}
      </CardContent>
      
      <CardFooter>
        <Button
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg transition-all"
        >
          <Icon name="ShoppingCart" size={18} className="mr-2" />
          Добавить в корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
