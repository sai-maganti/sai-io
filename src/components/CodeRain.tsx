/**
 * The faint upward-scrolling code behind the mystery-project tile ("Star
 * Wars crawl, but flat"). Pure CSS animation; content is duplicated once so
 * the -50% translateY loop is seamless. Decorative only, hence aria-hidden.
 */

const CODE = `const idea = brainstorm({ caffeine: "plenty", scope: "unknown" });

function cook(idea: Idea) {
  const ingredients = [curiosity, freeTime, colorfulLetters];
  preheat(brain);
  while (!idea.isReady()) {
    idea.simmer();
    idea.tasteTest(); // needs more features
    scope.creep(); // deal with that later
  }
  return somethingGreat; // eventually
}

// current status: preheating
// TODO: figure out what "it" actually is
// ETA: soon(ish)

export default NextProject; // name pending
`;

export default function CodeRain() {
  return (
    <div
      aria-hidden
      className="code-rain pointer-events-none absolute inset-0 select-none overflow-hidden"
    >
      <pre className="code-rain-track px-6 pt-2 font-mono text-[11px] leading-6 text-zinc-200">
        {CODE + "\n" + CODE}
      </pre>
    </div>
  );
}
