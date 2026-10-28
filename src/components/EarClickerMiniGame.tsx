import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Shield, Swords, Zap, RotateCcw } from 'lucide-react';

export const EarClickerMiniGame: React.FC = () => {
  const [ears, setEars] = useState(0);
  const [clickPower, setClickPower] = useState(1);
  const [autoDps, setAutoDps] = useState(0);
  const [archers, setArchers] = useState(0);
  const [knights, setKnights] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [floatingTexts, setFloatingTexts] = useState<{ id: number; x: number; y: number; text: string }[]>([]);
  const audioCtxRef = useRef<AudioContext | null>(null);

  const powerCost = Math.floor(15 * Math.pow(1.35, clickPower - 1));
  const archerCost = Math.floor(25 * Math.pow(1.2, archers));
  const knightCost = Math.floor(120 * Math.pow(1.25, knights));

  const playSound = (type: 'click' | 'upgrade') => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'click') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(360, now);
        osc.frequency.exponentialRampToValueAtTime(160, now + 0.07);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);
        osc.start(now);
        osc.stop(now + 0.07);
      } else {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, now);
        osc.frequency.setValueAtTime(660, now + 0.08);
        osc.frequency.setValueAtTime(880, now + 0.16);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
        osc.start(now);
        osc.stop(now + 0.22);
      }
    } catch {
      // Audio fallback
    }
  };

  useEffect(() => {
    const dps = archers * 1 + knights * 8;
    setAutoDps(dps);
    if (dps <= 0) return;

    const interval = setInterval(() => {
      setEars((prev) => prev + dps);
    }, 1000);

    return () => clearInterval(interval);
  }, [archers, knights]);

  const handleClickTarget = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setEars((prev) => prev + clickPower);
    playSound('click');

    const id = Date.now() + Math.random();
    setFloatingTexts((prev) => [...prev.slice(-5), { id, x, y, text: `+${clickPower} 👂` }]);

    setTimeout(() => {
      setFloatingTexts((prev) => prev.filter((item) => item.id !== id));
    }, 700);
  };

  const buyPower = () => {
    if (ears >= powerCost) {
      setEars((prev) => prev - powerCost);
      setClickPower((prev) => prev + 1);
      playSound('upgrade');
    }
  };

  const buyArcher = () => {
    if (ears >= archerCost) {
      setEars((prev) => prev - archerCost);
      setArchers((prev) => prev + 1);
      playSound('upgrade');
    }
  };

  const buyKnight = () => {
    if (ears >= knightCost) {
      setEars((prev) => prev - knightCost);
      setKnights((prev) => prev + 1);
      playSound('upgrade');
    }
  };

  return (
    <div className="bg-[#0a0c24]/90 border border-violet-500/25 rounded-3xl p-5 text-slate-200">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">👂</span>
          <div>
            <h4 className="font-heading font-bold text-white text-sm sm:text-base">
              Ear Clicker — Mini Demo Jugable
            </h4>
            <span className="text-[11px] text-violet-300 font-light">
              Mecánica incremental original programada por Gonzalo
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
            title={soundEnabled ? 'Silenciar' : 'Activar sonido'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-violet-400" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              setEars(0);
              setClickPower(1);
              setArchers(0);
              setKnights(0);
            }}
            className="p-1.5 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
            title="Reiniciar"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-white/[0.03] border border-white/5 rounded-2xl mb-4 text-center font-mono">
        <div>
          <span className="text-[10px] text-slate-400 block uppercase">Orejas</span>
          <span className="font-bold text-lg text-violet-300 tabular-nums">
            {ears.toLocaleString()}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block uppercase">Por Click</span>
          <span className="font-bold text-lg text-white tabular-nums">
            +{clickPower}
          </span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block uppercase">DPS</span>
          <span className="font-bold text-lg text-indigo-300 tabular-nums">
            +{autoDps}/s
          </span>
        </div>
      </div>

      {/* Play Area & Shop */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
        {/* Click Arena */}
        <div className="sm:col-span-7 relative h-48 rounded-2xl bg-gradient-to-b from-[#111438] to-[#070817] border border-violet-500/20 flex flex-col items-center justify-center select-none overflow-hidden">
          <button
            onClick={handleClickTarget}
            className="relative group focus:outline-none transition-transform active:scale-95 cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full bg-violet-600/20 border-2 border-violet-400/50 group-hover:border-violet-300 flex items-center justify-center text-4xl shadow-xl shadow-violet-600/30 group-hover:scale-105 transition-all">
              🛡️
            </div>
            <div className="text-center mt-2">
              <span className="text-[11px] font-bold text-violet-200 bg-black/60 px-3 py-1 rounded-full border border-violet-500/30">
                ¡Haz Click para Atacar!
              </span>
            </div>
          </button>

          {floatingTexts.map((item) => (
            <span
              key={item.id}
              style={{ left: `${item.x}px`, top: `${item.y}px` }}
              className="absolute pointer-events-none text-xs font-bold text-violet-300 font-mono animate-bounce"
            >
              {item.text}
            </span>
          ))}
        </div>

        {/* Shop */}
        <div className="sm:col-span-5 flex flex-col gap-2">
          <button
            onClick={buyPower}
            disabled={ears < powerCost}
            className={`flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all ${
              ears >= powerCost
                ? 'bg-violet-950/40 hover:bg-violet-900/40 border-violet-500/40 text-white cursor-pointer'
                : 'bg-white/[0.02] border-white/5 text-slate-500 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-violet-400" />
              <div>
                <span className="text-xs font-bold block">+1 Poder Click</span>
                <span className="text-[10px] text-slate-400">Nivel {clickPower}</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-violet-300">{powerCost} 👂</span>
          </button>

          <button
            onClick={buyArcher}
            disabled={ears < archerCost}
            className={`flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all ${
              ears >= archerCost
                ? 'bg-indigo-950/40 hover:bg-indigo-900/40 border-indigo-500/40 text-white cursor-pointer'
                : 'bg-white/[0.02] border-white/5 text-slate-500 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-2">
              <Swords className="w-4 h-4 text-indigo-400" />
              <div>
                <span className="text-xs font-bold block">Arquero (+1/s)</span>
                <span className="text-[10px] text-slate-400">Activos: {archers}</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-indigo-300">{archerCost} 👂</span>
          </button>

          <button
            onClick={buyKnight}
            disabled={ears < knightCost}
            className={`flex items-center justify-between p-2.5 rounded-2xl border text-left transition-all ${
              ears >= knightCost
                ? 'bg-blue-950/40 hover:bg-blue-900/40 border-blue-500/40 text-white cursor-pointer'
                : 'bg-white/[0.02] border-white/5 text-slate-500 cursor-not-allowed'
            }`}
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <div>
                <span className="text-xs font-bold block">Caballero (+8/s)</span>
                <span className="text-[10px] text-slate-400">Activos: {knights}</span>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-blue-300">{knightCost} 👂</span>
          </button>
        </div>
      </div>
    </div>
  );
};
