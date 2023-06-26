import React, { useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const slides = [
  "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/52d56debd31808e220beb0730af43bf9/foto-1-de-imperio-do-ouro-em-maria-paula-sao-goncalo.jpg",
  "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/39700382ff69c3c5cc7d893be3b7a735/foto-3-de-imperio-do-ouro-em-maria-paula-sao-goncalo.jpg",
  "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/25d465cbf3c9451141241200eaa1de05/foto-2-de-imperio-do-ouro-em-maria-paula-sao-goncalo.jpg",
  "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/7e26c4cf7c411526c59a703d3b150077/foto-5-de-imperio-do-ouro-em-maria-paula-sao-goncalo.jpg",
  "https://resizedimgs.vivareal.com/fit-in/870x653/named.images.sp/066d9ba1bbdc85f821d622aa6de6a0d1/foto-4-de-imperio-do-ouro-em-maria-paula-sao-goncalo.jpg"
] 

const Gallery = () => {
  const swiperRef = useRef(null);

  // Inicializa o Swiper quando o componente for montado
  React.useEffect(() => {
    swiperRef.current = new Swiper('.swiper-container', {
      // Configurações do Swiper
    });
  }, []);

  const handleThumbnailClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Navega para o slide com o índice especificado
    }
  };

  return (
    <div>
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {slides.map(slide => (
            <li><img src={slide}/></li>
          ))}
        </div>
      </div>

      <div className="thumbnails">
        {/* Renderize as miniaturas dos slides */}
        {/* Adicione um evento de clique para cada miniatura */}
        {slides.map((thumbnail, index) => (
          <img
            key={index}
            src={thumbnail}
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;