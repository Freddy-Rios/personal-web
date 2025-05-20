import { useRef, useEffect } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let t = 0; // angle of rotation

    function drawOval(
      x: number,
      y: number,
      radiusX: number,
      radiusY: number,
      rotation: number,
      color: string
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    }

    function drawGrain() {
      const grainCount = 800;
      for (let i = 0; i < grainCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const alpha = Math.random() * 0.05;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // semi-transparent background to keep trails
      ctx.fillStyle = "rgba(10, 10, 30, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // draw two rotating ovals with different offsets
      drawOval(width / 2, height / 2, 150, 80, t, "rgba(255,255,255,0.7)");
      drawOval(
        width / 2,
        height / 2,
        150,
        80,
        t + Math.PI / 2,
        "rgba(173,216,230,0.4)"
      );

      drawGrain();

      t += 0.01;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-[-1] bg-black" />;
};

export default AnimatedBackground;
