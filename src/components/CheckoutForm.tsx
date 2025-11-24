import { useState } from 'react';
import { CartItem } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface CheckoutFormProps {
  cart: CartItem[];
  onBack: () => void;
  onComplete: (email: string) => void;
}

const CheckoutForm = ({ cart, onBack, onComplete }: CheckoutFormProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !name) {
      toast({
        title: 'Ошибка',
        description: 'Заполните все поля',
        variant: 'destructive',
      });
      return;
    }
    
    setIsProcessing(true);
    
    setTimeout(() => {
      toast({
        title: 'Оплата прошла успешно!',
        description: 'Ссылки отправлены на вашу почту',
      });
      
      onComplete(email);
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}} />
      <div className="container mx-auto max-w-4xl relative z-10">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6 hover:bg-purple-50 animate-fade-in"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Вернуться к покупкам
        </Button>

        <div className="grid md:grid-cols-2 gap-6 animate-scale-in">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white">
              <CardTitle>Оформление заказа</CardTitle>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="border-2"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-2"
                  />
                  <p className="text-sm text-gray-600">
                    На этот email будут отправлены ссылки для скачивания
                  </p>
                </div>
                
                <div className="p-4 bg-purple-50 rounded-lg space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 text-purple-700">
                    <Icon name="Info" size={20} />
                    <span className="font-semibold">Что вы получите:</span>
                  </div>
                  <ul className="space-y-1 text-sm text-purple-900 ml-7">
                    <li>• Мгновенный доступ к таблицам</li>
                    <li>• Ссылки на email</li>
                    <li>• Инструкции по использованию</li>
                    <li>• Техподдержка 24/7</li>
                  </ul>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  {isProcessing ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Обработка...
                    </>
                  ) : (
                    <>
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Оплатить {total.toLocaleString('ru-RU')} ₽
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>

          <Card className="shadow-xl border-0 h-fit animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="bg-purple-50">
              <CardTitle>Ваш заказ</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4 pt-6">
              {cart.map(item => (
                <div key={item.product.id} className="flex gap-3 pb-4 border-b last:border-0 hover:bg-purple-50 p-2 rounded-lg transition-all">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg hover:scale-110 transition-transform"
                  />
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.product.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {item.quantity} × {item.product.price.toLocaleString('ru-RU')} ₽
                    </p>
                    <p className="text-sm font-semibold text-purple-600 mt-1">
                      {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t-2">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Итого:</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent animate-pulse">
                    {total.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;