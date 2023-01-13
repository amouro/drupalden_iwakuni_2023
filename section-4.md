---
layout: intro-image
image: /images/sorting-soraya-irving.jpg
---

<div class="hidden">

# ===== Issue in CJK: Sorting =====
</div>

<div class="absolute top-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-10">
  <h1 class="text-blue-800">Sorting</h1>
  <p class="text-blue-500">Color, Shape, Size?</p>
</div>

<!--
Photo by Soraya Irving on Unsplash
https://unsplash.com/photos/AGtksbL8z2c
-->

<!--
After the typing issue, let's see the sorting issue.

In english we sometimes sort with the alphabet for title of articles, taxonomy tags, or site names for example.

It is entirely different when sorting in Japanese.

Next slide >>>>>
-->

---

<div class="hidden">

# Sorting - 五十音 (Gojūon)
</div>


<div class="grid grid-cols-[1fr,3fr]">
  <div class="flex flex-col justify-center">
    <h1>五十音 (Gojūon) </h1>
    <h3>Japanese "fifty sounds"</h3>
  </div>
  <div class="flex-1 flex flex-row space-x-4">
    <div>
        <img src="/images/2022-09-04-17-28-34.png" class="h-118 w-auto" />
        <h4 class="mt-2">Hiragana</h4>
    </div>
    <div>
        <img src="/images/2022-09-06-17-51-19.png" class="h-118 w-auto" />
        <h4 class="mt-2">Katagana</h4>
    </div>
  </div>
</div>

<!--
Since this event is held in Japan.
Most of you know it is sort with the order of the Gojuon.

Next slide >>>>>
-->

---

<div class="hidden">
# Sorting - 漢字 (Kanji)
</div>


<div class="grid grid-cols-2">
  <div class="flex flex-col justify-center">
    <h1>漢字 (Kanji)</h1>
    <h3>Characters in Japanese</h3>
  </div>
  <div class="flex-1 ">
    <img src="/images/raku-japanese-character.png" class="h-124 w-auto" />
  </div>
</div>

<!--
And also there are Kanji or Chinese Character, too.

Kanji actually need extra care in sorting.

Next slide >>>>>
-->

---

<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8 mt-8">
  <div class="flex flex-col justify-center">

```ts {all|8,11,15|2,6|3,5,9|4,7,10,12-14,16}
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
```
  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>


<!--
When we have an array composed by the Latin, Numbers, Hiragana, Katagana and Kanji.
How do we sort them correctly?

Next slide >>>>>
-->
---

<div class="hidden">

# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-2 gap-8 mt-10">
  <div class="flex flex-col justify-end">

```ts
$array = [
  'あまガミ', // Hiragana
  'ウィーン', // Katagana
  '荻野', // Kanji
  'マーティン',
  'ういーん',
  '中村',
  'Ülf', // Latin & Number
  'レアード',
  '角中',
  'OKEON',
  '井上',
  '藤岡',
  '佐藤',
  'SHIMA',
  '岩下',
];
```
  </div>
  <div class="flex-1 ">

```ts {all|4-6|7-8|9-11|12-18|all}
// Result
Array
(
    [0] => OKEON
    [1] => SHIMA
    [2] => Ülf
    [3] => あまガミ
    [4] => ういーん
    [5] => ウィーン
    [6] => マーティン
    [7] => レアード
    [8] => 中村
    [9] => 井上
    [10] => 佐藤
    [11] => 岩下
    [12] => 荻野
    [13] => 藤岡
    [14] => 角中
)
```
  </div>
</div>

<!--
The ideal order in Japanese language should looks like this.
Starting with Symbols, Numbers, Alphabets like in English.

And than Hiragana, Katagana, the last part will be the Kanji.
Hiragana and Katagana follows the order of Gojuon.

But, how about the Kanji?

Next slide >>>>>
-->
---

<div class="hidden">
# Sorting - 五十音 (Gojūon) Sorting
</div>

<div class="absolute top-10">
  <h2>五十音 (Gojūon)</h2>
  <h3>Japanese "fifty sounds"</h3>
</div>

<div class="grid grid-cols-[2fr,1fr] gap-8">
  <div class="flex flex-col justify-center">
    
```ts {1-3|5-7|5,6,8}
// UTF-8
["中村", "井上", "佐藤", "岩下", "荻野", "藤岡", "角中"]
[U+4E2D, U+4E95, U+4F50, U+5CA9, U+837B, U+85E4, U+89D2]

// localeCompare()
["井上",  "荻野",    "角中",    "岩下",      "佐藤",    "中村",    "藤岡"]
[い(1-2), おぎ(1-5), かく(2-1), いわ(1-2),   さ(3-1), なか(5-1), ふじ(6-3)]
[い(1-2), おぎ(1-5), かく(2-1), がん(2-1.1), さ(3-1), なか(5-1), ふじ(6-3)]
```

  </div>
  <div class="flex-1 ">
    <img src="/images/2022-09-04-17-28-34.png" class="" />
  </div>
