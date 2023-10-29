import React,{useState, useEffect, useRef, useLayoutEffect} from 'react';
import RootLayout from '../layout';
import type { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app';
import styles from './parallex.module.scss';
import gsap from "gsap";

 
const Parallex: NextPageWithLayout = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState<boolean>(false);
  const ref:any = useRef([]);
  const tl = useRef<GSAPTimeline>()

  let xValue = 0;
  let yValue = 0;
  let rotateDeg = 0;

  useLayoutEffect(()=>{
    update(0);
    let ctx = gsap.context(() => {
      animate()
    });
    return () => ctx.revert()
  },[])

  const handleMouseMove = (e:any)=>{
    if(!isAnimationComplete) return;
    xValue = e.clientX - window.innerWidth/2;
    yValue = e.clientY - window.innerHeight/2;
    rotateDeg = (xValue / (window.innerWidth / 2)) * 20;
    update(e.clientX);
  }

  const animate = () => {
    ref.current
    .filter((el:any) => !el.classList.contains("text"))
    .forEach((el:any,i:number)=>{
      tl.current =  gsap.timeline().from(
        el,
        {
          top: `${el.offsetHeight / 2 + +el.getAttribute('data-distance')}px`,
          duration: 3,
          ease: "power3.out",
        }
      )
    })

    tl.current = gsap.timeline().from(
      `.${styles['text']} h1`,
      {
        y: window.innerHeight - (document.querySelector(`.${styles['text']} h1`)as HTMLElement).getBoundingClientRect().top,
        duration: 2,
        delay:1.5
      }
    )
    tl.current = gsap.timeline().from(
      `.${styles['text']} h2`,
      {
        y:-150,
        opacity:0,
        duration: 2,
        delay:2,
        onComplete: () => setIsAnimationComplete(true)
      }
    )
  }

  const update = (cursorPosition:any)=>{
    ref.current.forEach((el:any,i:number)=>{
      const speedX = el.getAttribute('data-speedx')
      const speedY = el.getAttribute('data-speedy')
      const speedZ =el.getAttribute('data-speedz')
      const rotateSpeed = el.getAttribute('data-rotation')

      let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;
      let zValue = (cursorPosition - parseFloat(getComputedStyle(el).left) ) * isInLeft * 0.1;
      el.style.transform = `translateX(calc(-50% + ${-xValue*speedX}px)) translateY(calc(-50% + ${yValue*speedY}px)) rotateY(${rotateDeg * rotateSpeed }deg) perspective(2300px) translateZ(${zValue*speedZ}px)`
    })
  }

    return (
      <section className={styles['container']}>
        <div className={styles['parallex-section']} onMouseMove={handleMouseMove}>
          <div className={styles['vignete']}></div>
          <img src='/images/parallex/background.png' ref={el => ref.current[0] = el} data-speedx="0.3" data-speedy="0.38" data-speedz="0" data-rotation="0" data-distance="-200" className={`${styles['parallax']} ${styles['bg-img']}`}/>
          <img src='/images/parallex/fog_7.png' ref={el => ref.current[1] = el} data-speedx="0.27" data-speedy="0.32" data-speedz="0" data-rotation="0" data-distance="850" className={`${styles['parallax']} ${styles['fog-7']}`}/>
          <img src='/images/parallex/mountain_10.png' ref={el => ref.current[2] = el} data-speedx="0.195" data-speedy="0.305" data-speedz="0" data-rotation="0" data-distance="1100" className={`${styles['parallax']} ${styles['mountain-10']}`}/>
          <img src='/images/parallex/fog_6.png' ref={el => ref.current[3] = el} data-speedx="0.25" data-speedy="0.28" data-speedz="0" data-rotation="0" data-distance="1400" className={`${styles['parallax']} ${styles['fog-6']}`}/>
          <img src='/images/parallex/mountain_9.png' ref={el => ref.current[4] = el} data-speedx="0.125" data-speedy="0.155" data-speedz="0.15"data-rotation="0.02" data-distance="1700" className={`${styles['parallax']} ${styles['mountain-9']}`}/>
          <img src='/images/parallex/mountain_8.png' ref={el => ref.current[5] = el} data-speedx="0.1" data-speedy="0.11" data-speedz="0" data-rotation="0" data-distance="1800" className={`${styles['parallax']} ${styles['mountain-8']}`}/>
          <img src='/images/parallex/fog_5.png' ref={el => ref.current[6] = el} data-speedx="0.16" data-speedy="0.105" data-speedz="0" data-rotation="0" data-distance="1900" className={`${styles['parallax']} ${styles['fog-5']}`}/>
          <img src='/images/parallex/mountain_7.png' ref={el => ref.current[7] = el} data-speedx="0.1" data-speedy="0.1" data-speedz="0" data-rotation="0.09" data-distance="2000" className={`${styles['parallax']} ${styles['mountain-7']}`}/>
          <div ref={el => ref.current[8] = el} data-speedx="0.07" data-speedy="0.07" data-speedz="0.11 " data-rotation="0" data-distance="" className={`${styles['parallax']} ${styles['text']}`}>
            <h2>India</h2>
            <h1>Karnataka</h1>
          </div>
          <img src='/images/parallex/mountain_6.png' ref={el => ref.current[9] = el} data-speedx="0.065" data-speedy="0.05" data-speedz="0.05" data-rotation="0.12" data-distance="2300" className={`${styles['parallax']} ${styles['mountain-6']}`}/>
          <img src='/images/parallex/fog_4.png' ref={el => ref.current[10] = el} data-speedx="0.135" data-speedy="0.03" data-speedz="0" data-rotation="0" data-distance="2400" className={`${styles['parallax']} ${styles['fog-4']}`}/>
          <img src='/images/parallex/mountain_5.png' ref={el => ref.current[11] = el} data-speedx="0.08" data-speedy="0.024" data-speedz="0.13" data-rotation="0.1" data-distance="2550" className={`${styles['parallax']} ${styles['mountain-5']}`}/>
          <img src='/images/parallex/fog_3.png' ref={el => ref.current[12] = el} data-speedx="0.11" data-speedy="0.018" data-speedz="0" data-rotation="0" data-distance="2800" className={`${styles['parallax']} ${styles['fog-3']}`}/>
          <img src='/images/parallex/mountain_4.png' ref={el => ref.current[13] = el} data-speedx="0.059" data-speedy="0.024" data-speedz="0.35" data-rotation="0.14" data-distance="3200" className={`${styles['parallax']} ${styles['mountain-4']}`}/>
          <img src='/images/parallex/mountain_3.png' ref={el => ref.current[14] = el} data-speedx="0.04" data-speedy="0.018" data-speedz="0.32" data-rotation="0.05" data-distance="3400" className={`${styles['parallax']} ${styles['mountain-3']}`}/>
          <img src='/images/parallex/fog_2.png' ref={el => ref.current[15] = el} data-speedx="0.15" data-speedy="0.0115" data-speedz="0" data-rotation="0" data-distance="3600" className={`${styles['parallax']} ${styles['fog-2']}`}/>
          <img src='/images/parallex/mountain_2.png' ref={el => ref.current[16] = el} data-speedx="0.0235" data-speedy="0.013" data-speedz="0.42" data-distance="3800" data-rotation="0.12" className={`${styles['parallax']} ${styles['mountain-2']}`}/>
          <img src='/images/parallex/mountain_1.png' ref={el => ref.current[17] = el} data-speedx="0.027" data-speedy="0.018" data-speedz="0.53" data-distance="4000" data-rotation="0.2" className={`${styles['parallax']} ${styles['mountain-1']}`}/>
          <img src='/images/parallex/sun_rays.png' className={`${styles['sun-rays']}`}/>
          <img src='/images/parallex/black_shadow.png' className={`${styles['black-shadow']}`}/>
          <img src='/images/parallex/fog_1.png' ref={el => ref.current[18] = el} data-speedx="0.12" data-speedy="0.3" data-speedz="0" data-rotation="0" data-distance="4200" className={`${styles['parallax']} ${styles['fog-1']}`}/>
        </div>
        </section>
    )
  }

  
  Parallex.getLayout = function getLayout(page: ReactElement) {
    return (
      <RootLayout>
        {page}
      </RootLayout>
    )
  }


export default Parallex;