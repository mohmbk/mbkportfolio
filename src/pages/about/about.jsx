
import { useInView } from "react-intersection-observer";
import './about.css'

function About(){
  
  const { ref :myRef, inView :myElementIsVisible } = useInView({triggerOnce: true,});
  const { ref: containerRef , inView :containerIsVisible} = useInView({triggerOnce: true,});

  return (
    <>
    
      <section  id='about' className="about">
          <div className="abouttextdiv">
            <div ref={myRef} className={myElementIsVisible ? 'abtextdiv' : ''}>
              <h1 className='abouttext' >ABOUT ME </h1>
              <h1 className='moh'>________</h1>
            </div>
          </div>

          <div ref={containerRef} className={containerIsVisible ? 'container' : ''}>

            <div className='imgdiv'>
                  <img src="/devimg.avif" alt="" className='codeimg' />
            </div>


            <div className='textcontainer'>
                <div className='textdiv'>
                  <h2 className="h2">I am a dedicated Front-End Developer driven by the art of crafting sleek, high-performance interfaces. I specialize in translating complex ideas into fluid digital experiences that are as intuitive as they are visually striking. With a deep mastery of modern web technologies, I bring concepts to life through pixel-perfect design, clean architecture, and a relentless focus on seamless user interaction.</h2>
                </div>

                <section className='skillssection'>
                      <div className='skilldiv'><h3>HTML</h3></div>
                      <div className='skilldiv'><h3>CSS</h3></div>
                      <div className='skilldiv'><h3>JAVA / TYPE SCRIPT</h3></div>
                      <div className='skilldiv'><h3>REACT JS</h3></div>
                      <div className='skilldiv'><h3>C</h3></div>
                      <div className='skilldiv'>JAVA</div>
                </section>
            </div>

          </div>
      </section>
    </>
  )
}

export default About