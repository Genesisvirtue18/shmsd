'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import { DepartmentCard } from '@/components/cards'
import type { Department } from '@/lib/data'

import 'swiper/css'
import 'swiper/css/pagination'

export function DepartmentsCarousel({ departments }: { departments: Department[] }) {
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
        className="!pb-10"
      >
        {departments.map((dept) => (
          <SwiperSlide key={dept.slug} className="h-auto">
            <DepartmentCard department={dept} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
