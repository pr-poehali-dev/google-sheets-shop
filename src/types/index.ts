export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  downloadLink: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface PurchaseData {
  email: string;
  products: CartItem[];
}
