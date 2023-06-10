# Meili Search App

This is a React.js app that utilizes MeiliSearch for fast and relevant search queries. It features a dark/light toggle mode and smooth scrolling.

## Description

The Meili Search App is a search interface that integrates with MeiliSearch, an open-source search engine. It allows users to search and retrieve data with ease, while providing a visually pleasing experience through a dark/light toggle mode. The app also incorporates smooth scrolling for seamless navigation.

## Features

- Search: Perform real-time search queries to retrieve relevant results.
- Dark/Light Toggle Mode: Switch between dark and light themes for personalized viewing.
- Smooth Scrolling: Enjoy a smooth scrolling experience while navigating through the app.
- Responsive Design: The app is responsive and adapts to different screen sizes for optimal user experience.
- MeiliSearch Integration: The app integrates with MeiliSearch to provide fast and accurate search results.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- MeiliSearch: An open-source search engine for efficient search operations.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- HTML and CSS: Markup and styling for the user interface.

## Installation

1. Clone the repository: `git clone https://github.com/golammostafa13/meili-search-app.git`
2. Navigate to the project directory: `cd meili-search-app`
3. Install dependencies: `npm install`

## Configuration

To configure the Meili Search host and API key, follow these steps:

1. Open the `src/services/meiliSearch.js` file.
2. Set the `MEILI_SEARCH_HOST` variable to your Meili Search server's URL.
3. Set the `MEILI_SEARCH_API_KEY` variable to your Meili Search server's API key.

```javascript
const MEILI_SEARCH_HOST = "https://your-meili-search-url";
const MEILI_SEARCH_API_KEY = "your-api-key";
```

Note: Ensure that you have a running instance of MeiliSearch and obtain the API key for your server.

## Usage

1. Start the app: `npm start`
2. Open the app in your browser.
3. Enter your search query in the search bar.
4. The app will perform a search query against MeiliSearch and display the matching results.
5. Toggle between dark and light mode using the theme toggle button.
6. Enjoy a smooth scrolling experience while navigating through the app.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## License

[MIT License](LICENSE)

Repository: [https://github.com/golammostafa13/meili-search-app](https://github.com/golammostafa13/meili-search-app)
