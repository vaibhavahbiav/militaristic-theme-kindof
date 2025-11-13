import CardDisplay from "./components/CardDisplay";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";

const featuresList = [
  { id: '1', text: 'feature 1' },
  { id: '2', text: 'feature 2' },
  { id: '3', text: 'feature 3' },
  { id: '4', text: 'feature 4' }
]


function App() {
  return (
    <div className="relative w-full overflow-hidden font-montserrat bg-military-brown">

      {/* hero */}
      <section
        id="hero"
        className='relative h-screen w-screen'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className=""
        >
          <div className="w-screen h-screen z-[1] relative flex flex-col items-center justify-center overflow-hidden shrink-0"><video className="grayscale blur-sm absolute object-cover w-auto h-auto min-w-full min-h-full" disablePictureInPicture muted loop autoPlay><source src="assets/hero-bg.mp4" type="video/mp4" /></video></div>
          <div className="flex flex-col items-center justify-center space-y-10 xl:space-y-20 z-[2] absolute top-28 xl:top-1/2 xl:-translate-y-1/2 left-1/2 -translate-x-1/2">
            <h1 className="text-3xl md:text-5xl xl:text-9xl font-bold tracking-widest text-white bg-black pl-8 py-1 relative after:absolute after:w-full after:h-full after:content-[''] after:bg-transparent after:border-8 after:border-dashed after:border-military-green after:-bottom-3 after:-right-3 xl:after:-bottom-9 xl:after:-right-7 after:z-[-10]">VyomGarud.</h1>
            <h3 className="text-sm md:text-base xl:text-5xl font-thin text-right w-[180px] xl:w-[700px] self-end text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, laboriosam.<span className="h-full px-1 bg-military-charcoal animate-pulse">&nbsp;</span></h3>
          </div>
          <div className="absolute bottom-44 left-1/2 -translate-x-1/2 flex items-center justify-center space-x-3 xl:hidden z-[20] md:scale-125">
            <button className="uppercase text-xl bg-military-orange font-bold pl-2 border-8 border-transparent border-dashed hover:border-military-charcoal">cta.&nbsp;<span className="h-full px-1 bg-military-charcoal animate-pulse hover:transition-all shadow-lg">&nbsp;</span></button>
            <button className="uppercase text-xl mt-3 bg-white font-bold pl-2 border-8 border-transparent border-dashed hover:border-military-blue">cta.&nbsp;<span className="h-full px-1 bg-military-blue animate-pulse hover:transition-all shadow-lg">&nbsp;</span></button>
            <button className="uppercase text-xl mt-5 bg-military-green font-bold pl-2 border-8 border-transparent border-dashed hover:border-black">cta.&nbsp;<span className="h-full px-1 bg-black animate-pulse hover:transition-all shadow-lg">&nbsp;</span></button>
          </div>
          <div className="hidden absolute top-5 right-14 z-[20] xl:flex items-center justify-center space-x-9">
            <button className="uppercase text-6xl mt-5 bg-military-orange py-1 font-bold pl-2 border-8 border-transparent border-dashed hover:border-military-charcoal">cta.&nbsp;<span className="h-full px-1 bg-military-charcoal animate-pulse hover:transition-all shadow-xl">&nbsp;</span></button>
            <button className="uppercase text-6xl mt-3 bg-white py-1 font-bold pl-2 border-8 border-transparent border-dashed hover:border-military-blue">cta.&nbsp;<span className="h-full px-1 bg-military-blue animate-pulse hover:transition-all shadow-xl">&nbsp;</span></button>
            <button className="uppercase text-6xl bg-military-green py-1 font-bold pl-2 border-8 border-transparent border-dashed hover:border-black">cta.&nbsp;<span className="h-full px-1 bg-black animate-pulse hover:transition-all shadow-xl">&nbsp;</span></button>
          </div>
        </motion.div>
      </section>

      {/* about */}
      <section
        id="about"
        className="bg-military-brown border-t-[30px] border-military-green border-dashed"
      >
        <div className="flex flex-col xl:flex-row items-center justify-center h-fit xl:h-screen w-screen px-10 py-20 space-y-9 xl:space-y-0 xl:px-20 xl:py-32 xl:space-x-20">

          {/* Left side (image + title) */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex-1 flex items-center justify-center w-full h-full"
          >
            <div className="relative py-9 px-3 md:px-5 lg:px-9 xl:py-0 xl:bg-[url('https://images.unsplash.com/photo-1522756890800-ac12d130a43f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center border-[10px] border-dashed border-military-green bg-clip-content shadow-xl overflow-hidden before:absolute before:content-[''] before:top-0 before:left-0 before:size-6 xl:before:size-20 before:border-r-[10px] before:border-b-[10px] before:border-dashed before:border-military-green before:bg-military-brown after:absolute after:content-[''] after:bottom-0 after:right-0 after:size-6 xl:after:size-40 after:border-l-[10px] after:border-t-[10px] after:border-dashed after:border-military-green after:bg-military-brown w-full h-full">
              <h2 className="text-3xl md:text-4xl xl:text-8xl font-bold tracking-wider text-military-green z-[20]">Our Mission.<span className="h-full px-1 bg-military-charcoal animate-pulse hover:transition-all duration-75">&nbsp;</span></h2>
            </div>
          </motion.div>

          {/* Right side (text content) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="flex-1 flex items-center justify-center w-full"
          >
            <div className="leading-normal xl:leading-relaxed text-base text-center xl:text-2xl font-extralight">
              <p className="border-b-4 pb-3 border-military-brown drop-shadow-lg border-dashed">
                <span className="font-bold text-5xl text-military-orange drop-shadow-lg">
                  &ldquo;&nbsp;
                </span>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus in iure consequuntur aliquid quas ipsum animi maiores, fugit sunt deleniti! Perspiciatis blanditiis alias pariatur vero tempore? Eum quis nam voluptatibus amet adipisci sapiente, ipsa in natus iusto sed commodi officia asperiores sequi! Nulla pariatur ratione voluptatibus dolores doloremque. Repellat, eos.
              </p>
              <p className="pt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo deleniti consequuntur laudantium incidunt dicta, minus autem possimus magni mollitia. Iste?
                <span className="font-bold text-5xl text-military-orange drop-shadow-lg">
                  &nbsp;&rdquo;
                </span>
              </p>
            </div>
          </motion.div>

        </div>
      </section>


      {/* products */}
      <section id="products"
        className='bg-military-green border-t-[30px] py-12  border-black border-dashed' >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
          <div className="flex flex-col items-center justify-center h-fit w-screen xl:px-20 xl:py-32 space-y-10 xl:space-y-20">
            <div className="py-9 px-3 md:px-5 lg:px-9  xl:py-24 flex items-center justify-center border-[10px] border-dashed border-military-brown relative before:absolute before:content-[''] before:top-0 before:left-0 before:size-6 xl:before:size-20 before:border-r-[10px] before:border-b-[10px] before:border-dashed before:border-military-brown before:bg-military-green after:absolute after:content-[''] after:bottom-0 after:right-0 after:size-6 xl:after:size-20 after:border-l-[10px] after:border-t-[10px] after:border-dashed after:border-military-brown after:bg-military-green">
              <h2 className="text-3xl md:text-4xl xl:text-6xl font-bold tracking-wider text-black z-[20]">Our Products.<span className="h-full px-1 bg-military-brown animate-pulse hover:transition-all duration-75">&nbsp;</span></h2>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}>
              <CardDisplay />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* highlights */}
      <section id="highlights"
        className='relative h-screen w-screen' >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
          <div className="w-screen h-screen z-[1] relative flex flex-col items-center justify-center overflow-hidden shrink-0"><video className="grayscale blur-sm absolute object-cover w-auto h-auto min-w-full min-h-full" disablePictureInPicture muted loop autoPlay><source src="assets/features-bg.mp4" type="video/mp4" /></video></div>
          <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:space-x-56 z-[2] absolute top-28 xl:top-1/2 xl:-translate-y-1/2 left-1/2 -translate-x-1/2 w-2/3">
            <div className="xl:flex-1 grid grid-cols-2 gap-5 xl:gap-x-20 mt-20 xl:mt-0">
              {featuresList.map((feature, i) => {
                return (
                  <>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: false }}>
                      <div key={feature.id} className=" xl:p-6 size-36 xl:w-[300px] xl:h-[200px] text-center border-military-green bg-clip-content bg-military-green text-lg xl:text-3xl text-black flex flex-col items-center justify-center space-y-4"><div className="size-20 bg-military-orange text-white">an icon</div><p>{feature.text}</p></div>
                    </motion.div>
                  </>
                )
              })}
            </div>
            <div className="py-9 px-3 md:px-5 lg:px-9  xl:py-24 flex items-center justify-center border-[10px] border-dashed border-white relative before:absolute before:content-[''] before:top-0 before:left-0 before:size-6 xl:before:size-20 before:border-r-[10px] before:border-b-[10px] before:border-dashed before:border-white before:bg-transparent after:absolute after:content-[''] after:bottom-0 after:right-0 after:size-6 xl:after:size-20 after:border-l-[10px] after:border-t-[10px] after:border-dashed after:border-white after:bg-transparent min-w-fit xl:flex-1">
              <h2 className="text-2xl md:text-4xl xl:text-6xl font-bold tracking-wider text-military-orange z-[20]">Our Features.<span className="h-full px-1 bg-white animate-pulse hover:transition-all duration-75">&nbsp;</span></h2>
            </div>
          </div>
        </motion.div>
      </section>

      {/* contact */}
      < section id="contact"
        className='relative h-screen w-screen bg-military-orange flex flex-col items-center justify-center' >
        <span className="absolute -top-3 xl:-top-12 left-1/2 -translate-x-1/2 "><div className="relative text-[20vw] sm:text-[18vw] md:text-[15vw] lg:text-[15vw] xl:[20vw] leading-none font-extrabold tracking-wide select-none pointer-events-none whitespace-nowrap uppercase text-black"><span>vyomguard</span>
          <p className="absolute -bottom-3 right-1/2 translate-x-1/2 lg:right-44 xl:right-56 text-xs font-black lg:mr-12 xl:mr-32">made my vaibhav and internet</p></div>
        </span>
        <h2 className=" text-center font-bold text-2xl lg:text-5xl mt-12 lg:mt-32">Our Socials</h2>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}>
          <div className="mt-10 grid grid-cols-3 gap-x-20 gap-y-32 xl:gap-x-40 xl:gap-y-10 place-items-center lg:inline-flex">
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">one</button>
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">two</button>
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">three</button>
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">four</button>
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">five</button>
            <button className="border-8 border-transparent px-3 hover:border-8 hover:border-dashed hover:border-black">six</button>
          </div>
        </motion.div>
      </ section >

      {/* navbar */}
      < Navbar />
    </div >
  );
}

export default App;
