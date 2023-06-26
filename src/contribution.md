# How To Contribute to TRI-HERMES

Hello! TRI-HERMES aims to archive all TYPE-MOON lore into an easily accessable website. 

This greedy, ambitious project has only just begun, and we need your help in compiling 20 years worth of TM content.

To get started, you can check out how the files are organized on [our Github Page.](https://github.com/r-grandorder/tri-hermes)


## Formatting

TRI-HERMES is a simple [Vuepress](https://v2.vuepress.vuejs.org/) wiki that uses Markdown files, with each file being a basic text file that is saved as `.md`

Markdown is a basic format that you may already be familiar with, such as Reddit and Discord. You also technically use it when using Google Docs/Microsoft Word.

[Refer to this page for a simple tutorial on Markdown as it is used on TRI-HERMES pages.](https://markdown-it.github.io/)

There are some guidelines to keep in mind whenever making pages for TRI-HERMES.

# Page Headers

Every page begins with a single `#` followed by a space and the page title. This page title will be what is shown on the embed. This is separate from the page URL which is decided by the file's location and file name.

You can then make Sections and Sub-Sections through the usage of `## ` and `### ` respectively. 

Any `# ` used after the Header declaration will not show as a section on the sidebar and will simply make the text bigger.

# Line Spacing

	Typing
	Like this

Will turn out as

`Typing Like this`

However,

	Typing
	
	Like this

Will turn out as

`Typing`

`Like this`

So be careful in how you space out your lines, or else you'll be making paragraphs!

# Images

In order for images to display on the page, you'll need to use the following format:

`![](image URL)`


## Tools

* [Notepad++](https://notepad-plus-plus.org/downloads/)

A very lightweight and simple program that supports Markdown language. 

* [Visual Studio Code](https://code.visualstudio.com/)

If notepad++ is not quite your cup of tea, Visual Studio Code also supports markdown and may provide a smoother experience.

* [VS Codium](https://vscodium.com/)

Same as Visual Studio Code but FOSS and without Microsoft telemetry.

* Discord Account

You will need a Discord account and preferrably be in the [TRI-HERMES discord server](https://discord.gg/GzxxEwjzpU) in order to properly communicate, organize, and send over MD files.

While Pull Requests on Github will be reviewed and accepted, handling page files through me directly will be faster and smoother for you.

## Current Projects

Here are some of the current projects that anyone can help out with, just tag me on Discord @Lib#7770 before starting so I can provide more details!

### Servant Profiles

Our [servants.md](https://tri-hermes.org/servants.html) page is currently in a huge WIP phase. At the moment the table is laid out, but we still only have the translated material profiles available.

We will be planning to incorporate the In-Game Profile, the Material translation, and Dialogue tables in each servant page.

# Dialogue and In-Game Profiles

At the bottom of each Servant page is the beginning of a table for Servant dialogue. Within it will be the label, JP dialogue, and NA/Translated Dialogue.

You can find an example on [Huang Feihu's page](https://tri-hermes.org/Servants/Profiles/Huang-Feihu.html) , and how its coded in the [corresponding MD file.](https://github.com/r-grandorder/tri-hermes/edit/main/src/Servants/Profiles/Huang-Feihu.md)

For both Dialogue and In-Game Profile, these can be pulled from the FGO Fandom Wikia page for each servant.

### Scenario Images

For each entry on our [Story](https://tri-hermes.org/story.html), [Event](https://tri-hermes.org/events.html), and [Novel](https://tri-hermes.org/novels.html) pages, it would be nice to include images to accompany the text dumps.

The ideal and fastest method would be to take a screenshot of scenes on [Atlas' War viewer](https://apps.atlasacademy.io/db/JP/wars), upload the screenshot to imgur or any other reliable image hosting website, then insert it into the existing MD files for stories and events.

`![](image URL)`

Alternatively, phone or emulator screenshots uploaded to imgur will work just fine.

Generally speaking, we only want the following types of images:

* Background changes
* Important, distinct CGs
* Initial character appearances in a scene.
* Notable character expression changes. (Yes even "It's cute and adds to the scene!" applies)

It is good to maintain a balance however, and not drown the text dump in needless screenshots.

### Interviews

We want to compile every possible [TM interview](https://tri-hermes.org/interviews.html) under the sun on this website, as there currently isn't any page yet that holds this service.

If you find any interview and have the time, please convert it to Markdown format and submit it to us.

### Transcribing

# Drama CDs

There are various Drama CDs on Youtube that would be helpful to have in text form, such as:

* FGO Drama CD: Heroic Spirit's Lore Strange Tales: Edmond Dantès, The King of Cavern
* Garden of Avalon

# FGO Arcade - Babylon

[Transcription of PunPun's translation of Babylon singularity is needed.](https://www.youtube.com/watch?v=NZc-ANQ17gk&t=8s)

# Chaldea Breakroom

[The *Chaldea Breakroom* series](https://fate-go.us/chaldeabreakroom/) offers some insight into FGO's development. Having them transcribed into a single page will be handy.

### Articles / Summaries / Theories

And finally, in our [Articles](https://tri-hermes.org/articles.html) page, we'd like to include user-created pages, rather than strictly archived content. All pages in this category will be marked as interpretative and will be strictly reviewed upon submission.

This category can include: 

* Interpretations of lore mechanics
* Pages that go over the usage of certain concepts throughout different TM works
* Plot Summaries of FGO Chapters or summaries of any other work.
* Literary analysis of TM content.
* Character summaries throughout different works.
* Theories that have considerable research put into them, citing the source text throughout
* ...and more!

---

All of this is still in trial, and we'll see how we can evolve this process as we move forward. 