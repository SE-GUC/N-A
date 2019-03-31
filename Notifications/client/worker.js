console.log("Service Worker Loaded...");

self.addEventListener("push", e => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
      body: "Notification Pre-Test",//must close the tab of chrome and open it again to see the change in body
      icon: './images/icon.png',
      badge: './images/badge.png'  });
});
