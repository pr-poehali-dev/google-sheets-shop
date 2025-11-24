import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    catalog?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-fuchsia-500/10 to-violet-500/10 animate-pulse-glow" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-fuchsia-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '1s'}} />
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}} />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium animate-bounce-in">
              <Icon name="Sparkles" size={16} />
              Готовые решения для вашего бизнеса
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-purple-600 via-fuchsia-500 to-violet-600 bg-clip-text text-transparent animate-fade-in">
              Google Таблицы для профессионалов
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Экономьте время и деньги с нашими готовыми шаблонами. Автоматизация, аналитика и удобство в одном клике.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:from-purple-700 hover:to-fuchsia-700 text-white shadow-lg hover:shadow-xl transition-all animate-bounce-in"
                onClick={scrollToCatalog}
              >
                Выбрать таблицу
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-purple-200 hover:bg-purple-50 animate-bounce-in" style={{animationDelay: '0.1s'}}
              >
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть примеры
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle" size={20} className="text-purple-600" />
                <span className="text-sm text-gray-600">Мгновенная доставка</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-purple-600" />
                <span className="text-sm text-gray-600">Гарантия качества</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-fuchsia-400 rounded-3xl blur-3xl opacity-30 animate-pulse-glow" />
            <img
              src="https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/d7bfe8ef-ed81-422b-b136-fb46826b52cc.jpg"
              alt="Google Таблицы"
              className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;