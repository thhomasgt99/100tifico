import getData from '../utils/getData';

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="Characters">
      ${characters.results.map(character => `
        <article class="Character-item">
            <div class="circle1"></div>
            <div class="circle2"></div>
            <div class="circle3"></div>

            <div class="circle4"></div>
            <div class="circle5"></div>
            <div class="circle6"></div>
            <div class="circle7"></div>
            <a href="#/${character.id}/">
              <div class="Character-item_degrade"></div>
              <img src="${character.image}" alt="${character.name}">
              <h2>${character.name}</h2>
            </a>
          
        </article>
      `).join('')}
    </div>
  `;
  return view;
};

export default Home;