</div>



<!-- 
If we using sort() function directly, 
it is sorting by the index number of the character in the Unicode table. 
However it doesn't make sense to the Japanese speaker.

The solution in JS is the localeCompare() function.
The Kanji will be sorted with the pronouciation of the first character 
and then the next character if first character is the same.

However there is one word mis-placed in the middle. 岩下

It is because the Kanji has another pronounciation.

In Japanese or in Mandarin Chinese the character could have more than one pronounciation.

Next slide >>>>>

日本漢字的音讀最為明顯，日本漢字的讀法一般有二個以上，是因不同時期、不同地方傳入的結果。 在普通話中亦間有取自遊牧民族等其他民族語言、梵語、其他漢語語言或方言的發音屬於此類。

-->

---

# Sorting

Sort in Japanese

// JavaScript
```ts
arr.sort((a, b) => a.localeCompare(b, 'ja-JP', { ignorePunctuation: true }));
console.log(arr);

Array => ["OKEON", "SHIMA", "あまガミ", "ウィーン", "ういーん", "レアード", 
          "井上",   "荻野",   "角中",     "岩下",      "佐藤", "中村",      "藤岡"]
       // "Inoue", "Ogino", "Kakunaka", "Iwashita", "Sato", "Nakamura", "Fujioka"]
```

// PHP
```php
function sortWithLocale($arr) {
  Collator::create('ja_JP.utf8')->sort($arr, SORT_LOCALE_STRING);
  return $arr;
}

Array => ["OKEON", "SHIMA", "あまガミ", "ういーん", "ウィーン", "レアード",
          "井上", "荻野", "角中", "岩下", "佐藤", "中村", "藤岡"]
```


<!--
For Japanese, it is also order by the phonetic order, including the Kanji.
PHP does have similar feature, but I would recommand sorting in database query to get a better sorting result.

Next slide >>>>>

岩下 Iwashita 被判斷成 Gan shita
フリガナ
Keiko kono
河野　かわの　こうの

-->

---
layout: fact
---

# 600+

Same Japanese character different pronounciation

609 from 2136 common used Japanese kanji characters.

<div class="text-xs mt-20 text-gray-500">

