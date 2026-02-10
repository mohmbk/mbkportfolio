

import { useInView } from "react-intersection-observer";
import './skills.css'
function Skills() {
  const { ref :SkillRef1, inView :skillIsVisible1 } = useInView({triggerOnce: true,});
  const { ref :textRef, inView :textIsVisible } = useInView({triggerOnce: true,});
  const { ref :SkillRef2, inView :skillIsVisible2 } = useInView({triggerOnce: true,});
  const { ref :SkillRef3, inView :skillIsVisible3 } = useInView({triggerOnce: true,});
  const { ref :SkillRef4, inView :skillIsVisible4 } = useInView({triggerOnce: true,});
  const { ref :SkillRef5, inView :skillIsVisible5 } = useInView({triggerOnce: true,});
  const { ref :SkillRef6, inView :skillIsVisible6 } = useInView({triggerOnce: true,});
  

  return (
    <>
      <section className='skillsection' id='skill'>
            <div className={`skillstextdiv ${textIsVisible ? 'show' : ''}`} ref={textRef}>
                <h1 className='skilltext'>SKILLS & EXPERTISE</h1>
                <h1 className='moh'>_________</h1>
            </div>


            <section className='skillssec'>

                <div className={`skill ${skillIsVisible1 ? 'show' : ''}`} ref={SkillRef1}>
                    <div className='pourcentage'>
                        <h2>HTML</h2>
                        <h2>100%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage'>

                        </div>
                    </div>
                </div>

                <div className={`skill ${skillIsVisible2 ? 'show' : ''}`} ref={SkillRef2}>
                    <div className='pourcentage'>
                        <h2>CSS</h2>
                        <h2>100%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage'>

                        </div>
                    </div>
                </div>

                <div className={`skill ${skillIsVisible3 ? 'show' : ''}`} ref={SkillRef3}>
                    <div className='pourcentage'>
                        <h2>JAVA SCRIPT / TYPE SCRIPT</h2>
                        <h2>70%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage1'>

                        </div>
                    </div>
                </div>

                <div className={`skill ${skillIsVisible4 ? 'show' : ''}`} ref={SkillRef4}>
                    <div className='pourcentage'>
                        <h2>REACT JS</h2>
                        <h2>90%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage2'>

                        </div>
                    </div>
                </div>

                <div className={`skill ${skillIsVisible5 ? 'show' : ''}`} ref={SkillRef5}>
                    <div className='pourcentage'>
                        <h2>JAVA</h2>
                        <h2>90%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage2'>

                        </div>
                    </div>
                </div>

                <div className={`skill ${skillIsVisible6 ? 'show' : ''}`} ref={SkillRef6}>
                    <div className='pourcentage'>
                        <h2>C</h2>
                        <h2>100%</h2>
                    </div>
                    <div className='rempdiv'>
                        <div className='remplissage'>

                        </div>
                    </div>
                </div>

            </section>
      </section>
    </>
  )
}

export default Skills