'use client';

type Testimonial = {
    quote: string;
    author: string;
};

interface TestimonialsDictionary {
    pre_title: string;
    title: string;
    testimonials: Testimonial[];
}

export default function TestimonialsSection({ dictionary }: { dictionary: TestimonialsDictionary }) {

    return (
        <section className="py-12 sm:py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-10">
                <p className="text-sm mb-4 font-light tracking-widest text-amber-400 tenali-ramakrishna">
                    {dictionary.pre_title}
                </p>
                <h2 className="text-3xl md:text-5xl font-light tracking-wider mb-8 gradiente-dorado">
                    {dictionary.title}
                </h2>
                <div className="w-24 h-px bg-amber-400 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {dictionary.testimonials.map((testimonial: Testimonial, index: number) => (
                    <div key={index} className="bg-gradient-to-br from-amber-900/10 to-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-8 border border-amber-900/20">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-amber-400">★</span>
                            ))}
                        </div>
                        <p className="text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>
                        <p className="text-amber-400 font-light">- {testimonial.author}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}