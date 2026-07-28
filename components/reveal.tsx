'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'

const offset = 28

function buildVariants(direction: Direction): Variants {
  const hidden: Record<string, number> = { opacity: 0 }
  if (direction === 'up') hidden.y = offset
  if (direction === 'down') hidden.y = -offset
  if (direction === 'left') hidden.x = offset
  if (direction === 'right') hidden.x = -offset
  if (direction === 'scale') hidden.scale = 0.94
  return {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag
      className={className}
      variants={buildVariants(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
  as = 'div',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
  as?: 'div' | 'li' | 'article'
}) {
  const MotionTag = motion[as] as typeof motion.div
  return (
    <MotionTag className={className} variants={buildVariants(direction)}>
      {children}
    </MotionTag>
  )
}
