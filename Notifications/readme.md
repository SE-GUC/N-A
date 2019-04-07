Note that you're required to generate ur own vapid keys by typing "./node_modules/.bin/web-push generate-vapid-keys" in terminal and pasting both keys in config and public key in public/app.js

1) npm i inside the Notifications folder 
2) run node ./Notifications/server running on port 7000
3) postman(post) localhost:7000/push
{
	"title":"Project Request",
	"url":"https://www.google.com",
	"message":"Congrats you have been accepted"
}