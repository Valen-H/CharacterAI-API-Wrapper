# CharacterAI API Wrapper

## Usage

```js
//insert character identification from the browser url
mod.start("svz7BhvlP5Bk4JqrBPhqIdgOOZOBv8Ed1iiHDnyMRl4").then(async page => {
  const  res1  = await mod.send(page, "Test");
  
  console.log((await res1.json()).replies[0].text);
});
```
