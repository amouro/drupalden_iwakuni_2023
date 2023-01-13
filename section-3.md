---
layout: intro-image
image: /images/unit_yamamoto.jpg
---

# Diversity

<!--
OIST is a unique graduate university in Japan. We have more than 50% international employees and students.

This is our Cell Signal Unit, with the leading faculty, fellow researcher and students.
From one photo we can see how diverse we are.

Therefore English and Japanese are equaly important in OIST.
Most of content on our website are translated into both languages. Including the offical website and internal sites.

During the project, we have dealt many translation issues.
In the second part of this talk, I'd like to focus on a few of them for our Japanese and APAC region attendees.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/dictionary-pisit-heng.jpg
---

<div class="hidden">

# ===== Important Translation Issues =====
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute top-10">
  <h1>Translation in Drupal</h1>
  <p>Localizeing User Experiences</p>
</div>

<!--
background image: Photo by Pisit Heng on Unsplash
https://unsplash.com/photos/FQvadXmA524
-->

<!--
Drupal has a well defined translation system in core.
Depends on your experience and role, there is always a way for you to make translations.

<b>Next slide >>>>></b>
-->

---

# Translate with i18n

Content translation / Field translation

<img class="w-2/3" src="/images/2022-08-22-23-02-48.png" />

User Interface translation in Drupal
<!-- Configuration -->

![](/images/2022-08-22-22-58-40.png)

<!--
As a sitebuilder.

We can translated the node with field translation enabled.

And we can translate many strings appear in the UI.

<b>Next slide >>>>></b>
-->
---

# Translate with i18n

Translation in Twig

```twig
{# Test trans filter. #}
{{ 'Hello Earth.'|trans }}

{# Test trans tag with text content. #}
{% set body_text %}
  {% trans %}Read more at: {{ url }}{% endtrans %}
{% endset %}

{% set count = comments|length %}
{% trans %}
  {{ count }} comment was deleted successfully.
{% plural count %}
  {{ count }} comments were deleted successfully.
{% endtrans %}
```

<!--
As a themer.
We use TWIG to mark translatable sentences with variable in it.

<b>Next slide >>>>></b>
-->
---

# Translate with i18n

Translate a sentence with t() function and variables that allow us to place the var in alternative position

```php
  $sentence_translation = 
  t(
    'No crop types available. <a href="@link">Add crop type</a>.', // Sentence
    [ '@link' => $this->urlGenerator->generateFromRoute('crop.type_add'),] // Dynamic value
  );
```

<!--
As a developer.

We can mark the translatable string with the t() function.

It is also capable to use dynamic variable in a sentence.

However, there is chance that we need a translation context, 
because a word could be verb or noun or has more than one meaning.

<b>Next slide >>>>></b>
-->
---

# Translate with i18n

And translate with context

<div class="grid grid-cols-2 mt-8 mb-4">
  <div class="flex flex-col items-center">
    <div class="font-bold">
      noun. as a section label: <span class="text-sky-500 font-normal">連絡先</span>
    </div>
    <img class="h-60 mt-4 shadow-xl p-4" src="/images/2022-09-21-20-08-11.png" />
  </div>
  <div class="flex flex-col items-center">
    <div class="font-bold">
      verb. as an action: <span class="text-sky-500 font-normal">コンタクト</span>
    </div>
    <img class="h-60 mt-4 shadow-md" src="/images/2022-09-21-18-28-37.png" />
  </div>
</div>

```php
  $labels = [
    'contact_action' => $this->t('Contact', [], ['context' => 'As an action']),
    'contact_section' => $this->t('Contact', [], ['context' => 'As a section label']),
  ];
```

<!-- 
For example: "Contact"
It will be translated into two different words in Japanese, as an action or as a section label.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/DCE2022_title.png
class: 'text-center'
---

<div class="hidden">
# More than Words
</div>



<div class="text-6xl font-700 text-gray-700 self-end mt-43 mb-8 font-serif">
  More than Words
</div>
<div class="text-4xl text-gray-700">
  Localizing the User Experience
</div>
<div class="text-md text-sky-700 flex justify-center">
  <span class="flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full mr-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
    <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path></svg>
  </span>
  <h2 class="font-normal leading-tight text-gray-700 dark:text-gray-100">
    Online slide: <a class=" text-sky-600 underline-dashed" target="_blank" href="https://prague.amou.ro">https://prague.amou.ro</a>
  </h2>
