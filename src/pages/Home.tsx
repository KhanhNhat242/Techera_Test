import General from './sections/General'
import AboutUs from './sections/AboutUs'
import Solution from './sections/Solution'
import Partnership from './sections/Partnership'
import Footer from './sections/Footer'

const Home = () => {
    return (
        <>
            <section id='general'>
                <General />
            </section>
            <section id='about'>
                <AboutUs />
            </section>
            <section id='solution'>
                <Solution />
            </section>
            <section id='partnership'>
                <Partnership />
            </section>
            <section id='contact'>
                <Footer />
            </section>
        </>
    )
}

export default Home
