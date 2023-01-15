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
<div class="text-2xl text-white mt-6">
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
[日本語]

こんにちは、私の名前はクリスです。今日はDrupalDEN岩国でスペシャルトークをすることになり、光栄に思っています。
今日は英語で技術的な内容を発表した方がやりやすいのですが、それでも後で日本語でお話しして、ご意見をいただくのが楽しみです。

[英語]

Good afternoon, my name is Chris,
and I am honored to be here to give a special talk today at the DrupalDEN Iwakuni. 

Our university, OIST, built a Drupal 7 site in 2011, which was the first year of its release. 

Drupal 7 has had the longest lifespan among all Drupal versions and brought significant changes to the platform. 
One of these changes was the integration of CCK as the Content Type entity fields, brought Views to the core. 
Additionally, ImageCache was transformed into Image Style.

Last year, we underwent a two-year journey to rebuild and modernize the website using Drupal 9.

In the first part of my talk, I will discuss the development and project management process we went through during the website rebuild. 

In the second part of my talk, 
I will delve deeper into the challenges we faced when localizing the website for our bilingual English and Japanese audience. 
I will share the issues we encountered beyond just translation, 
and how we addressed them to provide the best user experience for our users.
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
  1. <span class="text-sm text-gray-400">Okinawa Institute of Science and Technology</span>
  1. <span class="text-sm text-gray-400">沖縄科学技術大学院大学</span>
  </div>
  <div class="mt-4">

  1. Designer, Developer, former DUGTW leader
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
First, a little bit about myself:

I am a Drupal developer with 14 years of experience in Drupal development. 

I have extensive experience in web design and development in Traditional Chinese, Japanese, and English. 

I am also a member of the Drupal community and a former group leader in Taiwan. 

Outside of Drupal, I am also interested in coffee, Germany, and cats and welcome any conversations about those topics as well.

<b>Next slides >>></b>
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
Before jumping the the topic.

Please note that any mention of vendors or products in this talk is not an endorsement.

<b>Next slides >>></b>
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
image: /images/farnsworth_house_xmas.jpg
---

<div class="hidden">

# Devil is in the details
</div>

<div class="absolute top-10">
  <span class="font-700">
    Farnworth House, <i>Mies van der Rohe</i>
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div v-click-hide class="absolute top-0 w-full">
    <h1><span class="text-sky-300">悪魔</span>は細部に宿る</h1>
    <p>
      <span class="text-sky-300">Devil</span> is in the details
    </p>
  </div>
  <div v-after class="absolute top-0 w-full">
    <h1><span class="text-yellow-300">神</span>は細部に宿る</h1>
    <p>
      Der liebe <span class="text-yellow-300">Gott</span> steckt im detail. / German ドイツ 
    </p>
  </div>
</div>

<!-- 
At the end, I want share a sentence with you.

We hear people say "Devil is in the details".
It means the difficulties or troubles is not revealed until you look close to the details.

The origin of the sentence is somehow opposite.
<b>CLICK!</b>

> 神は細部に宿る

It is from a Germany architecture, Mies van der Rohe, 

> "Der liebe Gott steckt im detail."

No matter it is Devil or God, the sentence has one thing in common.
The most important things are in the detail.

- When we see a new website is complete, people cheering and feels satisfied.
- When the visitor find good experience using the website in their native tounge intuitively.

It is all because the developer, designer worked on every details to bring the best UX to our user.

Lets to look closer, and take the challenge, deal with the devil, we will find the glorious miracle in the end.

<b>Next slide >>>>></b>
-->

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
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" href="https://iwakuni.amou.ro">https://iwakuni.amou.ro</a>
  </h2>
</div>

<!--
Thank you, I'm Chris, 
I wish you a good afternoon today in the following sessions.

ご清聴ありがとうございました。
-->
