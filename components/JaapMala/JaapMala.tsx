
"use client";

import { useState } from "react";
import Image from "next/image";
import "./JaapMala.css"
import { Check, CircleDot, Hash, Info, RotateCcw, ChartNoAxesColumnIncreasing  } from "lucide-react";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "../ui/tooltip";
import { Progress } from "../ui/progress";
import HolyNameList from "../HolyNameList/HolyNameList";
import { useTheme } from "@/context/ThemeContext";


export type JaapMalaProps={
  currentNaam: string
  japaTarget: number
}


const TOTAL = 108;

export default function JaapMala({currentNaam, japaTarget}: JaapMalaProps) {
  const [japaCount, setJapaCount] = useState(0);
  const [malaCount, setMalaCount] = useState(0);
  const [animate, setAnimate] = useState<boolean>(false)
  const {isDark} = useTheme()
 
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
    <div className="mala-container">
    { <div 
      className="japa-info-container "
      >
        <div className="japa-info-card border dark:border-amber-300/60 
        border-amber-900
        ">
          <Hash size={24}/>
          <div className="japa-info">
            <span>Japa</span> 
              <h3>{japaCount}</h3>
          </div>
        </div>
        

        <div className="japa-info-card
        
        border dark:border-amber-300/60 
        border-amber-900">
          <Image
          src={isDark ? "/white-mala.png" : "/mala.png"}
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

        <div className="japa-info-card
        
        border dark:border-amber-300/60 
        border-amber-900">
          <ChartNoAxesColumnIncreasing  size={24}/>
          <div className="japa-info">
            <span>Total</span>
             <h3>{japaCount}</h3>
          </div>
        </div>

      </div>}

      <div className=" relative w-full items-center justify-center flex">
        <svg viewBox="0 0 320 320" width="320">
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
      

      <HolyNameList/>

      
      <div className="flex items-center justify-center gap-3 mt-5">
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

    </div>
  );
}
