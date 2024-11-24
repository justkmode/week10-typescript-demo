
// ---- While Loops ----

let instanceCount = 0; // this line initializes the variable to keep track of how many instances that we've lunched 
const tragetCount = 5; // const value taht we dont wanna change, 5 target number of instances

while (instanceCount < targetCount) { // instanceCount < targetCount is checked before every itteration as long as its true
    console.log("Launching EC2 instance #" + (instanceCount + 1));
    instanceCount++; // increments our count, without this loop would never end
}