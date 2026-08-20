'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { ServiceCard } from '@/components/cards'
import type { Service } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export function ServiceCarousel({ Service }: { Service: Service[] }) {
  return (
    <div className="lg:hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView={2}
        spaceBetween={16}
        pagination={{ clickable: true }}
        grabCursor
        touchStartPreventDefault={false}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 1.6 },
        }}
        className="!pb-10 [--swiper-pagination-bullet-inactive-color:#ef4444] [--swiper-pagination-color:#dc2626]"
      >
        {Service.map((dept) => (
          <SwiperSlide key={dept.slug} className="h-auto">
            <ServiceCard service={dept} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
