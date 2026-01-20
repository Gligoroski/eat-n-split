# Eat & Split

A simple React application for splitting bills with friends. Keep track of who owes what and settle up easily!

## Features

- **Add Friends**: Add friends to your list with their names and profile pictures.
- **Select Friend**: Choose a friend to split a bill with.
- **Split Bills**: Enter the bill amount and your expense, and the app calculates who owes what.
- **Balance Tracking**: See the balance for each friend (positive means they owe you, negative means you owe them).

## Technologies Used

- React 19
- JavaScript (ES6+)
- CSS for styling
- Create React App for build setup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gligoroski/eat-n-split.git
   cd eat-n-split
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (irreversible)

## Usage

1. Add friends using the "Add Friend" button.
2. Select a friend from the list.
3. Enter the bill details in the split bill form.
4. The balances will be updated automatically.

## Project Structure

```
src/
  components/
    App.js          # Main app component
    FriendsList.js  # List of friends
    AddFriend.js    # Form to add a new friend
    Friend.js       # Individual friend component
    SplitBill.js    # Form to split a bill
  ...
```

## Contributing

Feel free to submit issues and pull requests.

## License

This project is for educational purposes.
