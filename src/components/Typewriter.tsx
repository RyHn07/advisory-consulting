import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number; // ms per char
  startDelay?: number; // ms before typing starts
  caret?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onDone?: () => void;
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
}: TypewriterProps) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    let i = 0;
    let typingId: ReturnType<typeof setInterval> | null = null;
    const startId = setTimeout(() => {
      typingId = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) {
          if (typingId) clearInterval(typingId);
          setDone(true);
          onDone?.();
        }
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(startId);
      if (typingId) clearInterval(typingId);
    };
  }, [text, speed, startDelay, onDone]);

  return (
    <span className={className} style={style}>
      {out}
      {caret && (
        <span
          aria-hidden="true"
          className={`typewriter-caret${done ? " is-done" : ""}`}
        />
      )}
    </span>
  );
}