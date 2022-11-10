import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import chevrolet from '../images/carrusel/chevrolet.png';
import mazda from '../images/carrusel/mazda.jpg';
import kia from '../images/carrusel/kia.png';
import hyundai from '../images/carrusel/hyundai.png';
import renault from '../images/carrusel/renault.png';
import ford from '../images/carrusel/ford.png';
import peugeot from '../images/carrusel/peugeot.jpg';
import { Carousel } from '@mantine/carousel';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AlquiCar-Home</title>
      </Head>
      <div className={styles.CarouselContainer}>
        <Carousel
          className={styles.Carousel}
          slideSize='40%'
          height={300}
          slideGap='xs'
          controlsOffset='xs'
        >
          <Carousel.Slide>
            <Image
              src={chevrolet}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={mazda}
              alt='Picture of the author'
              width={330}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={renault}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={ford}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={kia}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={peugeot}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              src={hyundai}
              alt='Picture of the author'
              width={300}
              height={300}
            />
          </Carousel.Slide>
        </Carousel>
      </div>

      <h1> Nuestras marcas</h1>
    </div>
  );
}
