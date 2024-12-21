import WppIcon from "@/assets/icons/wpp.svg";
import grainImage from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Vamos construir algo incrível juntos
              </h2>
              <p className="text-sm md:text-base mt-2">
                Se você procura alguém comprometido e pronto para contribuir com projetos de impacto, vamos conversar!
                Você pode entrar em contato pelo WhatsApp ou enviar um e-mail para:
                <span className="font-semibold text-gray-900"> damaresgaia@gmail.com</span>.
              </p>
            </div>
            <div>
              <a
                href="https://wa.me/5548988117969"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-950">
                  <span className="font-semibold">Entre em contato</span>
                  <WppIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
