const animation = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let timer = 100;

for (const char of animation) {
  timer += 200;
  setTimeout(() => {
    process.stdout.write(char + '   ');
  }, timer);
}