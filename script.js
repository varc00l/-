let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

for (let j = 2; j <= 20; j++) {
    if (j % 2 !== 0) {
        continue;
    }
    console.log(j);
}

let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
}

let n = 15; 
for (let i = 1; i < 20; i++) {
    if (i >= n) {
        break;
    }
    console.log(i);
}
