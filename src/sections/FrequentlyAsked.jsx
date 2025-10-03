import { faqs } from "../constants"
import FaqsTab from "../components/FaqsTab"

const FrequentlyAsked = () => {
    return (
        <section id="faqs" className="justify-center items-center flex flex-col text-center gap-6">
            <div>
                <h2 className="text-purple-700 font-bold font-palanquin text-4xl">Preguntas frecuentes</h2>
            </div>
            <div className="flex flex-col gap-4 max-md:w-full">
                {
                    faqs.map((faq) => (
                        <FaqsTab
                        key={faq.question}
                        {...faq}
                        />
                    ))
                }                
            </div>
        </section>        
    )
}

export default FrequentlyAsked