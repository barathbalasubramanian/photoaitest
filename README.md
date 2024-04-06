
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




# Schema Design for Supabase Tables

## Studio-Admin

- **UserID**: Text field to store the user's ID.
- **Password**: Text field to store the user's password.
- **is_verified**: Text field indicating whether the user is verified or not.
- **WhatsApp_API**: Text field for storing WhatsApp API details.
- **Is_Prime_User**: Boolean field indicating whether the user is a prime user or not.
- **Logo**: Text field for storing the logo URL or path.
- **Phone_No**: Numeric field to store the user's phone number.
- **Location**: Text field to store the user's location.
- **Website**: Text field to store the user's website URL.
- **Is_Whatsapp_Verified**: Boolean field indicating whether the user's WhatsApp is verified or not.

## UserEvents

- **EventID**: Int8 field for unique event identification.
- **UserID**: Text field referencing the user's ID.
- **EventDate**: Date field indicating the date of the event.
- **EventName**: Text field for storing the name of the event.
- **EventDetail**: JSON field for storing detailed information about the event.
- **FavouriteImages**: JSON field for storing favorite images related to the event.
- **Customer_ID_UUID**: Text field referencing the customer's ID UUID.
- **Mode_Of_Payment**: Text field indicating the mode of payment for the event.
- **Full_Amount**: Int8 field indicating the full amount paid.
- **Advance_Payment**: JSONB field for storing information about any advance payment made.
- **Status**: Text field indicating the status of the event.
- **DigitalInvite**: JSONB field for storing digital invite details.
- **Location**: Text field indicating the location of the event.
- **Folders**: JSONB field for storing folders related to the event.
- **SelfieData**: JSONB field for storing selfie data related to the event.
- **Secret_Key**: Text field for storing a secret key related to the event.

## GreetingName

- **Greeting_ID**: UUID field for unique greeting identification.
- **Desc**: Text field for describing the greeting.
- **Photo**: Text field for storing the photo URL or path.
- **User_Name**: Text field for storing the user's name.
- **Greeting_Name**: Text field for storing the name of the greeting.

## CustomerName

- **Customer_ID**: UUID field for unique customer identification.
- **Customer_Name**: Text field for storing the customer's name.
- **Mobile**: Int8 field for storing the customer's mobile number.
- **User_Name**: Text field for storing the user's name.
- **Email_ID**: Text field for storing the customer's email address.
- **Location**: Text field for storing the customer's location.



