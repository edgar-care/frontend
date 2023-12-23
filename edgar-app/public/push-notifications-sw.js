// Register event listener for the 'push' event.
self.addEventListener('push', (event) => {
	// Retrieve the textual payload from event.data (a PushMessageData object).
	// Other formats are supported (ArrayBuffer, Blob, JSON), check out the documentation
	// on https://developer.mozilla.org/en-US/docs/Web/API/PushMessageData.
	const payload = event.data.json();

	// Keep the service worker alive until the notification is created.
	event.waitUntil(
		// Show a notification with title 'ServiceWorker Cookbook' and use the payload
		// as the body.
		self.registration.showNotification(payload.title, {
			body: payload.body,
			icon: payload.icon,
			badge: payload.badge,
			data: {
				url: payload.url
			}
		})
	);
});

// Handle user clicking on notification
self.addEventListener('notificationclick', event => {
	event.notification.close();

	event.waitUntil(
		clients.openWindow(event.notification.data.url)
	);
});