# byu-calendar

This is a simple Web Component to act as a wrapper for the other calendar components.

# Getting Started

To add the component to your page, you'll need to include the following script and style references in your &lt;head&gt;:

    <script src="//cdn.byu.edu/byu-calendar-tile/latest/byu-calendar-tile.min.js"></script>
    <script src="//cdn.byu.edu/byu-calendar-row/latest/byu-calendar-row.min.js"></script>
    <link rel="stylesheet" href="//cdn.byu.edu/byu-calendar/latest/byu-calendar.min.css">
    <script src="//cdn.byu.edu/byu-calendar/latest/byu-calendar.min.js"></script>

Then insert a byu-calendar tag in your page's html:

    <byu-calendar
        title="Upcoming Events"
        categories="3+4+5"
        days="7"
        price="4.5"            
        display="4"  
        limit="4">
    </byu-calendar>

The available options are as follows:

## Title:
The title text displayed above the widget. The default is "Calendar Events".

## Categories: 
All the categories you want to subscribe to, separated by a '+'. You can also subscribe to "All" to get all events.

## Days:
Enter the number of days going forward from today. The default if left blank is 14 days.

## Price:
Optional: If you want to filter values to only those equal to or below a certain price, add a price filter in decimal or integer format

## Display:
The desired layout for this calendar component. There are 5 available options:
1. List type, grouped by date
2. Vertical tiles.
3. Horizontal tiles
4. Full Page calendar list with tile rows, including pricing/ticket info.
5. Full Page calendar list with image rows (grouped by date), including pricing/ticket info.


## Limit: 
The limit is optional. It is for the purpose of putting a max limit on how many events are returned. The display type you choose will also determine the limit. I.E. for the list format you may want a limit of 10 or 20. For the vertical tile display you may want a limit of 3 or 4. For horizontal you may want a limit of 2 or 4. Note that tile displays will wrap to the next line if the number of events returned can't all fit in one row.
            