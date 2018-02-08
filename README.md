# mJS
A mini-javascript library for determing key values oninput<br />
Best use for mobile and devices that doesn't support onkeyup and onkeydown event detection.<br/>
<b><a href="https://github.com/pvzzombs/mJS/raw/master/m.js">Download</a></b>
<br/><br />
### Usage ###

<b>Step 1.</b> Include mJS in your document head<br/>
```html
<script src="m.js"></script>
```

<b>Step 2</b> Get the key by putting the `m.getKey()` function to the textarea's oninput event.<br/>
<i>Pass it with params, the first one is the textarea value. The second one is an optional array that contains 2 empty strings.</i><br />
<i>It would return an array containing 2 values, the first value is the key and the second is the index</i>
<span color="gray">Example :</span><br/>
```html
<textarea id="sample" oninput="copy(m.getKey(this.value,a))"></textarea>
<script>
  var a = ["",""];
  function copy(val){
      console.log("The key is " + val[0] + "and the index is " + val[1]);
  }
</script>
```

<br/>
<br />

#### That's it thanks for using.
