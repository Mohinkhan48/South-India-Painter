import { useState, useEffect, useRef } from 'react';
import { m, useReducedMotion, AnimatePresence } from 'framer-motion';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { ArrowRight, Play, Pause } from 'lucide-react';

interface PaintColor {
  name: string;
  hex: string;
  description: string;
}

const paintColors: PaintColor[] = [
  { name: 'Warm White', hex: '#F2ECE4', description: 'Soft, welcoming and timeless' },
  { name: 'Ivory', hex: '#F9F6EE', description: 'Warm, classic and bright' },
  { name: 'Cream', hex: '#F7EEDB', description: 'Rich, comforting and buttery' },
  { name: 'Beige', hex: '#E3D8C4', description: 'Neutral, grounding and elegant' },
  { name: 'Sand', hex: '#D3C2A9', description: 'Warm, natural and textured' },
  { name: 'Light Grey', hex: '#D6DBD9', description: 'Cool, modern and sleek' },
  { name: 'Sage Green', hex: '#8F9779', description: 'Calming, organic and leafy' },
  { name: 'Olive Green', hex: '#596547', description: 'Deep, sophisticated and earthy' },
  { name: 'Mint Green', hex: '#C4DCC8', description: 'Fresh, airy and light' },
  { name: 'Sky Blue', hex: '#B4C9D9', description: 'Serene, soft and expansive' },
  { name: 'Navy Blue', hex: '#1E2D42', description: 'Deep, bold and luxurious' },
  { name: 'Dusty Blue', hex: '#768D9C', description: 'Muted, calm and slate-like' },
  { name: 'Terracotta', hex: '#BD6B54', description: 'Warm, vibrant and sun-baked' },
  { name: 'Peach', hex: '#F2C8B1', description: 'Delicate, soft and positive' },
  { name: 'Charcoal Grey', hex: '#363C40', description: 'Sleek, dramatic and industrial' }
];

