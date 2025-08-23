export const usePortfolio = async (listedOnly = false) => {
    const portfolio = useState('portfolio', () => []);
    if (portfolio.value.length === 0) {
        if (portfolio.value.length === 0) {
            let fetchedPortfolio = await $fetch('/data/portfolio.json');
            fetchedPortfolio = fetchedPortfolio.map(item => {
                let featuredImage = item['cover'];
                for (let block of item['pageContent'] || []) {
                    if (block.type === 'image') {
                        featuredImage = block.image?.url || featuredImage;
                        break;
                    }
                }
                return {...item, 'featuredImage': featuredImage};
            });
            portfolio.value = fetchedPortfolio;
        }
    }
    if(listedOnly){
        return ref(portfolio.value.filter(item => item["listed"]));
    }
    return portfolio;
}
