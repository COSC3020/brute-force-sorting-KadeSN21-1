function permutationSort(arr) {
    if (arr.length === 0) {
        return 1; 
    }

    let count = 0;
    const permutations = permute(arr);  

    for (let perm of permutations) {
        count++;
        if (isSorted(perm)) {
            for (let i = 0; i < arr.length; i++) {
                arr[i] = perm[i];
            }
            return count;  
        }
    }

    return count;  
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function permute(arr) {
    let result = [];
    
    if (arr.length === 1) {
        return [arr.slice()];
    }
    
    for (let i = 0; i < arr.length; i++) {
        let rest = arr.slice(0, i).concat(arr.slice(i + 1));
        let restPerms = permute(rest);

        for (let perm of restPerms) {
            result.push([arr[i], ...perm]);  
        }
    }
    return result;
}