</div>


<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
There are more details about localizing user experience from my talk in the latest DrupalCon prague. 
If you're interesting and works on bilingual site often, it would be helpful for you.

But today, I want to address issues especially to the project and related to Japanese language.

Nest slide >>>>>
-->

---
layout: fact
---

<div class="hidden">
# JP/TW Date format using Gregorian Calendar
</div>

<h1 class="!text-7xl">
YYYY<span class="text-blue-400">年</span>mm<span class="text-blue-400">月</span>dd<span class="text-blue-400">日</span>
</h1>

🇯🇵 Japan 🇹🇼 Taiwan

<!--
In Japan as well as Taiwan, we are used to use this format for the date. 
Starting from Year to month and day.

<b>Next slide >>>>></b>
-->


---
layout: fact
---

# 9/12/2022

<span class="text-blue-400">Sep. 12</span> vs. <span class="text-teal-400">Dec. 9</span>

<!--
In other country we often see this date format.

Is it Sep. 12 or Dec. 9?

The answer could be both.

Because most of european country they read Dec. 9th, 
while in the States of America reads Sep. 12

In our institute, we have diverse members from the world, 
we have to find a common way to make sure our understanding of information are on the same page.

<b>Next slide >>>>></b>
-->

---
layout: fact
---

# YYYY-mm-dd

<span class="text-sky-500">ISO 8601 Formats</span>

<!--
Therefore, we use ISO 8601 format in English UI, as it is same order of format for Japanese UI.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/cjk-cover-left.png
---

<div class="hidden">

# ===== Issue in CJK: Typing =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1>CJK</h1>
  <p>Exclusive issue in CJK</p>
</div>

<!--
background image: Photo by Edho Pratama on Unsplash
https://unsplash.com/photos/T6fDN60bMWY
-->

<!--
Next issue, let's think about typing in Japanese, Chinese or Korean
This three languages are aka CJK

It is easy to type latin alphabets on keyboard, how does words being typed in CJK?

<b>Next slide >>>>></b>

-->

---

# CJK Paragraph

<hr />

<div class="grid grid-cols-3 gap-4 items-start text-sm mt-4">
<div>

## 我是 COVID-19 確診個案，應該要注意甚麼:

大部分的 COVID-19 感染者症狀輕微，休養後即可自行康復，為了將醫療資源留
給重症患者，請您先留在家中不要離開，等候公衛人員通知。

務必觀察自身症狀變化，若出現以下症狀時，請立即通知所在地政府衛生局或撥打
119 就醫，以 119 救護車為原則或指示之防疫計程車、同住親友接送或自行前往
(如步行、 自行駕/騎車)等方式為輔：喘、呼吸困難、持續胸痛、胸悶、意識不清、
皮膚或嘴唇或指甲床發青。
</div>
<div>

## 보건소에서 코로나19 양성 통보를 받았다면, 이렇게 하세요

검체채취일로부터 7일까지는 타인에게 바이러스를 전염시킬 위험이 있어 격리합니다.
오미크론 변이는 델타 변이보다 중증도가 낮으므로 증상이 없거나 경증인 경우 해열제, 감기약 복용 등 대증치료로 회복할 수 있습니다. [코로나19와 오미크론 변이] 바로가기

발열 등 증상으로 진료가 필요하면, 외래진료센터 대면진료 또는 전화 상담·처방이 가능합니다.
감염전파 방지를 위해 외출하지 말고 가급적 집에 머무르며, 화장실‧물건 등은 동거인과 따로 사용하고 자주 소독해야 합니다.[청소와소독] 바로가기

</div>
<div>

## 新型コロナウイルス感染症、症状がある方はためらわずに連絡を！

宿泊療養・自宅療養者アンケート調査によって、世代を問わず多くの方が、コロナ感染が判明する前から、
【発熱、頭痛、体のだるさ、せき、のどの痛み】といった自覚症状を訴えていたことがわかりました。

これらの症状を複数感じ、不安に思ったときは、どうぞためらわず、「かかりつけ医・身近な医療機関」や「発熱相談センター」へご連絡、ご相談ください。
</div>
</div>

<!--
These are pagragraphs in CJK about 

"What to do if you receive a positive COVID-19 notification from the public health center"

You can see the paragraph rarely has spaces in the sentence.
To index the content and make it easy to search, usually requires extra treats.

