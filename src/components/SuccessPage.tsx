import { PurchaseData } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface SuccessPageProps {
  purchaseData: PurchaseData;
  onBack: () => void;
}

const SuccessPage = ({ purchaseData, onBack }: SuccessPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full shadow-2xl border-0 animate-fade-in">
        <CardHeader className="text-center pb-4">
          <div className="mx-auto mb-6">
            <img
              src="https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/205d213f-b645-4f60-b839-b7bf567ceb27.jpg"
              alt="Success"
              className="w-48 h-48 mx-auto rounded-2xl"
            />
          </div>
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-green-600 mb-4 mx-auto">
            <Icon name="Check" size={32} className="text-white" />
          </div>
          
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Оплата прошла успешно!
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
            <div className="flex items-start gap-3">
              <Icon name="Mail" size={24} className="text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-green-900 mb-1">
                  Письмо отправлено на {purchaseData.email}
                </p>
                <p className="text-sm text-green-700">
                  Проверьте папку «Входящие» или «Спам». Письмо содержит все ссылки для скачивания.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-900">Ваши покупки:</h3>
            
            {purchaseData.products.map(item => (
              <Card key={item.product.id} className="border-2 hover:border-blue-300 transition-colors">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.product.name}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Количество: {item.quantity}
                      </p>
                      
                      <a
                        href={item.product.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:from-blue-700 hover:to-green-700 transition-all shadow-md hover:shadow-lg text-sm font-medium"
                      >
                        <Icon name="Download" size={18} />
                        Скачать таблицу
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="p-4 bg-blue-50 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-blue-700">
              <Icon name="Info" size={20} />
              <span className="font-semibold">Что дальше?</span>
            </div>
            <ul className="space-y-1 text-sm text-blue-900 ml-7">
              <li>• Сделайте копию таблицы в вашем Google Drive</li>
              <li>• Следуйте инструкциям в таблице</li>
              <li>• Настройте под свои нужды</li>
              <li>• При вопросах — пишите в поддержку</li>
            </ul>
          </div>
        </CardContent>
        
        <CardFooter className="flex gap-3">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1 border-2"
          >
            <Icon name="ShoppingBag" size={18} className="mr-2" />
            Купить еще
          </Button>
          
          <Button
            className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white"
          >
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Написать в поддержку
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SuccessPage;
