

import { useState } from 'react'
import Balatro from '../balatro'
import './home.css'
function Home() {
  const[StartTyping , setStartTyping] = useState(false);

  return (
    <>

      <section className='home' id='home'>
            <Balatro
      isRotate={false}
      mouseInteraction
      pixelFilter={745}
      color1="#100425"
      color2="#4c044a"
      color3="#10b5b5"
    />
          <div className='maindiv'>

            <div className='bigtextdiv'>
              <h1 className='bigtext'>MBK DEV</h1>
            </div>
          
            <div className='descdiv'>
              <h2 
                className={`description ${StartTyping ? "typing" : "slideleft"}`}
                onAnimationEnd={(e) => {
                  console.log("FIN ANIMATION");
                  if (e.animationName === "slideInFromleft") {
                    setStartTyping(true);
                    console.log("deuxieme animation")
                  }
                }}
              
              >Frontend Developer crafting immersive and interactive digital experiences where clean code meets thoughtful design.</h2>
            </div>

            <div className='btndiv'>
              <a href="#projects" className='anker' ><button className='btn'>view my work</button></a>
              <a href="#contact" className='anker'><button className='btn'>Get In Touch</button></a>
            </div>


            <div className='icondiv'>
                <a href="https://github.com/mohmbk"><div className='circle'>
                  <img src="/githubpic.png" alt="" className='img' />
                </div></a>
                <a href="https://discordapp.com/users/761567118037614643"><div className='circle'>
                  <img src="/discordpic.png" alt="" className='img'/>
                </div></a>
                <a href="https://mail.google.com/mail/u/0/#inbox"><div className='circle'>
                  <img src="/gmailpic.png" alt="" className='img'/>
                </div></a>
            </div>


          </div>
      </section>
    </>
  )
}

export default Home
