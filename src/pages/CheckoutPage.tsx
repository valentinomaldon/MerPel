import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { useAuthStore } from '../store/authStore';

export function CheckoutPage() {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { items, total, clearCart } = useCartStore();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleCheckout = async (formData: any) => {
    setIsProcessing(true);
    try {
      // TODO: Integrate with payment gateway
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      clearCart();
      navigate('/profile/orders');
    } catch (error) {
      console.error('Error processing payment:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <CheckoutForm onSubmit={handleCheckout} isProcessing={isProcessing} />
        <OrderSummary items={items} total={total} />
      </div>
    </div>
  );
}