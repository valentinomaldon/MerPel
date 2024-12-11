interface BusinessHour {
  days: string;
  hours: string;
}

const businessHours: BusinessHour[] = [
  { days: 'Lunes a Viernes', hours: '9:00 - 18:00' },
  { days: 'Sábados', hours: '9:00 - 13:00' }
];

export function BusinessHours() {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-white mb-4">Horarios de Atención</h2>
      <div className="grid grid-cols-2 gap-4 text-gray-300">
        {businessHours.map(({ days, hours }) => (
          <div key={days}>
            <p className="font-semibold">{days}</p>
            <p>{hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}