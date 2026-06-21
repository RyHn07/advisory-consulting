import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per char
  startDelay?: number; // ms before typing starts
  caret?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onDone?: () => void;
  /** If true, the text retypes itself on an interval. */
  loop?: boolean;
  /** ms to pause between loop iterations (after fully typed). Default 10000. */
  loopDelay?: number;
  /** speed for the delete pass when looping. Default 30. */
  deleteSpeed?: number;
}

/** Types out `text` character-by-character. Renders a non-breaking space
 *  reservation so layout doesn't jump while typing. */
export function Typewriter({
  text,
  speed = 55,
  startDelay = 0,
  caret = true,
  className,
  style,
  onDone,
  loop = false,
  loopDelay = 10000,
  deleteSpeed = 30,
}: TypewriterProps) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    const timers: Array<ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>> = [];
    let cancelled = false;

    const type = () => {
      let i = 0;
      const id = setInterval(() => {
        if (cancelled) return;
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(id);
          setDone(true);
          onDone?.();
          if (loop) {
            const pause = setTimeout(erase, loopDelay);
            timers.push(pause);
          }
        }
      }, speed);
      timers.push(id);
    };

    const erase = () => {
      if (cancelled) return;
      setDone(false);
      let j = text.length;
      const id = setInterval(() => {
        if (cancelled) return;
        j -= 1;
        setOut(text.slice(0, Math.max(0, j)));
        if (j <= 0) {
          clearInterval(id);
          const next = setTimeout(type, 250);
          timers.push(next);
        }
      }, deleteSpeed);
      timers.push(id);
    };

    const startId = setTimeout(type, startDelay);
    timers.push(startId);

    return () => {
      cancelled = true;
      timers.forEach((t) => {
        clearTimeout(t as ReturnType<typeof setTimeout>);
        clearInterval(t as ReturnType<typeof setInterval>);
      });
    };
  }, [text, speed, startDelay, onDone, loop, loopDelay, deleteSpeed]);

  return (
    <span className={className} style={style}>
      {out}
      {caret && <span aria-hidden="true" className={`typewriter-caret${done ? " is-done" : ""}`} />}
    </span>
  );
}
