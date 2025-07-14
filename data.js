let ciao = 'ciao'
console.log(ciao)

fetch("https://jsonplaceholder.typicode.com/users").then(function(placeholder){
  return placeholder.json();
}).then(function(placeholder){
  for (i=0; i<placeholder.length;i++){
    let ciao = placeholder[i].company.name
    if (ciao.includes('Group')){
      console.log(ciao)
    }
  }
}).catch(function(error){
  console.log(error)
})