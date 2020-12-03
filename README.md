# nine_to_five_day_scheduler

#I was tasked with creating a simple calendar application that allows a user to save events for each hour of the day. 

#User Story 
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

#Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

#What I did
I utilized bootstrap to create the framework for the hours, input area and save box.  Although it’s small, the blue box at the end of each line is a save icon I copied from font awesome.  I then used jQuery to display the day, date, and time at the top of the page in conjunction with moment.js.  The rest of my code allows the user to save their input to local storage and generates a set of colors based on if the time you’re viewing the scheduler is in the past, present or future. It updates on the hour and not by the minute or minutes.
