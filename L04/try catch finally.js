function criticalCode() {
    throw "throwing an exception";
}

function logError(theException) {
    console.log(theException);
}

//Try...Catch
console.log("\n***** Try...Catch *****");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//Throwwing in Try...Catch
console.log("\n***** Throwing in Try...Catch *****");

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//Try...Catch...Finally
console.log("\n***** Try...Catch...Finally *****");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}
finally {
    console.log("Code that always will run");
}
function hello() {
    console.log('\n***Throwing Exceptions ***\n');
}