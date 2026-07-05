"use client";

import { useEffect, useRef } from "react";

export default function NeuralCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Hide cursor globally when this component mounts (homepage only)
    document.body.style.cursor = 'none';

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 150,
      visualRadius: 15,
      speed: 0,
    };

    let lastMouseX = -1000;
    let lastMouseY = -1000;
    let isOverCard = false;

    // Selectors for elements where the normal cursor should appear
    const cardSelector = '.kinetic-card, .kinetic-card-low, .contact-meta, a, button, [role="button"], .theme-toggle, input, select, textarea, .status-chip, .ghost-border, .btn-primary, .btn-secondary, .tech-link';

    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const overCard = !!target.closest(cardSelector);

      if (overCard && !isOverCard) {
        // Entering a card — hide black hole, show normal cursor
        isOverCard = true;
        document.body.style.cursor = '';
        mouse.x = -1000;
        mouse.y = -1000;
        mouse.speed = 0;
        return;
      } else if (!overCard && isOverCard) {
        // Leaving a card — restore black hole cursor
        isOverCard = false;
        document.body.style.cursor = 'none';
      }

      if (isOverCard) return;

      if (lastMouseX !== -1000) {
        const dx = event.x - lastMouseX;
        const dy = event.y - lastMouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        mouse.speed += dist * 0.18; // velocity speed accumulation
      }
      mouse.x = event.x;
      mouse.y = event.y;
      lastMouseX = event.x;
      lastMouseY = event.y;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      lastMouseX = -1000;
      lastMouseY = -1000;
      mouse.speed = 0;
      isOverCard = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      isSecondary: boolean;

      constructor() {
        if (!canvas) {
          this.x = 0; this.y = 0; this.size = 0; this.baseX = 0; this.baseY = 0; this.density = 0; this.isSecondary = false;
          return;
        }
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
        this.isSecondary = Math.random() > 0.5;
      }

      draw(isLightMode: boolean) {
        if (!ctx) return;
        ctx.fillStyle = isLightMode
          ? (this.isSecondary ? "#1d4ed8" : "#d62b1e")
          : (this.isSecondary ? "#4c8dff" : "#ff4433");
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update() {
        if (mouse.x === -1000) {
          if (this.x !== this.baseX) {
            const dxUpdate = this.x - this.baseX;
            this.x -= dxUpdate / 15;
          }
          if (this.y !== this.baseY) {
            const dyUpdate = this.y - this.baseY;
            this.y -= dyUpdate / 15;
          }
          return;
        }

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          if (distance < mouse.visualRadius) {
            // Star swallowed by event horizon; respawn at random outer edge of viewport
            const edge = Math.floor(Math.random() * 4);
            if (edge === 0) { // Top
              this.x = Math.random() * canvas!.width;
              this.y = 0;
            } else if (edge === 1) { // Right
              this.x = canvas!.width;
              this.y = Math.random() * canvas!.height;
            } else if (edge === 2) { // Bottom
              this.x = Math.random() * canvas!.width;
              this.y = canvas!.height;
            } else { // Left
              this.x = 0;
              this.y = Math.random() * canvas!.height;
            }
            this.baseX = this.x;
            this.baseY = this.y;
          } else {
            // Gravitational pull & orbital swirl (spiraling in)
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const pullForce = (mouse.radius - distance) / mouse.radius;

            const pullX = forceDirectionX * pullForce * (this.density * 0.12 + 1.2);
            const pullY = forceDirectionY * pullForce * (this.density * 0.12 + 1.2);

            const orbitSpeed = 1.6;
            const orbitX = (-dy / distance) * pullForce * orbitSpeed;
            const orbitY = (dx / distance) * pullForce * orbitSpeed;

            this.x += pullX + orbitX;
            this.y += pullY + orbitY;
          }
        } else {
          if (this.x !== this.baseX) {
            const dxUpdate = this.x - this.baseX;
            this.x -= dxUpdate / 15;
          }
          if (this.y !== this.baseY) {
            const dyUpdate = this.y - this.baseY;
            this.y -= dyUpdate / 15;
          }
        }
      }
    }

    const initCanvas = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numberOfParticles = (canvas.width * canvas.height) / 5000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connect = (isLightMode: boolean) => {
      if (!ctx) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 80) {
            const opacityValue = 1 - distance / 80;
            ctx.strokeStyle = isLightMode
              ? `rgba(20, 22, 26, ${opacityValue * 0.32})`
              : `rgba(140, 160, 190, ${opacityValue * 0.25})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const drawBlackHole = (isLightMode: boolean) => {
      if (mouse.x === -1000 || !ctx) return;

      const visualRadius = mouse.visualRadius;

      ctx.save();

      // Accretion disk glow
      const grad = ctx.createRadialGradient(
        mouse.x, mouse.y, visualRadius * 0.3,
        mouse.x, mouse.y, visualRadius * 2.2
      );

      if (isLightMode) {
        grad.addColorStop(0, "rgba(20, 22, 26, 1)");
        grad.addColorStop(0.35, "rgba(29, 78, 216, 0.75)");
        grad.addColorStop(0.7, "rgba(214, 43, 30, 0.35)");
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");
      } else {
        grad.addColorStop(0, "rgba(10, 10, 12, 1)");
        grad.addColorStop(0.35, "rgba(255, 68, 51, 0.85)");
        grad.addColorStop(0.7, "rgba(76, 141, 255, 0.45)");
        grad.addColorStop(1, "rgba(19, 20, 23, 0)");
      }

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, visualRadius * 2.2, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Event Horizon
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, visualRadius, 0, Math.PI * 2);
      ctx.fillStyle = isLightMode ? "#131417" : "#000000";
      ctx.fill();

      // Electric ring border
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, visualRadius, 0, Math.PI * 2);
      ctx.strokeStyle = isLightMode ? "rgba(29, 78, 216, 0.6)" : "rgba(255, 68, 51, 0.7)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLightMode = document.documentElement.getAttribute("data-theme") === "light";

      // Smooth decay of mouse movement speed
      mouse.speed *= 0.93;
      const baseVisualRadius = 15;
      const maxVisualRadius = 55;
      mouse.visualRadius = baseVisualRadius + Math.min(mouse.speed, maxVisualRadius - baseVisualRadius);
      mouse.radius = 110 + mouse.visualRadius * 2.5;

      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(isLightMode);
        particles[i].update();
      }
      connect(isLightMode);
      drawBlackHole(isLightMode);
      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      // Restore cursor when unmounting
      document.body.style.cursor = '';

      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="interactive-bg">
      <canvas ref={canvasRef} id="neural-canvas" />
    </div>
  );
}
