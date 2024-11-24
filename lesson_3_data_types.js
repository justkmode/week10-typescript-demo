
// Data Types in JavaScript

// 1 ---- Number ----
const instanceCount = 5;
const cpuUtilization = 75.5;

console.log(typeof instanceCount); // Outputs: number
console.log(typeof cpuUtilization); // Outputs: number

// 2 ---- String ----
const region = "us-west-2";
const errorMessage = "Resource not found";
const logEntry = "Deployment failed in ${region}: ${erroeMessage}";

console.log(typeof region); // Outputs: string

// 3 ---- Boolean ----
const isProduction = true;
const debugMode = false;

console.log(typeof isProduction); // Outputs: boolean

if (isProduction && !debugMode) {
    console.log("Running in production mode");
}

// 4 ---- Undefined ----
let configFile;
console.log(typeof configFile); // Outputs: undefined 

if (configFile === undefined) {
console.log("Config file not loaded");
    // Load config file here
}

// 5 ---- Null ----
const cacheResult = null;
console.log(typeof cacheResult); // Outputs: Object (this is a known JavaScript quirk)

if (cacheResult === null) {
    console.log("No data in cache, tetching from database");
    // Fetch data from database
}

// 6 ---- Object Literals ----
const ec2Instance = {
    insatnceID: "i-1234567890abcdef0",
    type: "t2.micro",
    state: "running",
    launchTime: new Date("2023-09-15T10:00:00Z")
};

console.log(typeof ec2Instance); // Outputs: object
console.log(ec2Instance.type); // Outputs: t2.micro

// 7 ---- Arrays ----
const availabilityZones = ["us-west-2a", "us-west-2b", "us-west-2c"];
console.log(typeof availabilityZones); // Outputs: object
console.log(Array.isArray(availabilityZones)); // Outputs: true

// 8 ----    ----