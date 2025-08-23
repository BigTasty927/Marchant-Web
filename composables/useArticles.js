export const useArticles = async (listedOnly = false) => {
    const articles = useState('articles', () => []);
    if (articles.value.length === 0) {
        articles.value = await $fetch('/data/articles.json');
    }
    if(listedOnly){
        return ref(articles.value.filter(item => item["listed"]));
    }
    return articles;
}
