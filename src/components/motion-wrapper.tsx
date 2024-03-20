import { domAnimation, LazyMotion, m } from 'framer-motion'
import { ReactNode } from 'react'

type MotionWrapperProps = {
  children: ReactNode

  initial: {
    y?: string
    opacity?: number
  }

  animate: {
    y?: string
    opacity?: number
  }

  transition: {
    duration?: number
    ease?: number[]
  }

  exit: {
    y?: string
    opacity?: number
  }
}

export const MotionWrapper = (props: MotionWrapperProps) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...props}></m.div>
    </LazyMotion>
  )
}
