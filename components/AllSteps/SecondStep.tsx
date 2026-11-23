
"use client";

import React, { SetStateAction } from "react";
import { useState }from "react";
import { CircleArrowLeft, MoveLeft } from "lucide-react";

export type SecondStepProps={
  currentStep: number
  setCurrentStep: React.Dispatch<SetStateAction<number>>
}

export default function SecondStep({currentStep, setCurrentStep}: SecondStepProps) {
  const [showMeaning, setShowMeaning] = useState(true);

  return (
    <section className="main-container">
        <div className='header'>

            {currentStep === 2 && <button 
            onClick={() => setCurrentStep(currentStep - 1)}
            className='go-back-btn'
            >
                <MoveLeft size={22}/>
                Adjust Japa Goal
               
            </button>}

        </div>

      <div className="relative overflow-y-auto rounded-3xl
        border border-amber-800 px-6 py-10 sm:px-10 shadow-sm flex-5">

        {/* Decorative background */}
        <div className="absolute  
           rounded-full  blur-3xl" />

        <div className="relative z-10 text-center">

          {/* Label */}
          <span className="inline-block rounded-full
            border border-amber-300 px-4 py-1
            text-xs tracking-[0.2em] text-amber-800">
            DAILY PRAYER
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-amber-800
            text-2xl sm:text-3xl font-serif">
            ॥ श्री गुरवे नमः ॥
          </h2>

          <h3 className="mt-3 text-3xl font-semibold
            tracking-wide text-stone-800">
            Guru Vandana
          </h3>

          <p className="mt-2 text-sm text-stone-500">
            A prayer of reverence to the Guru
          </p>

          <div className="my-8 h-px bg-amber-200" />

          {/* Sanskrit */}
          <div className="space-y-5">
                          <div>
            <p className="text-2xl sm:text-3xl
              leading-relaxed text-stone-800
              font-serif">
                ध्यानमूलं गुरोर्मूर्तिः पूजामूलं गुरोः पदम् ।<br/>
                मंत्रमूलं गुरोर्वाक्यं मोक्षमूलं गुरोः कृपा ।।
            </p>

            <p className="text-base sm:text-lg
              leading-6 text-stone-700">
                Dhyana mulam gurur murti
                Puja mulam gurur padam
            </p>

            <p className="text-base sm:text-lg
              leading-6 text-stone-700">
              Mantra mulam gurur vaakyam
              Moksha mulam gurur kripa
            </p>
            </div>

            <div>
            <p className="text-2xl sm:text-3xl
              leading-relaxed text-stone-800
              font-serif">
              गुरूर्ब्रह्मा गुरूर्विष्णुः गुरूर्देवो महेश्वरः ।<br/>
              गुरूर्साक्षात परब्रह्म तस्मै श्री गुरवे नमः ।।
            </p>

            <p className="text-base sm:text-lg
              leading-6 text-stone-700">
              Gururbrahmaa gururvishnur gururdevo
              maheshwarah;
            </p>

            <p className="text-base sm:text-lg
              leading-6 text-stone-700">
              Guruh saakshaat param brahma
              tasmai shree gurave namah.
            </p>
            </div>

        
         
          </div>

          <div className="my-8 h-px bg-amber-200" />

          {/* Meaning toggle */}
          <button
            onClick={() => setShowMeaning(!showMeaning)}
            className="text-amber-800 text-sm font-medium
              hover:text-amber-600 transition"
          >
            {showMeaning ? "Hide Meaning −" : "Read Meaning +"}
          </button>

          {showMeaning && (
            <div className="mt-5 animate-in fade-in duration-300">
              <h4 className="text-lg font-semibold
                text-stone-800">
                Meaning
              </h4>


                              <p className="mt-3 text-sm sm:text-base
                leading-7 text-stone-600">
                  The Guru's form is the root of meditation;<br/>
                  the Guru's feet are the root of worship; <br/>
                  the Guru's word is the root of Mantra; <br/>
                  and<br/> 
                  the Guru's Grace is the root of liberation.
              </p>
              <p className="mt-3 text-sm sm:text-base
                leading-7 text-stone-600">
                The Guru is the creator (Brahma),
                the preserver (Vishnu), and the
                destroyer (Maheshvara). <br/>The Guru
                is verily the Supreme Absolute.
                <br/>To that revered Guru, I offer
                my salutations.
              </p>
            
            </div>
          )}

          {/* Attribution */}
          <div className="mt-9 pt-5 border-t
            border-amber-200/70">

            <p className="text-xs text-stone-500">
              Traditional Guru Stotram
            </p>

            <p className="mt-2 text-xs text-stone-500">
              Reference:{" "}
              <a
                href="https://www.sivanandaonline.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-800 underline
                  underline-offset-2"
              >
                The Divine Life Society
              </a>
            </p>


          </div>

        </div>
      </div>
    </section>
  );
}
