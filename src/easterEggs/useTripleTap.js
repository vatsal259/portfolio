import { useCallback, useRef } from 'react';

const TAP_WINDOW_MS = 600;
const TAPS_TO_TRIGGER = 3;

export function useTripleTap(onTrigger) {
  const tapRef = useRef({ count: 0, lastTime: 0 });
  const onTriggerRef = useRef(onTrigger);
  onTriggerRef.current = onTrigger;

  return useCallback(() => {
    const now = Date.now();
    if (now - tapRef.current.lastTime > TAP_WINDOW_MS) {
      tapRef.current.count = 1;
    } else {
      tapRef.current.count += 1;
    }
    tapRef.current.lastTime = now;

    if (tapRef.current.count >= TAPS_TO_TRIGGER) {
      tapRef.current = { count: 0, lastTime: 0 };
      onTriggerRef.current();
    }
  }, []);
}
