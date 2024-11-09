function permutationSort(a) {
    if (a.length === 0) {
        return 1;
    }
    const permutations = permute(a);
    let count = 0;

    for (let perm of permutations) {
        count++;
        if (isSorted(perm)) {
            for (let i = 0; i < a.length; i++) {
                a[i] = perm[i];
            }
            return count;
        }
    }
}


function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function permute(arr, start = 0) {
    if (start === arr.length - 1) {
        return [[...arr]];
    }

    let result = [];
    let seen = new Set();
    for (let i = start; i < arr.length; i++) {
        if (!seen.has(arr[i])) {
            [arr[start], arr[i]] = [arr[i], arr[start]];
            result = result.concat(permute(arr, start + 1));
            [arr[start], arr[i]] = [arr[i], arr[start]];
            seen.add(arr[i]);
        }
    }
    return result;
}
