
"use client";

import { useState } from "react";
import Image from "next/image";
import "./JaapMala.css"
import { Check, CircleDot, Hash, Info, RotateCcw, ChartNoAxesColumnIncreasing  } from "lucide-react";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "../ui/tooltip";
import { Progress } from "../ui/progress";


export type JaapMalaProps={
  currentNaam: string
  japaTarget: number
}


const TOTAL = 108;

export default function JaapMala({currentNaam, japaTarget}: JaapMalaProps) {
  const [japaCount, setJapaCount] = useState(0);
  const [malaCount, setMalaCount] = useState(0);
  const [animate, setAnimate] = useState<boolean>(false)
 
  const beads = Array.from({ length: TOTAL }, (_, i) => {
    const angle = (i / TOTAL) * Math.PI * 2 - Math.PI / 2;
    const radius = 135;

    return {
      x: 160 + radius * Math.cos(angle),
      y: 160 + radius * Math.sin(angle),
    };
  });

  const increment = () => {
    if(japaCount === 107){
      setMalaCount(prev => prev + 1)
      setJapaCount(0)
    }
    else{
      setJapaCount(japaCount + 1)
      setAnimate(false)

      requestAnimationFrame(() => {
        setAnimate(true)
      })
    }
  };

  return (
    <div className=" flex relative flex-col items-center  min-h-[100vh]">
    { <div 
      className="japa-info-card "
      >
        <div className="japa-info-container">
          <Hash size={24} color="black"/>
          <div className="japa-info">
            <span>Japa</span> 
              <h3>{japaCount}</h3>
          </div>
        </div>
        

        <div className="japa-info-container">
          <Image
          src="/mala.png"
          alt="mala"
          height={200}
          width={300}
          className="mala-icon"
          />
          <div className="japa-info">
            <span>Mala</span> 
            <h3>{malaCount}</h3>
          </div>
        </div>

        <div className="japa-info-container">
          <ChartNoAxesColumnIncreasing color="black" size={24}/>
          <div className="japa-info">
            <span>Total</span>
             <h3>{japaCount}</h3>
          </div>
        </div>

      </div>}

      <div className=" relative w-full items-center justify-center flex">
        <svg viewBox="0 0 320 320" width="380">
          {beads.map((bead, i) => (
            <circle
              key={i}
              cx={bead.x.toFixed(3)}
              cy={bead.y.toFixed(3)}
              r="5.5"
              className={
                i < japaCount
                  ? "fill-yellow-900"
                  : i === japaCount
                  ? "fill-amber-400 stroke-zinc-100"
                  : "fill-stone-500"
              }
              strokeWidth=""
              style={{

                transition: "fill 300ms ease, opacity 300ms ease",
                opacity: i <= japaCount ? 1 : 0.55,
              }}
            />
          ))}
        </svg>

        <h2 className={`absolute ${animate ? "naam-breathe" : "naam"}`}>{currentNaam}</h2>
      </div>


      
      <div className="flex gap-8 mt-10">
      <button
        onClick={increment}
        className="chant-btn"
      >
        <Image
        src={"/Rudraksha.png"}
        alt="chanting"
        height={300}
        width={300}
        className="chant-btn-img"

        />
      </button>
      </div>

      <div className=" flex flex-col gap-2 absolute bottom-[30%] right-[10%]">

        <button 
        className="reset-btn"

        >
          <Info/>
        </button>

        <Tooltip>
          <TooltipTrigger
          
          render={ <button 
            onClick={() => setJapaCount(0)}
            className="reset-btn">
            <RotateCcw size={24}/>
          </button>}
          />
          <TooltipContent className={`tooltip`}>
            Reset Japa Count
          </TooltipContent>

      
        </Tooltip>
      </div>

    </div>
  );
}
