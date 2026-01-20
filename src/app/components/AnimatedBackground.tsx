import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'default' | 'dark';
}

export function AnimatedBackground({ variant = 'default' }: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const orbs = [
    {
      size: 600,
      x: 20,
      y: 10,
      color: variant === 'dark' ? 'rgba(198, 40, 40, 0.15)' : 'rgba(198, 40, 40, 0.08)',
      duration: 20,
      delay: 0,
    },
    {
      size: 500,
      x: 70,
      y: 60,
      color: variant === 'dark' ? 'rgba(183, 28, 28, 0.12)' : 'rgba(183, 28, 28, 0.06)',
      duration: 25,
      delay: 2,
    },
    {
      size: 400,
      x: 50,
      y: 80,
      color: variant === 'dark' ? 'rgba(239, 83, 80, 0.1)' : 'rgba(239, 83, 80, 0.05)',
      duration: 22,
      delay: 4,
    },
    {
      size: 350,
      x: 10,
      y: 50,
      color: variant === 'dark' ? 'rgba(244, 143, 177, 0.08)' : 'rgba(244, 143, 177, 0.04)',
      duration: 28,
      delay: 1,
    },
  ];

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 10 + 15,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Gradient Orbs */}
      {orbs.map((orb, index) => (
        <motion.div
          key={`orb-${index}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color,
          }}
          animate={{
            x: [0, 100, -50, 50, 0],
            y: [0, -80, 100, -50, 0],
            scale: [1, 1.2, 0.8, 1.1, 1],
            opacity: [0.3, 0.6, 0.4, 0.5, 0.3],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full bg-[#C62828]/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Interactive Cursor Glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(198, 40, 40, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
        <motion.div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C62828 1px, transparent 1px),
              linear-gradient(to bottom, #C62828 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Gradient Mesh Overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(at 0% 0%, rgba(198, 40, 40, 0.05) 0%, transparent 50%),
            radial-gradient(at 100% 0%, rgba(183, 28, 28, 0.05) 0%, transparent 50%),
            radial-gradient(at 100% 100%, rgba(198, 40, 40, 0.05) 0%, transparent 50%),
            radial-gradient(at 0% 100%, rgba(239, 83, 80, 0.05) 0%, transparent 50%)
          `,
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated Lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-[#C62828]/20 to-transparent"
          style={{
            width: '100%',
            top: `${20 + i * 15}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            delay: i * 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
