self.addEventListener("install", (event) => {
     console.log("Service worker installed");
     // Perform install steps
});

self.addEventListener("activate", (event) => {
     console.log("Service worker activated");
     // Perform activate steps
});

self.addEventListener("fetch", (event) => {
     // Handle fetch events
});
