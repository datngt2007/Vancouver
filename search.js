const data = [
  {
    id: "1",
    imageLink: "baochi.jpg",
    name: "Vietnam Newcomer",
    intro:
      "Bao Chi Le from Hai Phong, Vietnam I moved to Vancouver 3 months ago. She come with her mom and her cousin to start a new life in order to study and work.",
    namedeatail1: "the first came to Canada",
    deatail1:
      "When I came here and went on many tours, I was surprised by the many views. People in Canada were friendly, they helped me when I was at the international airport . The climate was too cold like i was freezing. ",
    namedeatail2: "school",
    deatail2: "In the school I was overthinking about new friends, English, lesson but those things went away, i met a lot of vietnamese who helped me, taugh me many rule on here and took a tour around the school.",
    namedeatail3: "Advice",
    deatail3: "I came here for 3 months but I think my advice can help you. Don't be afraid of your english Be brave ",
    namedeatail4: "My goal",
    deatail4:"I have a good job, improve my English, get friends different countries and a have a job to make salary and change a life be easy and have rich husband take care family.",
  },
  {
    id: "2",
    imageLink: "ricky.jpg",
    name: "Building Relationship",
    intro: "Ricky zhung came from China, he has been here for 5 years and is the oldest in Mrs Roland class. He also the person draw a schedule book",
    namedeatail1: "First time in canada",
    deatail1: "The first day I went to Canada he was excited to get a new life and get more friends but I can’t do it because my English level is very low and everybody can’t understand me. I so traffic and try keep learn more and more English  after 5 years in here i got a lot of friends and talk like foreign person",
    namedeatail2: "My Goal",
    deatail2: "I have a dream to get a graduate, get job and all wait have a good mentality. ",
    namedeatail3: "adivise",
    deatail3: "I advise some tips to get friends to find the same hobby and interest or say more hello to get close and enjoy many teams to practice English. That is all advice but sometimes it very hard but don’t scary and try do best too much",
    namedeatail4: "hobby",
    deatail4:"I have more hobby, play a video game, shootiinh, read comics and more. My favorrite hobbie's music and draw these let me feel good. I like Torora and Taylor swift this two singer. Their songs are very powerful I like that! I like drawing. When I was a child, those modeling and animationlet me interested. Drawing is also my longest bobby",
  },

  {
    id: "3",
    imageLink: "thanh.jpg",
    name: "Volunteer",
    intro:
      "Thanh tran came from Da Nang, she went with her sister for 1 year and is now a student at the Tupper sir charles secondary school ",
    namedeatail1:"the first came to Canada",
    deatail1: "The first time coming to Canada is a bit confusing, having to integrate with the new environment, language and having to get to know new friends. The language makes me feel pressured and lost among local people. Sometimes I can't express my thoughts and desires to my teachers because my English is not good.",
    namedeatail2: "My goal",
    deatail2: "I realized that I needed to improve my English so I studied and read more and more books and lessons but it worked in vocabulary so I think a way to learn to speak and listen is to become a volunteer and take field trips to train, communicate and experience with friends.",
    namedeatail3: "Advice",
    deatail3: "I would like to give advice to newcomers to come here not to be too self-deprecating about your English and try to talk as much as possible because it helps you become more confident about yourself ",
    namedeatail4: "hobby",
    deatail4:"",
  },

  // {
  //   id: "4",
  //   imageLink: "thanhdat.jpg",
  //   name: "Vietnam Newcomer",
  //   intro: "",
  //   namedeatail1: "",
  //   deatail1: "",
  //   namedeatail2: "",
  //   deatail2: "",
  //   namedeatail3: "",
  //   deatail3: "",
  //   namedeatail4: "hobby",
  //   deatail4:"",
  // },
  // {
  //   id: "5",
  //   imageLink: "baochi.jpg",
  //   name: "Vietnam Newcomer",
  //   intro: "",
  //   namedeatail1: "",
  //   deatail1: "",
  //   namedeatail2: "",
  //   deatail2: "",
  //   namedeatail3: "",
  //   deatail3: "",
  // },
  {
    id: "6",
    imageLink: "philip.jpg",
    name: "Engaging Youth",
    intro: "Miguel Testa came to Canada from the Philippines at age 17 and is now a student at the University of British Columbia. After taking part in citizenU, a civic anti-racism initiative, he developed an immigrant youth program called Project Buddy.",
    namedeatail1: "My first feelings here",
    deatail1: "When I first came to Vancouver, I was pretty lonely. I didn't have any friends at all. It was only me and my mom. That's the whole family, we travel light. My mom wanted a better future for me.",
    namedeatail2: "How I got Involved",
    deatail2: "I joined a community centre group: Killarney Youth Council At first it was intimidating. I mean, community centres were a foreign concept to me. They have everything... some even have daycares or swimming pools. You don't have those in all countries. In my case, I wanted to start volunteering. I found that when you don't know any of the people, you might want to jump in but you worry that people will judge you — especially youth. But even though I wasn't talking a lot or interacting, even though I was socially awkward, I felt accepted. Volunteering is such a communal thing because we are working as a team Getting involved was easier than I thought it would be. The city's youth initiatives really make this a better place. When the city trusts its youth by putting money in their hands - not just to spread awareness, but actually do something - you take it seriously. And I did. Being an actual mover of the community is what inspired me to go all the way to universi-ty. I started becoming more vocal Project Buddy was my contribution.",
    namedeatail3: "And now",
    deatail3: "I feel so part of the city now: a living breathing part of it. Getting involved in a yout gram was the turning point when I realized I was helping build a better city. When unteer, when you try to help, you aren't just passively 'liking' an issue on a social You are the one that will make sure there is something actually done about it.",
    namedeatail4: "My advice to other youth",
    deatail4:"It's more comfortable to stay in your own shell. But don't be afraid. If you don't explore you don't evolve. When you step out of your comfort zone, you explore, and you immerse yourself: that's a better quality of life. Just take the jump. If you reach out it's there for you.I like my university's motto: 'It's up to you.'",
  },
];

