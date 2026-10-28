import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  alpha: number;
  color: string;
}

interface Cube {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  angleX: number;
  angleY: number;
  rotSpeedX: number;
  rotSpeedY: number;
  alpha: number;
  color: string;
}

export const GamerBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for gentle interactive repelling/brightening
    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Color palettes: Gamer Neon Blue, Cyan, and Deep Indigo/Purple
    const neonColors = [
      'rgba(0, 240, 255, ',    // Neon Cyan
      'rgba(56, 189, 248, ',   // Sky Blue Neon
      'rgba(99, 102, 241, ',   // Indigo
      'rgba(147, 51, 234, ',   // Purple Neon
      'rgba(14, 165, 233, '    // Deep Cyan
    ];

    // Generate floating ascending cubes
    const cubeCount = Math.min(24, Math.floor(width / 60));
    const cubes: Cube[] = [];

    for (let i = 0; i < cubeCount; i++) {
      cubes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 18 + 12,
        speedY: Math.random() * 0.7 + 0.35,
        speedX: (Math.random() - 0.5) * 0.3,
        angleX: Math.random() * Math.PI * 2,
        angleY: Math.random() * Math.PI * 2,
        rotSpeedX: (Math.random() - 0.5) * 0.02,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        alpha: Math.random() * 0.4 + 0.2,
        color: neonColors[Math.floor(Math.random() * neonColors.length)]
      });
    }

    // Generate rising particles/sparks
    const particleCount = Math.min(60, Math.floor(width / 25));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.5 + 1,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.2,
        color: neonColors[Math.floor(Math.random() * neonColors.length)]
      });
    }

    // 3D Isometric Cube Projection Helper
    const drawIsometricCube = (
      context: CanvasRenderingContext2D,
      cube: Cube
    ) => {
      const s = cube.size;
      const cosX = Math.cos(cube.angleX);
      const sinX = Math.sin(cube.angleX);
      const cosY = Math.cos(cube.angleY);
      const sinY = Math.sin(cube.angleY);

      // 8 vertices of cube in local space
      const vertices = [
        [-s, -s, -s],
        [s, -s, -s],
        [s, s, -s],
        [-s, s, -s],
        [-s, -s, s],
        [s, -s, s],
        [s, s, s],
        [-s, s, s]
      ];

      // Rotate around X and Y
      const projected = vertices.map(([vx, vy, vz]) => {
        // Rotate around Y
        const x1 = vx * cosY + vz * sinY;
        const z1 = -vx * sinY + vz * cosY;
        // Rotate around X
        const y2 = vy * cosX - z1 * sinX;
        const z2 = vy * sinX + z1 * cosX;

        // Simple weak perspective projection
        const fov = 160;
        const scale = fov / (fov + z2);
        return [cube.x + x1 * scale, cube.y + y2 * scale];
      });

      // 12 edges connecting vertices
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0], // front
        [4, 5], [5, 6], [6, 7], [7, 4], // back
        [0, 4], [1, 5], [2, 6], [3, 7]  // connectors
      ];

      // Proximity to mouse can enhance glow
      const distToMouse = Math.hypot(cube.x - mouseX, cube.y - mouseY);
      const mouseBoost = distToMouse < 180 ? (1 - distToMouse / 180) * 0.4 : 0;
      const currentAlpha = Math.min(0.9, cube.alpha + mouseBoost);

      context.save();
      context.lineWidth = 1.2;
      context.strokeStyle = `${cube.color}${currentAlpha})`;
      context.shadowColor = 'rgba(0, 240, 255, 0.6)';
      context.shadowBlur = 8;

      context.beginPath();
      for (const [v1, v2] of edges) {
        context.moveTo(projected[v1][0], projected[v1][1]);
        context.lineTo(projected[v2][0], projected[v2][1]);
      }
      context.stroke();

      // Subtle translucent fill on top face
      context.fillStyle = `${cube.color}${currentAlpha * 0.15})`;
      context.beginPath();
      context.moveTo(projected[0][0], projected[0][1]);
      context.lineTo(projected[1][0], projected[1][1]);
      context.lineTo(projected[5][0], projected[5][1]);
      context.lineTo(projected[4][0], projected[4][1]);
      context.closePath();
      context.fill();

      context.restore();
    };

    const render = () => {
      // Clear with ultra-dark translucent trail for subtle motion blur
      ctx.clearRect(0, 0, width, height);

      // Render & update rising particles
      for (const p of particles) {
        p.y -= p.speedY;
        p.x += p.speedX;

        // Reset if reached top or out of bounds
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.alpha})`;
        ctx.shadowColor = 'rgba(0, 240, 255, 0.8)';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      // Render & update rising 3D cubes
      for (const c of cubes) {
        c.y -= c.speedY;
        c.x += c.speedX;
        c.angleX += c.rotSpeedX;
        c.angleY += c.rotSpeedY;

        // Reset if reached top
        if (c.y < -40) {
          c.y = height + 40;
          c.x = Math.random() * width;
        }
        if (c.x < -40) c.x = width + 40;
        if (c.x > width + 40) c.x = -40;

        drawIsometricCube(ctx, c);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Obsidian Background Layer */}
      <div className="absolute inset-0 bg-[#020206]" />

      {/* Subtle Cyber Grid Floor at the bottom for gamer perspective */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(400px) rotateX(60deg)',
          transformOrigin: 'bottom center',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 80%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, transparent 80%)'
        }}
      />

      {/* Floating Canvas for Animated Neon Cubes & Rising Particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Very subtle ambient blue/violet glow highlights at top and bottom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/[0.04] via-violet-600/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-blue-600/[0.03] rounded-full blur-[140px] pointer-events-none" />
    </div>
  );
};