1. 文科省常用漢字表 20101130： [PDF](https://www.bunka.go.jp/kokugo_nihongo/sisaku/joho/joho/kijun/naikaku/pdf/joyokanjihyo_20101130.pdf)
1. 常用漢字表 - 音訓表: [Website](http://jgrammar.life.coocan.jp/ja/data/onkun.htm)
1. Explaination about Kanji (EN): [Website](https://www.tofugu.com/japanese/onyomi-kunyomi/)
</div>

<!--
So how many characters has more than one pronounciation?
Japanese Kanji has more than 600 out of 2,000 common characters which has more than one pronounciations.
-->
---
layout: fact
---

# 1263 -> 580
Same Chinese character different pronounciation

580 from 5266 common used Chinese characters (traditional).

<div class="text-xs mt-20 text-gray-500">

There were 1263 characters have more than one pronounciation.<br />
In 2012, 683 was reviewed and combined into single pronounciation.

1. 教育部國語一字多音審訂表 2012 [PDF](https://language.moe.gov.tw/files/people_files/%E5%88%9D%E7%A8%BF.pdf)
</div>

<!--
In the official definition from the Ministry of Education of Taiwan, 
there were 1,263 out of 5,000 common used traditional Chinese characters.
Around ten years ago, the officials reviewed and merged a lot of them.
And it was reduced to 580.

Next slide >>>>>
-->

---
layout: image-right
image: /images/raku-japanese-character.png
---

<div class="hidden">
# Sorting - Japanese pronunciation
</div>

# Japanese Kanji
Multiple pronunciation

![](/images/raku-japanese-pronounce.png)

1. ❶ Music
2. <span class="text-gray-500">❶ To play (music)</span>
3. ❷ Happy
4. ❸ To appreciate

<!--
Let's take the Kanji for example.

It has more pronounciation due to different cultural context.

Four of them or inherited from ancient Chinese in various eras, and another four represent things in the original Japanese language 

Next slides >>>>>
-->

---

<div class="hidden">
# Sorting - Chinese pronunciation
</div>

# Chinese
Multiple pronunciation

<div class="grid grid-cols-2">
    <div class="grid-1">
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-36-40.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Music</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-09.png" alt="" class="h-full w-auto" />
            <span class="pl-4">Happy, Happiness, love to</span>
        </div>
        <div class="flex flex-row items-center">
            <img src="/images/2022-09-02-15-37-43.png" alt="" class="h-full w-auto" />
            <span class="pl-4">To appreciate</span>
        </div>
    </div>
    <div class="grid-2 flex justify-center">
        <img src="/images/le-chinese-character.png" class="h-90" />
    </div>
</div>

<!--
The original Chinese character is this one, and it has three pronounciations.

The character stands for 樂 Music, or 樂 for Happy or Happiness or 樂 for verb "To appreciate".

Next slide >>>>>
-->

---

# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12">
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

---

<div class="hidden">
# Sorting - Chinese characters
</div>

<h1>Chinese characters</h1>
<h3>4 attributes</h3>
<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2">
    <img src="/images/moedict_yan.png" class="mt-6 shadow-lg" />
  </div>
  <div class="">
    <div class="text-2xl">
      <ul>
        <li class="font-bold text-sky-600">Radical Strokes 
          <div class="text-gray-500 font-normal text-lg">部首 + 画数順</div>
        </li>
        <li class="font-bold text-sky-600">Total Strokes　
          <div class="text-gray-500 font-normal text-lg">総画数</div>
        </li>
        <li class="font-bold text-sky-600">Bopomofo 　
          <div class="text-gray-500 font-normal text-lg">注音符号<br />(Phonetic characters)</div>
        </li>
        <li class="font-bold text-sky-600">Pinyin 
          <div class="text-gray-500 font-normal text-lg">拼音</div>
        </li>
      </ul>
    </div>
  </div>
</div>

<!--
I call Czech Republica "捷克" in Chinese which consists of two characters, the first character 捷, has all the attributes that could be used for sorting.
That's correct, more than one way.

We can count its total strokes, radical stokes, spell it with phonetical elements that only uses in Taiwan, or Pinyin with roman characters which is the main input method in China.

Usually we order with one of the attributes and sometimes let the user change the sorting method, for instance the book search system in a library.
When there is symbol or roman alphabets, they also come first like in Japanese.

Next slide >>>>>


Bopomofo is the predominant phonetic system in teaching, reading and writing in elementary school in Taiwan. 

-->

---

# Sorting

Sort in Traditional Chinese

<div class="grid grid-cols-7 gap-4 mb-12">
  <div>
    <img src="/images/珍珠奶茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">珍珠奶茶</span>
  </div>
  <div>
    <img src="/images/小籠包.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">小籠包</span>
  </div>
  <div>
    <img src="/images/魯肉飯.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">魯肉飯</span>
  </div>
  <div>
    <img src="/images/高山茶.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">高山茶</span>
  </div>
  <div>
    <img src="/images/鳳梨酥.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">鳳梨酥</span>
  </div>
  <div>
    <img src="/images/牛肉麵.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">牛肉麵</span>
  </div>
  <div>
    <img src="/images/臭豆腐.png" class="object-cover h-28 w-full" />
    <span class="block mt-4 text-center text-amber-500">臭豆腐</span>
  </div>
</div>

<div v-click class="">

```ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-stroke', {ignorePunctuation: true }));

Array => ['小籠包', '牛肉麵', '珍珠奶茶', '臭豆腐', '高山茶', '鳳梨酥', '魯肉飯']
```
</div>
<div v-click class="mt-8">

```ts
items.sort((a, b) => a.localeCompare(b, 'zh-Hant-TW-u-co-zhuyin', {ignorePunctuation: true }));

Array => ['鳳梨酥', '牛肉麵', '魯肉飯', '高山茶', '小籠包', '珍珠奶茶', '臭豆腐']
```
</div>



<!--
In Traditional Chinese, localeCompare() also works with various attributes that I mentioned before.
By strokes, by the Phonetic zhuyin.

Or use pinyin for Simplified Chinese.

Next slides >>>>>
-->


---

# Sorting
What happens to the Character that has multiple pronunciation?

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">This affects</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Japanese Kanji</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Chinese characters sort in ...</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Bopomofo (zh-TW)</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Pinyin (zh-CN)</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-2xl font-extrabold tracking-tight">Solution</h5>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Leave it as-is</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Customize it and make an explicit order in array</span>
            </li>
         </ul>
    </div>
</div>
<!--
This issue only affects Japanese Kanji, or when sorting with Chinese character with phonetic element using Zhuyin or Pinyin.

Native speakers know the common variations of the pronouciation, when we process in head, it is processed together.

Sometimes if the client request to make it in the explicit order, the better way it to map the words into a pre-defined table or array.
In the end it will be a fully customized array.

Next slide >>>>>
-->