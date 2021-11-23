function inverso(x) {
    if (typeof x === "boolean") {
      return !x;
    } else if (typeof x === "number") {
      return x * -1;
    } else {
      return `boolean ou numero esperados, mas o parametro é do tipo ${typeof x}`;
    }
  }
  
  console.log(inverso(false));