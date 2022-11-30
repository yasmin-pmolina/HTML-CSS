



let input  = document.getElementById("text1");

getQueryVariables().forEach( texto => {
  input.append(texto)
})

function getQueryVariables() {
  let params = [];
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.forEach( (param, key) => {
    //let paramn = {[key]: param}; //si lo queremos como un objeto key: valor
    params.push(`${key}: ${param} \n`) // en texto 
  })
  return params;
}
