import { render } from "@react-email/render";

import PlantillaEmail from "./emails/PlantillaEmail";

function EmailForm(){
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const{ Nombre, Correo, Telefono, Servicio, Comentario } = Object.fromEntries(formData);

        const finalHtml = render(<PlantillaEmail Nombre={Nombre} Correo={Correo} Telefono={Telefono} Servicio={Servicio} Comentario={Comentario}/>,{
            pretty: true
        })
        const finalText = render(<PlantillaEmail Nombre={Nombre} Correo={Correo} Telefono={Telefono} Servicio={Servicio} Comentario={Comentario}/>,{
            plaintext: true
        })

        try{
            const res = await fetch("/api/sendEmail.json",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from: `${Nombre} <onboarding@resend.dev>`,
                    to: "manuel715pl@gmail.com", //Aqui va la {Correo}
                    subject: `Pedido de cita para ${Servicio}`,
                    html: finalHtml,
                    text: finalText
                })
            })
            const data = await res.json()
            console.log(data)
        }catch(e){
            console.error(e)
        }
    }
    return(
        <form onSubmit={handleSubmit} className="flex gap-7 flex-col">
            <div className="flex justify-center flex-col sm:flex-row gap-2">
                <label className="w-[30%] mt-2 top-0" htmlFor="Nombre">Nombre</label>
                <input id="Nombre" name="Nombre" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="text" required placeholder="Ingrese su nombre completo" />
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-2">
                <label className="w-[30%] mt-2" htmlFor="Correo">Correo</label>
                <input id="Correo" name="Correo" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="email" required placeholder="Ingrese su numero de telefono" />
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-2">
                <label className="w-[30%] mt-2" htmlFor="Telefono">Telefono</label>
                <input id="Telefono" name="Telefono" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="tel" required placeholder="Ingrese su numero de telefono" />
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-2">
                <label className="w-[30%] mt-2" htmlFor="Servicio">Servicios</label>
                <select name="Servicio" id="Servicio" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full">
                    <option value="medicinia-general">Medicina General</option>
                    <option value="medicina-interna">Medicina Interna</option>
                    <option value="gastroenterologia">Gastroenterologia</option>
                    <option value="odontologia">Odontologia</option>
                    <option value="obstetricia">Obstetricia</option>
                    <option value="oftalmologia">Oftalmologia</option>
                    <option value="urologia">Urologia</option>
                    <option value="endocrinologia">Endocrinologia</option>
                    <option value="pediatria">Pediatria</option>
                    <option value="psiquiatria">Psiquiatria</option>
                </select>
            </div>
            <div className="flex justify-center flex-col sm:flex-row gap-2">
                <label className="w-[30%] mt-2" htmlFor="Comentario">Comentario</label>
                <textarea name="Comentario" id="Comentario" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full min-h-40" placeholder="Escriba su comentario aqui"/>
            </div>
            <input type="submit" value="Enviar" className="bg-[#003449] rounded-xl font-bold max-sm:w-full text-[#acf1bd] px-6 py-2 mx-auto block cursor-pointer"/>
        </form>
    )
}
export default EmailForm