(We use kuromoji when we index the data in Elastice search to get the text indexed and split into words correctly.)

<b>Next slide >>>>></b>
-->
---

# Input method

<div class="grid grid-cols-4 gap-2 items-end">
    <div>
        <img src="/images/2022-09-09-14-35-49.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-36-35.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-44-38.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-46-18.png" />
    </div>
    <div>
        <img src="/images/2022-09-09-14-39-25.png" />
    </div>
    <div class="col-span-2">
        <img src="/images/2022-09-09-14-41-00.png" />
    </div>

</div>

<!--
How do we type, what's CJK keyboards look like?

From left to right, we see two Traditional Chinese keyboards.
And there are two Korean keyboard layout and two Japanese layout on in mobile with a "3 by 3" grid or a comapct keyboard layout which has the 50 essential sound characters.

For those who you don't know the languages, they looks like puzzles.

<b>Next slide >>>>></b>
-->

---

# Input method

| Keyword      | Segments      | Segments | Lang |
| ------------ | ------------- | -------- | ---- |
| Computer | | 8 | en |
| コンピューター (konpyūtā)| kon pyu- ta- | 10 | jp-ja |
| 電腦 (diànnǎo) | ㄉ一ㄢˋ ㄋㄠˇ | 7 | zh-hant |
| 计算机 (jìsuànjī)| jisuanji / jsj | 8 / 3 | zh-hans |

<!--
When typing the words, the key strokes are vary.

For the word "Computer" we could also tell it is different in Traditional Chinese use in Taiwan or Simplified Chinese in China.

When typing CJK text, a word is completed only when all the segments is typed.
Unlike typing English, there might be possible word combination before finishing the typing.

<b>Next slide >>>>></b>

-->
---

# Autocomplete search suggestion

What do you see?

<video controls>
  <source src="/images/SyI343.mp4" type="video/mp4" />
</video>

<!-- 
This is a short clip shows "how we type the search keyword in the autocompleted search box in Japanese"
What do you find in this clip?

- Input Chinese or Japanese Kanji requires one to four or even more phonetic elements
- There are different words in Kanji which has the same pronouciation

So, there is a problem here that is annoying to CJK users.
The search box triggers the search too early before the actual keyword is completed.

This can be improved by implementing special JavaScript event method.

<b>Next slide >>>>></b>
-->

---

# Autocomplete search suggestion

What is <span class="bg-green-300 p-1">improved</span>?

<video controls>
  <source src="/images/vjS5Xr.mp4" type="video/mp4" />
</video>
<!-- Configuration 
composition events https://github.com/oist/oist-www/issues94#issuecomment-1009660884
-->

<!--
In this clip, we can find

the english typing works normally, and the Japanese word for Corona, only query when the word is complete.

<b>Next slide >>>>></b>
-->

---

# CompositionEvent 

Implement `CompositionEvent` to avoid trigger search too early.

<div class="grid grid-cols-2 gap-2">
  <div>

```javascript {all|9-13|2-7}
  inputEle.on('input, compositinoend', function (event) {
    if (event.type == 'compositionend') {
      compositionActive = false; 
    }
    if (compositionActive) { return; }

    // Do autocomplete AJAX call
    
  }).on('compositionstart', function () {
    compositionActive = true;
  }).on('compositionupdate', function() {
    compositionActive = true;
  })
```
  </div>
  <div>
    <iframe class="col-span-2 bg-blue-600/30 p-4 w-full h-60" src="https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/compositionstart_event/_sample_.live_example.html" width="960" height="480"></iframe>
  </div>
  <div class="col-span-2">

* [MDN Web API](https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent)
* [Core #2823589: Improve IME handling on Autocomplete](https://www.drupal.org/project/drupal/issues/2823589)
</div>
</div>


<!-- 
  // Demo with NEKO ネコ

  // TODO find the trace of autocomplete js in Drupal 8 or even 7

  In Drupal, there are autocomplete field for tags or referencing entities.
  The core had the issue before until it has been fixed in 2016. Thanks to the Drupal contributors.

  Mainly it is the CompositionEvent helps us identify the special moment when the typing is finished.
  When we made this custom autocomplete search box, we have to implement the event, too

  1. First we detect the starting point of the CJK input method.
  2. And wait until the word is decided, as we see the compositionEnd event happens.
  3. And then we send our the AJAX request.

<b>Next slide >>>>></b>
-->
