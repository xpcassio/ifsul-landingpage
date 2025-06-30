import { useState } from 'react';
import { useEffect } from 'react';

export default function CountDown() {
  const dataEntrega = new Date('2026-01-01T00:00:00');

  const calculateTimeLeft = () => {
    const difference = +dataEntrega - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeLeft = () => timeLeft;

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="text-center">
          {(() => {
            const { days, hours, minutes, seconds } = getTimeLeft();
            return (
              <h1 className="display-1 fw-bold">
                {days} dias {hours}h {minutes}m {seconds}s restantes
              </h1>
            );
          })()}
        </div>
      </div>
    </>
  );
}
