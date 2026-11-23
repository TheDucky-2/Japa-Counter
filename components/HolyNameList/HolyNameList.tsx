import React, { useRef, useState } from 'react'
import "./HolyNameList.css"
import { HolyNames } from '@/data/holynames'

const HolyNameList = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selected, setSelected] = useState<string>("")
    const listRef = useRef(null)
    let minDistance = Infinity
    

    const handleScroll = (e) => {

        const container = listRef.current
        const items = container?.querySelectorAll(".list-item")

        const containerCenter = container?.getBoundingClientRect().top + container?.clientHeight/2

        let closestIndex = 0

        items.forEach((item, index) => {

            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height/2
            
            const distance = Math.abs(itemCenter - containerCenter)

            if(distance < minDistance){
                minDistance = distance;
                closestIndex = index
            }
            
            setSelectedIndex(index)

        });

    }
 

    console.log(selected)
  return (
    <ul 
    className='holy-name-list bg-amber-900 text-zinc-100'
    ref={listRef}
    onScroll={handleScroll}


    >
        {HolyNames.map((holyName, index) => (
            <li
            key={holyName.id}
            className={`list-item ${selectedIndex === index ? "active" : ""} `}
            onClick={() => setSelected(holyName.naam)}
            >
                {holyName.naam}
            </li>
        ))}
    </ul>
  )
}

export default HolyNameList