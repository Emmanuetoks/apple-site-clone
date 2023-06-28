'use client'
import React, { useRef} from 'react'
import AccordionItem from './AccordionItem'
// import image from '../../app/(home)/assets/images/hero_iphone14pro_spring__9xo85pm6sbmm_large.jpg'
const Accordion = () => {
  const accordionContents = useRef<HTMLDivElement[]>([])
  const addAccordionContent = (el:HTMLDivElement):void => {accordionContents.current.push(el)}
  return (
    <div className='accordion block tablet:hidden w-full'>
        <AccordionItem contentID='0' accorContents={accordionContents.current} refFunction={addAccordionContent} name='Explore' content='world'/>
        <AccordionItem contentID='1' accorContents={accordionContents.current} refFunction={addAccordionContent} name='Account' content='world'/>
        <AccordionItem contentID='2' accorContents={accordionContents.current} refFunction={addAccordionContent} name='Apple Values' content='world'/>
        <AccordionItem contentID='3' accorContents={accordionContents.current} refFunction={addAccordionContent} name='About Apple' content='world'/>
    </div>
  )
}



export default Accordion