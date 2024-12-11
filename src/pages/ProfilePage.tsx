import { useAuthStore } from '../store/authStore';
import { UserOrders } from '../components/profile/UserOrders';
import { UserInfo } from '../components/profile/UserInfo';
import { Navigate } from 'react-router-dom';

export function ProfilePage() {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Mi Perfil</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <UserInfo user={user!} />
        </div>
        <div className="lg:col-span-2">
          <UserOrders />
        </div>
      </div>
    </div>
  );
}