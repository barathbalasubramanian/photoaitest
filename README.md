
# Photo AI

Hi this project is done in next.js
## Authors

- [@jitenderji1137](https://github.com/jitenderji1137)


## Documentation

[Documentation](https://github.com/jitenderji1137)

## Explanation of Web Structure

1. Home
2. create-event ( To Create New Event)
3. dashboard ( To veiw all the photos )
4. digitalinvite ( To invite Peoples digitaly )
5. Qrcode ( To Show QrCode )
6. Search ( To Search Any Fun )
7. upload ( To Upload Photos To S3 Bucket )
8. User ( User Can Get There Photos )
9. Download ( to download any csv file or photos )

## Dependecies used for this project 
    "@aws-sdk/client-s3": "^3.509.0",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.5",
    "@mui/icons-material": "^5.15.14",
    "@mui/joy": "^5.0.0-beta.32",
    "@mui/lab": "^5.0.0-alpha.161",
    "@mui/material": "^5.15.14",
    "@mui/styled-engine-sc": "^6.0.0-alpha.12",
    "@mui/x-date-pickers": "^7.1.0",
    "@reduxjs/toolkit": "^2.2.1",
    "@supabase/supabase-js": "^2.39.3",
    "axios": "^1.6.5",
    "browser-image-compression": "^2.0.2",
    "dayjs": "^1.11.10",
    "file-saver": "^2.0.5",
    "image-to-base64": "^2.2.0",
    "jszip": "^3.10.1",
    "next": "14.0.4",
    "nextjs-toploader": "^1.6.4",
    "qrcode": "^1.5.3",
    "rc-progress": "^3.5.1",
    "react": "^18",
    "react-datepicker": "^6.6.0",
    "react-dom": "^18",
    "react-minimal-pie-chart": "^8.4.0",
    "react-qr-code": "^2.0.12",
    "react-redux": "^9.1.0",
    "react-toastify": "^10.0.5",
    "react-webcam": "^7.2.0",
    "styled-components": "^6.1.8",
    "sweetalert2": "^11.10.3",
    "xlsx": "^0.18.5"


## Installation

Install my-project with npm

```bash
  git clone <Repo>
  cd <Repo>
  npm install
```
Open browser and visit :- http://localhost:3000
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_SUPABASE_URL`

`NEXT_PUBLIC_SUPABASE_KEY`

`NEXT_PUBLIC_APP_PHOTO_AI_SECRET_WORD`

`NEXT_PUBLIC_API_BASE_URL`

`NEXT_PUBLIC_WEB_APP_BASE_URL`

`NEXT_PUBLIC_AWS_ACCESS_KEY`

`NEXT_PUBLIC_AWS_SECRET_KEY`

`NEXT_PUBLIC_AWS_BUCKET_NAME`

`NEXT_PUBLIC_AWS_BUCKET_REGION`


## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```






# Schema Design for UserEvents Table in Supabase

## Overview

This document outlines the schema design for the `UserEvents` table in a Supabase database. The `UserEvents` table is designed to store events associated with users in a Supabase-powered application. These events could represent various user interactions, such as logins, registrations, purchases, etc.

## Table Structure

The `UserEvents` table is designed with the following columns:

1. **id**: An auto-incrementing unique identifier for each event.
2. **user_id**: A foreign key referencing the `id` column of the `Users` table, representing the user associated with the event.
3. **event_type**: A string indicating the type of event (e.g., "login", "registration", "purchase").
4. **event_timestamp**: A timestamp indicating when the event occurred.
5. **details**: Additional details about the event, stored as JSON data.

### Example Table Structure

| Column Name      | Data Type        | Description                                                      |
|------------------|------------------|------------------------------------------------------------------|
| id               | SERIAL PRIMARY KEY | Unique identifier for each event.                                 |
| user_id          | INTEGER          | Foreign key referencing the `id` column of the `Users` table.     |
| event_type       | VARCHAR(100)     | Type of event (e.g., "login", "registration", "purchase").       |
| event_timestamp  | TIMESTAMP        | Timestamp indicating when the event occurred.                    |
| details          | JSONB            | Additional details about the event, stored as JSON data.         |

## Usage

### Creating the Table

You can create the `UserEvents` table in your Supabase database using the following SQL command:

```sql
CREATE TABLE UserEvents (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES Users(id),
    event_type VARCHAR(100),
    event_timestamp TIMESTAMP,
    details JSONB
);


