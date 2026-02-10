
import { useInView } from "react-intersection-observer";
import './contact.css'

function Contact() {
  
  const { ref :contactTextRef, inView :contactTextIsVisible } = useInView({triggerOnce: true,});
  const { ref :inputRef, inView :inputIsVisible } = useInView({triggerOnce: true,});
  return (
    <>
        <section className='contact' id="contact">
            <div className={`contacttext ${contactTextIsVisible ? 'show' : ''}`} ref={contactTextRef}>
                <div className='align'>
                    <h1 className='gettext'>Get In Touch</h1>
                    <h1 className='moh'>______</h1>
                </div>
                <h2 className='h2text'>Always up for a challenge (and a virtual coffee). Let’s connect!</h2>
            </div>

            <form className={`inputdiv ${inputIsVisible ? 'show' : ''}`} ref={inputRef}>
                <div className='inpdiv'>
                    <input type="text" className='inputname' placeholder='your name' />
                    <input type="email" className='inputname' placeholder='your email' />
                </div>

                <input type="text" placeholder='Subject' className='subjectinput' />
                <textarea placeholder='your message' className='messageinput'></textarea>
                <input type="submit" value="let's connect" className='submitinput'/>
            </form>

        </section>
    
    </>
  )
}

export default Contact