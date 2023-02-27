# Space Battle Game

In Unit 1 of General Assembly's Software Engineering Immersive course, we were given the assignment to create a simple space battle game to become more comfortable with using objects, conditionals, and loops. This assignment was meant to be done only in the console, but I wanted to stretch myself to design a UI to go along with it so I could practice DOM manipulation. That introductory assignment became the nucleus of what this game turned out to be. [Here](https://seir-0206.notion.site/Space-Battle-Game-59d65d30772649958f91f7f8e3137777) is the original prompt for the game for those interested.

In summary, the game goes like this:

* The user attacks the next available alien ship (moving from left to right)
* If the ship survives, it attacks the user
* If the user destroys the ship, they have the option to retreat
* The user keeps attacking the ships until either all the ships are destroyed or they themselves are destroyed



Since "v1", I have made the following general improvements:
* updated the UI for a cleaner appearance
* added a variety of GIFs and music to enrich the user experience
* added three difficulty modes that the user can choose when the game loads.

## Updated UI

While I was proud of my original UI as someone new to HTML and CSS, looking back, it was quite simple. I made changes to the background and added a spacey gif to make it seem like the user was travelling at light speed through the stars. I also added hover states and hit indicators to the attack button and the alien ships to make it easier to confirm whether a ship had been destroyed. Overall, I think my hours of slogging through CSS and HTML wiki pages paid off, at least in regards to marked improvement over my early version.

## GIFs and Music

v1 had a small handful of GIFs that displayed on events like:
* Successful alien ship takedown
* Victory
* Loss
* Retreat

In this version, I expanded the available GIFs displayed to give a little more variety to the user experience. I did this by creating an array of URLs and then selecting a random one using the following call: 

> `gifBank[Math.floor(Math.random()*gifBank.length)]`

The GIFs are only displayed during the "chill" and "classic" difficulty levels because people who select "challenging" probably don't want to see a twerking alien during their game.

I also experimented with music, which was simultaneously easier and harder than I thought it would be. Loading a new music file was easy, but adding a play/pause button was more difficult. Eventually, I used two PNG images I got from [FlatIcon](https://www.flaticon.com/) that would change depending on whether the music was playing or paused:

~~~~
music.addEventListener("click",()=> {
    if(music.src.includes('play')){
        music.setAttribute('src', './Resources/pause.png');
        activeSong.play()
    } else if(music.src.includes('pause')){
        music.setAttribute('src', './Resources/play.png');
        activeSong.pause()
    }
)}
~~~~

Each music is meant to reflect the "tone" of each game mode. For example, the chill mode music has a lower BPM and is more relaxed, while the challenge mode music is fast and exciting. The LoFi music was produced by Riot Games, and is free to use for projects.

## Difficulty Modes

Adding difficulty modes is something I knew I wanted to add from the beginning because of the simple fact that the parameters in the original prompt were far too generous. The ship firepower was too high and the alien hull health too low, meaning that you would almost certainly one shot any alien ship that you hit. There is an element of randomness in the alien ship health, but it was still too low. **I made the following general parameter changes in this version**:

Chill Mode:

-Self
* lower firepower
* higher accuracy
* more health
-ALIEN
* lower accuracy
* lower firepower
* more health

(Classic Mode parameters are a health balance of both chill and challenge modes)

Challenge Mode:

-Self
* lower firepower
* lower accuracy
* less health
-ALIEN
* higher accuracy
* higher firepower
* more health

In addition, I added a few extra features to the **challenge mode**, including:
* the ability to play against 4, 5, or 6 alien ships
* timer that the user can set to see how many ships they can destroy in a given time
* a stun feature where the user is stunned for two seconds whenever they get hit
* a seven second penalty for your ship getting destroyed
* a five second penalty for retreat, but it restores 10 health and you keep playing

More slight tweeks could be made to the parameters to make it a more fair game, but I'm decently happy with where they are now.

## Screenshots

Main start message:
![](/ScreenshotsForREADME/MainMessage.png)
Each difficulty mode has a hover state and animations to make selecting a mode a more responsive experience:

Difficulty mode block showing options for number of alien ships to fight:

![](/ScreenshotsForREADME/ChallengeBlock.png)

Chill Mode:
![](/ScreenshotsForREADME/ChillMode.png)

Classic Mode:
![](/ScreenshotsForREADME/ClassicMode.png)

Challenge Mode:
![](/ScreenshotsForREADME/ChallengeMode.png)

## Lessons Learned

I'll be honest, **my code is a mess** for this project. There are reduncancies galore, nonsensical ordering of CSS variables, and non-semantic HTML. But I have learned a few lessons that will make future projects more efficient, easier to understand to other programmers, and less browser intensive.

* ### Framework

My number one take away from this project is to start with a framework of what you want to accomplish. While I had my initial game as a starting framework, I didn't take the time to sketch out exactly what features I wanted to add or how I wanted to accomplish them. This led to scatter-brained coding where I would begin working on a certain feature (for example, adding explosion GIFs to the alien ships on takedown) but I would get distracted by another feature (for example, working on getting the timer working in challenge mode). This issue could be **avoided by using GitHub branches** for different features.

Starting with a framework would also help with file management, which is currently not great. Instead of having just one "Resources" folder, ideally I'd want the project to have folders for images/gifs/video/music etc. If I were to change the file structure now, it would break a lot of the references in the code and the project would descend into chaos. 

* ### Consistency and Organization

Visual consistency is very important for user experience. While there aren't an enormous number of colours used in this project, it did get a bit confusing managing colours across the ~100 CSS variables I ended up with. This issue could be solved by declaring global CSS variables in the --root variable at the top of the styles.css file.

As it stands, my CSS file is very disorganized since I just added new variables to the bottom of the file in the order I was working on them. Ideally, I would group them semantically which would both help me find them to make changes and help future programmers be able to find what they were looking for. I also didn't use classes and IDs effectively to cut down on the amount of CSS calls I have to make.

One section of my JavaScript that's a particular eyesore is my variable declarations, particularly DOM variables at the top of the script. In future projects with many DOM elements to keep track of, I think a better way would be to store the variables by type (e.x. GIFS or buttons) or page location (in my case, game type) in objects that would be referenced throughout the script. This would make it easier to understand the source of DOM variables and what changes to them they would do in the DOM.

* ### Website bulk

Near the end of my project, I realized that many of the resources I have embedded could be referenced using a hyperlink instead of hosted on the page itself. By the time I realized it, it was too late to track every image reference down and change. Doing this would, I believe, allow the page to run smoother and require a less intensive CPU load. Some of the GIFs (notably, the 50MB star trip GIF) are required in the Resources folder because I made them myself out of videos found online.


<details><summary>Sources</summary>

* All GIFs (except start message space GIF and star trip GIF) from Giphy
* Space GIF (start message) and Star Trip GIF from Oleg Gamulinskii on Pexels.com
* Music from Sessions: Vi and Sessions: Taliyah from Riot Games, used with permission
* Icons (pause/play, swords, and stun indicator) from FlatIcon
</details>


