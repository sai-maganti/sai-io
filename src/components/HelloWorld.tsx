/**
 * A miniature IDE-style code window showing the "Hello, World" that started
 * it all. Syntax colors are the same VS Code Dark+ tokens used by the
 * .text-gradient flourish, so the whole site speaks one color language.
 */

const t = {
  keyword: "text-[#569cd6]", // public, class, static, void
  type: "text-[#4ec9b0]", // HelloWorld, String, System
  method: "text-[#dcdcaa]", // main, println
  variable: "text-[#9cdcfe]", // args, out
  string: "text-[#ce9178]", // "Hello, World"
  comment: "text-[#6a9955]", // the punchline
  plain: "text-zinc-300", // braces, dots, semicolons
};

function LineNo({ n }: { n: number }) {
  return (
    <span className="mr-5 inline-block w-4 select-none text-right text-zinc-600">
      {n}
    </span>
  );
}

export default function HelloWorld() {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0b0b0d]">
      {/* title bar */}
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-zinc-500">
          HelloWorld.java
        </span>
      </div>

      {/* code */}
      <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-7">
        <code className={t.plain}>
          <div>
            <LineNo n={1} />
            <span className={t.keyword}>public class</span>{" "}
            <span className={t.type}>HelloWorld</span> {"{"}
          </div>
          <div>
            <LineNo n={2} />
            {"  "}
            <span className={t.keyword}>public static void</span>{" "}
            <span className={t.method}>main</span>(
            <span className={t.type}>String</span>[]{" "}
            <span className={t.variable}>args</span>) {"{"}
          </div>
          <div>
            <LineNo n={3} />
            {"    "}
            <span className={t.type}>System</span>.
            <span className={t.variable}>out</span>.
            <span className={t.method}>println</span>(
            <span className={t.string}>&quot;Hello, World&quot;</span>);
          </div>
          <div>
            <LineNo n={4} />
            {"    "}
            <span className={t.comment}>
              {"// Yup, that's all it took"}
            </span>
          </div>
          <div>
            <LineNo n={5} />
            {"  "}
            {"}"}
          </div>
          <div>
            <LineNo n={6} />
            {"}"}
          </div>
        </code>
      </pre>
    </div>
  );
}
