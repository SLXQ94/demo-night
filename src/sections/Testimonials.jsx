import TestimonialItem from "../components/TestimonialItem"
import { testimonials } from "../constants"

const Testimonials = () => {
    // const halfLength = Math.floor(testimonials.length / 2)
  return (
    <section className="relative z-2 py-24 md:py-28 lg:py-20">
        <div className="container block lg:flex">
            <div className="testimonials_head-res z-2 mr-20 flex-300 sticky top-20">
                <p className="caption mb-5 max-md:mb-2.5">Experts speak</p>
                <h3 className="h3 max-md:h5 text-p4">Hear from the experts</h3>
            </div>

            <div className="testimonials_inner-after testimonials_inner-before relative -my-12 -mr-3 flex items-start max-lg:static max-md:block">
                <div className="testimonials_group-after flex-100">
                    {testimonials.map((testimonial) => (
                        <TestimonialItem
                            key={testimonial.id}
                            item={testimonial}
                            containerClassName="last:after:hidden last:after:max-md:block"
                        />
                    ))}
                </div>

            </div>
        </div>
    </section>
  )
}

export default Testimonials