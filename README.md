# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

-   [Frontend Mentor - Ping coming soon page solution](#frontend-mentor---ping-coming-soon-page-solution)
    -   [Table of contents](#table-of-contents)
    -   [Overview](#overview)
        -   [The challenge](#the-challenge)
        -   [Screenshot](#screenshot)
        -   [Links](#links)
    -   [My process](#my-process)
        -   [Built with](#built-with)
        -   [What I learned](#what-i-learned)
        -   [Continued development](#continued-development)
        -   [Useful resources](#useful-resources)
    -   [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Submit their email address using an `input` field
-   Receive an error message when the `form` is submitted if:
    -   The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
    -   The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Screenshot

![](./images/screenshot.jpg)

### Links

-   Solution URL: [Add solution URL here](https://your-solution-url.com)
-   Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

-   HTML5
-   CSS
    -   [Animista for CSS animation](https://animista.net/)
-   JavaScript

### What I learned

I started this challenge trying to dip my toes into CSS animation since I think I have a pretty okay grasp on CSS layout. This will be mostly what I learned about animations.

Using [Animista](https://animista.net/), I made the dashboard image fades in and slides to the top when the website first loads.

```css
@keyframes slide-to-top {
	from {
		-webkit-transform: translateY(50px);
		transform: translateY(50px);
		opacity: 0;
	}
	to {
		-webkit-transform: translateY(0);
		transform: translateY(0);
		opacity: 1;
	}
}
```

Another animation is the buttons. I didn't remember where I got inspirations from, but essentially the button will 'elevates' on hover. Using `box-shadow` and `transform` to do the trick.

```css
.submit-btn {
	height: 5.6rem;
	border-radius: 5.6rem;
	border: none;
	cursor: pointer;
	background-color: var(--primary);
	color: white;
	font-weight: 600;
	box-shadow: 0 0.5rem 1rem var(--pale-blue);
	transition: transform ease 0.2s, box-shadow ease 0.2s,
		background-color ease 0.2s;
}

.submit-btn:hover,
.submit-btn:focus-visible {
	background-color: var(--button-hover);
	box-shadow: 0 1rem 3rem var(--pale-blue);
	transform: translate(0, -3px);
}
```

Somehow, -3px on Y axis moved it up. I don't know why lmao.

And then, the ✨magic text✨ by [Hyperplexed](https://www.youtube.com/watch?v=yu0Cm4BqQv0). I only use the gradient part of it, though.

### Continued development

I'm really having fun doing a little CSS animations. Definitely going to use it more in other challenges.

### Useful resources

-   [Hyperplexed Magic Text](https://www.youtube.com/watch?v=yu0Cm4BqQv0) - THE man when it comes to frontend. I like his fancy text.
-   [Animista](https://animista.net/) - Although it's an on-demand animations library, I get a pretty rough idea on how CSS animations work when using it. The animations are really cool, though.

## Author

-   Website - [Nerometa](https://www.github.com/nerometa)
-   Frontend Mentor - [@nerometa](https://www.frontendmentor.io/profile/nerometa)
