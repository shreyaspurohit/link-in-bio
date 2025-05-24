'use client'

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import type { Container } from "@tsparticles/engine";
import { useState } from "react";
import { useEffect } from "react";
import { particlesOption } from "../../particles-config";

export default function ParticlesComponent() {
    const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesOption}
        particlesLoaded={particlesLoaded}
      />
    );
  }

  return <></>;
}