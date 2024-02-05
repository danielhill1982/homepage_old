<template>
  <div class="relative overflow-hidden bg-silver dark:bg-carbon" id="content">
    <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2 particle-container">
      <div class="bg-gradient-to-r from-azuro to-silver blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-carbon dark:to-purple"></div>
      <div class="bg-gradient-to-tl from-azuro via-silver to-purple blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-purple dark:via-carbon dark:to-azuro"></div>
    </div>
    <div class="max-w-[85rem] mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-16 relative z-10" id="sliding">
      <div class="max-w-2xl text-center mx-auto">
        <div class="my-5 max-w-2xl">
          <h1 class="block font-bold text-carbon text-4xl sm:text-4xl md:text-5xl lg:text-6xl dark:text-silver">
            <span class="blurry">Daniel</span> <span class="blurry">Hill</span> <span class="blurry">Development</span>
          </h1>
        </div>
        <p class="one inline-block text-lg font-bold bg-clip-text bg-gradient-to-l from-carbon to-purple text-transparent dark:from-silver dark:to-azuro">Das ist eine visuelle Plattform, mit Informationen zu dieser Website, zu meiner Person, Veröffentlichungen themennaher Artikel und Tribute.</p>
        <div class="mt-5 max-w-3xl">
          <p class="two text-lg font-bold bg-clip-text bg-gradient-to-l from-carbon to-purple text-transparent dark:from-silver dark:to-azuro">Meine Designprodukte sind ausnahmslos minimalistisch und fokussiert auf sehr gute technische Umsetzung. Schnell, stabil und übersichtlich.</p>
        </div>
        <div class="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center" id="revealing">
          <NuxtLink to="/starting/">
            <p class="inline-flex justify-center items-center gap-x-3 text-center duration-500 bg-purple hover:bg-azuro border border-transparent text-silver text-sm font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-azuro focus:ring-offset-2 focus:ring-offset-silver transition py-3 px-4 dark:focus:ring-offset-carbon">Weiter</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

onMounted(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerEffect({
        name: "reveal",
        effect: (targets, config) => {
            return gsap.fromTo(targets, { x: config.x, y: config.y, autoAlpha: 0 }, { x: 0, y: 0, autoAlpha: 1 })
        },
        defaults: { x: 0, y: 0 },
        extendTimeline: true,
    });

    gsap.from("p.one", { duration: 4, text: "" }, 1);
    gsap.from("p.two", { duration: 5, text: "" }, 5);

    gsap.to("#sliding", { duration: 0.6, y: -25, ease: "back"}, 12);


    const tl = gsap.timeline();

    tl.reveal("#revealing", { y: 200 }, 9);
    tl.staggerFromTo("h1 span.blurry", 1.5, { filter: "blur(1.5rem)", opacity: 0 }, { filter: "blur(0rem)", opacity: 1 }, 0.5, 10);
});

  useHead({

    title: 'Daniel Hill Development'

  })

</script>