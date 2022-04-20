import getData from '../utils/getData.js'

const Home = async () =>{
    const Characters = await getData();
    const view = `
        <div class="Characters">
            ${Characters.results.map(chararter => `
            <article class="Character-item">
              <a href="#/${chararter.id}">
                <img src="${chararter.image}" alt="${chararter.name}">
                <h2>${chararter.name}</h2>
              </a>
            </article>
            `).join('')}
        </div>
    `;
    return view
}


export default Home;