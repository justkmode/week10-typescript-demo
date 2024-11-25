
// ---- Basic Functions ----

function sayHello() {
    console.log("Hello, Cloud Engineer!")
}

// Calling function
sayHello();


// ---- Function Parameters ----

function deployToRegion(region) {
    console.log("Deploying to region: " + region);
}

// Calling Function with Parameters
deployToRegion("us-west-2");

// // ---- Exercise ----
// Function name configureService

// two parameters, serviceName and tier ( EC2, t2.micro)

// Inside the function - console.log + print both parameters

// Call function

function configureService(serviceName, tier) {
    console.log("Configuring " + serviceName + " service with tier: " + tier);
}

configureService("EC2","t2.micro")
configureService("S3","standard")