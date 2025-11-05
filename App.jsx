import React, { useState } from "react";
import { Check, Leaf, Scale, Shield, ArrowRight, Mail, Phone, Calendar, MapPin, Instagram, Linkedin, FileText, User } from "lucide-react";

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-2xl border px-3 py-1 text-sm bg-white/60 backdrop-blur shadow-sm">
    {children}
  </span>
);

const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border bg-white shadow-sm p-6 ${className}`}>{children}</div>
);

const Button = ({ children, href, onClick, className = "", icon: Icon }) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium shadow-sm transition hover:shadow";
  const styles = "bg-black text-white hover:bg-zinc-800";
  return href ? (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {Icon && <Icon size={18} />} {children}
    </a>
  ) : (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {Icon && <Icon size={18} />} {children}
    </button>
  );
};

const OutlineButton = ({ children, href, className = "" }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium border shadow-sm hover:bg-zinc-50 transition ${className}`}
  >
    {children}
  </a>
);

export default function App() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "Quiero info sobre el plan mensual.",
  });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const whatsappNumber = "543416707749";
  const whatsappMsg = encodeURIComponent(
    "Hola, estoy interesado/a en el servicio de acompañamiento para productores de hongos."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <Section className="flex items-center justify-between py-3">
          <a href="#inicio" className="flex items-center gap-2 font-semibold">
            <Leaf className="text-emerald-600" />
            <span>Estudio Legal • BioNegocios • Estudio Jurídico Chiavazza</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-emerald-700">Servicios</a>
            <a href="#planes" className="hover:text-emerald-700">Planes</a>
            <a href="#proceso" className="hover:text-emerald-700">Cómo trabajamos</a>
            <a href="#faq" className="hover:text-emerald-700">Preguntas</a>
            <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
            <a href="#sobrejoaquin" className="hover:text-emerald-700">Sobre Joaquín</a>
          </nav>
          <div className="flex items-center gap-3">
            <OutlineButton href={whatsappLink}>WhatsApp</OutlineButton>
            <Button href="#contacto" icon={ArrowRight} className="hidden sm:inline-flex">Quiero empezar</Button>
          </div>
        </Section>
      </header>

      <main>
        {/* PROCESO */}
        <Section id="proceso" className="mt-20">
          <h2 className="text-3xl font-semibold">Cómo trabajamos</h2>
          <div className="grid md:grid-cols-4 gap-4 mt-6">
            <Card>
              <div className="flex items-center gap-3">
                <Calendar className="text-emerald-600"/>
                <h3 className="font-semibold">Relevamiento</h3>
              </div>
              <p className="text-zinc-600 mt-2">Reunión inicial y diagnóstico regulatorio/productivo.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <FileText className="text-emerald-600"/>
                <h3 className="font-semibold">Plan de acción</h3>
              </div>
              <p className="text-zinc-600 mt-2">Checklist de trámites y roadmap con tiempos reales.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <Shield className="text-emerald-600"/>
                <h3 className="font-semibold">Implementación</h3>
              </div>
              <p className="text-zinc-600 mt-2">Gestión de habilitaciones, RNE/RNPA y contratos.</p>
            </Card>
            <Card>
              <div className="flex items-center gap-3">
                <ArrowRight className="text-emerald-600"/>
                <h3 className="font-semibold">Seguimiento</h3>
              </div>
              <p className="text-zinc-600 mt-2">Ajustes mensuales y soporte ante auditorías.</p>
            </Card>
          </div>
        </Section>

        {/* SERVICIOS */}
        <Section id="servicios" className="mt-20">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-semibold">Servicios incluidos</h2>
            <a href="#planes" className="text-emerald-700 hover:underline">Ver planes →</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            <Card>
              <h3 className="text-lg font-semibold">Jurídico & Tributario</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Constitución/adecuación de figura (mono, SAS, coop, AC)</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> AFIP/Rentas y alta de actividades</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Contratos comerciales y NDAs</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Compliance y gestión de riesgos</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Habilitaciones & Sanitario</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Habilitación municipal de predios productivos</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> RNE: Registro Nacional de Establecimientos</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> RNPA: Registro Nacional de Productos Alimenticios</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Acompañamiento en inspecciones y auditorías</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Propiedad Intelectual</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Registro de marca (INPI)</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Modelos y patentes</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Búsquedas de anterioridades</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Contratos de licencia y cesión</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Estrategia & Negocio</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Diagnóstico productivo y regulatorio</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Plan de negocios y escalamiento</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Canales de venta y distribución</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Alianzas y compras públicas</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Vinculación Tecnológica</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Conexión con laboratorios y centros técnicos</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Validaciones y ensayos</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Transferencia de tecnología</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Gestión de convenios</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold">Acompañamiento Comercial</h3>
              <ul className="mt-3 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Estrategia de precios y márgenes</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Negociación con proveedores</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Guía de etiquetado y claims</li>
                <li className="flex gap-2"><Check className="text-emerald-600 shrink-0"/> Soporte en e-commerce y B2B</li>
              </ul>
            </Card>
          </div>
        </Section>

        {/* PLANES */}
        <Section id="planes" className="mt-20">
          <h2 className="text-3xl font-semibold">Planes mensuales</h2>
          <p className="text-zinc-600 mt-2">Valores reducidos pensados para pequeños productores. Ajustamos el alcance según etapa y necesidades. Sin sorpresas ni letra chica.</p>
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Card className="relative">
              <div className="absolute -top-3 right-6">
                <Pill>Emprendimientos en marcha</Pill>
              </div>
              <h3 className="text-xl font-semibold">Plan Base</h3>
              <p className="text-zinc-600 mt-1">Para formalizar y ordenar lo esencial.</p>
              <div className="mt-4 text-xl font-semibold text-emerald-700">Canon mensual accesible (valores reducidos)</div>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600"/> Asesoramiento jurídico y tributario mensual</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Alta/actualización de actividades (ARCA y AFIP)</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Habilitación municipal: guía y checklist</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> 1 trámite de marca (INPI) / año</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Soporte en contratos básicos</li>
              </ul>
              <Button href="#contacto" className="mt-6 w-full">Quiero este plan</Button>
            </Card>

            <Card className="relative border-emerald-600">
              <div className="absolute -top-3 right-6">
                <Pill>El más elegido</Pill>
              </div>
              <h3 className="text-xl font-semibold">Plan Escala</h3>
              <p className="text-zinc-600 mt-1">Para quienes buscan habilitar productos y crecer.</p>
              <div className="mt-4 text-xl font-semibold text-emerald-700">Canon mensual accesible (valores reducidos)</div>
              <ul className="mt-4 space-y-2 text-zinc-700">
                <li className="flex gap-2"><Check className="text-emerald-600"/> Todo lo del Plan Base</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Acompañamiento en RNE y RNPA (ANMAT/autoridad competente)</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Revisión de etiquetado y claims</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Negociación con proveedores y acuerdos B2B</li>
                <li className="flex gap-2"><Check className="text-emerald-600"/> Vinculación Tecnológica y Comercial (hasta 2 gestiones)</li>
              </ul>
              <Button href="#contacto" className="mt-6 w-full">Quiero este plan</Button>
            </Card>
          </div>
          <p className="text-xs text-zinc-500 mt-3">* Los aranceles estatales (ANMAT, INPI, municipalidad, etc.) se abonan por fuera del canon mensual. Ofrecemos presupuesto cerrado por gestiones puntuales.</p>
        </Section>

        {/* FAQ */}
        <Section id="faq" className="mt-20">
          <h2 className="text-3xl font-semibold">Preguntas frecuentes</h2>
          <div className="grid md:grid-cols-2 gap-5 mt-6">
            <Card>
              <h3 className="font-semibold">¿Trabajan solo en Santa Fe?</h3>
              <p className="text-zinc-600 mt-2">Podemos acompañar proyectos en todo el país de manera remota. Las gestiones locales se coordinan con inspectores o municipios cuando haga falta.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">¿ANMAT siempre interviene?</h3>
              <p className="text-zinc-600 mt-2">Para alimentos y suplementos, se gestiona RNE/RNPA ante ANMAT o autoridad sanitaria provincial según corresponda. Evaluamos tu caso y definimos el camino más corto y seguro.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">¿El precio incluye tasas?</h3>
              <p className="text-zinc-600 mt-2">No. Los aranceles estatales (ANMAT, INPI, municipalidad, etc.) se abonan aparte. Te pasamos el detalle antes de iniciar cada trámite.</p>
            </Card>
            <Card>
              <h3 className="font-semibold">¿Pueden ayudarme a vender?</h3>
              <p className="text-zinc-600 mt-2">Sí: acompañamos en estrategia comercial, canales y acuerdos B2B, además de guiar el etiquetado y compliance para vender en regla.</p>
            </Card>
          </div>
        </Section>

        {/* CONTACTO */}
        <Section id="contacto" className="mt-20 mb-24">
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-semibold">Hablemos de tu proyecto</h2>
                <p className="text-zinc-600 mt-1">Escribime y coordinamos una llamada de 20 minutos para entender tu necesidad y proponerte un plan.</p>
                <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={(e)=> e.preventDefault()}>
                  <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Nombre" className="w-full rounded-xl border px-4 py-3"/>
                  <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full rounded-xl border px-4 py-3"/>
                  <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className="w-full rounded-xl border px-4 py-3 md:col-span-2"/>
                  <textarea name="mensaje" value={form.mensaje} onChange={handleChange} placeholder="Contame brevemente en qué etapa estás" className="w-full rounded-xl border px-4 py-3 md:col-span-2 min-h-[120px]"/>
                  <div className="flex flex-wrap gap-3 md:col-span-2">
                    <Button icon={Mail}>Enviar consulta</Button>
                    <OutlineButton href={whatsappLink}>Contactar por WhatsApp</OutlineButton>
                  </div>
                </form>
              </Card>
            </div>
            <div className="space-y-4">
              <Card>
                <h3 className="font-semibold">Datos de contacto</h3>
                <div className="mt-3 space-y-2 text-zinc-700">
                  <p className="flex items-center gap-2"><Mail size={16}/> <a href="mailto:chiavazzaj@gmail.com" className="hover:underline">chiavazzaj@gmail.com</a></p>
                  <p className="flex items-center gap-2"><Phone size={16}/> <a href={whatsappLink} className="hover:underline">+54 341 670 7749 (WhatsApp)</a></p>
                  <p className="flex items-center gap-2"><MapPin size={16}/> Rosario, Santa Fe, Argentina (atención remota en todo el país)</p>
                  <p className="flex items-center gap-2"><FileText size={16}/> Matrícula Federal: T° 407 F° 008</p>
                </div>
              </Card>
              <Card>
                <h3 className="font-semibold">Redes</h3>
                <div className="mt-3 flex gap-3 text-zinc-700">
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50" href="https://www.instagram.com/joaquin_chiavazza"><Instagram size={16}/> Instagram</a>
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50" href="https://www.linkedin.com/in/joaquinchiavazza"><Linkedin size={16}/> LinkedIn</a>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* SOBRE JOAQUIN */}
        <Section id="sobrejoaquin" className="mt-20 bg-zinc-50 py-10 rounded-2xl">
          <div className="grid md:grid-cols-2 items-center gap-10">
            <div>
              <img src="/foto_perfil.jpeg" alt="Joaquín Chiavazza" className="rounded-2xl shadow-md w-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3 flex items-center gap-2"><User className="text-emerald-600"/>Sobre Joaquín Chiavazza</h2>
              <p className="text-zinc-700 leading-relaxed text-justify">
                Soy abogado especializado en derecho penal, dedicado al acompañamiento de proyectos y emprendimientos legales vinculados al <strong>cannabis medicinal</strong> y al <strong>cáñamo industrial</strong>, en el marco de las leyes 27.350 y 27.669. 
                Desde mi experiencia en el rubro, brindo asesoramiento legal estratégico a productores, investigadores y empresas que buscan desarrollarse en el sector.
              </p>
              <p className="text-zinc-700 leading-relaxed text-justify mt-4">
                Actualmente curso una <strong>Diplomatura en Bionegocios</strong> en la Facultad de Ciencias Exactas de la Universidad de Córdoba, lo que me permite integrar la mirada jurídica con la innovación biotecnológica y el desarrollo productivo sostenible.
              </p>
              <p className="text-zinc-700 leading-relaxed text-justify mt-4">
                Este recorrido me llevó a ampliar la mirada hacia otros sectores emergentes, como la producción de hongos y sus derivados, acompañando a pequeños productores en el proceso de formalización, habilitación y escalamiento comercial.
              </p>
            </div>
          </div>
        </Section>

        {/* FOOTER */}
        <footer className="border-t bg-white">
          <Section className="py-10 text-sm text-zinc-600">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p><strong>Disclaimer:</strong> Este servicio brinda acompañamiento legal y estratégico para actividades lícitas. No promueve usos o prácticas prohibidas. Las gestiones sanitarias pueden tramitarse ante ANMAT o autoridades provinciales, según normativa vigente.</p>
                <p className="mt-2">© {new Date().getFullYear()} Estudio Jurídico Chiavazza • Estudio Legal • BioNegocios. Todos los derechos reservados.</p>
              </div>
              <div className="md:text-right">
                <a href="#inicio" className="hover:underline">Volver arriba</a>
              </div>
            </div>
          </Section>
        </footer>
      </main>
    </div>
  );
}
