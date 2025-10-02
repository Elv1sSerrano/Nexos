const Subscribe = () => {
    return (
        <section>
            <div className="border border-none shadow-xl bg-white rounded-2xl p-8 flex flex-row justify-between items-center max-lg:flex-col max-lg:gap-6 max-w-[1200px] mx-auto">
                <div className="flex flex-col gap-4">
                    <h2 className="text-purple-700 text-4xl font-bold font-palanquin">Únete a la lista de espera</h2>
                    <p className="text-slate-gray font-montserrat max-w-[500px]">Te notificaremos por medio de un correo electrónico cuando la plataforma esté disponible y puedas hacer uso de ella</p>
                    <div className="flex flex-row max-sm:flex-col max-sm:gap-4">
                        <input type="email" placeholder="Ingresa tu correo electrónico" className="border rounded-l-lg p-3 w-72 max-sm:w-full outline-none placeholder:font-montserrat"/>
                        <button className="bg-purple-950 text-white font-montserrat p-3 rounded-r-lg hover:bg-purple-900 transition-colors w-32 max-sm:w-full">Enviar</button>
                    </div>
                </div>
                <div>
                    <img alt="Sillas vacias en un espacio universitario" className="object-cover rounded-lg" width={400} height={300}
                    src="https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />    
                </div>                
            </div>
        </section>
    )
}

export default Subscribe