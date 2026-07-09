import {
  Component, OnInit, OnDestroy, AfterViewInit,
  ElementRef, ViewChild, Inject, PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { portfolioData } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  data = portfolioData;

  // Typewriter
  displayedTagline = '';
  currentTaglineIndex = 0;
  charIndex = 0;
  isDeleting = false;
  private typeTimer: ReturnType<typeof setTimeout> | null = null;

  // Letter split
  firstLetters: { char: string; delay: number }[] = [];
  lastLetters:  { char: string; delay: number }[] = [];

  // Canvas particles
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animFrame: number | null = null;
  private resizeObserver: ResizeObserver | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    this.buildLetters();
    this.startTypewriter();
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.initCanvas();
  }

  ngOnDestroy(): void {
    if (this.typeTimer) clearTimeout(this.typeTimer);
    if (this.animFrame) cancelAnimationFrame(this.animFrame);
    this.resizeObserver?.disconnect();
  }

  // Letter split — keep arrays for template but simplify to row-level animation
  buildLetters(): void {
    // No-op: name rows are rendered directly in template now
  }

  // ---- Typewriter ----
  startTypewriter(): void {
    const type = () => {
      const current = this.data.taglines[this.currentTaglineIndex];
      if (!this.isDeleting) {
        this.displayedTagline = current.substring(0, this.charIndex + 1);
        this.charIndex++;
        if (this.charIndex === current.length) {
          this.isDeleting = true;
          this.typeTimer = setTimeout(type, 1800);
          return;
        }
      } else {
        this.displayedTagline = current.substring(0, this.charIndex - 1);
        this.charIndex--;
        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.data.taglines.length;
        }
      }
      this.typeTimer = setTimeout(type, this.isDeleting ? 55 : 95);
    };
    this.typeTimer = setTimeout(type, 1400);
  }

  // ---- Canvas particles ----
  initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement!;
    this.ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width  = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };
    resize();

    // Spawn particles
    const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 18000));
    this.particles = Array.from({ length: count }, () => new Particle(canvas.width, canvas.height));

    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(parent);

    this.animate();
  }

  animate(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const p of this.particles) {
      p.update(canvas.width, canvas.height);
      p.draw(this.ctx);
    }
    this.animFrame = requestAnimationFrame(() => this.animate());
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---- Particle class ----
class Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  alpha: number; alphaDir: number;
  color: string;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3 - 0.1;
    this.radius = Math.random() * 1.5 + 0.4;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.alphaDir = (Math.random() - 0.5) * 0.004;
    const colors = ['184,134,11', '192,96,128', '160,100,180', '220,180,140'];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update(w: number, h: number): void {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha += this.alphaDir;
    if (this.alpha <= 0.05 || this.alpha >= 0.65) this.alphaDir *= -1;
    if (this.x < 0) this.x = w;
    if (this.x > w) this.x = 0;
    if (this.y < 0) this.y = h;
    if (this.y > h) this.y = 0;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color},${this.alpha.toFixed(2)})`;
    ctx.fill();
  }
}
