import Link from "next/link";
import Image from "next/image";
import { graphicDesignProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 mt-12 md:mt-0 relative overflow-hidden">

        {/* Full Background Subtle Scribble Texture */}
        <div className="absolute inset-0 z-0 mix-blend-multiply opacity-[0.03] pointer-events-none scale-150 md:scale-100">
          <Image
            src="/bg-scribble.png"
            alt="Subtle Scribble Background Texture"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Floating Calligraphy Details */}
        <div className="absolute top-0 right-1/4 text-foreground/40 font-script text-4xl -rotate-12 select-none pointer-events-none hidden md:block z-20">
          Creative & Bold
        </div>
        <div className="absolute bottom-20 left-1/3 text-foreground/40 font-script text-5xl rotate-6 select-none pointer-events-none hidden md:block z-20">
          Visual Arts
        </div>

        <div className="max-w-2xl flex-1 relative z-10">
          <p className="text-3xl font-serif text-foreground/80 mb-6 font-script">Hi, I&apos;m Adithyan Prabhu</p>
          <h1 className="flex flex-col font-serif font-bold tracking-tighter text-foreground uppercase mb-8 w-max">
            <span className="text-7xl md:text-[8rem] leading-[0.85] text-left">
              GRAPHIC
            </span>
            <span className="text-6xl md:text-[6.5rem] leading-[0.85] flex items-baseline gap-2 md:gap-4 justify-start">
              <span className="font-script text-foreground/80 md:text-[7rem] lowercase font-medium -ml-1">and</span>
              UI/UX
            </span>
            <span className="text-7xl md:text-[8rem] leading-[0.85] text-left">
              DESIGNER
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl text-balance font-light leading-relaxed">
            Crafting meaningful brands and intuitive digital experiences with a passion for precise aesthetics.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/graphic-design" className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all hover:-translate-y-1">
              View Work
            </Link>
            <Link href="/contact" className="bg-foreground/5 text-foreground px-8 py-4 rounded-full font-medium hover:bg-foreground/10 transition-all hover:-translate-y-1 border border-foreground/10">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-lg aspect-[4/5] md:w-[600px] flex-shrink-0 z-0 mix-blend-multiply opacity-95">
          <Image
            src="/hero-image.png"
            alt="Minimalist Graphic Designer Sketch"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-40 pt-12 border-t border-foreground/10">
        <div>
          <h4 className="text-4xl font-serif font-bold mb-2">6+</h4>
          <p className="text-sm text-foreground/60 uppercase tracking-widest">Months Experience</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif font-bold mb-2">12+</h4>
          <p className="text-sm text-foreground/60 uppercase tracking-widest">Projects Delivered</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif font-bold mb-2">95%</h4>
          <p className="text-sm text-foreground/60 uppercase tracking-widest">Client Satisfaction</p>
        </div>
        <div>
          <h4 className="text-4xl font-serif font-bold mb-2">1</h4>
          <p className="text-sm text-foreground/60 uppercase tracking-widest">Global Clients</p>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="mt-40">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif font-bold uppercase">Featured Work</h2>
          <Link href="/graphic-design" className="text-foreground/60 hover:text-foreground transition-colors hidden md:block">
            Explore All Projects &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {graphicDesignProjects.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
