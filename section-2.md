---
layout: intro-image
image: /images/white-box-kelli-mcclintock.jpg
---

<div class="hidden">

# Migration, Dev, and Management
</div>

<div class="absolute bottom-10">
  <span class="font-700">

  </span>
</div>

<div class="absolute bottom-20 left-1/2">
  <h1 class="text-shadow-md">Migration, Dev, & Management</h1>
</div>

<!--
Now, let's move on to the technical aspect of our project. 
I would like to provide a high-level overview of the migration process and how we managed the development project.

Migration was the first and most important factor in our project. 
All important content and assets needed to be migrated. 
It wasn't just about migrating the content nodes, 
we also had to migrate files and images that were not managed in the CMS.

<b>Next slide >>>>></b>
-->

---

# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-3 gap-8">
  <div class="col-span-2 pl-6 pt-8 items-center">
    <p>
        Migrated <span class="text-blue-600 dark:text-blue-500">3200</span> content nodes and 
        <span class="text-blue-600 dark:text-blue-500">6600</span> media assets
    </p>
    <p>
        <pre class="p-4 bg-gray-700 text-white">[[nid:9999]] --> &lt;drupal-entity /&gt;</pre>
    </p>
  </div>
  <div>
    <img src="/images/2023-01-06-23-30-22.png" />
  </div>
  
</div>

<!-- 
In Drupal 7, there was no Media Library, 
so we used the "video" and "photo" content types to contain assets, 
and later used shortcodes to reference them in the content body.

This means we had to migrate all 3,000 content nodes and over 6,000 media assets first, 
and then convert all the inline shortcodes into the new media embed format.

<b>Next slide >>>>></b>
-->

---

# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    Converted <span class="text-blue-600 dark:text-blue-500">1500</span> files that were uploaded via 
    <ul>
      <li>IMCE</li>
      <li>File fields</li>
    </ul>
  </div>
  <div class="col-span-2">
    <img src="/images/IMCE_browser.png" />
  </div>
  
</div>


<!-- 
In the past, content editors were able to use IMCE to upload files and images to the server directly. 

During the migration, we converted over 1,500 inline file sources into media types, 
including images, documents, and embedded videos. 

This not only ensures that all files are in the managed system, 
but also makes the system more secure.

<b>Next slide >>>>></b>
-->

---

# Migration

<ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 mt-28 mb-12">
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            1
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Content node</h4>
            <div class="text-sm">Content and Media node</div>
        </span>
    </li>
    <li class="flex items-center text-gray-500 dark:text-gray-400 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Embed assets</h4>
            <div class="text-sm">Assets uploaded via IMCE</div>
        </span>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500 space-x-2.5 w-1/3">
        <span class="flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            3
        </span>
        <span>
            <h4 class="font-bold text-2xl leading-tight">Migration Profile</h4>
            <div class="text-sm">Mock up data for CI/CD</div>
        </span>
    </li>
</ol>


<div class="grid grid-cols-5 gap-8">
  <div class="col-span-3 pl-6 pt-8 items-center">
    <ol>
        <li>
            In total <span class="text-blue-600 dark:text-blue-500">10,000+</span> content and assets are migrated.
        </li>
        <li>
            Reuse the migration profile as mockup data for CI/CD testing workflow.
        </li>
    </ol>
  </div>
  <div class="col-span-2">

![](/images/cicd_workflow.png)
  </div>
  
</div>


<!--
In total, we migrated more than 10,000 contents and assets via the Drupal Migrate API script. 

The migrate profile was kept in use in the project to provide mockup data for testing purposes. 

During each new feature development, 
our local environment and cloud CI environment builds the site with the mockup data every time. 
This allows us to run unit tests repeatedly and make our deployment more robust and reliable. 

Migration was critical to the project and required a lot of effort to review the content and validate the results, 
but it was worth it and played a crucial role in the project's success.

<b>Next slide >>>>></b>
-->

---

# Key to the Successful Project

<ol class="relative ml-4 mt-12 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Internal Communication</h2>
        <p class="text-sm">
            <ul>
                <li>Progress report</li>
                <li>Meet the stack holder</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Project management</h2>
        <p class="text-sm">
            <ul>
                <li>Dev stage with vendor</li>
                <li>In-house dev stage and editing stage</li>
            </ul>
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Continuous Intergration & Deployment (CI/CD)</h2>
        <p class="text-sm">
            <ul>
                <li>Tests</li>
                <li>Automated Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<!--
Beyond migration, there were keys that made the project success.

