"use client";

import React, { createContext, useContext, useState, useRef, useEffect, useCallback } from "react";

export interface HouseTrack {
  id: string;
  title: string;
  subtitle: string;
  bpm: number;
  chords: number[][];
  bassRoot: number[];
}

export const HOUSE_TRACKS: HouseTrack[] = [
  {
    id: "sunlit",
    title: "SUNLIT HOUSE",
    subtitle: "DEEP GROOVE · 122 BPM",
    bpm: 122,
    // Fm9 -> Dbmaj7 -> Bbm7 -> Cm7
    chords: [
      [174.61, 207.65, 261.63, 311.13, 392.0],
      [138.59, 174.61, 207.65, 261.63],
      [116.54, 138.59, 174.61, 207.65],
      [130.81, 155.56, 196.0, 233.08],
    ],
    bassRoot: [87.31, 69.3, 58.27, 65.41],
  },
  {
    id: "french",
    title: "FILTER DISCO",
    subtitle: "FRENCH HOUSE · 124 BPM",
    bpm: 124,
    // Am9 -> Fmaj7 -> Dm7 -> Em7
    chords: [
      [220.0, 261.63, 329.63, 392.0, 493.88],
      [174.61, 220.0, 261.63, 329.63],
      [146.83, 174.61, 220.0, 261.63],
      [164.81, 196.0, 246.94, 293.66],
    ],
    bassRoot: [110.0, 87.31, 73.42, 82.41],
  },
  {
    id: "midnight",
    title: "CODE NIGHT",
    subtitle: "LO-FI HOUSE · 118 BPM",
    bpm: 118,
    // Ebm9 -> Bmaj7 -> Abm7 -> Bbm7
    chords: [
      [155.56, 185.0, 233.08, 277.18, 349.23],
      [123.47, 155.56, 185.0, 233.08],
      [103.83, 123.47, 155.56, 185.0],
      [116.54, 138.59, 174.61, 207.65],
    ],
    bassRoot: [77.78, 61.74, 51.91, 58.27],
  },
];

interface HouseAudioContextValue {
  isPlaying: boolean;
  trackIndex: number;
  currentTrack: HouseTrack;
  currentBeat: number;
  togglePlay: () => void;
  nextTrack: () => void;
  setTrackIndex: (idx: number) => void;
}

const HouseAudioContext = createContext<HouseAudioContextValue | null>(null);

