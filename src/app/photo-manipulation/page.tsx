import { photoManipulationProjects } from "@/data/projects";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function PhotoManipulation() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <SectionTitle
                title="Photo Manipulation"
                subtitle="Surreal compositions and hyper-realistic digital art."
            />

            {/* Visual-first grid */}
            <div className="flex flex-col gap-16 md:gap-24">
                {photoManipulationProjects.map((project) => (
                    <div key={project.id} className="group relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-md bg-foreground/5 cursor-pointer">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                            sizes="100vw"
                        />
                        {/* Minimal overlay title on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                            <h3 className="text-white text-3xl md:text-5xl font-serif font-light tracking-widest uppercase">
                                {project.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
