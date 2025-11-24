import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface CartProps {
  items: CartItem[];
  onRemove: (productId: number) => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onCheckout: () => void;
}

const Cart = ({ items, onRemove, onUpdateQuantity, onCheckout }: CartProps) => {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (items.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <Card className="w-96 shadow-2xl border-0 bg-white">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
          <CardTitle className="flex items-center gap-2">
            <Icon name="ShoppingCart" size={24} />
            Корзина
            <Badge className="ml-auto bg-white text-blue-600 hover:bg-white">
              {items.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-3 max-h-96 overflow-y-auto pt-4">
          {items.map(item => (
            <div key={item.product.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-gray-900 truncate">
                  {item.product.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {item.product.price.toLocaleString('ru-RU')} ₽
                </p>
                
                <div className="flex items-center gap-2 mt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-7 p-0"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                  >
                    <Icon name="Minus" size={14} />
                  </Button>
                  
                  <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                  
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-7 w-7 p-0"
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 w-7 p-0 ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                    onClick={() => onRemove(item.product.id)}
                  >
                    <Icon name="Trash2" size={14} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
        
        <CardFooter className="flex-col gap-3 bg-gray-50">
          <div className="flex justify-between items-center w-full">
            <span className="text-lg font-semibold text-gray-900">Итого:</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {total.toLocaleString('ru-RU')} ₽
            </span>
          </div>
          
          <Button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            Оформить заказ
            <Icon name="ArrowRight" size={18} className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Cart;
