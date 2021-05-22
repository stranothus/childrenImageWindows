# childrenImageWindows
Have a background image for all .shared-background element. All children of those elements with .share will act as "windows" into the image.

I developed this for my first client's webpage, inspired by https://www.khanacademy.org/computer-programming/bienvenue-paris-a-website-by-bertha-l/5891274186899456. Unfortunately, the parallax scroll didn't fit with my design, so I used some JS to constantly update the parallax image positions.

To use, create a container element with a class name of "shared-background" add a "data-src" attribute holding the src of the image you want to use. Add child elements. All child elements with a class name of "share" will act as windows into the image. Style as you like.

Edit: I found a better method which doesn't rely on constantly updating a parallax image. It's also an excellent workaround for a Chrome bug which would stretch images after scrolling a certain lengt with the previous method.
