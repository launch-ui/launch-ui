"use client";

import { useCallback, useEffect, useRef } from "react";

interface MesmerizingPlanetProps {
  className?: string;
}

// Performance detection (same as WebGLPlanet)
const getPerformanceLevel = () => {
  if (typeof window === "undefined") return "medium";

  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  const isLowEnd = /Android.*Chrome\/[0-9][0-9]\./i.test(navigator.userAgent);

  if (isMobile || isLowEnd) return "low";
  return "medium"; // Simplified to medium/low only
};

// Simple vertex shader
const vertexShader = `
  attribute vec4 position;
  varying vec2 vUv;
  
  void main() {
    vUv = (position.xy + 1.0) * 0.5;
    gl_Position = position;
  }
`;

// Original fluid organic background shader with performance optimizations
const getFragmentShader = (performanceLevel: string) => `
  precision ${performanceLevel === "low" ? "mediump" : "highp"} float;
  
  uniform float time;
  uniform vec2 resolution;
  uniform vec2 mouse;

  
  varying vec2 vUv;
  
  // Simplex noise function (original)
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy) );
    vec2 x0 = v -   i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
      dot(x12.zw,x12.zw)), 0.0);
    m = m*m ;
    m = m*m ;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  // FBM (Fractal Brownian Motion) - original with performance optimization
  float fbm(vec2 p) {
      float f = 0.0;
      float w = 0.5;
      int maxIterations = ${performanceLevel === "low" ? "3" : "5"};
      for (int i = 0; i < 5; i++) {
          if (i >= maxIterations) break;
          f += w * snoise(p);
          p *= 2.0;
          w *= 0.5;
      }
      return f;
  }

  // Enhanced dithering function (original with WebGL compatibility)
  float dither(vec2 position, float brightness) {
      int x = int(mod(position.x, 4.0));
      int y = int(mod(position.y, 4.0));
      
      float limit = 0.0;
      
      // WebGL-compatible manual lookup
      if (x == 0 && y == 0) limit = 0.0625;
      else if (x == 1 && y == 0) limit = 0.5625;
      else if (x == 2 && y == 0) limit = 0.1875;
      else if (x == 3 && y == 0) limit = 0.6875;
      else if (x == 0 && y == 1) limit = 0.8125;
      else if (x == 1 && y == 1) limit = 0.3125;
      else if (x == 2 && y == 1) limit = 0.9375;
      else if (x == 3 && y == 1) limit = 0.4375;
      else if (x == 0 && y == 2) limit = 0.25;
      else if (x == 1 && y == 2) limit = 0.75;
      else if (x == 2 && y == 2) limit = 0.125;
      else if (x == 3 && y == 2) limit = 0.625;
      else if (x == 0 && y == 3) limit = 1.0;
      else if (x == 1 && y == 3) limit = 0.5;
      else if (x == 2 && y == 3) limit = 0.875;
      else if (x == 3 && y == 3) limit = 0.375;
      
      return brightness < limit ? 0.0 : 1.0;
  }

  void main() {
      // Adjust for aspect ratio (original)
      vec2 uv = vUv;
      vec2 aspect = vec2(resolution.x / resolution.y, 1.0);
      uv = uv * 2.0 - 1.0;
      uv *= aspect;
      
      // Simple time-based animation without mouse
      
      // Very slow fluid animation (original)
      float speed = 0.05; // Much slower than original 0.2
      float scale = 2.5;
      
      // Distort the UV coordinates for fluid effect (original)
      vec2 distortedUV = uv;
      distortedUV.x += fbm(uv * 0.4 + time * speed * 0.8) * 0.2;
      distortedUV.y += fbm(uv * 0.4 - time * speed * 0.6) * 0.2;
      
      // Create fluid patterns with slower movement (original)
      float noise1 = fbm(distortedUV * scale + vec2(time * 0.03, 0.0));
      float noise2 = fbm(distortedUV * scale * 0.8 + vec2(0.0, time * 0.04));
      float noise3 = fbm(distortedUV * scale * 1.2 - vec2(time * 0.02, time * 0.025));
      
      // Combine noise patterns (original)
      float finalNoise = (noise1 * 0.5 + noise2 * 0.3 + noise3 * 0.2);
      
      // Apply dithering - responsive quality
      float ditherScale = ${performanceLevel === "low" ? "0.25" : "0.1"};
      vec2 pixelCoord = uv * resolution * ditherScale;
      float dithered = dither(pixelCoord, finalNoise * 0.5 + 0.5);
      
      // Brand color palette (original)
      vec3 brandDark = vec3(0.01, 0.005, 0.03);      // Very dark purple/black background
      vec3 brandPurple = vec3(0.376, 0.125, 0.627);  // Brand purple
      vec3 brandPink = vec3(0.847, 0.192, 0.349);    // Brand pink
      vec3 brandBright = vec3(1.0, 0.4, 0.6);        // Bright accent
      
      // Create fluid color gradient based on noise (original)
      vec3 fluidColor = mix(brandPurple, brandPink, noise2 * 0.5 + 0.5);
      fluidColor = mix(fluidColor, brandBright, noise3 * 0.3);
      
      // Final color with dithering and brand colors (original)
      vec3 finalColor = mix(brandDark, fluidColor, dithered * 0.7);
      
      // Add subtle pulsing glow
      finalColor += brandPink * 0.1 * (0.5 + 0.5 * sin(time * 0.8));
      
      // Subtle overall enhancement (original)
      finalColor = mix(finalColor, brandPurple, 0.1);
      
      gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function MesmerizingPlanet({
  className = "",
}: MesmerizingPlanetProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationRef = useRef<number>(0);
  const lastFrameTime = useRef(0);

  const createShader = (
    gl: WebGLRenderingContext,
    type: number,
    source: string,
  ): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader error:", gl.getShaderInfoLog(shader));
      return null;
    }

    return shader;
  };

  const createProgram = (
    gl: WebGLRenderingContext,
    vertShader: WebGLShader,
    fragShader: WebGLShader,
  ): WebGLProgram | null => {
    const program = gl.createProgram();
    if (!program) return null;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program error:", gl.getProgramInfoLog(program));
      return null;
    }

    return program;
  };

  const initWebGL = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { antialias: true });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    glRef.current = gl;

    // Create shaders with performance-appropriate fragment shader
    const performanceLevel = getPerformanceLevel();
    const vShader = createShader(gl, gl.VERTEX_SHADER, vertexShader);
    const fShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      getFragmentShader(performanceLevel),
    );

    if (!vShader || !fShader) return;

    // Create program
    const program = createProgram(gl, vShader, fShader);
    if (!program) return;

    programRef.current = program;
    gl.useProgram(program);

    // Create geometry
    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);
  }, []);

  const render = useCallback((time: number) => {
    const gl = glRef.current;
    const program = programRef.current;

    if (!gl || !program) return;

    // Throttle rendering based on device performance
    const performanceLevel = getPerformanceLevel();
    const frameDelay = performanceLevel === "low" ? 33.33 : 16.67; // 30fps for low-end, 60fps for others

    if (time - lastFrameTime.current < frameDelay) {
      animationRef.current = requestAnimationFrame(render);
      return;
    }
    lastFrameTime.current = time;

    // Set uniforms
    gl.uniform1f(gl.getUniformLocation(program, "time"), time * 0.001);
    gl.uniform2f(
      gl.getUniformLocation(program, "resolution"),
      gl.canvas.width,
      gl.canvas.height,
    );
    gl.uniform2f(
      gl.getUniformLocation(program, "mouse"),
      0.5 * gl.canvas.width,
      0.5 * gl.canvas.height,
    );

    // Render with consistent viewport
    const canvas = gl.canvas as HTMLCanvasElement;
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(0.01, 0.005, 0.03, 1.0); // Consistent clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    animationRef.current = requestAnimationFrame(render);
  }, []);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use full viewport for fixed background
    const width = window.innerWidth;
    const height = window.innerHeight;
    const performanceLevel = getPerformanceLevel();

    // Resolution scaling - high quality for desktop, improved for mobile
    let scale = 1.0; // Full quality for desktop
    if (performanceLevel === "low") {
      scale = 0.65; // Improved mobile quality (was 0.4)
    }

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    canvas.width = width * scale * dpr;
    canvas.height = height * scale * dpr;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Add a small delay to ensure DOM is ready
    const initTimer = setTimeout(() => {
      try {
        // Initialize WebGL
        initWebGL();
        handleResize();

        // Start render loop
        animationRef.current = requestAnimationFrame(render);
      } catch (error) {
        console.warn("WebGL initialization failed:", error);
        // Fallback: hide canvas if WebGL fails
        if (canvas.parentElement) {
          canvas.parentElement.style.display = "none";
        }
      }
    }, 50);

    return () => {
      clearTimeout(initTimer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [render, handleResize, initWebGL]);

  return (
    <canvas
      ref={canvasRef}
      className={`h-screen w-screen ${className}`}
      style={{
        width: "100vw",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
