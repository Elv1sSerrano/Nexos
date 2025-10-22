import { faqs } from "../../../constants"
import FaqsTab from "../components/FaqsTab"
import { useState } from "react"

const FrequentlyAsked = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section id="faqs" className="justify-center items-center flex flex-col text-center gap-6">
            <div>
                <h2 className="text-purple-700 font-bold font-palanquin text-4xl">Preguntas frecuentes</h2>
            </div>
            <div className="flex flex-col gap-4 max-md:w-full">
                {
                    faqs.map((faq, index) => (                        
                        <FaqsTab
                        key={faq.question}
                        index={index}
                        activeIndex={activeIndex}
                        setActiveIndex={setActiveIndex}                                                
                        {...faq}
                        />
                    ))
                }                
            </div>
        </section>        
    )
}

export default FrequentlyAsked