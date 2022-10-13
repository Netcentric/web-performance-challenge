const card = $('.card');

const newParagraph = document.createElement('p');
newParagraph.classList.add('card__text')
const newText = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non curabitur gravida arcu ac tortor dignissim. Augue lacus viverra vitae congue eu consequat ac.');
newParagraph.appendChild(newText);

// create dynamic content
card.each((index, entry) => {
  const maxHeight = 400;
  let cardHeight = entry.offsetHeight;
  do {
    entry.appendChild(newParagraph.cloneNode(true));
    cardHeight = entry.offsetHeight;
  } while(maxHeight > cardHeight);
});