## How the project was setup

First I made the folder "Lab2" with command "mkdir Lab2"
After the Lab2 folder was created I went into it using "cd Lab2"
Then I initialised the project with "npm init" then go through all the options.
After the project was initialised I installed the external module
as well as nodemon. with these commands:
"npm install express",
"npm install morgan",
"npm install casual"
and "npm install nodemon --save-dev"

Now it is only the actual coding left. The code you will be able to see in the .js files.

## How to Use

After having extracted the zip file. 
Go to the project folder, you can do this either by going there manually
and right click and then press "Git Bash Here", Make sure you have Git bash installed.

You can also go to the file path inside of the command-line using the "cd" (Change Directory) command. 

Now when you are in the correct file path you can run the program using "npm run start" or run it with nodemon using "npm run dev".

To stop the program from running you will have to press CTRL + C on your keyboard.

Now you'll have to enter: localhost:1234 into your web browser and the application should be displayed.
This is a character generator that will generate names, addresses and countries.

With this you can also enter a range of numbers like this: "4-6" which will affect how many characters the first names can include.
So entering 4-6 will not let you get any results with first names lower than 4 characters but no more than 6 characters.

Last press generate to generate the list.

Psst! There's also a secret webpage if you go to the url: localhost:1234/secret


## Improvements

Since this is a character generator it would be much better if the application could generate more fictive names and places.
Now it generates real names and places which is good for some people who want to create a realistic story,
but it would be cool if you could select to generate fictive names so you can generate fictive characters.

Another improvement I was thinking of was making it so that with every character it also generates a backstory for it.
but this would require more time and somewhere to get the backstories from.


# Hope you enjoy the program!
