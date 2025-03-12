# Cash Register App
A simple web application that calculates change for a transaction based on the item's price, the amount of cash provided, and the available cash in the register.

## Features
- **User Input Validation**: Alerts users if insufficient cash is provided.
- **Exact Cash Detection**: Displays a message when no change is due.
- **Change Calculation**: Determines the correct amount of change using the highest denominations first.
- **Cash Register Status Handling**: Returns "OPEN", "CLOSED", or "INSUFFICIENT_FUNDS" based on available cash.
- **Responsive Design**: Works well on both desktop and mobile.

## Technologies Used
- **HTML5**: For the page structure.
- **CSS3**: For styling and responsiveness.
- **JavaScript (ES6)**: For handling the cash register logic.

## How to Use
1. Enter the amount of cash provided in the input field.
2. Click the "Purchase" button.
3. The app will display:
   - `"No change due - customer paid with exact cash"` if no change is needed.
   - `"Status: OPEN"` followed by the breakdown of change if sufficient funds exist.
   - `"Status: CLOSED"` if the register is emptied exactly.
   - `"Status: INSUFFICIENT_FUNDS"` if the register cannot return the exact change.

## How to View
1. Clone this repository:
   ```bash
   git clone git@github.com:tylerhuynh287/freeCodeCampProject9.git