1. Effective communication: 
We made sure to keep the team and supervisor informed of our progress. 
OIST is a large organization with many decision-making channels, 
so when necessary, we met with stakeholders directly, 
and found someone who could support and communicate through the right channels.

2. Using tools effectively: 
We used tools effectively to manage project tasks and assist with communication. 
There is no best tool, but we found the right tools that all team members were willing to use.

3. Testing and automation: 
To reduce repetitive tasks and risks, 
we rely on testing and automating processes as much as possible.

All these factors worked together to make the project a success.

<b>Next slide >>>>></b>
-->


---

# Project management

<div class="grid grid-cols-2 gap-8 mt-12">
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Dev Stage with Vendor</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub</span>
            <span class="ml-4 text-lg font-normal text-gray-500 dark:text-gray-400">Issue and Project</span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">2 OIST team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">6 vendor team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Project manager</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Designer, Frontend Developer, Backend Developer, QA</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">600 issues and 600 PRs</span>
            </li>
        </ul>
    </div>
    <div class="w-full max-w-md p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">In-house Dev and Editing Stage</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-4xl font-extrabold tracking-tight">GitHub + Shortcut</span>
            <span class="ml-4 text-xl font-normal text-gray-500 dark:text-gray-400"></span>
        </div>
        <!-- List -->
        <ul role="list" class="space-y-5 my-7">
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">7 team members</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg class="pl-1 flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Manager, Content Editor, Graphic Designer, 2 Drupal Developers</span>
            </li>
            <li class="flex space-x-3">
                <!-- Icon -->
                <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Check icon</title><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">450 Dev issues, 500 Content tasks</span>
            </li>
        </ul>
    </div>
</div>

<!--
During the first stage of the project when we worked with the vendor, 
they used GitHub and its Project tool to manage tasks. 

This allowed their developers and us to communicate freely, 
rather than only through the project manager. 

This accelerated development, made the work transparent, 
and increased mutual trust.

After the project was delivered, 
we introduced Shortcut to manage both development and content creation tasks on the same platform. 

With Shortcut, 
we were able to integrate GitHub to track the status of pull requests,
and syncing development task status.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/github_project_planner.png
---

<div class="hidden">

# GitHub
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-black dark:text-white">
    GitHub Project
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Many of us are already familiar with GitHub, 
and their project management tools have become more mature and user-friendly.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/shortcut_storyboard_docs.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
Shortcut is a task management system that can easily manage both development and editing tasks. 

Given that the tasks of development and editing require different workflows, 
we can create different workflows in Shortcut for them, 
and then bring them into the same Epic or Iteration easily. 

This is very helpful for a team with multiple functions.

<b>Next slide >>>>></b>
-->

---
layout: intro-image
image: /images/shortcut_issue_github.png
---

<div class="hidden">

# Shortcut
</div>

<div class="absolute top-5">
  <span class="font-700 text-2xl text-sky-400">
    Shortcut
  </span>
</div>

<div class="absolute top-30 text-shadow-lg w-full">
  <div class="absolute top-0 w-full text-black">
    <h1></h1>
    <p>
    </p>
  </div>
</div>

<!--
In Shortcut, we can quickly sync the status of dev tasks with GitHub. 

Even though they are two separate platforms, 
we can work between them seamlessly.

<b>Next slide >>>>></b>
-->

---

# CI/CD Workflow

<ol class="relative ml-4 mt-8 text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400">                  
    <li class="mb-10 ml-6">       
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Lint</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg aria-hidden="true" class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Unit test</h2>
        <p class="text-sm">
        </p>
    </li>
    <li class="mb-10 ml-6">
        <span class="absolute flex items-center justify-center w-8 h-8 bg-sky-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-sky-900">
            <svg class="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
        </span>
        <h2 class="font-medium leading-tight text-gray-700 dark:text-gray-100">Automated deployment</h2>
        <p class="text-sm">
            <ul>
                <li>Multiple Dev Environment</li>
                <li>Production Site Deployment</li>
            </ul>
        </p>
    </li>
</ol>

<div class="mt-8">

![](/images/circleci_flow.png)
</div>

<!--
We are a two-developer development team, 
and need to focus on development tasks and resolving issues. 

The CI/CD process acts as a third developer, 
checking the coding standard and deploying the code for us. 

This allows our developers to quickly move on to the next task,
after committing the code to the online development environment. 

Once the commit passes the CI/CD workflow, 
we can then focus on reviewing the logic of the code in pull requests, 
and then ask the CI/CD to deploy it to the production site. 

With all the tools, scripts, and continuous communication, 
we were able to complete the project smoothly. 

Of course, the diligent team members were the core of the project's success.

<b>Next slide >>>>></b>
-->
