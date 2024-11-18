const justFood = (lide) => {
  const cenaZaOsobu = 300;
  const celkovaCena = lide * cenaZaOsobu;
  return `<p>Catering od Just Food pro ${lide} lidí za ${celkovaCena} Kč.</p>`
}

const yourMama = (lide) => {
  const cenaZaOsobu = 600;
  const celkovaCena = lide * cenaZaOsobu;
  return `<p>Catering od Your Mama pro ${lide} lidí za ${celkovaCena} Kč.</p>`
}

const flavourHaven = (lide) => {
  const cenaZaOsobu = 3000;
  const celkovaCena = lide * cenaZaOsobu;
  return `<p>Catering od Flavour Haven pro ${lide} lidí za ${celkovaCena} Kč.</p>`
}


const lide = 50


document.body.innerHTML = `${justFood(lide)}<br>${yourMama(lide)}<br>${flavourHaven(lide)}`


