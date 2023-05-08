const gridElement = document.querySelector("#blog-posts-grid");
const url = "http://localhost:5173/DUMMY_DATA.json";

fetch(url)
    .then((res) => res.json())
    .then(renderBlogPosts);

const blogCardHtmlString = (title, img, overview) => `
<img src="${img}" class="rounded-t-lg mb-2" />
<h1 class="px-2 font-semibold text-lg">${title}</h1>
<p class="px-2 text-sm text-gray-600 pb-2">${overview}</p>
`;

function renderBlogPosts(posts) {
    posts.forEach((post) => {
        const { title, thumbnail, overview } = post;

        const element = document.createElement("div");
        element.setAttribute("class", "bg-gray-100 flex flex-col rounded-lg m-4");

        const overviewToLong = overview.length > 150;
        const shortenedOverview = overview.slice(0, 150) + " ...";

        element.innerHTML = blogCardHtmlString(
            title,
            thumbnail,
            overviewToLong ? shortenedOverview : overview
        );

        gridElement.appendChild(element);
    });
}
