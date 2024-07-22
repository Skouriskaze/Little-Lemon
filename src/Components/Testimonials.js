import Rating from "./shared/Rating";
import '../styles/testimonials.css'

const Testimonials = () => {
    return (
        <div className="testimonial primary-section-odd">
            <h1>Testimonial Section</h1>
            <div className="card-container">
                <Rating starCount={2}/>
                <Rating starCount={5}/>
                <Rating starCount={4}/>
                <Rating starCount={4}/>
            </div>
        </div>
    )
}

export default Testimonials;