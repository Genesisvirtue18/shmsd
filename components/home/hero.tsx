"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { CalendarCheck, Phone } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmSQj2SpxJsyouo9DIS1BxXfNl7m0EiWwYrI1jIynElggcL6dsvlkVjeUKrG5TMY_bDwuQwncW-Iwqyn5b1jGe54FeXMlUAjW94Mj0I8KAf52nfKP3viEe_uMiWc-pcScsQwDo=s1360-w1360-h1020-rw",
    title: "Advanced Healthcare For Every Family",
    description:
      "Expert doctors, modern facilities and compassionate care available 24×7.",
  },
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlvDiKKwL-XVgQtu9OPmk7HObZxOn6bivrvhutPRSWTvFAxrQUJXUMFRQhJpjfNWqxhOVJfVlNGpwiyrY3OJH1IEVQohNdZLEoQdjE4CnBXDjiGpbMcgWXUF9HTfL4ToAOipIzZ=s1360-w1360-h1020-rw",
    title: "Trusted Multispeciality Hospital",
    description:
      "Providing quality treatment with state-of-the-art technology.",
  },
  {
    image: "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRMmgtYSO8B7GqFiNzxAKxmwf4a3cXs1OClTvPGfMusbYpbK4jMUT8B0n0myEZIMA_VA-UUHC1kndc39qyL4I_DXGA-dSJyBVaL5i80bPRtssyoP_LdSMST1LOVfb0uen562deJQ=s1360-w1360-h1020-rw",
    title: "Emergency Care 24×7",
    description:
      "Rapid response, ICU support and specialist medical care whenever needed.",
  },
];

export function Hero() {
  return (
    <section className="relative h-[80vh] w-full">
     <Swiper
  modules={[Autoplay, EffectFade, Pagination]}
  effect="fade"
  fadeEffect={{ crossFade: true }}
  loop={true}
  speed={1000}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  className="h-full"
>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover scale-105"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-start  px-6">
                <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false }}
  transition={{ duration: 0.6 }}
  className="max-w-2xl text-white"
>
                  <p className="mb-4 inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] backdrop-blur mt-24 ">
                    Signature Heart & Multispeciality Hospital
                  </p>

                  <h1 className="font-serif text-4xl font-semibold leading-tight md:text-5xl lg:text-3xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-base text-gray-200 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href="/appointment"
                      className="flex items-center gap-2 rounded-full bg-red-600 px-7 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                      <CalendarCheck size={18} />
                      Book Appointment
                    </Link>

                    <a
                      href="tel:+911234567890"
                      className="flex items-center gap-2 rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black"
                    >
                      <Phone size={18} />
                      Call Now
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
