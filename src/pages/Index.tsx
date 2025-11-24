import { useState } from 'react';
import Hero from '@/components/Hero';
import ProductCatalog from '@/components/ProductCatalog';
import Cart from '@/components/Cart';
import CheckoutForm from '@/components/CheckoutForm';
import SuccessPage from '@/components/SuccessPage';
import { Product, CartItem } from '@/types';

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [purchaseData, setPurchaseData] = useState<{ email: string; products: CartItem[] } | null>(null);

  const products: Product[] = [
    {
      id: 1,
      name: 'Финансовый планировщик',
      description: 'Полный набор таблиц для управления личными финансами, бюджетом и инвестициями',
      price: 1990,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example1',
      features: ['Контроль расходов', 'Планирование бюджета', 'Аналитика трат', 'Инвестиционный портфель']
    },
    {
      id: 2,
      name: 'CRM для малого бизнеса',
      description: 'Готовая система учета клиентов, сделок и продаж для вашего бизнеса',
      price: 2990,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example2',
      features: ['База клиентов', 'Воронка продаж', 'История сделок', 'Отчеты по продажам']
    },
    {
      id: 3,
      name: 'Управление проектами',
      description: 'Профессиональные инструменты для планирования и контроля проектов',
      price: 2490,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example3',
      features: ['Диаграмма Ганта', 'Трекер задач', 'Распределение ресурсов', 'Контроль сроков']
    },
    {
      id: 4,
      name: 'Складской учет',
      description: 'Комплексное решение для учета товаров, остатков и поставок',
      price: 3490,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example4',
      features: ['Учет остатков', 'Приход/расход', 'Инвентаризация', 'Отчеты по складу']
    },
    {
      id: 5,
      name: 'Контент-план для SMM',
      description: 'Готовый шаблон для планирования контента в социальных сетях',
      price: 1490,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example5',
      features: ['Календарь публикаций', 'Идеи для постов', 'Аналитика охватов', 'Планирование сторис']
    },
    {
      id: 6,
      name: 'HR-система',
      description: 'Инструменты для учета сотрудников, отпусков и начисления зарплат',
      price: 2790,
      image: 'https://cdn.poehali.dev/projects/d300eb41-85fd-410e-b9d3-ef976b7440b0/files/10f0494b-2545-4743-b87b-9ee47cf6fde1.jpg',
      downloadLink: 'https://docs.google.com/spreadsheets/d/example6',
      features: ['База сотрудников', 'График отпусков', 'Расчет зарплаты', 'Табель учета времени']
    }
  ];

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = () => {
    if (cart.length > 0) {
      setIsCheckout(true);
    }
  };

  const handlePurchaseComplete = (email: string) => {
    setPurchaseData({ email, products: cart });
    setCart([]);
    setIsCheckout(false);
  };

  const handleBackToShopping = () => {
    setPurchaseData(null);
  };

  if (purchaseData) {
    return <SuccessPage purchaseData={purchaseData} onBack={handleBackToShopping} />;
  }

  if (isCheckout) {
    return (
      <CheckoutForm
        cart={cart}
        onBack={() => setIsCheckout(false)}
        onComplete={handlePurchaseComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Hero />
      <ProductCatalog products={products} onAddToCart={addToCart} />
      <Cart
        items={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
