// Create elements and add content
const pricingSection = document.createElement('section');
pricingSection.id = 'pricing';

const h2 = document.createElement('h2');
h2.textContent = "A Plan for Every Dog's Needs";

const p = document.createElement('p');
p.textContent = 'Simple and affordable price plans for you and your dog.';

pricingSection.appendChild(h2);
pricingSection.appendChild(p);

const row = document.createElement('div');
row.classList.add('row');

// Create pricing columns
const pricingColumns = [
  {
    title: 'Chihuahua',
    price: 'Free',
    features: ['5 Matches Per Day', '10 Messages Per Day', 'Unlimited App Usage'],
    buttonText: 'Sign Up',
    buttonClass: 'btn-outline-dark'
  },
  {
    title: 'Labrador',
    price: '$49 / mo',
    features: ['Unlimited Matches', 'Unlimited Messages', 'Unlimited App Usage'],
    buttonText: 'Sign Up',
    buttonClass: 'btn-dark'
  },
  {
    title: 'Mastiff',
    price: '$99 / mo',
    features: ['Priority Listing', 'Unlimited Matches', 'Unlimited Messages', 'Unlimited App Usage'],
    buttonText: 'Sign Up',
    buttonClass: 'btn-dark'
  }
];

pricingColumns.forEach(column => {
  const pricingColumn = document.createElement('div');
  pricingColumn.classList.add('pricing-column', 'col-lg-4');

  const card = document.createElement('div');
  card.classList.add('card');

  const cardHeader = document.createElement('div');
  cardHeader.classList.add('card-header');
  cardHeader.innerHTML = `<h3>${column.title}</h3>`;

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');
  cardBody.innerHTML = `
    <h2>${column.price}</h2>
    ${column.features.map(feature => `<p>${feature}</p>`).join('')}
    <button class="btn btn-lg ${column.buttonClass} w-100" type="button">${column.buttonText}</button>
  `;

  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  pricingColumn.appendChild(card);
  row.appendChild(pricingColumn);
});

pricingSection.appendChild(row);
document.body.appendChild(pricingSection);
