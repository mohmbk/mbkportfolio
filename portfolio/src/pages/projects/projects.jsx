import { useInView } from "react-intersection-observer";
import './projects.css'
function Projects() {
  
  const { ref :projectTextRef, inView :projectTextIsVisible } = useInView({triggerOnce: true,});
  const { ref :projectRef, inView :projectIsVisible } = useInView({triggerOnce: true,});
  const projects =[
    {
      img :"/unoimg3.png",
      description :"A digital recreation of the classic card game built with Java, focusing on robust object-oriented architecture.",
      skill1 :"JAVA",
      skill2 :"OOP",
      
    },

    {
      img :"/sofa.png",
      description :"user-friendly platform that showcases a curated range of high-quality sofas through vibrant imagery and interactive customization tools. It simplifies the buying process with clear categories, detailed material specs, and a seamless checkout designed for a premium shopping experience. ",
      skill1 :"HTML",
      skill2 :"CSS",
    },

    {
      img :"/adidas3.png",
      description :"user-friendly platform that showcases a curated range of high-quality sofas through vibrant imagery and interactive customization tools. It simplifies the buying process with clear categories, detailed material specs, and a seamless checkout designed for a premium shopping experience.",
      skill1 :"HTML",
      skill2 :"CSS",
    },
  ]

  return (
    <>
      <section className='projectssection' id='projects'>
        <section className='myproject'>
          <h1 className={`projecttext ${projectTextIsVisible ? 'show' : ''}`} ref={projectTextRef}>MY PROJECTS</h1>
        </section>

        <section className={`projectdiv ${projectIsVisible ? 'show' : ''}`} ref={projectRef}>
          {
            projects.map((p) => (
              <a href="" className="ankerproject">
                <div className="projet">

                  <img src={p.img} alt="" className='projetimg'/>
                  <h4 className='descriptionclass'>{p.description}</h4>
                  <div className='skillsused'>
                      <div className='divskill'><h4>{p.skill1}</h4></div>
                      <div className='divskill'><h4>{p.skill2}</h4></div>
                  </div>
                </div>
              </a>
            ))
          }

        </section>
      </section>
    </>
  )
}

export default Projects