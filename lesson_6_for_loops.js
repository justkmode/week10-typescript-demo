
// ---- For Loops ----

let regions = ["us-west-1", "us-east-1", "eu-west-1", "ap-southeast-1"];

// 1. let i = 0; initialization step, runs at the beginning of the loop, it declares variable named i and sets its initial value to 0
// 2. i < regions.length; second part which is condition, loop condition which checks before every iteration of the loop, regions.lenght gives as a number of 
// elements in the regions array, the loop continues as long as i = 0 is less than a lenght of array, when i becomes greater or equal than region.lenght which 
// is 4 loop will stop.
// 3. i++ this is itteration experssion, it runs at the end of each loop itteration, i++ is a shortcut of i = i + 1, so in here it increases value of i = 0 by 1 

for (let i = 0; i < regions.length; i++) {
    console.log("Deploying to region: " + regions[i]);
}

// ---- Exercise ----

// Array of cloud services

let cloudServices = ["EC2", "S3", "Lambda", "DynamoDB"];

for (let i = 0; i < cloudServices.length; i++) {
    console.log("Configuring AWS " + cloudServices[i] + " Service");
}