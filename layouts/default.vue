<template>
    <header class="backdrop-blur-sm flex flex-wrap sm:justify-start sm:flex-nowrap mx-auto bg-silver/70 dark:bg-carbon/70 sticky top-0 z-50 border-b border-purple">
        <Hue />
        <nav class="max-w-[85rem] w-full mx-auto px-3 py-3 mt-6 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <div class="flex items-center justify-between">
                <a class="flex-none font-bold text-2xl transition-all duration-300 text-purple hover:text-carbon dark:hover:text-silver" href="/">dhill.dev</a>
                <div class="sm:hidden">
                    <button type="button" class="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-1 rounded-md border-2 font-medium bg-silver text-carbon shadow-sm align-middle focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-white focus:ring-azuro transition-all text-sm dark:bg-carbon dark:text-silver dark:hover:text-white dark:focus:ring-offset-silver" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                            <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h7.508a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.75.75v6.59l1.95-2.1a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 111.1-1.02l1.95 2.1V7.75A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75h4.562a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                        </svg>
         </button>
                </div>
            </div>
            <div id="navbar-collapse-with-animation" class="hs-collapse hidden sm:overflow-visible overflow-hidden transition-all duration-300 basis-full grow sm:block">
                <ul class="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                    <li class="flex-none font-bold text-azuro duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-azuro hover:before:w-full before:rounded-full">
                        <NuxtLink to="/starting/">starting</NuxtLink>
                    </li>
                    <li class="flex-none font-bold text-azuro duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-azuro hover:before:w-full before:rounded-full">
                        <NuxtLink to="/personal/">personal</NuxtLink>
                    </li>
                    <li class="flex-none font-bold text-azuro duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-azuro hover:before:w-full before:rounded-full">
                        <NuxtLink to="/postings/">postings</NuxtLink>
                    </li>
                    <li class="flex-none font-bold text-azuro duration-500 inline-block relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0 sm:before:h-1 before:duration-500 before:bg-azuro hover:before:w-full before:rounded-full">
                        <NuxtLink to="/tributes/">tributes</NuxtLink>
                    </li>
                    <li>
                        <Switch />
                    </li>
                </ul>
            </div>
        </nav>
        
    </header>


    <main>
        <slot></slot>
    </main>
    <footer class="bg-silver text-carbon dark:bg-carbon dark:text-silver text-center py-3 border-t border-purple">
        <div class="title max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-24">
            <p class="text-sm font-bold text-carbon dark:text-silver">© Copyright 2023 by Daniel Hill - <a href="/impressum/">Impressum</a></p>
        </div>
    </footer>
</template>

<script setup>

import { gsap } from 'gsap';

onMounted(() => {
    gsap.fromTo(".rainbow", {
        backgroundColor: function (index, target, targets) {
            return "hsl(" + ((index / targets.length) * 360) + ", 100%, 50%)";
        }
    },

        {
            backgroundColor: "hsl(-=360, +=0%, +=0%)",
            duration: 5,
            repeat: -1,
            ease: "none"
        });

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.querySelector('.particle-container').appendChild(particle);

        const size = Math.random() * 120 + 80;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        gsap.set(particle, {
            width: size,
            height: size,
            x: x,
            y: y,
            opacity: 0,
        });

        gsap.to(particle, {
            duration: Math.random() * 9 + 3,
            x: x + Math.random() * 50 - 25,
            y: y + Math.random() * 50 - 25,
            opacity: 1,
            scale: 0,
            ease: 'power2.out',
            onComplete: () => {
                particle.remove();
                createParticle();
            },
        });
    }

    for (let i = 0; i < 20; i++) {
        createParticle();
    }
}),

    useSeoMeta({
        ogType: 'website',
        ogTitle: 'Daniel Hill Development',
        ogDescription: 'Internetseite von Daniel Hill aus Sonneberg',
        ogUrl: 'dhill.dev',
        twitterCard: 'summary',
        twitterTitle: 'Daniel Hill Development',
        twitterDescription: 'Internetseite von Daniel Hill aus Sonneberg'
    }),

    useHead({
        htmlAttrs: {
            lang: 'de'
        },

        bodyAttrs: {
            class: 'antialiased bg-silver dark:bg-carbon'
        },

        meta: [
            { name: 'description', content: 'Internetseite von Daniel Hill aus Sonneberg' },
            { name: 'title', content: 'Daniel Hill Development' },
            { name: 'robots', content: 'nosnippet' }
        ]
    })

</script>
<style>
.fade-enter-active,
.fade-leave-active {
    transition: all 1s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    filter: blur(1.5rem);
    transform: translate(0, -25px);
    filter: grayscale(0);
}

.particle-container {
    position: absolute;
}

.particle {
    position: absolute;
    background-color: #b520ff;
    border-radius: 50%;
    transform-origin: center;
}

body {
    font-family: Comfortaa, sans-serif;
}
</style>