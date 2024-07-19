import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";

const HomePage = () => {
    return (
        <>
            <h1>
                Little Lemon Home
            </h1>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </>
    )
}

export default HomePage;