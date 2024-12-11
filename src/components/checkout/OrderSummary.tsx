import { CartItem } from '../../types';

interface OrderSummaryProps {
  items: CartItem[];
  total: number;
}

export function OrderSummary({ items, total }: OrderSummaryProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4">Resumen del Pedido</h2>
      
      <div className="space-y-4 mb-4">
        {items.map(item => (
          <div key={item.product.id} className="flex justify-between text-gray-300">
            <span>
              {item.product.name} x {item.quantity}
            </span>
            <span>${(item.product.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      
      <div className="border-t border-gray-700 pt-4 space-y-2">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Envío</span>
          <span>Gratis</span>
        </div>
        <div className="flex justify-between text-white font-bold text-lg">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}