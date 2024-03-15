const data = [
  {
    id: "1",
    imageLink: "baochi.jpg",
    name: "Vietnam Newcomer",
    intro:
      "Bao Chi Le from Hai Phong, Vietnam she moved to Vancouver 3 months ago. She came with her mom and her cousin to start a new life in order to study and work.",
    namedeatail1: "the first came to Canada",
    deatail1:
      "When I came here and went on many tours, I was surprised by the many views. People in Canada were friendly, they helped me when I was at the international airport . The climate was too cold like i was freezing. ",
    namedeatail2: "school",
    deatail2: "In the school I was overthinking about new friends, English, lesson but those things went away, i met a lot of vietnamese who helped me, taugh me many rule on here and took a tour around the school.",
    namedeatail3: "Advice",
    deatail3: "I came here for 3 months but I think my advice can help you. Don't be afraid of your english Be brave.",
    namedeatail4: "My goal",
    deatail4:"I have a good job, improve my English, get friends different countries and a have a job to make salary and change a life be easy and have rich husband take care family.",
  },
  {
    id: "2",
    imageLink: "ricky.jpg",
    name: "Building Relationships",
    intro: "Ricky zhung came from China, he has been here for 5 years and is the oldest in Mrs Roland class. He also the person draw a schedule book.",
    namedeatail1: "First time in canada",
    deatail1: "The first day I went to Canada I was excited to get a new life and get more friends but I couldn't do it because my English level was very low and everybody couldn't understand me. I so traffic and kept learn more and more English  after 5 years in here I got a lot of friends and taught like foreign person.",
    namedeatail2: "My Goal",
    deatail2: "I have a dream to graduate, get job and have a good mentality. ",
    namedeatail3: "Advise",
    deatail3: "I advise some tips to get friends to find the same hobby and interest or say more hello to get close and enjoy many teams to practice English. That is all advice but sometimes it is very hard but not scary and try do too much.",
    namedeatail4: "Hobby",
    deatail4:"I have more hobbies, I like to play a video game, photography, read comics and more. My favorrite hobbie's music and draw these let me feel good. I like Torora and Taylor swift these two singer. Their songs are very powerful I like that! I like drawing. When I was a child, those modeling and animation let me interested. Drawing is also my longest hobby.",
  },

  {
    id: "3",
    imageLink: "thanh.jpg",
    name: "Volunteer",
    intro:
      "Thanh tran came from Da Nang, she went with her sister for 1 year and is now a student at the Tupper sir charles secondary school.",
    namedeatail1:"The first came to Canada",
    deatail1: "The first time coming to Canada is a bit confusing, having to integrate with the new environment, language and having to get to know new friends. The language makes me feel pressured and lost among local people. Sometimes I can't express my thoughts and desires to my teachers because my English is not good.",
    namedeatail2: "My goal",
    deatail2: "I realized that I needed to improve my English so I studied and read more and more books and lessons but it worked in vocabulary so I think a way to learn to speak and listen is to become a volunteer and take field trips to train, communicate and experience with friends.",
    namedeatail3: "Advice",
    deatail3: "I would like to give advice to newcomers to come here not to be too self-deprecating about your English and try to talk as much as possible because it helps you become more confident about yourself.",
    namedeatail4: "Hobby",
    deatail4:"In my freetime, I often spend all my time to play piano and go swimming.",
  },

  {
    id: "4",
    imageLink: "thanhdat.jpg",
    name: "Web developer",
    intro: "Thanh Dat Nguyen from Ho Chi Minh in Vietnam, he has been Canada for 7 months. he is a student at the Tupper sir charles secondary school.",
    namedeatail1: "The first time",
    deatail1: "The first time I came here I was afraid of my English, listening and a little bit confused. But I changed my mind when I came to school. I think I will be alone, there are many Vietnamese who will help me to translate.",
    namedeatail2: "My Goal",
    deatail2: "My goal is to be an IT professional. I chose this because I used to learn Web development for 2 years and it helped me a lot with skills like building community, leadership, reflex, memory and learning english. In 2 years I built many website like this website: https://datngt2007.github.io/ExploreWorld.vn/",
    namedeatail3: "My advice",
    deatail3: "I advise to people who want to be Web developer need people who have logic, explore and hard work.",
    namedeatail4: "Hobby",
    deatail4:"I like to explore and build a code, hang out with my friend and read a comic book.",
  },
  {
    id: "5",
    imageLink: "jacky.jpg",
    name: "Culture & Heritage",
    intro: "Originally from Cameroon in central Africa, Jacky Essombe arrived in Vancouver in 2001. A teacher and performer, she works passionately to help others experience connection and community as she knows it through African dance and music.",
    namedeatail1: "The first she came",
    deatail1: "When she checked her pasport, she was afraid of skin colour then they accepted her to welcome canada and she was cried and was happy.",
    namedeatail2: "Her mission",
    deatail2: "when she came to Canada, she was planning to share her culture. but the longer she felt alone and separated from people the more she planned for every one  to sing and dance to bring them together and share experiences, so every felt connected and community.",
    namedeatail3: "She advice",
    deatail3: "As newcomers, we may think we have ro let go of who we were before and completely embrace the western way of life.",
    namedeatail4: "Feel about her",
    deatail4:"She is a nice person and she doesn't care about how singing or dancing is good or terrible. She only thinks aboat being joyful and connection.",
  },
  {
    id: "6",
    imageLink: "owen.jpg",
    name: "Dreamer",
    intro: "Owen feng from China, has been here 8 months and i came with my dad.",
    namedeatail1: "My first feelings here",
    deatail1:"The first time I came here, I was lonely and I didn't feel good here because my english was low and it was hard to meet a friend so I needed to learn english well and try to make friends.",
    namedeatail2: "Good at",
    deatail2: "I used to cook in China and when go there I learn more about new cooking recipe and train more skill. I have many dream like chef and eletrical engineer.",
    namedeatail4: "Hobby",
    deatail4: "My hobby is running and fitness, because I want to get strong and healthy life .",
    namedeatail3: "My advice",
    deatail3:"Make friend help to learn english and hope every one a dream .",
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
