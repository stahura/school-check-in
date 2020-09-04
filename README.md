## Student Check In App

The purpose of this application is to practice making a table component with React, passing props into the table and re-rendering that table whenever students are created or deleted. You can create new students and cycle through the list of students. You can check them in or out and they'll show up in the home screen.

### Instructions for setup

This was created with create-react-app, so all you have to do is 'npm start' once you have installed the necessary packages. 

### This app is incomplete

I did not create the section to edit/create/delete administrators because it simply wasn't a priority. The priority is working with state and react hooks and 
passing down props. I'll eventually update the app with full functionality.

### Known issues

Beyond the sections of the app that are simply incomplete, these are the known issues:

The toolbar/appbar that comes from the side isn't considered a sibling to the tables. This has made it a struggle to style that page and properly center the table

If you create a student and return to the homescreen by clicking the "school administration" title on the header, the checkedinstudents table will not be updated unless you refresh.


