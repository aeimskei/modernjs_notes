# More UI/UX Behaviors

Next, we'll add more behavior like clearing the Search bar and the DOM template when Search bar is cleared. Also, We'll create an alert to improve user experience when data of that user they're searching for is not found.

## Clear DOM Template when Search Bar Clear

In **app.js** in ```else``` where we commented "if true, clear profile info on DOM", we have to call ```ui``` from the UI Class and add a method called ```clearProfile()```. 

**app.js**
```
...
  } else {
    ui.clearProfile();
  }
```

Then, in **ui.js**, go to the bottom and create a ```clearProfile``` function. Inside, have ```this.profile.innerHTML = ''```. Simple as that. Now, when the Search bar is clear, the DOM is going to be empty and cleared out.

**ui.js**
```
...
  clearProfile() {
    this.profile.innerHTML = '';
  }
```

## Show Alert Message When No Data Found

<kbd>![alt text](img/screenshot.png "screenshot")</kbd>