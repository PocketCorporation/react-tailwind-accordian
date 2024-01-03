import React, { useEffect, useState, useContext, createContext, useRef} from 'react';
import { ChevronDown } from 'lucide-react'

const AccordianContext = createContext()

const Accordian = ({children, value, onChange, ...props}) => {
    const [selected, setSelected ] = useState(value)

    useEffect(()=>{
        onChange?.(selected)
    }, [selected])

    return (
        <ul {...props}>
            <AccordianContext.Provider value={{selected, setSelected}}>
                {children}
            </AccordianContext.Provider>
        </ul>
    );
}

export default Accordian;

export function AccordianItem({children, value, trigger, ...props}) {
    const {selected, setSelected}=useContext(AccordianContext)
    const open = selected === value

    const ref = useRef(null)

    return (
        <li className='border-b' {...props}>
            <header 
                role='button' 
                onClick={()=>setSelected(open ? null : value)}
                className='flex justify-between items-center p-4 font-medium'
            >
                {trigger}
                <ChevronDown 
                    size={16}
                    className={`transition-transform ${open ? 'rotate-180' : ''}`}
                />
            </header>
            <div className='overflow-y-hidden transition-all' style={{height: open ? ref.current?.OffsetHeight || 0 : 0}}>
                <div className="pt-2 pb-4" ref={ref}>{children}</div>
            </div>
        </li>
    )
}

