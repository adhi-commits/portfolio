import Image from "next/image";

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-foreground/5 transform transition-transform duration-500 hover:-translate-y-2 flex flex-col w-full h-full">
            <div className="relative w-full min-h-[300px] flex-grow flex items-center justify-center bg-black/5 dark:bg-white/5 p-4">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105 p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            </div>
            <div className="p-6 w-full bg-background/95 backdrop-blur-sm border-t border-foreground/5 z-20 shrink-0">
                <h3 className="text-xl font-bold font-serif mb-1 truncate text-foreground">{title}</h3>
                <p className="text-sm font-light text-foreground/70 line-clamp-2">{description}</p>
            </div>
        </div>
    );
}
