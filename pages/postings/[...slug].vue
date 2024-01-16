<template>
    <main class="relative overflow-hidden" id="content">
      <div aria-hidden="true" class="flex absolute -top-96 left-1/2 transform -translate-x-1/2 particle-container">
        <div class="bg-gradient-to-r from-azuro to-silver blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-carbon dark:to-purple"></div>
        <div class="bg-gradient-to-tl from-azuro via-silver to-purple blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-purple dark:via-carbon dark:to-azuro"></div>
      </div>
      <div class="text-left py-10 px-4 sm:px-6 lg:px-8 sm:flex relative z-10 max-w-5xl mx-auto">
        <div class="sm:w-2/3 mb-20 sm:mr-5 sm:pr-5">
          <h1 class="text-4xl font-bold mb-6 text-carbon dark:text-silver">Posts</h1>

          <ContentDoc />

        </div>
      <Steckbrief />
    </div>
  </main>
</template>