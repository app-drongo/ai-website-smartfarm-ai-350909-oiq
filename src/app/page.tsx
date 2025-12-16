import Hero from '@/components/sections/home/Hero'
import About from '@/components/sections/home/About'
import Testimonials from '@/components/sections/home/Testimonials'

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
    </>
  )
}