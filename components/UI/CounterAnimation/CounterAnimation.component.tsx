"use client";

import s from "./CounterAnimation.component.module.scss";

import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const CounterAnimation = ({
  target,
  description,
  action,
  duration,
  tag,
}: {
  target: number;
  description: string;
  action: string;
  tag?: string;
  duration: number;
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const props = useSpring({
    num: inView ? target : 0,
    from: { num: 0 },
    config: { duration: duration },
  });

  const scaleAnimation = useSpring({
    transform: inView ? "scale(1.2)" : "scale(1)",
    config: { tension: 170, friction: 12 },
  });

  return (
    <section className={s.container} ref={ref}>
      <span className={s.container__content}>
        Blisko{" "}
        <animated.span
          className={s.container__content__amount}
          style={scaleAnimation}
        >
          {props.num.to((n) => n.toFixed(0))}
        </animated.span>{" "}
        {description}{" "}
        {tag === "Blog" ? (
          <Link href="/blog">
            <span className={s.container__content__amount}>{action}</span>
          </Link>
        ) : (
          <a
            href="https://www.youtube.com/channel/UCTNFKRALTZoSQS6mDOuDs2Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={s.container__content__amount}>{action}</span>
          </a>
        )}
      </span>
    </section>
  );
};

export default CounterAnimation;
