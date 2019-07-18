const arg=require('arg');
const args=arg({
  '-e':String
});
let env=args['-e'];

if (env=='development') {
  //this is development
  let config=require()
}

