'use client';

import s from './CounterAnimation.component.module.scss';

import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const CounterAnimation = ({ target, duration }: { target: number; duration: number }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const props = useSpring({
    num: inView ? target : 0,
    from: { num: 0 },
    config: { duration: duration },
  });

  const scaleAnimation = useSpring({
    transform: inView ? 'scale(1.2)' : 'scale(1)',
    config: { tension: 170, friction: 12 },
  });

  return (
    <>
      <>
        <animated.span className={s.amount} ref={ref} style={scaleAnimation}>
          {props.num.to(n => n.toFixed(0))}
        </animated.span>{' '}
      </>
    </>
  );
};

export default CounterAnimation;
