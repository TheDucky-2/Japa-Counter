import React, { useRef, useState } from 'react'
import "./HolyNameList.css"
import { HolyNames } from '@/data/holynames'

const HolyNameList = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const [selected, setSelected] = useState<string>("")
    const listRef = useRef<HTMLUListElement | null>(null)
    let minDistance = Infinity
    

    const handleScroll = (e:React.UIEvent<HTMLUListElement>) => {

        const container = listRef.current
       if(!container)return;

        const items = container?.querySelectorAll<HTMLLIElement>(".list-item")

        if(!items)return;

        // getting the center of list container
        const containerCenter = container?.getBoundingClientRect().top + container?.clientHeight/2

        let closestIndex = 0

        items.forEach((item, index) => {

            const rect = item.getBoundingClientRect();
            
            const itemCenter = rect.top + rect.height/2

            console.log("Item Center", itemCenter)
            
            const distance = Math.abs(itemCenter - containerCenter)

            if(distance < minDistance){
                minDistance = distance;
                closestIndex = index
            }
            
            setSelectedIndex(closestIndex)

        });

    }
 

    console.log(selected)
  return (
    <ul 
    className='holy-name-list bg-yellow-400 text-zinc-900'
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