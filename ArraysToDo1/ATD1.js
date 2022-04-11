

function pushToFrontV2(arr, val) {
    
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i+1] = arr[i];
    }
    arr[0] = val; 
}

function popFront(arr) {
    var returnVal = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    return returnVal;
}

function insertAt(arr, val, ind) {
   
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i+1] = arr[i];
    }
    arr[ind] = val; 
}

function removeAt(arr, ind) {
    ind = Math.floor(ind); 
    if (ind >= arr.length || ind < 0) {
        return null; 
    }
    var returnVal = arr[ind]; 
    for (var i = ind + 1; i < arr.length; i++) {
        arr[i-1] = arr[i];
    }
    arr.pop(); 
    return returnVal;
}

function swapPairs(arr) {
    for (var i = 0; i < arr.length - 1; i += 2) {
       
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
}


function removeDupesV1(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i+1] == arr[i]) { 
            while (arr[i+1] == arr[i]) {
                removeAt(arr,i+1);
            }
        }
    }
}


function removeDupesV2(arr) {
    if (arr.length <= 1) { 
        return;
    }
    var lastUniqueVal = arr[0];
    var nextUniqueInd = 1; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != lastUniqueVal) {
            lastUniqueVal = arr[i];
            arr[nextUniqueInd] = arr[i];
            nextUniqueInd++;
        }
    }
    arr.length = nextUniqueInd; 
}