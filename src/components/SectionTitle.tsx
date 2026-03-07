interface SectionTitleProps {
    title: string;
    subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold uppercase tracking-tight text-foreground">{title}</h2>
            {subtitle && <p className="mt-4 text-foreground/60 max-w-2xl text-lg">{subtitle}</p>}
        </div>
    );
}
