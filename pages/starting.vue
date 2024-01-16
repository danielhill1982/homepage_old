<template>
<div class="relative overflow-hidden bg-silver dark:bg-carbon" id="content">
    <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2 particle-container">
      <div class="bg-gradient-to-r from-azuro to-silver blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-carbon dark:to-purple"></div>
      <div class="bg-gradient-to-tl from-azuro via-silver to-purple blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-purple dark:via-carbon dark:to-azuro"></div>
    </div>
      <div class="text-left py-10 px-4 sm:px-6 lg:px-8 sm:flex relative z-10 max-w-5xl mx-auto">
        <div class="sm:w-2/3 mb-20 sm:mr-5 sm:pr-5">
          <h1 class="text-4xl font-bold pb-9 mb-6 text-carbon dark:text-silver">Willkommen</h1>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Hallo,</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">ich bin Mediendesigner im Bereich Nonprint und suche Projekte, um meine umfangreichen Kenntnisse mit langer Erfahrung seit 1999 in Webdesign erfolgreich umzusetzen.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Ich möchte an Soloprojekten oder als Berater mit Schwerpunkten Logodesign, Corporate Design, Informationsdesign, Redesign, Animation, Illustration, CMS, SEO, Responsive Design und UI/UX Design-Konzepten, beziehungsweise Frontenddesign mit Programmierung, arbeiten.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Dies ist meine Homepage. Ich hatte seit dem Jahre 1999 schon mehrere private Websites veröffentlicht. Jetzt beschränkt es sich auf diese Info-Website.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Diese Seite ist entworfen, gestaltet und programmiert mithilfe von Open-Source-Software auf einem Windows-Computer in Europa und Deutschland.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Programmiert mit <a href="https://code.visualstudio.com/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Visual Studio Code</a> unter <a href="https://www.microsoft.com/de-de/windows/windows-11" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Windows 11 Professionel</a> auf einem Gaming-PC. Ich benutze hier das CSS-Framework <a href="https://tailwindcss.com/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Tailwindcss</a> mit <a href="https://preline.co/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">PrelineUI</a> in <a href="https://nuxt.com/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Nuxt</a> und <a href="https://nodejs.org/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Node.js</a>, einer plattformübergreifenden Open-Source-JavaScript-Laufzeitumgebung.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Das Design und der Code dieser Website stehen allerdings nicht zum Verkauf oder zur Wiederverwendung zur Verfügung.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Für Kommentare oder Fragen senden Sie mir einfach eine <a href="mailto:danielhill1982@icloud.com" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">E-Mail</a>. Alle öffentlichen Online-Profile von mir finden Sie in meinem Steckbrief auf dieser Seite.</p>
          <p class="text-carbon dark:text-silver mb-16 font-bold">Ich freue mich über Ihre Kommentare, Kritik oder Fragen.</p>
          <p class="text-carbon dark:text-silver mb-3 font-bold">Freundliche Grüße,<br>Daniel Hill</p>
        </div>
        <Steckbrief />
      </div>
    </div>
</template>

<script setup lang="ts">

  useHead({

    title: 'Starting'

  })

</script>