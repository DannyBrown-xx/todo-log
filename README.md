# todo-log

A command line todo list built using logging in order to enable time travel. This app was built solely for me to learn about and play with building an application based on logs. I don't reccomend actually using it.

Transactions representing additions and removals of to-do items are stored in [JSON Lines Format](http://jsonlines.org).

# Add a to-do item
`npm start add "TITLE HERE" "DESCRIPTION HERE"`

# Remove a to-do item
`npm start remove IDHERE`

# List current to-dos
`npm start ls`

# List to-dos at some point in the past
`npm start ls 2`
Where the number is the amount of transactions you would like to turn back time on.
