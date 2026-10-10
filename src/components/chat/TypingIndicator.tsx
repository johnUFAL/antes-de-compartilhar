export default function TypingIndicator() {
  return (
    <div
      role="status"
      aria-label="Digitando..."
      className="flex w-16 items-center justify-center gap-1 self-start rounded-lg rounded-tl-none bg-white px-3 py-3 shadow"
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-2 w-2 animate-dot-bounce rounded-full bg-slate-500"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}
