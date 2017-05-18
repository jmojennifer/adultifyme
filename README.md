# Adultify Me: Ada Developers Academy Capstone Project

My capstone project was building the Android app I wish I'd had during the first months of my Ada experience: a to-do app that incorporates one's personal motivations in focusing on tasks across various aspects of life. (Even when spending a lot of time in a single area, such as coding all day!)

Here's my [Capstone Product Plan](https://gist.github.com/jmojennifer/3495ec4c4dceaa35852d130a4eceed74), which was due prior to starting capstone development.

And here's my React Native MVP in action!

![Slideshow of screens from the Adultify Me app](https://s3-us-west-2.amazonaws.com/jmojennifer/Capstone.gif "Adultify Me")

I was able to accomplish:
* Authentication and data storage via Google Firebase
* Creating/editing/deleting of one-off and recurring tasks
* Android Native-styled Date and Time Pickers when creating and editing both kinds of tasks
* Local Android notifications for both kinds of tasks
* Removal of one-off tasks when either notification button (Cancel or Complete) is pressed; recurring tasks remain in the list until the task is explicitly deleted
* If a notification is marked completed, the number of stars the user's earned increases by 1

There's a lot outlined in my [Trello board](https://trello.com/b/HpfRrHWJ/adultify-me) I didn't have time to implement, but I'm happy with the amount I accomplished in 3.5 weeks. This is an app I still use on my phone daily months later! I hope to re-write it natively, using Swift for iOS and Kotlin for Android (now officially supported by Google!) I'd also like to include the functionality that I had to leave out for my MVP.
