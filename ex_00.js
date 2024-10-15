async function my_fetch() {
 
    let reponse = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528"
    );
    let json = await reponse.json();
    console.log(json);

}

my_fetch();
