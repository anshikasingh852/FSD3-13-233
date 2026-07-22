import {EventEmitter} from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
  console.log(`Logged In to ${name}`);
};
const starts = () => {
  console.log("System started");
};
task.on("greet", starts); //event and method binding
task.on("greet", sayHi); 
task.on("greet", (name) => {
    console.log(` ${name} starts shopping`);
});
task.on("greet", (name) => {
    console.log(` ${name} is logged out`);
});
task.emit("greet", "Anil Pandey");//announcement
task.emit("greet", "Anshika Singh");
task.emit("greet", "Rahul Singh");