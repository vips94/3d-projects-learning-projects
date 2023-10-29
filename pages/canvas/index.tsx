
// 'use client'
import React,{useState, useEffect, useRef} from 'react';
import RootLayout from '../layout';
import type { ReactElement } from 'react'
import styles from './canvas.module.scss';
import {gsap} from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger);

const Canvas = () => {
    const refs:any = useRef([])
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);


    useEffect(()=>{
      const main = containerRef.current

      if(!main) return;

      const locoScroll = new LocomotiveScroll({
        el: main as any,
        smooth: true
      });

      function  locomotive(locoScroll:any) {
        

        locoScroll.on("scroll", ScrollTrigger.update);
      
        ScrollTrigger.scrollerProxy(main, {
          scrollTop(value) {
            return arguments.length
              ? locoScroll.scrollTo(value, 0, 0) 
              : locoScroll.scroll.instance.scroll.y;
          },
      
          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
      
          pinType: main?.style.transform
            ? "transform"
            : "fixed",
        });

       
        ScrollTrigger.addEventListener("refresh", () => { 
          console.log("scrolling ended!")
          try{
            return  locoScroll.update()
          }
          catch(e:any){
            window.location.reload();
          }
        });
        
        ScrollTrigger.refresh();
      }
      
      

      const canvas = canvasRef.current;
      if (!canvas) return;

      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      const frameCount = 300;
      const images = [] as any;
      const imageSeq = {
          frame: 1,
      };

      function files(index:number) {
          var data = `
              ./images/canvas/male0001.png
              ./images/canvas/male0002.png
              ./images/canvas/male0003.png
              ./images/canvas/male0004.png
              ./images/canvas/male0005.png
              ./images/canvas/male0006.png
              ./images/canvas/male0007.png
              ./images/canvas/male0008.png
              ./images/canvas/male0009.png
              ./images/canvas/male0010.png
              ./images/canvas/male0011.png
              ./images/canvas/male0012.png
              ./images/canvas/male0013.png
              ./images/canvas/male0014.png
              ./images/canvas/male0015.png
              ./images/canvas/male0016.png
              ./images/canvas/male0017.png
              ./images/canvas/male0018.png
              ./images/canvas/male0019.png
              ./images/canvas/male0020.png
              ./images/canvas/male0021.png
              ./images/canvas/male0022.png
              ./images/canvas/male0023.png
              ./images/canvas/male0024.png
              ./images/canvas/male0025.png
              ./images/canvas/male0026.png
              ./images/canvas/male0027.png
              ./images/canvas/male0028.png
              ./images/canvas/male0029.png
              ./images/canvas/male0030.png
              ./images/canvas/male0031.png
              ./images/canvas/male0032.png
              ./images/canvas/male0033.png
              ./images/canvas/male0034.png
              ./images/canvas/male0035.png
              ./images/canvas/male0036.png
              ./images/canvas/male0037.png
              ./images/canvas/male0038.png
              ./images/canvas/male0039.png
              ./images/canvas/male0040.png
              ./images/canvas/male0041.png
              ./images/canvas/male0042.png
              ./images/canvas/male0043.png
              ./images/canvas/male0044.png
              ./images/canvas/male0045.png
              ./images/canvas/male0046.png
              ./images/canvas/male0047.png
              ./images/canvas/male0048.png
              ./images/canvas/male0049.png
              ./images/canvas/male0050.png
              ./images/canvas/male0051.png
              ./images/canvas/male0052.png
              ./images/canvas/male0053.png
              ./images/canvas/male0054.png
              ./images/canvas/male0055.png
              ./images/canvas/male0056.png
              ./images/canvas/male0057.png
              ./images/canvas/male0058.png
              ./images/canvas/male0059.png
              ./images/canvas/male0060.png
              ./images/canvas/male0061.png
              ./images/canvas/male0062.png
              ./images/canvas/male0063.png
              ./images/canvas/male0064.png
              ./images/canvas/male0065.png
              ./images/canvas/male0066.png
              ./images/canvas/male0067.png
              ./images/canvas/male0068.png
              ./images/canvas/male0069.png
              ./images/canvas/male0070.png
              ./images/canvas/male0071.png
              ./images/canvas/male0072.png
              ./images/canvas/male0073.png
              ./images/canvas/male0074.png
              ./images/canvas/male0075.png
              ./images/canvas/male0076.png
              ./images/canvas/male0077.png
              ./images/canvas/male0078.png
              ./images/canvas/male0079.png
              ./images/canvas/male0080.png
              ./images/canvas/male0081.png
              ./images/canvas/male0082.png
              ./images/canvas/male0083.png
              ./images/canvas/male0084.png
              ./images/canvas/male0085.png
              ./images/canvas/male0086.png
              ./images/canvas/male0087.png
              ./images/canvas/male0088.png
              ./images/canvas/male0089.png
              ./images/canvas/male0090.png
              ./images/canvas/male0091.png
              ./images/canvas/male0092.png
              ./images/canvas/male0093.png
              ./images/canvas/male0094.png
              ./images/canvas/male0095.png
              ./images/canvas/male0096.png
              ./images/canvas/male0097.png
              ./images/canvas/male0098.png
              ./images/canvas/male0099.png
              ./images/canvas/male0100.png
              ./images/canvas/male0101.png
              ./images/canvas/male0102.png
              ./images/canvas/male0103.png
              ./images/canvas/male0104.png
              ./images/canvas/male0105.png
              ./images/canvas/male0106.png
              ./images/canvas/male0107.png
              ./images/canvas/male0108.png
              ./images/canvas/male0109.png
              ./images/canvas/male0110.png
              ./images/canvas/male0111.png
              ./images/canvas/male0112.png
              ./images/canvas/male0113.png
              ./images/canvas/male0114.png
              ./images/canvas/male0115.png
              ./images/canvas/male0116.png
              ./images/canvas/male0117.png
              ./images/canvas/male0118.png
              ./images/canvas/male0119.png
              ./images/canvas/male0120.png
              ./images/canvas/male0121.png
              ./images/canvas/male0122.png
              ./images/canvas/male0123.png
              ./images/canvas/male0124.png
              ./images/canvas/male0125.png
              ./images/canvas/male0126.png
              ./images/canvas/male0127.png
              ./images/canvas/male0128.png
              ./images/canvas/male0129.png
              ./images/canvas/male0130.png
              ./images/canvas/male0131.png
              ./images/canvas/male0132.png
              ./images/canvas/male0133.png
              ./images/canvas/male0134.png
              ./images/canvas/male0135.png
              ./images/canvas/male0136.png
              ./images/canvas/male0137.png
              ./images/canvas/male0138.png
              ./images/canvas/male0139.png
              ./images/canvas/male0140.png
              ./images/canvas/male0141.png
              ./images/canvas/male0142.png
              ./images/canvas/male0143.png
              ./images/canvas/male0144.png
              ./images/canvas/male0145.png
              ./images/canvas/male0146.png
              ./images/canvas/male0147.png
              ./images/canvas/male0148.png
              ./images/canvas/male0149.png
              ./images/canvas/male0150.png
              ./images/canvas/male0151.png
              ./images/canvas/male0152.png
              ./images/canvas/male0153.png
              ./images/canvas/male0154.png
              ./images/canvas/male0155.png
              ./images/canvas/male0156.png
              ./images/canvas/male0157.png
              ./images/canvas/male0158.png
              ./images/canvas/male0159.png
              ./images/canvas/male0160.png
              ./images/canvas/male0161.png
              ./images/canvas/male0162.png
              ./images/canvas/male0163.png
              ./images/canvas/male0164.png
              ./images/canvas/male0165.png
              ./images/canvas/male0166.png
              ./images/canvas/male0167.png
              ./images/canvas/male0168.png
              ./images/canvas/male0169.png
              ./images/canvas/male0170.png
              ./images/canvas/male0171.png
              ./images/canvas/male0172.png
              ./images/canvas/male0173.png
              ./images/canvas/male0174.png
              ./images/canvas/male0175.png
              ./images/canvas/male0176.png
              ./images/canvas/male0177.png
              ./images/canvas/male0178.png
              ./images/canvas/male0179.png
              ./images/canvas/male0180.png
              ./images/canvas/male0181.png
              ./images/canvas/male0182.png
              ./images/canvas/male0183.png
              ./images/canvas/male0184.png
              ./images/canvas/male0185.png
              ./images/canvas/male0186.png
              ./images/canvas/male0187.png
              ./images/canvas/male0188.png
              ./images/canvas/male0189.png
              ./images/canvas/male0190.png
              ./images/canvas/male0191.png
              ./images/canvas/male0192.png
              ./images/canvas/male0193.png
              ./images/canvas/male0194.png
              ./images/canvas/male0195.png
              ./images/canvas/male0196.png
              ./images/canvas/male0197.png
              ./images/canvas/male0198.png
              ./images/canvas/male0199.png
              ./images/canvas/male0200.png
              ./images/canvas/male0201.png
              ./images/canvas/male0202.png
              ./images/canvas/male0203.png
              ./images/canvas/male0204.png
              ./images/canvas/male0205.png
              ./images/canvas/male0206.png
              ./images/canvas/male0207.png
              ./images/canvas/male0208.png
              ./images/canvas/male0209.png
              ./images/canvas/male0210.png
              ./images/canvas/male0211.png
              ./images/canvas/male0212.png
              ./images/canvas/male0213.png
              ./images/canvas/male0214.png
              ./images/canvas/male0215.png
              ./images/canvas/male0216.png
              ./images/canvas/male0217.png
              ./images/canvas/male0218.png
              ./images/canvas/male0219.png
              ./images/canvas/male0220.png
              ./images/canvas/male0221.png
              ./images/canvas/male0222.png
              ./images/canvas/male0223.png
              ./images/canvas/male0224.png
              ./images/canvas/male0225.png
              ./images/canvas/male0226.png
              ./images/canvas/male0227.png
              ./images/canvas/male0228.png
              ./images/canvas/male0229.png
              ./images/canvas/male0230.png
              ./images/canvas/male0231.png
              ./images/canvas/male0232.png
              ./images/canvas/male0233.png
              ./images/canvas/male0234.png
              ./images/canvas/male0235.png
              ./images/canvas/male0236.png
              ./images/canvas/male0237.png
              ./images/canvas/male0238.png
              ./images/canvas/male0239.png
              ./images/canvas/male0240.png
              ./images/canvas/male0241.png
              ./images/canvas/male0242.png
              ./images/canvas/male0243.png
              ./images/canvas/male0244.png
              ./images/canvas/male0245.png
              ./images/canvas/male0246.png
              ./images/canvas/male0247.png
              ./images/canvas/male0248.png
              ./images/canvas/male0249.png
              ./images/canvas/male0250.png
              ./images/canvas/male0251.png
              ./images/canvas/male0252.png
              ./images/canvas/male0253.png
              ./images/canvas/male0254.png
              ./images/canvas/male0255.png
              ./images/canvas/male0256.png
              ./images/canvas/male0257.png
              ./images/canvas/male0258.png
              ./images/canvas/male0259.png
              ./images/canvas/male0260.png
              ./images/canvas/male0261.png
              ./images/canvas/male0262.png
              ./images/canvas/male0263.png
              ./images/canvas/male0264.png
              ./images/canvas/male0265.png
              ./images/canvas/male0266.png
              ./images/canvas/male0267.png
              ./images/canvas/male0268.png
              ./images/canvas/male0269.png
              ./images/canvas/male0270.png
              ./images/canvas/male0271.png
              ./images/canvas/male0272.png
              ./images/canvas/male0273.png
              ./images/canvas/male0274.png
              ./images/canvas/male0275.png
              ./images/canvas/male0276.png
              ./images/canvas/male0277.png
              ./images/canvas/male0278.png
              ./images/canvas/male0279.png
              ./images/canvas/male0280.png
              ./images/canvas/male0281.png
              ./images/canvas/male0282.png
              ./images/canvas/male0283.png
              ./images/canvas/male0284.png
              ./images/canvas/male0285.png
              ./images/canvas/male0286.png
              ./images/canvas/male0287.png
              ./images/canvas/male0288.png
              ./images/canvas/male0289.png
              ./images/canvas/male0290.png
              ./images/canvas/male0291.png
              ./images/canvas/male0292.png
              ./images/canvas/male0293.png
              ./images/canvas/male0294.png
              ./images/canvas/male0295.png
              ./images/canvas/male0296.png
              ./images/canvas/male0297.png
              ./images/canvas/male0298.png
              ./images/canvas/male0299.png
              ./images/canvas/male0300.png
          `;
          return data.split("\n")[index];
      }

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = files(i);
        images.push(img);
    }

      function scaleImage(img:any, ctx:any) {
          var canvas = ctx.canvas;
          var hRatio = canvas.width / img.width;
          var vRatio = canvas.height / img.height;
          var ratio = Math.max(hRatio, vRatio);
          var centerShift_x = (canvas.width - img.width * ratio) / 2;
          var centerShift_y = (canvas.height - img.height * ratio) / 2;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
              img,
              0,
              0,
              img.width,
              img.height,
              centerShift_x,
              centerShift_y,
              img.width * ratio,
              img.height * ratio
          );
          // console.log(img)
      }

      function render() {
          scaleImage(images[imageSeq.frame], context);
      }

      images[1].onload = render;
      
      let ctx = gsap.context(() => {
        gsap.to(imageSeq, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            scrub: 0.15,
            trigger: canvas,
            start: "top top",
            end: `600% top`,
            scroller: main,
          },
          onUpdate: render,
        });
    
        ScrollTrigger.create({
          trigger: canvas,
          pin: true,
          scroller: main,
          start: `top top`,
          end: `600% top`,
        });

        animate()
        locomotive(locoScroll);
      });
      return () => ctx.revert()
      
    },[])    

    const animate = ()=>{
      refs.current.slice(1,refs.current.length).forEach((el:any)=>{
        gsap.to(el,{
          scrollTrigger:{
          trigger:el,
          start:`top top`,
          end:`bottom top`,
          pin:true,
          scroller:containerRef.current
          }
        })
      })
    }

    return (
      <div className={styles['section']}> 
          <div className={styles['canvas-section']} ref={containerRef}>
            <div ref={el => refs.current[0] = el} className={styles['page0']}>
                <canvas  ref={canvasRef}></canvas>
            </div>
            <div ref={el => refs.current[1] = el}  className={styles['page1']}></div>
            <div ref={el => refs.current[2] = el}  className={styles['page2']}></div>
            <div ref={el => refs.current[3] = el}  className={styles['page3']}></div>
          </div>
      </div>
    );
};

Canvas.getLayout = function getLayout(page: ReactElement) {
    return (
      <RootLayout data-scroll-container>
        {page}
      </RootLayout>
    )
  }

export default Canvas;