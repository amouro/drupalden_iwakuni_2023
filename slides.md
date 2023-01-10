---
layout: intro-image
image: /images/DC-Iwakuni-Blue-full.png
# try also 'default' to start simple
theme: apple-basic
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
# css: unocss
fonts:
  sans: Montserrat
  serif: Bitter
---

<div class="hidden">
# Rebirth of OIST 10 years old website with Drupal 9
</div>

<div class="absolute bottom-4 text-sky-700">
  <span class="font-700">
    Chris Wu @amourow Jan, 2023
  </span>
</div>

<div class="text-6xl font-700 text-white self-end mt-32">
  Rebirth in Drupal 9
</div>
<div class="text-xl text-white mt-6">
  Relaunch OIST 10 yrs-old website
</div>
<div class="text-lg text-white">
  沖縄科学技術大学院大学で<br />10年間運用されていたサイトが<br />Drupal 9でリニューアル
</div>


<div class="abs-br mr-8 flex gap-2">
  <a href="https://github.com/amouro/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-90 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
Good afternoon, I hope you all have a good DrupalCon in Prague. In this session I'm going to talk about things around how to localize user experiences. 
Especially experience in CJK languages.

We have many tool to help with translations, but understand how to localize the user experience can make the website design better.
If you don't know CJK yet, lets embrace some culture shock; If you are or may working on websites with CJK, I hope this will be helpful.

I already regret to submit the proposal for a short session when I making the slide. There are so much to talk, let's start the journey.
-->

---

# Chris Wu

<div class="grid grid-cols-[1fr,2fr] grid-rows-2 gap-4 py-8">
  <div class="image rounded-full content-center flex flex-col">
    <img src="/images/chris_potrait.png" class="rounded-full overflow-hidden" />
  </div>
  <div class="intro flex flex-col items-start">
  <div>

  1. <span class="text-3xl">🇹🇼 🇯🇵</span>
  1. Senior Web Developer, OIST
  1. Designer, Developer, former DUGTW leader

  </div>
  <div class="mt-4">

  1. Keywords: <span class="text-3xl mt-4">☕️ 🇩🇪 🐈‍⬛</span>
  1. <a href="https://twitter.com/amourow" target="_blank" alt="GitHub"
      class="text-xl icon-btn mt-8 !border-none !hover:text-white bg-sky-600 text-white hover:bg-sky-600/80">
      <carbon-logo-twitter /> @amourow</a>
  </div>
  </div>
  <div class="pl-4">

  </div>
</div>
<!--
I'm a Taiwanese Drupal developer works in a international research institution in Japan. 
During my 14 years Drupal adventure (according to Drupal dot org), I designed and made websites in Traditional Chinese and Japanese and English.

I'm now working in a Japanese research institute which use English and Japanese as equaly important first language.
Our team always make sure the experience of both languages are well perceived. 

Next slides >>>

-->

---
layout: intro-image
image: /images/DC-Iwakuni-Blue-full.png
---

<div class="hidden">
# Disclaimer
</div>

<div class="text-2xl font-700 self-center">
  <div class="text-5xl font-700 text-white text-center my-10">
  Disclaimer
  </div>
  <div class="w-2/5 m-auto text-center px-8">
    <div class="-ml-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
    <blockquote class="text-md font-semibold text-white !border-0 !bg-transparent">  
        <p>Views expressed here are solely my own and not those of the university. No part of this presentation should be considered an endorsement.</p>
    </blockquote>
    <div class="flex flex-row justify-end -mr-10">
      <svg aria-hidden="true" class="w-10 h-10 text-sky-300 transform rotate-180" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/></svg>
    </div>
  </div>
</div>


<!--
Before jumping the the topic, please noted that there is no endorsement for vendors, if I mentioned any. 

Next slide >>>
-->

---
src: ./section-1.md
---
<!-- this page will be loaded from './section-1.md' -->
# 1. Goals & Plan
---
src: ./section-2.md
---
<!-- this page will be loaded from './section-2.md' -->
# 2. Migration, Dev, and Management

---
src: ./section-3.md
---
<!-- this page will be loaded from './section-3.md' -->
# 3. Important translation issues

---
src: ./section-4.md
---
<!-- this page will be loaded from './section-4.md' -->
# 4. Important translation issues - Sorting

---
layout: intro-image
image: /images/DC-Iwakuni-Blue-footer.png
---

<div class="text-gray-700 pt-12">

# Recap

* Rebirth of OIST official website
* How we manage the project and develop the new site
* Language matters in OIST
* How to bring the better UX to users regarding the language

<div class="pt-12">

Online slide: https://iwakuni.amou.ro
</div>
</div>

---
layout: intro-image
image: /images/farnsworth_house_xmas.jpg
---

<div class="hidden">
# Recap
</div>

<div class="absolute top-10">
  <span class="font-700">
    Farnworth House, <i>Mies van der Rohe</i>
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div v-click-hide class="absolute top-0 w-full">
    <h1><span class="text-yellow-300">神</span>は細部に宿る</h1>
    <p>
      Der liebe <span class="text-yellow-300">Gott</span> steckt im detail. / German ドイツ 
    </p>
  </div>
  <div v-after class="absolute top-0 w-full">
    <h1><span class="text-sky-300">悪魔</span>は細部に宿る</h1>
    <p>
      <span class="text-sky-300">Devil</span> is in the details
    </p>
  </div>
</div>

<!-- * Der liebe Gott steckt im detail. - Mies van der Rohe
* 神は細部に宿る
* Devial is in the details

<div class="pt-12">
Pete Sieger
Online slide: https://iwakuni.amou.ro
</div>
</div> -->

---
layout: intro-image
image: /images/DC-Iwakuni-Blue-accent-footer.png
class: text-center
---
<div class="hidden">
# Thank you
</div>

<div class="text-5xl font-700 text-sky-600 self-end mb-8 font-serif">
  ご清聴ありがとうございました
</div>

<div class="text-4xl text-sky-700">
  Thank you for your attention
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Online slide: <span class="underline underline-2 underline-dashed">https://iwakuni.amou.ro</span></h2>
</div>