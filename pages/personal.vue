<template>
  <div class="relative overflow-hidden" id="content">
    <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2 particle-container">
      <div class="bg-gradient-to-r from-azuro to-silver blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-carbon dark:to-purple"></div>
      <div class="bg-gradient-to-tl from-azuro via-silver to-purple blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-purple dark:via-carbon dark:to-azuro"></div>
    </div>
    <div class="text-left py-10 px-4 sm:px-6 lg:px-8 sm:flex relative z-10 max-w-5xl mx-auto">
      <div class="sm:w-2/3 mb-20 sm:columns-2 sm:mr-5 sm:pr-5">
        <h1 class="text-4xl font-bold pb-9 mb-6 text-carbon dark:text-silver">Biographie</h1>
        <p class="mb-3 text-carbon dark:text-silver font-bold">Daniel ist 1982 in Suhl geboren. Er ist aufgewachsen, mit Wohnsitz in Altendambach und danach in Ehrenberg. Dies beinhaltete zehn Jahre Schule, mit einem Realschulabschluss 1999 in Thüringen, und einer Berufsausbildung in "Mediendesign" bis hin zum Jahre 2009. Daniel hat einen jüngeren Bruder und eine Nichte. Die Eltern stammen aus Altendambach und Bischofrod in Thüringen. Daniel Hill wird auch gerne "Schwuppi", "Gohang Nadamidai" und "Faultier Slothy" genannt.</p>
        <p class="mb-3 text-carbon dark:text-silver font-bold">Daniel ist 179 cm groß, hat dunkle Haare, grüne Augen, Tätowierungen und wiegt 87 Kilogramm. Zu seinen Freizeitaktivitäten zählen sportliche Aktivitäten wie "Schwimmen", "Mountainbike – Crosscountry Cycling" und "Badminton", aber auch "PC-Gaming" wobei meistens Auto-Motorsport gespielt wird. Aber auch Blockbuster wie "Witcher" und "Tomb Raider", sowie Shooter von "Destiny" bis "Wolfenstein".</p>
        <p class="mb-3 text-carbon dark:text-silver font-bold break-after-column">Musikalisch spielt er vorwiegend sehr gerne groovige elektronische Techno-Musik, oder aber hört klassische Retro-Songs, Chill-Out und ein wenig Heimatmusik. In seiner Jugend war er sehr viel mit Freunden auf Party unterwegs und feierte in Clubs innerhalb Deutschlands. Ist nach dieser Zeit aber ledig geworden und bis jetzt auch geblieben. Er hat keine Kinder. Seit 2010 lebt er in Sonneberg, nicht weit von seinen Heimatorten entfernt. Zu seiner Gesundheit kann man nicht viel sagen, es geht ihm gut, er hat z. B. zwei Jahre vegan gelebt und war Nichtraucher, obwohl es nicht immer einfach für ihn war.</p>
        <p class="mb-3 text-carbon dark:text-silver font-bold">Als gelernter Mediendesigner hat er sich auf Webdesign spezialisiert. Daniel hatte einige Jahre eine Website namens "Minimalistic Design" mittels "Content-Management-System" wie "<a href="https://de.wordpress.org/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Wordpress</a>" online verwaltet. Seine Designs sind ausnahmslos minimalistisch und fokussiert auf sehr gute technische Umsetzung. Schnell, stabil und übersichtlich.</p>
        <p class="mb-3 text-carbon dark:text-silver font-bold">Daniel verfügt über umfangreiche Kenntnisse in der Erstellung von Websites. Angefangen von "Hyper Text Markup Language" über "Cascading Style Sheets" und "Java-Script". Auch serverseitige Anwendungen wie "PHP" (Hypertext Preprocessor), "MySQL-Datenbank" und "Conten-Management-Systemen". Die Arbeit mit "Frontend-Frameworks" gehört ebenfalls dazu. Er achtet dabei darauf, dass seine Websites "responsive" sind, also angepasst an alle Plattformen wie Smartphones, Tablets und größeren Bildschirmen, sodass der Inhalt für alle einsehbar bleibt. Die Betriebssysteme "Windows" und "Mac OS" sowie "Linux" im Serverbereich zählen von Grund auf dazu und die "<a href="https://www.adobe.com/de/" class="text-azuro hover:text-purple dark:text-purple dark:hover:text-azuro font-bold duration-500">Adobe Creative Cloud</a>" auch.</p>
      </div>
      <Steckbrief />
    </div>
  </div>
</template>

<script setup lang="ts">

useHead({

  title: 'Personal'

})

</script>