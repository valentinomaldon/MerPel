import { User } from '../../types';

interface UserInfoProps {
  user: User;
}

export function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h2 className="text-xl font-bold text-white mb-4">Información Personal</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-gray-400 text-sm">Nombre</label>
          <p className="text-white">{user.name}</p>
        </div>
        <div>
          <label className="block text-gray-400 text-sm">Email</label>
          <p className="text-white">{user.email}</p>
        </div>
      </div>
    </div>
  );
}