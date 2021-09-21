let i = 0
let animation = ['\r|','\r/','\r-','\r\\','\r|']
for (const char of animation){
setTimeout(() => {
  
  process.stdout.write(char + '      ');
}, i);
i += 200;
}
setTimeout(() => {
  process.stdout.write('\n')
}, i)



