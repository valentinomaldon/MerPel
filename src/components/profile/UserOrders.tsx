import { useState, useEffect } from 'react';
import { Order } from '../../types';

export function UserOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Replace with actual API call
    const fetchOrders = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOrders([
        {
          id: '1',
          date: new Date().toISOString(),
          total: 150.00,
          status: 'completed',
          items: [
            {
              product: {
                id: 'kraft-1',
                name: 'Papel Kraft Natural 90g',
                description: 'Papel kraft natural de alta resistencia',
                price: 2.50,
                category: 'kraft',
                image: 'https://example.com/image.jpg',
                stock: 100
              },
              quantity: 2
            }
          ]
        }
      ]);
      setIsLoading(false);
    };

    fetchOrders();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <p className="text-gray-400">Cargando pedidos...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <p className="text-gray-400">No hay pedidos realizados aún.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4">Mis Pedidos</h2>
      
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="border-t border-gray-700 pt-4 first:border-t-0 first:pt-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-white font-semibold">Pedido #{order.id}</p>
                <p className="text-gray-400 text-sm">
                  {new Date(order.date).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-blue-400 font-bold">${order.total.toFixed(2)}</p>
                <p className="text-gray-400 text-sm capitalize">{order.status}</p>
              </div>
            </div>
            
            <div className="mt-2 space-y-2">
              {order.items.map(item => (
                <div key={item.product.id} className="flex justify-between text-gray-300 text-sm">
                  <span>{item.product.name} x {item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}