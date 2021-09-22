# Anywhere Fitness

## Table of contents

- **[Overview](#overview)**<br>
- **[API Endpoints](#api-endpoints)**<br>

## <a name="overview"></a>Overview

AnywhereFitness is the all-in-one solution to meet your “on-location” fitness class needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 

## <a name="api-endpoints"></a>API endpoints

### https://bw-anywhere-fitness-05.herokuapp.com/

### **_Authentication (for login)_**

| Method        | Endpoint           | Body (required)                        | Body (optional)                         | Notes                                             |
| ------------- | ------------------ | -------------------------------------- | --------------------------------------- | ------------------------------------------------- |
| POST Register | /api/auth/register | first_name, last_name, email, password | role (defaults to boolean 0 for client) | Creates a new user object in the database.        |
| POST Login    | /api/auth/login    | email, password                        | N/A                                     | Returns a welcome message and the JSON Web Token. |
                                                                                                         
### **_Endpoints for the Users_**

| Method                        | Endpoint                           | Body (required) | Body (optional) | Notes                                                            |
| ----------------------------- | ---------------------------------- | --------------- | --------------- | ---------------------------------------------------------------- |
| GET All Classes               | /api/classes                       | N/A             | N/A             | Fetches all the classes from the database                        |
| GET All Users                 | /api/users                         | N/A             | N/A             | Fetches all the users from the database                          |
