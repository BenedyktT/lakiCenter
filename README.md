## App live:
www.lakicenter.com

This project aims to optimize hotel communication with travel agencies.
Instead of sending an email with availability enquiry, partner can check live availability in this app


## Features

1.App connects with roomer open api, and generate availability report for requested by user date.
2. User with role admin can sign up new agencies with selected travel rates (if they register themselves the standard rate is applied)
3. User can restore password:
 a) user clicks forgot password link
 b) enter valid email that is linked to entry in database
 c) user receives email with link to reset password
## Link is valid only one time
## To achieve that following workflow is applied:
 a) forgot password endpoint hit
 b) router search existing user
 c) previously bcrypted old password is used as a secret to jsonwebtoken
 d) nodemailer sends link with jsonwebtoken parameter
 e) user changes password - so the initially generated link won't work because of secret token mismatch




### STACK
MERN stack with custom sass styling



## Cool things about it

1. It let save a lot of time for both hotel and clients
2. Safe authentication implemented without additional libraries such as Passport.js
3. Because roomer api does not have endpoint to directly get availability this app needed to take work around this problem - it collects 
and modify response to match the requirements


