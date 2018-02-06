# mJS
A mini-javascript library for determing key values oninput
<br/><br />
### Usage ###

<b>Step 1.</b> Include mJS in your document head<br/>
<code> &lt;script src="m.js"&gt;&lt;/script&gt;</code><br/>

<b>Step 2</b> Get the key by putting the <code>m.getKey()</code> function to the textarea's oninput event.<br/>
<i>Pass it with params, the first one is the textarea value. The second one is an optional array that contains 2 empty strings.</i><br />
<i>It would return an array containing 2 values, the first value is the key and the second is the index</i>
<span color="gray">Example :</span><br/>
<code>&lt;textarea id="sample" oninput="copy(m.getKey(this.value,a))"&gt;&lt;/textarea&gt;<br/>
&lt;script&gt;<br/>
  var a = ["",""];<br/>
  function copy(val){<br/>
      console.log("The key is " + val[0] + "and the index is " + val[1]);<br />
  }<br/>
&lt;/script&gt;<br/>
</code><br/>
<br />

#### That's it thanks for using.
