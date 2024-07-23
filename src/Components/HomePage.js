import About from "src/components/About";
import Hero from "src/components/Hero";
import Highlights from "src/components/Highlights";
import Testimonials from "src/components/Testimonials";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </>
    )
}

export default HomePage;