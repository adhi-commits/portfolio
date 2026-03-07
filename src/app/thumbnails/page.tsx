import { thumbnailProjects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";

export default function Thumbnails() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <SectionTitle
                title="Thumbnails"
                subtitle="A collection of engaging and high-impact thumbnail designs."
            />

            {/* Masonry/Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {thumbnailProjects.map((project, index) => (
                    <div key={project.id} className={`${index % 3 === 0 ? "lg:col-span-2" : "col-span-1"}`}>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            image={project.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
