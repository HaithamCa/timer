let alarm = process.argv
let count = 1000
const timer = () => {
    for (let i = 2; i < alarm.length; i++) {
    if (alarm[i] >= 0) {
        setTimeout(() => {
            process.stdout.write('.');
        }, count * alarm[i]);
    }
}
}

timer(alarm)