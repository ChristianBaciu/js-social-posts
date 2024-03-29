const posts = [
    {
        "id": 1,
        "content": "CPlaceat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

for (let i = 0; i < posts.length; i++){
    let elemento = posts[i]

    console.log(elemento.id)
    console.log(elemento.content)
    console.log(elemento.media)
    console.log(elemento.author)
    
    // figlio di author
    console.log(elemento.author.name)
    // figlio di author
    console.log(elemento.author.image)

    console.log(elemento.likes)
    console.log(elemento.created)


    document.querySelector("#container").innerHTML +=`

    <div id="container" class="posts-list">

        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${elemento.author.image}" alt="${elemento.author.name}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${elemento.author.name}</div>
                        <div class="post-meta__time">${elemento.created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${elemento.content}</div>
            <div class="post__image">
                <img src="${elemento.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${elemento.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>

    </div>
    `
}

document.addEventListener('DOMContentLoaded', function () {
    const clickLike = document.querySelectorAll('.js-like-button')

    clickLike.forEach(function (bottone){
        bottone.addEventListener('click', function(event){
            // con preventDefault impedisce il ricaricamento della pagina
            event.preventDefault()
            
            // attiva o rimuove la classe like-button--liked
            bottone.classList.toggle('like-button--liked')

            // al click cambia colore
            if(bottone.classList.contains('like-button--liked')){
                bottone.style.color = '#0CD977'
            }else{
                bottone.style.color = ''
            }

        })
    })
})
