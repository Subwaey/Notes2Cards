function storeValue() {
    var inp = document.getElementById("input").value.toString();
    const terms = []
    const definitions = []
    const defobj = {}

	let symbol = document.getElementById("symbol").value.toString();
	const regex = new RegExp(`\\s*${symbol}\\s*(.*)`);
	inp.split('\n').forEach(line => {
	  if (line.includes(symbol)) {
		[term, definition, _] = line.split(regex)
		terms.push(term)
		definitions.push(definition)
		defobj[term] = definition
	  }
	})
	

    console.log(inp)
    console.log(terms)
    console.log(definitions)
    console.log(defobj)

    const flashcards = document.getElementById("flashcards");
	flashcards.innerHTML = "";
    	
		for (let i = 0; i < terms.length; i++) {
			const card = document.createElement("div");
			card.classList.add("card");
			
			const cardInner = document.createElement("div");
			cardInner.classList.add("card-inner");
			card.appendChild(cardInner);
			
			const cardFront = document.createElement("div");
			cardFront.classList.add("card-front");
			cardFront.innerHTML = `<h2>${terms[i]}</h2>`;
			cardInner.appendChild(cardFront);
			
			const cardBack = document.createElement("div");
			cardBack.classList.add("card-back");
			cardBack.innerHTML = `<p>${definitions[i]}</p>`;
			cardInner.appendChild(cardBack);
			
			card.addEventListener("click", function() {
				card.classList.toggle("flipped");
			});
			
			flashcards.appendChild(card);
		}
  }