export function HouseAudioProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentBeat, setCurrentBeat] = useState(0);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const noiseBufferRef = useRef<AudioBuffer | null>(null);
  const schedulerTimerRef = useRef<number | null>(null);
  const nextNoteTimeRef = useRef<number>(0);
  const stepRef = useRef<number>(0);
  const barRef = useRef<number>(0);
  const trackIndexRef = useRef<number>(trackIndex);

  useEffect(() => {
    trackIndexRef.current = trackIndex;
  }, [trackIndex]);

  const initAudio = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      const master = ctx.createGain();
      master.gain.value = 0.42;

      // Master compressor for warm house glue
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.knee.value = 18;
      comp.ratio.value = 4;
      comp.attack.value = 0.005;
      comp.release.value = 0.15;

      master.connect(comp);
      comp.connect(ctx.destination);

      // Generate reusable noise buffer for hats & clap
      const bufferSize = ctx.sampleRate * 0.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      audioCtxRef.current = ctx;
      masterGainRef.current = master;
      noiseBufferRef.current = buffer;
    }

    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  }, []);

  const triggerKick = (ctx: AudioContext, dest: AudioNode, time: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(145, time);
    osc.frequency.exponentialRampToValueAtTime(46, time + 0.09);

    gain.gain.setValueAtTime(0.85, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + 0.3);
  };

  const triggerHat = (ctx: AudioContext, dest: AudioNode, noise: AudioBuffer, time: number, open: boolean) => {
    const src = ctx.createBufferSource();
    src.buffer = noise;

    const filter = ctx.createBiquadFilter();
    filter.type = "highpass";
    filter.frequency.setValueAtTime(open ? 6500 : 8500, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(open ? 0.18 : 0.07, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + (open ? 0.14 : 0.045));

    src.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    src.start(time);
    src.stop(time + (open ? 0.16 : 0.06));
  };

  const triggerClap = (ctx: AudioContext, dest: AudioNode, noise: AudioBuffer, time: number) => {
    const src = ctx.createBufferSource();
    src.buffer = noise;

    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(1350, time);
    filter.Q.setValueAtTime(1.8, time);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.28, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.14);

    src.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    src.start(time);
    src.stop(time + 0.16);
  };

  const triggerBass = (ctx: AudioContext, dest: AudioNode, freq: number, time: number, duration: number) => {
    const osc = ctx.createOscillator();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(freq, time);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(420, time);
    filter.frequency.exponentialRampToValueAtTime(140, time + duration);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.001, time);
    gain.gain.linearRampToValueAtTime(0.24, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  };

  const triggerChordStab = (ctx: AudioContext, dest: AudioNode, notes: number[], time: number, duration: number) => {
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1900, time);
    filter.frequency.exponentialRampToValueAtTime(620, time + duration);

    const masterChordGain = ctx.createGain();
    masterChordGain.gain.setValueAtTime(0.001, time);
    masterChordGain.gain.linearRampToValueAtTime(0.14, time + 0.025);
    masterChordGain.gain.exponentialRampToValueAtTime(0.001, time + duration);

    filter.connect(masterChordGain);
    masterChordGain.connect(dest);

    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, time);
      osc.detune.setValueAtTime((i - 1.5) * 4, time);
      osc.connect(filter);
      osc.start(time);
      osc.stop(time + duration + 0.03);
    });
  };

  const scheduleStep = useCallback((step: number, bar: number, time: number) => {
    const ctx = audioCtxRef.current;
    const dest = masterGainRef.current;
    const noise = noiseBufferRef.current;
    if (!ctx || !dest || !noise) return;

    const track = HOUSE_TRACKS[trackIndexRef.current];
    const chordIdx = bar % track.chords.length;
    const currentChord = track.chords[chordIdx];
    const rootFreq = track.bassRoot[chordIdx];

    // 4-on-the-floor kick on steps 0, 4, 8, 12
    if (step % 4 === 0) {
      triggerKick(ctx, dest, time);
      setCurrentBeat((step / 4) % 4);
    }

    // Crisp offbeat open hat on steps 2, 6, 10, 14
    if (step % 4 === 2) {
      triggerHat(ctx, dest, noise, time, true);
    } else if (step % 2 === 1) {
      triggerHat(ctx, dest, noise, time, false);
    }

    // Clap on 4 and 12
    if (step === 4 || step === 12) {
      triggerClap(ctx, dest, noise, time);
    }

    // House syncopated chord stabs (classic Chicago/French rhythm: steps 0, 3, 6, 10, 14)
    if (step === 0 || step === 6 || step === 10 || (bar % 2 === 1 && step === 14)) {
      triggerChordStab(ctx, dest, currentChord, time, step === 0 ? 0.36 : 0.24);
    }

    // Groovy walking octave bass pattern
    if (step === 2 || step === 6 || step === 8 || step === 10 || step === 14) {
      const freq = step === 8 ? rootFreq * 1.5 : step === 14 ? rootFreq * 2 : rootFreq;
      triggerBass(ctx, dest, freq, time, 0.2);
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      if (schedulerTimerRef.current !== null) {
        window.clearInterval(schedulerTimerRef.current);
        schedulerTimerRef.current = null;
      }
      return;
    }

    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    nextNoteTimeRef.current = ctx.currentTime + 0.04;

    const runScheduler = () => {
      if (!audioCtxRef.current) return;
      const track = HOUSE_TRACKS[trackIndexRef.current];
      const secondsPer16th = 60.0 / track.bpm / 4;

      while (nextNoteTimeRef.current < audioCtxRef.current.currentTime + 0.12) {
        scheduleStep(stepRef.current, barRef.current, nextNoteTimeRef.current);
        nextNoteTimeRef.current += secondsPer16th;
        stepRef.current = (stepRef.current + 1) % 16;
        if (stepRef.current === 0) {
          barRef.current += 1;
        }
      }
    };

    schedulerTimerRef.current = window.setInterval(runScheduler, 25);

    return () => {
      if (schedulerTimerRef.current !== null) {
        window.clearInterval(schedulerTimerRef.current);
        schedulerTimerRef.current = null;
      }
    };
  }, [isPlaying, initAudio, scheduleStep]);

  const togglePlay = () => {
    if (!isPlaying) {
      initAudio();
    }
    setIsPlaying((prev) => !prev);
  };

  const nextTrack = () => {
    setTrackIndex((prev) => (prev + 1) % HOUSE_TRACKS.length);
  };

  return (
    <HouseAudioContext.Provider
      value={{
        isPlaying,
        trackIndex,
        currentTrack: HOUSE_TRACKS[trackIndex],
        currentBeat,
        togglePlay,
        nextTrack,
        setTrackIndex,
      }}
    >
      {children}
    </HouseAudioContext.Provider>
  );
}

export function useHouseAudio(): HouseAudioContextValue {
  const ctx = useContext(HouseAudioContext);
  if (!ctx) {
    return {
      isPlaying: false,
      trackIndex: 0,
      currentTrack: HOUSE_TRACKS[0],
      currentBeat: 0,
      togglePlay: () => {},
      nextTrack: () => {},
      setTrackIndex: () => {},
    };
  }
  return ctx;
}
