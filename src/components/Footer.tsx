import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t border-foreground/5 py-12 mt-20">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/50">
                <p>&copy; {new Date().getFullYear()} Solt Dominic. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <Link href="#" className="hover:text-foreground transition-colors">Instagram</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Dribbble</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">LinkedIn</Link>
                </div>
            </div>
        </footer>
    );
}
