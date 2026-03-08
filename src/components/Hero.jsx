export default function Hero() {
  return (
    <section className='bg-[url("/images/equipo_primera_femenino.jpeg")] bg-cover bg-top bg-no-repeat bg-fixed h-dvh flex items-end justify-start'>
      <div className='flex flex-col gap-4 text-white p-8'>
        <h2 className="text-3xl font-bold text-shadow-[0px_0px_16px] text-shadow-black">Bienvenidos al Club Alianza Handball</h2>
        <p className="font-semibold text-shadow-[0px_0px_16px] text-shadow-black">Pasión, dedicación y trabajo en equipo. Formando campeones dentro y fuera de la cancha desde 2023.</p>
        <a href="#equipos" className="max-w-fit bg-red-500 text-white font-bold text-shadow-sm text-shadow-black py-3 px-4 rounded-md hover:bg-red-700 hover:duration-200">Conoce a nuestros equipos</a>
      </div>
    </section>
  )
}
