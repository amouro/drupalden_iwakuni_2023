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
Here comes the technical part of our project. I would like to share a high-level overview of migration and how we manage the development project.

Next slide >>>>>
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

<!-- 
Migration is the first and the key factor to our project.
All the important content and assets must be migrated.

It is not only about the content node migration, 
we also need to migrate files, images which were not managed in the CMS.

Next slide >>>>>

* Migration of content and media assets
* Conversion of assets uploaded via IMCE
* Usage of Drupal Migrate
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
Drupal 7 didn't have the Media Library, 
we used to use video and photo content type to contain the assets.
And later use shortcode to reference them in the content body.

This means we must migrate all the 3,000 content nodes and over 6,000 media assets first.
And then convert all the inline shortcode into the new media embed format.

Next slide >>>>>
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
In Drupal 7, content editor were able to use IMCE to upload file and images to the server directly.

During the project, we convert over 1,500 files into media types. Including image, document and embedded videos.
This is not only to make sure we have all files in the managed system, it also make the system more secure.

Next slide >>>>>
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
At the end we migrate more than 10,000 content and assets via the Drupal Migrate API script.

These code are not disposed when the migration is finished.
The migrate profile is kept using in the project to provide mockup data for testing purpose.

During each new feature development,
our local environment and the cloud CI environment can rebuild the site with the mockup data on the fly.

That allow us to run the unit test over and over, and make our deployment more robust and reliable.

Migration is critical to the project. 
To make the the project successful also needs lots of efforts.

Next slide >>>>>
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
I'd like to address a few of them.

First, keep communicating.
We have to keep the team and the supervisor aware of our progress.
OIST is a large organization with many decision chain.
When necessary, we meet the stackholder directly, and find someone who can support and communicate at the right channel.

Second, use tool well to manage the project tasks and assist the communications.
There is no best tool, but only the right tool.

Lastly, keep testing and make it automatic to reduce the repeating task and risks.

Next slide >>>>>
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
The first stage when we worked with the vendor.
The vendor use GitHub and its Project tool to manage the tasks.

Both their developer and can communicate freely instead of only via their project manager.
This accelerate the development, make the work transparent and increase the mutual trust.

After the project delivered, we introduced Shortcut to manage the dev task and content creation task on the same platform.
With shortcut, we can integrate GitHub to it to know the status of the PR and sync the dev task status.

Next slide >>>>>
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
We all very familiar with GitHub or similar tools. 

It's project tool is now more mature and easy to use.

Next slide >>>>>
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
Shortcut is easy to manage dev and editing tasks. 
Given the nature of the tasks need different workflows, we can create different workflow for them.

However, we can still bring them into the same Epic or Iteration easily.

This is very helpful for a multi-function team.

Next slide >>>>>
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
In Shortcut, we can quickly sync the status of the task issue with the PR.

Although they are two platform, we can work between them seemlessly.

Next slide >>>>>
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
* Lint
* Unit test
* Automated deployment
* Review with multiple dev environment
-->

<!--
We're a two developer dev team, and we need to focus on dev task and resolving issues.
Therefore keep the code standard and have the machine to help us test the site is crucial.

With the workflow, we can quickly throw the commit to a online dev environment and switch to another task.
The CI/CD is the guard to the code quality, once it is passed. We can focus on reviewing the logic of the code for each other.

There is also deployment workflow for us to deploy the site to the production.

With all the tools, program and continuous communication, we complete the project smoothly.
Of course, all the deligent team member is the core that make the project successful.

Next slide >>>>>
-->
