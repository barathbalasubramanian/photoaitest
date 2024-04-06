
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


# Supabase Table Schemas

This document outlines the schemas for various tables in a Supabase database.

## Studio-Admin Table

The `Studio-Admin` table stores information about administrators of the studio.

| Column Name          | Data Type | Description                                        |
|----------------------|-----------|----------------------------------------------------|
| :key: UserID               | TEXT      | User's ID                                          |
| :lock: Password             | TEXT      | User's password                                    |
| :ballot_box_with_check: is_verified          | TEXT      | Verification status of the user                    |
| :calling: WhatsApp_API         | TEXT      | WhatsApp API details                               |
| :star: Is_Prime_User        | BOOLEAN   | Indicates if the user is a prime user or not       |
| :framed_picture: Logo                 | TEXT      | URL or path for the user's logo                    |
| :phone: Phone_No             | NUMERIC   | User's phone number                                |
| :round_pushpin: Location             | TEXT      | User's location                                    |
| :globe_with_meridians: Website              | TEXT      | User's website URL                                 |
| :white_check_mark: Is_Whatsapp_Verified| BOOLEAN   | Indicates if user's WhatsApp is verified or not    |

## UserEvents Table

The `UserEvents` table records various events associated with users.

| Column Name          | Data Type | Description                                        |
|----------------------|-----------|----------------------------------------------------|
| :id: EventID              | INT8      | Unique event identifier                            |
| :bust_in_silhouette: UserID               | TEXT      | Reference to user's ID                              |
| :calendar: EventDate            | DATE      | Date of the event                                  |
| :bulb: EventName            | TEXT      | Name of the event                                  |
| :memo: EventDetail          | JSON      | Detailed information about the event               |
| :heart: FavouriteImages      | JSON      | Favorite images related to the event               |
| :card_index: Customer_ID_UUID     | TEXT      | Reference to customer's ID                          |
| :moneybag: Mode_Of_Payment      | TEXT      | Mode of payment for the event                      |
| :currency_exchange: Full_Amount          | INT8      | Full amount paid for the event                     |
| :money_with_wings: Advance_Payment      | JSONB     | Information about any advance payment made         |
| :bar_chart: Status               | TEXT      | Status of the event                                |
| :e-mail: DigitalInvite        | JSONB     | Digital invite details                             |
| :round_pushpin: Location             | TEXT      | Location of the event                              |
| :file_folder: Folders              | JSONB     | Folders related to the event                       |
| :camera: SelfieData           | JSONB     | Selfie data related to the event                   |
| :key: Secret_Key           | TEXT      | Secret key related to the event                    |

## GreetingName Table

The `GreetingName` table stores information about greetings.

| Column Name          | Data Type | Description                                        |
|----------------------|-----------|----------------------------------------------------|
| :id: Greeting_ID          | UUID      | Unique greeting identifier                         |
| :speech_balloon: Desc                 | TEXT      | Description of the greeting                        |
| :frame_with_picture: Photo                | TEXT      | URL or path for the greeting's photo               |
| :bust_in_silhouette: User_Name            | TEXT      | User's name associated with the greeting           |
| :label: Greeting_Name        | TEXT      | Name of the greeting                               |

## CustomerName Table

The `CustomerName` table stores information about customers.

| Column Name          | Data Type | Description                                        |
|----------------------|-----------|----------------------------------------------------|
| :id: Customer_ID          | UUID      | Unique customer identifier                         |
| :bust_in_silhouette: Customer_Name        | TEXT      | Customer's name                                    |
| :iphone: Mobile               | INT8      | Customer's mobile number                           |
| :bust_in_silhouette: User_Name            | TEXT      | User's name associated with the customer           |
| :e-mail: Email_ID             | TEXT      | Customer's email address                           |
| :round_pushpin: Location             | TEXT      | Customer's location                                |


# Selfie-bucket

This document outlines the structure and contents of the S3 bucket named "Selfie-bucket".

├── Studio-admin 1
│   ├── Compressed Images
│   │   ├── Available Folders
│   │   │   └── Images
│   │   └── Desc: Contains compressed images of all photos in folder format.
│   ├── Favourites.json
│   │   └── Desc: JSON file containing favorite photos.
│   ├── Favourites
│   │   └── Photos in zip format
│   │       └── Desc: Zip file containing favorite photos.
│   ├── PhotographEncoded.json
│   │   └── Desc: JSON file containing all photos in the studio for processing in AI model.
│   ├── Photographers image
│   │   └── Available Folders
│   │       └── Images
│   │           └── Desc: Contains photos organized in folders.
│   ├── Selfie_Encoded.json
│   │   └── Desc: JSON file containing photos in encoded format for processing in AI model.
│   └── Selfie
│       └── Username
│           ├── Images in jpeg format
│           └── Data.json
│               └── Desc: JSON file containing user information.
│           └── Desc: Contains images in JPEG format for the specific user.
│       
├── Studio-admin 2
│   ├── ...
│   
└── Studio-admin 3
    ├── ...
