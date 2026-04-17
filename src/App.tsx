import { useState } from "react";

function App() {
  const [count, setCount] = useState(100);

  const sum = () => setCount((c) => c + 5);
  const sub = () => setCount((c) => c - 5);
  const mult = () => setCount((c) => c * 5);
  const divide = () => setCount((c) => c / 5);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-700 via-purple-600 to-pink-500 p-6">
      <div className="w-full max-w-sm bg-white/6 rounded-lg p-6 shadow-lg text-center">
        <div className="mb-3">
          <div
            className={`text-5xl font-extrabold tracking-tight transition-colors ${
              count < 0 ? "text-red-300" : "text-white"
            }`}
            aria-live="polite"
          >
            {count.toFixed(2)}
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <button
            onClick={sum}
            className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-4 rounded-md transition"
            title="+5"
          >
            +5
          </button>

          <button
            onClick={sub}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-md transition"
            title="-5"
          >
            -5
          </button>

          <button
            onClick={mult}
            className="bg-rose-500 hover:bg-rose-400 text-white font-medium py-2 px-4 rounded-md transition"
            title="*5"
          >
            *5
          </button>

          <button
            onClick={divide}
            className="bg-emerald-500 hover:bg-emerald-400 text-white font-medium py-2 px-4 rounded-md transition"
            title="/5"
          >
            /5
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
