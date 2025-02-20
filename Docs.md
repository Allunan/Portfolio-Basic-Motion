my take is "This website template can be customized to look and feel different. You can change things like colors, fonts, and even the information displayed. These customization options are located in a special file called "configuration.js". Think of this file as the control panel for your website's appearance and content - Note: any change to this file require a restart to the server.

## Theme

This section lets you control the overall look of your website. You can change the colors of your website

- **primary**: this controls the color of your **_name_** in the header and footer
- **secondary**: this controls the color of your **_bio_** paragraph and **_projects' details_**
- **muted**: this controls the color of section titles such ash `About Me` and `My Skills`
- **background**: this controls the overall background color of your website

## Data

this section lets you control the information displayed on your website. You can change the information such as your name, bio, and social media links

- **name**: this controls the name displayed in the header and footer
- **bio**: this controls the bio displayed in the header and footer
- **socials**: this controls the social media links displayed in the header and footer
- **works**: this controls the projects displayed in the works section
- **skills**: this controls the skills displayed in the skills section

<details>
<summary style="font-weight: bold; font-size: 18px;">Socials</summary>

this section lets you control the social media links displayed in the footer, you can add as many social media links as you want, but for ascetic purposes we recommend three as the maximum.

to add a social media link, you need to add an object to the `socials` array in the configuration file. the object should have the following properties:

- **title**: this is the name of the social media link
- **link**: this is the link to the social media link

<br/>

**example**:

```js
const data = {
  // the rest of data configuration...
  socials: [
    {
      title: "LinkedIn",
      link: "https://linkedin.com/in/google"
    }
  ]
}
```

</details>

<details>
<summary style="font-weight: bold; font-size: 18px;">Works</summary>

this section lets you control the projects displayed in the works section, you can or remove as many projects as you want, but for ascetic purposes we recommend three as a minimum.

to add a project, you need to add an object to the `works` array in the configuration file. the object should have the following properties:

- **index**: this is the index of the project, for ascetic purposes we recommend you use indexes like `001`, `002`, `003`, etc.
- **title**: this is the title of the project, for ascetic purposes we recommend you use short names for your projects.
- **year**: this is the year of the project
- **preview**: this is the link to the preview of the project
- **description**: this is the description of the project
- **images**: this is the images of the project

<br/>

**example**:

```js
const data = {
  // the rest of data configuration...
  works: [
    {
      index: "015",
      title: "Arcool",
      year: "2024",
      preview: "https://www.google.com/",
      description:
        "Interactive experience to create your own unique one-of-a-kind music pass with generative artwork and your own sonic anthem.",
      images: [
        "project 1 - image 1.png",
        "project 1 - image 2.png",
        "project 1 - image 4.png",
        "project 1 - image 5.png",
        "project 1 - image 7.png"
      ]
    }
  ]
}
```

</details>

<details>
<summary style="font-weight: bold; font-size: 18px;">Skills</summary>

this section lets you control the skills displayed in the skills section, you can or remove as many skills as you want, but for ascetic purposes we recommend three as a minimum.

to add a skill, you need to add an object to the `skills` array in the configuration file. the object should have the following properties:

- **title**: this is the title of the skill, for ascetic purposes we recommend you use short names for your skills.
- **items**: this is the items of the skill

<br/>

**example**:

```js
const data = {
  // the rest of data configuration...
  skills: [
    {
      title: "Social",
      items: [
        "Digital Advertising",
        "Social Media Management",
        "Commercial Strategy"
      ]
    }
  ]
}
```

}

</details>
