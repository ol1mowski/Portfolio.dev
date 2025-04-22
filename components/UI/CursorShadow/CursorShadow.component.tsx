'use client';

import { useMousePosition } from '@/hooks/useCursorPosition.hook';
import s from './CursorShadow.component.module.scss';

function CursorShadow() {
  const { x, y } = useMousePosition();
  return (
    <div
      className={s.shadow}
      style={{
        left: x,
        top: y,
      }}
    ></div>
  );
}

export default CursorShadow;
