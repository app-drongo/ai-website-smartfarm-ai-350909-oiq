import Hero from '@/components/sections/home/Hero'
import About from '@/components/sections/home/About'
import Testimonials from '@/components/sections/home/Testimonials'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}