let product_div = document.getElementById("main");

function loadProducts(products) {
  for (let i = 0; i < products.length; i++) {
    var productElement = document.createElement("div");
    productElement.classList.add("siuu");
    productElement.style.cssText =
      "width: 300px; margin: 0px 10px; display: flex";
    let output = ` 
    <div class="ma"
    style=" height: 330px; width: 325px; border: 3px solid black; margin-top: 30px; margin-bottom: 30px; border-radius: 10px; ">
    <img src="newcomer.jpg" , alt=""
        style="width: 320px; height: 201px; border-radius: 10px 10px 0px 0px; " id="img" />
    <h3 class="mu" style="font-size: 20px; margin-top: 15px; margin-right: 10px; ">${products[i].name}</h3>
    <button id='cat' style="margin-left: 120px; margin-top: 20px; font-size: 20px;">See more</button>
</div>
    `;
    productElement.addEventListener("click", function (event) {
      var productId = event.currentTarget.getAttribute("data-product-id");
      window.location.href = `productweb.html?id=${products[i].id}`;
    });
    productElement.setAttribute("data-product-id", products[i].id);
    product_div.appendChild(productElement);
    productElement.innerHTML += output;
  }
}

loadProducts(data);

function searchProduct() {
  let search_input = document.getElementById("search-input").value;
  // search_input = search_input.toUpperCase();
  let products = document.getElementsByClassName("siuu");
  let products_title = document.getElementsByClassName("mu");
  for (let i = 0; i < products_title.length; i++) {
    if (!products_title[i].innerHTML.includes(search_input)) {
      products[i].classList.add("hide");
    } else {
      products[i].classList.remove("hide");
    }
  }
}
