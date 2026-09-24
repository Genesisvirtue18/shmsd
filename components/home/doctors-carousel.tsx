'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { DoctorCard } from '@/components/cards'
import type { Doctor } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export function DoctorsCarousel({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView={1.08}
        spaceBetween={16}
        pagination={{ clickable: true }}
        grabCursor
        touchStartPreventDefault={false}
        breakpoints={{
          480: { slidesPerView: 1.25 },
          640: { slidesPerView: 1.6 },
        }}
        className="!pb-10 [--swiper-pagination-bullet-inactive-color:#ef4444] [--swiper-pagination-color:#dc2626]"
      >
        {doctors.map((doctor) => (
          <SwiperSlide key={doctor.name} className="h-auto">
            <DoctorCard doctor={doctor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
