# TechTrails

## [Live Link](https://techtrails-2015.web.app/)

## Description

This project is a web application built using React and Firebase for user authentication and data management. It allows users to sign up, log in, and manage their profiles while interacting with a blog system.

## Features

- **User Authentication**: Users can sign up and log in using email/password or Google authentication.
- **Profile Management**: Users can manage their profiles, including updating their display name and avatar.
- **Comment System**: Users can comment on blog posts, with restrictions preventing them from commenting on their own posts.
- **Responsive Design**: The application is designed to be responsive, providing a good user experience on both desktop and mobile devices.
- **Loading States**: The application provides loading indicators while data is being fetched or processed.
- **Error Handling**: User-friendly error messages are displayed for authentication and data fetching issues.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Firebase**: A platform for building web and mobile applications, providing authentication and real-time database services.
- **Axios**: A promise-based HTTP client for making requests to the backend.
- **React Router**: For handling routing within the application.

## Installation

To get started with this project, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/FardinMahadi/b10-a11-blog-post-client-side.git
   cd your-repo-name
   ```

2. **Install npm packages**:
   Make sure you have Node.js and npm installed. Then run:

   ```bash
   npm install
   ```

3. **Set up Firebase**:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable authentication methods (Email/Password and Google).
   - Add your Firebase configuration to the `firebase.config.js` file in the project.

4. **Run the application**:

   ```bash
   npm start
   ```

5. **Open your browser**:
   Navigate to `http://localhost:3000` to view the application.

## Installed npm Packages

Here is a list of npm packages used in this project:

- `axios`: For making HTTP requests.
- `firebase`: For authentication and database services.
- `react`: The core library for building user interfaces.
- `react-dom`: For DOM rendering.
- `react-router-dom`: For routing in React applications.
- `react-icons`: For using icons in the application.
- `react-scripts`: For running scripts related to React applications.
- `prop-types`: For type-checking props in React components (if used).
- `dotenv`: For managing environment variables (if used).

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the contributors and the open-source community for their support and resources.
