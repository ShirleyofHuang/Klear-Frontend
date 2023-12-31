## Setup
1. Login and Install dependencies via ```./script/bootstrap```
2. Download the Expo app
3. run ```expo start``` to load the app
3. Open expo on phone and should be able to find the app there

## env variables
Message a team member to fill our .env file

## Testing User
- Use karen.smith@gmail.com with the password "pw" to login to a generic account. 

## Troubleshooting

- When trying to connect to this app, if the Expo app says "Something went wrong. Network response timed out." Try these:
  1. If you're using public Wifi like eduroam, you have to connect via usb or ```expo start --tunnel```. Note --tunnel makes the app slower.
  2. If at home, ensure your laptop's Network Profile is set to private, not public and the laptop is connected to the same Wifi network as your phone. 
  3. Type ```expo login``` in terminal, make sure it is the same user as the one you logged in with on the Expo mobile app
  
- If an API call responds with "Network request failed"
  1. If you're using "localhost" in your url, remember "localhost" is different on your device and computer