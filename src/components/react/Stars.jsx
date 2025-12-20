import { useEffect, useRef } from 'react';

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const stars = [];
    const shootingStars = [];
    const nebulae = [];
    const planets = [];
    const asteroids = [];
    const comets = [];
    const dustParticles = [];
    const STAR_COUNT = Math.round((w * h) / 2500);
    const NEBULA_COUNT = 5;
    const PLANET_COUNT = 3;
    const DUST_COUNT = Math.round((w * h) / 5000);

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    const starColors = [
      'rgba(135, 206, 250, ',
      'rgba(255, 255, 255, ',
      'rgba(255, 244, 229, ',
      'rgba(255, 214, 170, ',
      'rgba(255, 180, 180, ',
    ];

    function createStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        const size = Math.random();
        let r, twinkleSpeed, brightness;
        
        if (size < 0.7) {
          r = rand(0.3, 0.8);
          twinkleSpeed = rand(0.01, 0.03);
          brightness = rand(0.4, 0.7);
        } else if (size < 0.9) {
          r = rand(0.8, 1.5);
          twinkleSpeed = rand(0.008, 0.02);
          brightness = rand(0.6, 0.9);
        } else {
          r = rand(1.5, 2.5);
          twinkleSpeed = rand(0.005, 0.015);
          brightness = rand(0.8, 1);
        }

        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: r,
          alpha: brightness,
          baseAlpha: brightness,
          twinkleSpeed: twinkleSpeed,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          vx: (Math.random() - 0.5) * 0.02,
          vy: (Math.random() - 0.5) * 0.02,
        });
      }
    }

    function createNebulae() {
      nebulae.length = 0;
      const nebulaColors = [
        { c1: 'rgba(138, 43, 226, 0.08)', c2: 'rgba(75, 0, 130, 0.04)' },
        { c1: 'rgba(0, 191, 255, 0.08)', c2: 'rgba(30, 144, 255, 0.04)' },
        { c1: 'rgba(255, 20, 147, 0.08)', c2: 'rgba(199, 21, 133, 0.04)' },
        { c1: 'rgba(0, 255, 255, 0.08)', c2: 'rgba(0, 206, 209, 0.04)' },
        { c1: 'rgba(255, 69, 0, 0.06)', c2: 'rgba(255, 140, 0, 0.03)' },
      ];
      
      for (let i = 0; i < NEBULA_COUNT; i++) {
        const colorSet = nebulaColors[i % nebulaColors.length];
        nebulae.push({
          x: rand(0, w),
          y: rand(0, h),
          radius: rand(200, 400),
          color1: colorSet.c1,
          color2: colorSet.c2,
          rotation: rand(0, Math.PI * 2),
          rotationSpeed: rand(-0.0003, 0.0003),
          pulseSpeed: rand(0.001, 0.003),
          pulseOffset: rand(0, Math.PI * 2),
        });
      }
    }

    function createPlanets() {
      planets.length = 0;
      for (let i = 0; i < PLANET_COUNT; i++) {
        const radius = rand(30, 80);
        planets.push({
          x: rand(radius, w - radius),
          y: rand(radius, h - radius),
          radius: radius,
          color: `rgba(${rand(100, 200)}, ${rand(100, 180)}, ${rand(150, 220)}, 0.4)`,
          ringColor: `rgba(${rand(150, 200)}, ${rand(150, 180)}, ${rand(180, 220)}, 0.2)`,
          hasRing: Math.random() > 0.5,
          rotation: rand(0, Math.PI * 2),
          glowColor: `rgba(${rand(100, 200)}, ${rand(100, 180)}, ${rand(150, 220)}, 0.1)`,
        });
      }
    }

    function createDustParticles() {
      dustParticles.length = 0;
      for (let i = 0; i < DUST_COUNT; i++) {
        dustParticles.push({
          x: rand(0, w),
          y: rand(0, h),
          size: rand(0.5, 1.5),
          alpha: rand(0.1, 0.3),
          speedX: rand(-0.05, 0.05),
          speedY: rand(-0.05, 0.05),
          depth: rand(0.3, 1),
        });
      }
    }

    function createComet() {
      comets.push({
        x: rand(-100, w + 100),
        y: -100,
        speed: rand(2, 4),
        angle: rand(0.3, 0.7),
        size: rand(3, 6),
        tailLength: rand(150, 300),
        opacity: 1,
      });
    }

    function createAsteroid() {
      asteroids.push({
        x: Math.random() > 0.5 ? -50 : w + 50,
        y: rand(0, h),
        size: rand(2, 8),
        speedX: rand(1, 3) * (Math.random() > 0.5 ? 1 : -1),
        speedY: rand(-0.5, 0.5),
        rotation: rand(0, Math.PI * 2),
        rotationSpeed: rand(-0.05, 0.05),
        opacity: rand(0.6, 1),
        sides: Math.floor(rand(5, 8)),
      });
    }

    function createShootingStar() {
      const fromLeft = Math.random() > 0.5;
      shootingStars.push({
        x: fromLeft ? 0 : w,
        y: rand(0, h * 0.6),
        length: rand(80, 150),
        speed: rand(8, 15),
        angle: fromLeft ? rand(-0.3, 0.3) : rand(Math.PI - 0.3, Math.PI + 0.3),
        opacity: 1,
        tail: [],
        thickness: rand(1.5, 3),
      });
    }

    function onResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      createStars();
      createNebulae();
      createPlanets();
      createDustParticles();
    }

    let rafId;
    let time = 0;
    
    function loop() {
      time += 0.01;
      ctx.clearRect(0, 0, w, h);
      
      const grad = ctx.createRadialGradient(w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h));
      grad.addColorStop(0, 'rgba(15, 10, 30, 1)');
      grad.addColorStop(0.3, 'rgba(8, 5, 20, 1)');
      grad.addColorStop(0.7, 'rgba(3, 2, 10, 1)');
      grad.addColorStop(1, 'rgba(0, 0, 2, 1)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      const milkyWay = ctx.createLinearGradient(0, h * 0.3, w, h * 0.7);
      milkyWay.addColorStop(0, 'rgba(100, 100, 150, 0)');
      milkyWay.addColorStop(0.3, 'rgba(120, 120, 180, 0.03)');
      milkyWay.addColorStop(0.5, 'rgba(140, 140, 200, 0.05)');
      milkyWay.addColorStop(0.7, 'rgba(120, 120, 180, 0.03)');
      milkyWay.addColorStop(1, 'rgba(100, 100, 150, 0)');
      ctx.fillStyle = milkyWay;
      ctx.fillRect(0, 0, w, h);

      planets.forEach(planet => {
        const glowGradient = ctx.createRadialGradient(planet.x, planet.y, 0, planet.x, planet.y, planet.radius * 2);
        glowGradient.addColorStop(0, planet.glowColor);
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glowGradient;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius * 2, 0, Math.PI * 2);
        ctx.fill();

        const planetGradient = ctx.createRadialGradient(
          planet.x - planet.radius * 0.3,
          planet.y - planet.radius * 0.3,
          0,
          planet.x,
          planet.y,
          planet.radius
        );
        planetGradient.addColorStop(0, planet.color.replace('0.4', '0.6'));
        planetGradient.addColorStop(1, planet.color.replace('0.4', '0.2'));
        ctx.fillStyle = planetGradient;
        ctx.beginPath();
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();

        if (planet.hasRing) {
          ctx.save();
          ctx.translate(planet.x, planet.y);
          ctx.rotate(planet.rotation);
          ctx.strokeStyle = planet.ringColor;
          ctx.lineWidth = planet.radius * 0.15;
          ctx.beginPath();
          ctx.ellipse(0, 0, planet.radius * 1.8, planet.radius * 0.4, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
      });

      nebulae.forEach(nebula => {
        nebula.rotation += nebula.rotationSpeed;
        const pulse = Math.sin(time * nebula.pulseSpeed + nebula.pulseOffset) * 0.2 + 1;
        
        ctx.save();
        ctx.translate(nebula.x, nebula.y);
        ctx.rotate(nebula.rotation);
        ctx.scale(pulse, pulse);
        
        for (let i = 0; i < 3; i++) {
          const layerRadius = nebula.radius * (1 - i * 0.2);
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, layerRadius);
          gradient.addColorStop(0, nebula.color1);
          gradient.addColorStop(0.5, nebula.color2);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(-layerRadius, -layerRadius, layerRadius * 2, layerRadius * 2);
        }
        ctx.restore();
      });

      dustParticles.forEach(dust => {
        dust.x += dust.speedX * dust.depth;
        dust.y += dust.speedY * dust.depth;

        if (dust.x < 0) dust.x = w;
        if (dust.x > w) dust.x = 0;
        if (dust.y < 0) dust.y = h;
        if (dust.y > h) dust.y = 0;

        ctx.fillStyle = `rgba(200, 200, 255, ${dust.alpha * dust.depth})`;
        ctx.fillRect(dust.x, dust.y, dust.size * dust.depth, dust.size * dust.depth);
      });

      stars.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        
        if (s.x < 0) s.x = w;
        if (s.x > w) s.x = 0;
        if (s.y < 0) s.y = h;
        if (s.y > h) s.y = 0;

        s.alpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.3;

        if (s.r > 1.2) {
          const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
          gradient.addColorStop(0, s.color + (s.alpha * 0.3) + ')');
          gradient.addColorStop(1, s.color + '0)');
          ctx.fillStyle = gradient;
          ctx.fillRect(s.x - s.r * 3, s.y - s.r * 3, s.r * 6, s.r * 6);
        }

        ctx.beginPath();
        ctx.fillStyle = s.color + s.alpha + ')';
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

        if (s.r > 1.5 && s.alpha > 0.7) {
          ctx.strokeStyle = s.color + (s.alpha * 0.5) + ')';
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 4, s.y);
          ctx.lineTo(s.x + s.r * 4, s.y);
          ctx.moveTo(s.x, s.y - s.r * 4);
          ctx.lineTo(s.x, s.y + s.r * 4);
          ctx.stroke();
        }
      });

      shootingStars.forEach((star, index) => {
        const dx = Math.cos(star.angle) * star.speed;
        const dy = Math.sin(star.angle) * star.speed;
        
        star.x += dx;
        star.y += dy;
        star.opacity -= 0.008;

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - dx * 10,
          star.y - dy * 10
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        gradient.addColorStop(0.3, `rgba(200, 220, 255, ${star.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(100, 150, 255, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = star.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - dx * star.length / star.speed, star.y - dy * star.length / star.speed);
        ctx.stroke();

        const headGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.thickness * 2);
        headGradient.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
        headGradient.addColorStop(1, `rgba(255, 255, 255, 0)`);
        ctx.fillStyle = headGradient;
        ctx.fillRect(star.x - star.thickness * 2, star.y - star.thickness * 2, star.thickness * 4, star.thickness * 4);

        if (star.opacity <= 0 || star.x < -100 || star.x > w + 100 || star.y > h + 100) {
          shootingStars.splice(index, 1);
        }
      });

      comets.forEach((comet, index) => {
        comet.x += Math.cos(comet.angle) * comet.speed;
        comet.y += Math.sin(comet.angle) * comet.speed;
        comet.opacity -= 0.002;

        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - Math.cos(comet.angle) * comet.tailLength,
          comet.y - Math.sin(comet.angle) * comet.tailLength
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(0.2, `rgba(200, 240, 255, ${comet.opacity * 0.7})`);
        gradient.addColorStop(0.5, `rgba(100, 200, 255, ${comet.opacity * 0.4})`);
        gradient.addColorStop(1, 'rgba(50, 150, 255, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = comet.size;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(
          comet.x - Math.cos(comet.angle) * comet.tailLength,
          comet.y - Math.sin(comet.angle) * comet.tailLength
        );
        ctx.stroke();

        const coreGradient = ctx.createRadialGradient(comet.x, comet.y, 0, comet.x, comet.y, comet.size * 3);
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        coreGradient.addColorStop(0.5, `rgba(200, 240, 255, ${comet.opacity * 0.5})`);
        coreGradient.addColorStop(1, 'rgba(100, 200, 255, 0)');
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size * 3, 0, Math.PI * 2);
        ctx.fill();

        if (comet.opacity <= 0 || comet.y > h + 200) {
          comets.splice(index, 1);
        }
      });

      asteroids.forEach((asteroid, index) => {
        asteroid.x += asteroid.speedX;
        asteroid.y += asteroid.speedY;
        asteroid.rotation += asteroid.rotationSpeed;

        ctx.save();
        ctx.translate(asteroid.x, asteroid.y);
        ctx.rotate(asteroid.rotation);
        ctx.globalAlpha = asteroid.opacity;

        ctx.fillStyle = 'rgba(100, 100, 120, 0.8)';
        ctx.beginPath();
        for (let i = 0; i < asteroid.sides; i++) {
          const angle = (i / asteroid.sides) * Math.PI * 2;
          const variance = 0.7 + Math.random() * 0.3;
          const x = Math.cos(angle) * asteroid.size * variance;
          const y = Math.sin(angle) * asteroid.size * variance;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = 'rgba(150, 150, 170, 0.6)';
        ctx.lineWidth = 0.5;
        ctx.stroke();

        ctx.restore();

        if (asteroid.x < -100 || asteroid.x > w + 100 || asteroid.y < -100 || asteroid.y > h + 100) {
          asteroids.splice(index, 1);
        }
      });

      if (Math.random() < 0.006) {
        createShootingStar();
      }

      if (Math.random() < 0.001) {
        createComet();
      }

      if (Math.random() < 0.003) {
        createAsteroid();
      }

      rafId = requestAnimationFrame(loop);
    }

    createStars();
    createNebulae();
    createPlanets();
    createDustParticles();
    window.addEventListener('resize', onResize);
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
