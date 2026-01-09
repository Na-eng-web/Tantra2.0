# EmailNotification

Email notification service backend built with Node.js, Express, Nodemailer, and MongoDB Atlas.

## Features

- Subscribe endpoint that collects user information (firstName, lastName, email, phone, message)
- Sends acknowledgment email to subscribers
- Sends notification email to admin with all subscriber details
- Stores subscription data in MongoDB Atlas

## Environment Variables

Create a `.env` file in `packages/backend/` with the following variables:

```env
BACKEND_PORT=4000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

## Running Locally

1. Install dependencies from the root:
   ```bash
   npm install
   ```

2. Start the backend:
   ```bash
   npm start
   ```

## Running with Docker

### Using Docker Compose (Recommended)

1. Ensure your `.env` file is in `packages/backend/`

2. Build and run the container:
   ```bash
   docker-compose up --build
   ```

3. The backend will be available at `http://localhost:4000`

4. To stop:
   ```bash
   docker-compose down
   ```

### Using Docker directly

1. Build the Docker image:
   ```bash
   cd packages/backend
   docker build -t email-notification-backend .
   ```

2. Run the container:
   ```bash
   docker run -p 4000:4000 --env-file .env email-notification-backend
   ```

## API Endpoints

### POST /subscribe

Subscribe a user and send notification emails.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "1234567890",
  "message": "Looking forward to updates!"
}
```

**Response:**
```
Subscription successful. Emails sent and data saved.
```
