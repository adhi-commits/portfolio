import SectionTitle from "@/components/SectionTitle";

export default function Contact() {
    return (
        <div className="container mx-auto px-6 py-12 md:py-24 max-w-4xl">
            <SectionTitle
                title="Let's Talk"
                subtitle="I am always open to discussing product design work or partnership opportunities."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
                <div>
                    <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
                    <div className="space-y-4 text-foreground/70 font-light">
                        <p>Email: hello@example.com</p>
                        <p>Phone: +1 (555) 123-4567</p>
                        <p>Location: New York, NY</p>
                    </div>

                    <div className="mt-12">
                        <h4 className="font-semibold mb-4 text-sm uppercase tracking-widest text-foreground/50">Follow Me</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-foreground/70 transition-colors uppercase text-sm tracking-wider">Instagram</a>
                            <a href="#" className="hover:text-foreground/70 transition-colors uppercase text-sm tracking-wider">Dribbble</a>
                            <a href="#" className="hover:text-foreground/70 transition-colors uppercase text-sm tracking-wider">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div>
                    <form className="flex flex-col gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Name</label>
                            <input type="text" id="name" className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-foreground transition-colors" placeholder="Your name" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Email</label>
                            <input type="email" id="email" className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-foreground transition-colors" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Message</label>
                            <textarea id="message" rows={4} className="w-full bg-transparent border-b border-foreground/20 py-2 focus:outline-none focus:border-foreground transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>
                        <button type="button" className="bg-foreground text-background py-4 rounded-full font-medium hover:bg-foreground/90 transition-all hover:scale-[1.02] mt-4 w-full md:w-auto md:px-12">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
