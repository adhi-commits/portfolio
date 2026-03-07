import { uiuxProjects } from "@/data/projects";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";

export default function UIUX() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <SectionTitle
                title="UI/UX & App Design"
                subtitle="Creating intuitive, seamless, and visually stunning digital products."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                {uiuxProjects.map((project) => (
                    <div key={project.id} className="flex flex-col group">
                        <div className="w-full rounded-xl overflow-hidden mb-6 bg-foreground/5 flex flex-col gap-2 p-2 relative">
                            {project.images && project.images.length > 0 ? (
                                project.images.map((imgSrc, i) => (
                                    <div key={i} className="relative w-full h-[400px] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
                                        <Image
                                            src={imgSrc}
                                            alt={`${project.title} - Image ${i + 1}`}
                                            fill
                                            className="object-contain"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                        />
                                    </div>
                                ))
                            ) : (
                                <div className="relative w-full h-[400px] bg-black/5 dark:bg-white/5 rounded-lg overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
