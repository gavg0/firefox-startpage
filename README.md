# FireLaunch

## Description

FireLaunch is a redesign of the [Benvenuta-minimal_startpage](https://github.com/h1tarxeth/Benvenuta-minimal_startpage) Repository.<br>
It's supposed to **redesign and customize** the Startpage of your Browser.<br> 
The major difference besides the deisgn is the use of [Tailwindcss](https://tailwindcss.com/) in combination with [daisyUI](https://daisyui.com/). <br>
The **4 Default Themes** are all from [Catppuccin](https://github.com/catppuccin/catppuccin) but u can add every Theme from the [daisyUI Themes](https://daisyui.com/docs/themes/) or even **create your own one**. (More on that in the [Customize](#customize) Section.)<br>
In case u have any issues, suggestions or anything else, feel free to contact me: [Gavin\@gavg.dev](mailto:Gavin@gavg.dev?subject=Repo-FireLaunch)

![image](https://i.ibb.co/Tk4pSWw/715shots-so.png)

## Table of Content

- [Installation](#installation)
- [Features](#features)
- [Customize](#customize)
- [To Do](#to-do)
- [Tools i used](#tools-i-used)

## Installation

In the installation section, you have the option to choose whether you want to host the website yourself using GitHub or if you prefer to use the default page.

| Install using the default Page | Install forking the Repo |
|---|---|
| **Advantages:** <br> - Quick and easy installation <br> - No need to host the website yourself <br><br> **Disadvantages:** <br> - Limited customization options <br> - Relies on the default page for hosting | **Advantages:** <br> - More customization options <br> - Ability to host the website yourself <br><br> **Disadvantages:** <br> - Requires forking the repository <br> - May require additional setup and configuration |

---

### **Install using the default Page**

**Firefox:**

1. Install the [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) Add-on.
2. Go to "Add-ons and themes" and click on the "Preferences" Button of the Custom New Tab Page.
3. Now just paste the following URL into the Text-Input and check both Checkboxes.
```
https://gavg0.github.io/firefox-startpage/
```
Thats it!<br><br>
**Chromium-based (With Google Chrome as example):**

1. Install the [Custom New Tab URL](https://chromewebstore.google.com/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia) Extension from the Chrome-Store.
2. Open a new Tab and click on "Keep it".
3. Click on "Options page" and check the Enabled Checkbox.
4. Now add the following URL and click on save.
```
https://gavg0.github.io/firefox-startpage/
```
Thats it!

---

### **Install hosting it yourself**

1. Fork this repo
2. Enable the Github Pages service Settings → GitHub Pages → Source [master branch] → Save
3. Now continue on the "Install using the default Page" path but instead of using the given URL, copy the URL of your own Site which you can find in Settings → GitHub Pages

Now you can customize it as you wish but keep in mind to run Tailwind with this command:
```
npx tailwindcss -i ./style/app.css -o ./style/output.css --watch
```
Read more about the [customizability features](#customize)

## Features

- 4 builtin Themes.
- Themeswitcher Menu.
- Easy to add your own Theme.
- Clock and Date.
- Clean Design.
- Everything is entirely customizable.

## Customize 

These are many ways to customize this but here are a list of things:

- [Add Themes from DaisyUI](#add-your-favourite-themes-from-daisy-ui)
- [Create your own Themes](#create-your-own-themes)
- [Change Themeswitch](#theme-switch)
- [Add your own Links](#add-your-own-links-to-the-table)
- [Switch Search Engine](#switch-your-search-enginge)

### Add your favourite Themes from Daisy UI

In order to add Themes, first take a look at all the already exsisting themes on the [DaisyUI Theme Page](https://daisyui.com/docs/themes/).

### Create your own Themes

You can create your own Theme using the [daisyUI Theme Generator](https://daisyui.com/theme-generator/).<br>
Then copy the Theme and add it to the Tailwind.config.js in Line 68.<br>
Now you can decide weather you want to set it as default Theme or just want to [add it to the Theme Switch](#themeswitch).<br>
To make it the default Theme, just replace Line 12 in the index.html and use this Line:
```
  <body data-theme="your-theme">
```

### Theme Switch

In order to add a new Theme to the Theme Switch, make sure the Theme is properly added to the tailwind.config.js.<br>


### Add your own Links to the Table

Switch your Links on the Table is really easy.<br>
You only need to add them to the src_json/links.json.<br>
Add the Link in this format:
```
{
    "title": "Daisy UI",
    "link": "https://daisyui.com",
    "table": 0
},
```
Keep in mind that a Table can only hold up to 20 Links.<br>

### Switch your Search Enginge

To Switch your Search Engine, you only need to change the link in Line 35 of the index.html to whatever Engine you want.<br>
Here are some examples:
```
DuckDuckGo:
<form id="text1" action="https://duckduckgo.com/" method="get">

Bing:
<form id="text1" action="https://www.bing.com/search" method="get">

Yahoo:
<form id="text1" action="https://search.yahoo.com/search" method="get">

Ecosia:
<form id="text1" action="https://www.ecosia.org/search" method="get">
```

## To Do

- Adding custom Widgets like Weather, News or Finance.
- Google Gemini/Chatgpt chat widget 
- Optimize the page in terms of loading
- Searchenginge Switch Button
- Add more On-Page Customizability  
- Fix the Shortcut listener

## Tools i used

- [Original Repo](https://github.com/h1tarxeth/Benvenuta-minimal_startpage)
- [Catppuccin as Colortheme](https://github.com/catppuccin/catppuccin)
- [Tailwind CSS](https://tailwindcss.com/)
- [Daisy UI](https://daisyui.com/)
- [Screenshots from shots.so](https://shots.so/)


![image](https://i.ibb.co/ZGFhGFn/150shots-so.png)