export default function ColourVisualizerSection() {
  const shouldReduceMotion = useReducedMotion();
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoplayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-rotation effect
  useEffect(() => {
    if (isAutoPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentColorIndex((prev) => (prev + 1) % paintColors.length);
      }, 2800); // changes every 2.8 seconds
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const activeColor = paintColors[currentColorIndex];

  const handleColorSelect = (index: number) => {
    setCurrentColorIndex(index);
    setIsAutoPlaying(false); // Pause auto-rotation when user interacts manually
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Section animations
  const contentVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="bg-[var(--color-background)] mt-[80px] md:mt-[100px] lg:mt-[120px] pt-[100px] pb-[100px] flex justify-center w-full overflow-hidden border-t border-[rgba(16,42,67,0.05)]">
      <Container className="!w-[calc(100%-40px)] sm:!w-[calc(100%-48px)] md:!w-[calc(100%-64px)] px-0">
        <div className="grid grid-cols-1 md:grid-cols-[42%_58%] lg:grid-cols-[40%_60%] gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* ── Left Content (40% width on Desktop) ── */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <div>
              <m.span
                variants={contentVariants}
                transition={{ duration: shouldReduceMotion ? 0 : 0.45 }}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] block mb-3"
              >
                MAKE NEW COLOUR SELECTIONS THIS SEASON
              </m.span>
              <m.h2
                variants={contentVariants}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.05 }}
                className="text-[2.2rem] font-extrabold leading-[1.1] tracking-[-0.04em] text-[var(--color-primary)] sm:text-[2.8rem] lg:text-[3.6rem]"
              >
                Choosing A Paint Colour Has Never Been Easier
              </m.h2>
            </div>

            <m.p
              variants={contentVariants}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: 0.1 }}
              className="text-[15px] sm:text-[16px] leading-[1.6] text-[var(--color-text)] opacity-90 max-w-[500px]"
            >
              Help customers visualize different paint colours before making a decision. Instantly preview how various wall shades transform a modern living room and confidently choose the perfect colour for their home.
            </m.p>

            {/* Premium Color Palette Swatches (Interactive preview) */}
            <m.div
              variants={contentVariants}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.15 }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center justify-between max-w-[450px]">
                <span className="text-[13px] font-bold text-[var(--color-primary)] uppercase tracking-wider">
                  Active Palette: <span className="text-[var(--color-accent)]">{activeColor.name}</span>
                </span>
                <button
                  onClick={toggleAutoPlay}
                  className="flex items-center gap-1.5 text-[12px] font-extrabold text-[var(--color-primary)] opacity-80 hover:opacity-100 transition-opacity"
                  aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
                >
                  {isAutoPlaying ? (
                    <>
                      <Pause className="h-3 w-3" /> PAUSE AUTO-PREVIEW
                    </>
                  ) : (
                    <>
                      <Play className="h-3 w-3" /> AUTO-PREVIEW COLORS
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 max-w-[450px] p-2 bg-white/40 backdrop-blur-sm rounded-[14px] border border-[rgba(16,42,67,0.06)] shadow-sm">
                {paintColors.map((color, idx) => {
                  const isSelected = idx === currentColorIndex;
                  return (
                    <button
                      key={color.name}
                      onClick={() => handleColorSelect(idx)}
                      className={`relative aspect-square rounded-full transition-all duration-300 ${
                        isSelected 
                          ? 'scale-110 ring-2 ring-[var(--color-accent)] ring-offset-2 shadow-md' 
                          : 'hover:scale-105 opacity-90 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={`${color.name} - ${color.description}`}
                      aria-label={`Preview ${color.name}`}
                    >
                      {isSelected && (
                        <span className="absolute inset-0 rounded-full border border-white/50 pointer-events-none" />
                      )}
                    </button>
                  );
                })}
              </div>
              
              <div className="min-h-[20px]">
                <AnimatePresence mode="wait">
                  <m.p
                    key={activeColor.name}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="text-[12px] italic text-[var(--color-text-muted)]"
                  >
                    &ldquo;{activeColor.description}&rdquo;
                  </m.p>
                </AnimatePresence>
              </div>
            </m.div>

            <m.div
              variants={contentVariants}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.2 }}
              className="mt-2"
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="h-4 w-4" />}
                className="rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                TRY COLOUR VISUALIZER
              </Button>
            </m.div>
          </m.div>

          {/* ── Right Content (60% width on Desktop) ── */}
          <m.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, ease: 'easeOut' }}
            className="relative w-full rounded-[24px] overflow-hidden border border-[rgba(16,42,67,0.08)] shadow-xl bg-[var(--color-surface)] aspect-[3/2]"
          >
            {/* 
              SVG Visualizer overlay:
              We embed the Unsplash living room photo inside the SVG as an <image> element.
              This ensures that any overlay shapes (like the <polygon> representing the wall)
              will resize, scale, and crop exactly with the image inside, maintaining pixel-perfect
              alignment regardless of viewport size!
            */}
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-full object-cover select-none pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Base Living Room Image */}
              <image 
                href="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&h=800&q=90" 
                x="0" 
                y="0" 
                width="1200" 
                height="800"
                preserveAspectRatio="xMidYMid slice"
              />

              {/* 
                Color Overlay for the main background wall:
                Traces the background wall around the gray sofa, plant leaves on the right, 
                and left side table. Uses mix-blend-mode: multiply to blend colors with the wall's 
                natural texture and lighting/shadows.
              */}
              <polygon
                points="0,0 1200,0 1200,320 1060,320 1060,460 920,460 920,440 280,440 280,480 160,480 160,540 0,540"
                fill={activeColor.hex}
                style={{ 
                  mixBlendMode: 'multiply', 
                  opacity: 0.86,
                  transition: 'fill 1000ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' 
                }}
              />

              {/* Ambient overlay to enhance realism of the lighting shadow */}
              <polygon
                points="0,0 1200,0 1200,320 1060,320 1060,460 920,460 920,440 280,440 280,480 160,480 160,540 0,540"
                fill="none"
                stroke="none"
                style={{ 
                  mixBlendMode: 'overlay', 
                  opacity: 0.15,
                  backgroundColor: '#ffffff'
                }}
              />
            </svg>

            {/* Auto-rotation indicator line */}
            {isAutoPlaying && (
              <div className="absolute bottom-0 left-0 h-1.5 bg-[var(--color-accent)] w-full origin-left animate-[visualizer-progress_2.8s_linear_infinite]" />
            )}
          </m.div>

        </div>
      </Container>

      {/* Inline styles for autoplay progress bar */}
      <style>{`
        @keyframes visualizer-progress {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}