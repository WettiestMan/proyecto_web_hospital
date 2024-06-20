import PlantillaEmail from "./emails/PlantillaEmail";
import { render } from "@react-email/render";
import { useState, useRef, useEffect } from "react";

function EmailForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const formRef = useRef();
    const delay = 10000;

    useEffect(() => {
        const lastSubmitTime = localStorage.getItem('lastSubmitTime');
        if (lastSubmitTime) {
            const timeSinceLastSubmit = Date.now() - new Date(lastSubmitTime).getTime();
            if (timeSinceLastSubmit < delay) {
                setIsSubmitting(true);
                setTimeLeft((delay - timeSinceLastSubmit) / 1000);
                const interval = setInterval(() => {
                    const newTimeLeft = Math.max((delay - (Date.now() - new Date(lastSubmitTime).getTime())) / 1000, 0);
                    setTimeLeft(newTimeLeft);
                    if (newTimeLeft <= 0) {
                        clearInterval(interval);
                        setIsSubmitting(false);
                        localStorage.removeItem('lastSubmitTime');
                    }
                }, 1000);
                return () => clearInterval(interval);
            }
        }
    }, []);

    const handlePhoneInput = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    };

    const handleNameInput = (e) => {
        const value = e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
        e.target.value = value;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget);
        const { Nombre, Correo, Telefono, Servicio, Comentario } = Object.fromEntries(formData);

        const finalHtml = render(
            <PlantillaEmail 
                Nombre={Nombre} 
                Correo={Correo} 
                Telefono={Telefono} 
                Servicio={Servicio} 
                Comentario={Comentario}
            />, {
                pretty: true
            }
        );
        const finalText = render(
            <PlantillaEmail 
                Nombre={Nombre} 
                Correo={Correo} 
                Telefono={Telefono} 
                Servicio={Servicio} 
                Comentario={Comentario}
            />, {
                plaintext: true
            }
        );

        try {
            const res = await fetch("/api/sendEmail.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    from: `${Nombre} <onboarding@resend.dev>`,
                    to: "policlinicolatrinidad@gmail.com",
                    subject: `Pedido de cita para ${Servicio}`,
                    html: finalHtml,
                    text: finalText
                })
            });
            const data = await res.json();
            
            setIsSubmitting(true);
            setTimeLeft(delay / 1000);
            formRef.current.reset();
            localStorage.setItem('lastSubmitTime', new Date().toISOString());
            const interval = setInterval(() => {
                const newTimeLeft = Math.max((delay - (Date.now() - new Date(localStorage.getItem('lastSubmitTime')).getTime())) / 1000, 0);
                setTimeLeft(newTimeLeft);
                if (newTimeLeft <= 0) {
                    clearInterval(interval);
                    setIsSubmitting(false);
                    localStorage.removeItem('lastSubmitTime');
                }
            }, 1000);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} ref={formRef}>
            <fieldset disabled={isSubmitting} className="flex gap-7 flex-col">
                <div className="flex justify-center flex-col sm:flex-row gap-2">
                    <label className="w-[30%] mt-2 top-0" htmlFor="Nombre">Nombre</label>
                    <input required id="Nombre" name="Nombre" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="text" onInput={handleNameInput} placeholder="Ingrese su nombre completo" />
                </div>
                <div className="flex justify-center flex-col sm:flex-row gap-2">
                    <label className="w-[30%] mt-2" htmlFor="Correo">Correo</label>
                    <input required id="Correo" name="Correo" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="email" placeholder="Ingrese su correo electronico" />
                </div>
                <div className="flex justify-center flex-col sm:flex-row gap-2">
                    <label className="w-[30%] mt-2" htmlFor="Telefono">Telefono</label>
                    <input required id="Telefono" name="Telefono" className="p-3 border border-[#ccc] rounded-md sm:w-[60%] w-full" type="tel" pattern="^(?:9\d{8}|(?:0[1-9])?\d{6,7})$" onInput={handlePhoneInput} placeholder="Ingrese su numero de telefono [953753974 o 288442]" />
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
                    <button className={`flex items-center justify-center rounded-xl font-bold max-sm:w-full text-[#acf1bd] w-[100px] h-[35px] mx-auto ${isSubmitting ? "bg-[#00a85a] text-white" : "bg-[#003449]"} `}>
                        <span className={`mx-auto ${isLoading ? "hidden" : ""}`}>{!isSubmitting ? "Enviar" : `Enviado`}</span>
                        <img src="/img/carg.svg" className={`h-[24px] mx-auto ${isLoading ? "" : "hidden"}`} />
                    </button>
                    {isSubmitting && !isLoading && <div className="text-center mt-2">Puedes enviar otro formulario en {Math.ceil(timeLeft)} segundos</div>}
            </fieldset>
        </form>
    );
}

export default EmailForm;