WIP Website for Recipe Hosting, and Ingredient Management

This application uses Next.js, Prisma, and Next-auth.

# Getting Started

First, clone this repository:

git clone https://github.com/your-username/your-project-name.git

Then, navigate to the project directory and install the dependencies:

cd your-project-name
npm install

## Configuration

Environment Variables
Create a new file named .env.local in the root directory of your project. Add the following environment variables to this file:

DATABASE_URL="postgresql://user:password@localhost:5432/database-name?schema=public"

Replace user, password, and database-name with your own values.

Database Migration
Run the following command to create the database schema:

npx prisma migrate dev --name init

## Authentication Providers

This app is configured to use GitHub and Google as authentication providers. To use these providers, you need to create OAuth applications on their respective developer portals.

[WIP]

GitHub
Go to GitHub Developer Settings.
Click on New OAuth App.
Fill in the form with the following details:
Application name: Your app name.
Homepage URL: http://localhost:3000.
Authorization callback URL: http://localhost:3000/api/auth/callback/github.
Click on Register application.
Copy the Client ID and Client Secret values.

Google
Go to Google Cloud Console.
Create a new project or select an existing one.
In the left sidebar, click on APIs & Services > Credentials.
Click on Create credentials > OAuth client ID.
Fill in the form with the following details:
Application type: Web application.
Name: Your app name.
Authorized JavaScript origins: http://localhost:3000.
Authorized redirect URIs: http://localhost:3000/api/auth/callback/google.
Click on Create.
Copy the Client ID and Client Secret values.
Start the Development Server
Run the following command to start the development server:

npm run dev

Open http://localhost:3000 with your browser to see the result.

Learn More
To learn more about Next.js, Prisma, and Next-auth, take a look at the following resources:

Next.js Documentation
Prisma Documentation
Next-auth Documentation
