const spinner = (characters) => {
  let timer = 100;
  for (const char of characters) {
    timer += 200;
    setTimeout(() => {
      process.stdout.write(char + '   ');
    }, timer);
  }
};

spinner(['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|']);