function add_recipe() {
    if (sessionStorage.getItem("login") != null) {
      setTimeout(function(){document.location.href = "../add_recipe_page/add_recipe.html";},250);
    }
    else {
      setTimeout(function(){document.location.href = "../sign_up_login_page/sign_up_login.html";},250);
        alert("login to add recipes");
    }
}

function getRecipeIndex() {
	if (localStorage) {
        if (localStorage.getItem("recipeIndex") == null)
            localStorage.setItem("recipeIndex", 0);
        return localStorage.getItem("recipeIndex");
	}
	else {
		alert("Sorry, your browser does not support local storage");
	}
}

function getRecipes() {
    if (localStorage) {
      if (localStorage.getItem("recipeIndex") > 0) {
        var index = localStorage.getItem("recipeIndex");
        for (i = 0; i < index; i++) {
          var recipe = JSON.parse(localStorage.getItem("recipe" + i));
          var option = document.getElementById(recipe.category);
          var recipeOpt = document.createElement("option");
          recipeOpt.text = recipe.name;
          recipeOpt.value = recipe.index;
          option.appendChild(recipeOpt);
        }
      }
    } else {
      alert("Sorry, your browser does not support local storage");
    }
}

function insertRecipes() {
	if (localStorage) {
        if (localStorage.getItem("inserted") == null) {
            var index = getRecipeIndex();
            var caesar_salad = {"category": "starters", "name": "Caesar Salad", "title": "Caesar Salad Recipe", "author": "Natasha Kravchuk", "index": "recipe" + index,
            "description": "My son, David, is to thank for this recipe. He is 9 years old and took kids cooking classes at Sur La Table where he learned and fell in love with this caesar salad recipe, so we re-created it at home together. Caesar salad is easy, classic and the ingredients are simple. "
            + "The crunchy homemade garlic croutons really elevate this salad, making it look and taste quite fancy. "
            + "The cheese crusted onto each little toast will have you snacking on these croutons!The caesar salad dressing comes together so fast and all you need is a bowl and whisk. "
            + "This Caesar dressing is light, healthy and packs so much fresh flavor without needing much salt at allIn a large mixing bowl, combine all of your ingredients and toss gently to coat the lettuce in caesar dressing. "
            + "This recipe makes enough croutons for two full salads so you’ll have them ready to go for round 2!",
            "ingredients": "For the Croutons:\n"
            + "1/2 French Baguette cut in half and thinly sliced (1/4\" thick)\n"
            + "3 Tbsp extra virgin olive oil\n"
            + "1 tsp minced garlic 2 small cloves\n"
            + "2 Tbsp grated parmesan cheese\n"
            + "Caesar Salad dressing:\n"
            + "2 small garlic cloves minced (1 tsp)\n"
            + "2 tsp dijon mustard\n"
            + "1 tsp Worcestershire sauce\n"
            + "2 tsp fresh lemon juice\n"
            + "1 1/2 tsp red wine vinegar\n"
            + "1/3 cup extra virgin olive oil\n"
            + "1/2 tsp sea salt or to taste\n"
            + "1/8 tsp black pepper plus more to serve\n"
            + "For the Caesar Salad:\n"
            + "1 large romaine lettuce (or 2 small heads romaine)\n"
            + "1/3 cup parmesan cheese shredded or shaved", 
            "instructions": "1.	Preheat oven to 350˚F. Cut the baguette in half lengthwise through the top of the baguette then slice diagonally into 1/4\" thick pieces. Place the breads onto a baking sheet.\n"
            + "2.	In a small bowl, combine 3 Tbsp extra virgin olive oil and 1 tsp of finely minced garlic. Drizzle the garlic oil over the croutons and sprinkle the top with 2 Tbsp grated parmesan cheese.\n"
            + "3.	Toss until evenly coated. Spread in a single layer over the baking sheet and bake at 350˚F until light golden and crisp (10-12 minutes), or to desired crispness.\n"
            + "How to Make Caesar Salad Dressing:\n"
            + "1.	In a small bowl, whisk together garlic, dijon, Worcestershire, lemon juice and red wine vinegar.\n"
            + "2.	Slowly drizzle in extra virgin olive oil while whisking constantly.\n"
            + "Whisk in 1/2 tsp salt and 1/8 tsp black pepper, or season to taste.\n"
            + "How to Make Caesar Salad:\n"
            + "1.	Rinse, dry and chop or tear the romaine into bite-sized pieces.\n"
            + "2.	Place in a large serving bowl and sprinkle generously with shredded parmesan cheese and cooled croutons.\n"
            + "3.	Drizzle with caesar dressing and toss gently until lettuce is evenly coated."}
            localStorage.setItem("recipe" + index, JSON.stringify(caesar_salad));
            localStorage.setItem("recipeIndex", ++index);

            var falafel = {"category": "starters", "name": "Falafel", "title": "Falafel", "author": "Lisa Bryan", "index": "recipe" + index,
            "description": "Falafel are delicious balls of chickpea and herb goodness that you find in Middle Eastern cooking. Naturally vegan and vegetarian, falafel are great in wraps, pitas, sandwiches and salads. Today, I’ll share how to make both fried falafel and baked falafel. You choose your favorite! "
            + "Are you ready for the best falafel you’ve ever tasted? I’ve had my fair share of falafel on travels through Egypt, Israel and Jordan. " 
            + "I’ve had them in restaurants and on street corners (about as authentic as they come). I’ve had them stuffed in gluten-free pita and on salads. And I’ve had them with slight variations and tweaks, though the recipe itself is fairly simple. "
            + "But after eating my way through Tel Aviv last year, I realised what makes the best falafel. And here’s the answer: tons of herbs (double the normal amount) and a small amount of green pepper. "
            + "This makes for an addictive flavor that’s “a little something extra” but not spicy. Just insanely delicious.Traditional falafel is made from ground chickpeas or fava beans, herbs and spices. "
            + "The mixture is then formed into balls or patties and deep fried for a texture that’s crispy on the outside and soft on the inside, sort of like a fritter. It’s a classic Middle Eastern and Mediterranean recipe that’s enjoyed as street food and often served up as part of mezze (a group of small meals). ",
            "ingredients": "1 cup dried chickpeas, soaked overnight (don't use canned chickpeas)\n"
            + "1/2 cup onion, roughly chopped\n"
            + "1 cup parsley, roughly chopped (about a one large bunch)\n"
            + "1 cup cilantro, roughly chopped (about a one large bunch)\n"
            + "1 small green chile pepper, serrano or jalapeno pepper\n"
            + "3 garlic cloves\n"
            + "1 tsp cumin\n"
            + "1 tsp salt\n"
            + "1/2 tsp cardamom\n"
            + "1/4 tsp black pepper\n"
            + "2 tbsp chickpea flour\n"
            + "1/2 tsp baking soda\n"
            + "avocado oil for frying",
            "instructions": "1.	The night before, soak the dried chickpeas in water. Make sure the water covers the chickpeas by 2-3 inches, as they'll triple in size. Dried chickpeas soaking in a bowl of water.\n"
            + "2.	Drain and rinse the chickpeas and add them to your food processor, along with the onion, parsley, cilantro, pepper, garlic, cumin, salt, cardamom and black pepper.\n"
            + "3.	Pulse the food processor several times until the mixture resembles the texture of coarse sand.\n"
            + "4.	Transfer the falafel mixture to a bowl and add the chickpea flour and baking soda. Stir together, then cover or add a lid and refrigerate the mixture for 30 minutes to one hour. Falafel ingredients in a mixing bowl.\n"
            + "5.	Use your hands, an ice cream scoop or falafel scoop to form the falafel into balls or patties. If you find the mixture is too wet, you can add another tablespoon of chickpea flour. If it's too dry and crumbly, you can add a teaspoon or two of water or lemon juice. Scooping balls of falafel from the raw mixture.\n"
            + "6.	Once the falafel are formed, you can cook them by your preferred method mentioned above. To deep fry the falafel, add about 3 inches of oil to a pot on medium heat. Heat the oil to 350F. Cook the falafel in batches (about 6-8 at a time) for 1-2 minutes or until golden.\n"
            + "7.	Cooking the falafel in a pan of oil on the stove.\n"
            + "Use a skimmer to check the color of the falafel and make sure they don't over cook. Then remove them to a paper towel-lined plate.\n"
            + "Removing the falafel from the pan once they're cooked and golden.\n"
            + "Serve the falafel immediately, while warm and crispy on the outside. They're delicious served with tahini sauce as well.\n"}
            localStorage.setItem("recipe" + index, JSON.stringify(falafel));
            localStorage.setItem("recipeIndex", ++index);
            
            var mongolian_beef = {"category": "main_dishes", "name": "Mongolian Beef", "title": "Easy Mongolian Beef", "author": "Sabrina Snyder", "index": "recipe" + index,
            "description": "Mongolian Beef is a recipe that I’ve been cooking for clients for many years for a number of reasons. One, people love anything that tastes like Chinese takeout.\n" 
            + "Two, the sweet flavor of the dark brown sugar mixed with the salty soy sauce and the strong ginger and garlic is incredibly addicting and three you get to enjoy it over a mountain of steamed rice, which if you are anything like me is your happy place.\n"
            + "This Mongolian Beef is very flavorful and takes just 30 minutes to make from start to finish including all the slicing of the meat! It also uses basic pantry ingredients so don’t worry I am not sending you to the store today for oyster sauce or hoisin sauce. Everything in this recipe is available in every grocery store. The one thing I want to caution when preparing this dish is how thick you slice the steak.\n"
            + "If you feel uncomfortable with cutting the steak thinly enough and have an hour or so notice, place the steak in the freezer for one hour.\n"
            + "This will freeze it just enough that slicing it will be as easy as slicing a vegetable. The meat will firm up enough that you can slice it even thinner if you’d like. One more note because I know I am going to get this question in the comments below.\n"
            + "Yes, you can use light brown sugar in place of dark brown, and yes you will notice the taste difference. The addition of molasses to the dark brown sugar adds to the depth of flavor in this dish.\n"
            + "So if possible please use dark brown sugar. If you are in a pinch and you only have light brown don’t worry you will still have a very tasty meal. Just promise me the next time you make it you will use dark brown sugar, the flavor difference is noticeable.",
            "ingredients": "1 pound flank steak\n"
            + "1/4 cup cornstarch\n"
            + "1/4 cup canola oil\n"
            + "2 teaspoons fresh ginger, minced\n"
            + "1 tablespoon garlic, minced\n"
            + "1/3 cup lite soy sauce, low sodium\n"
            + "1/3 cup water\n"
            + "1/2 cup dark brown sugar\n"
            + "4 stalks scallions, green parts only, cut into 2 inch pieces",
            "instructions": "1.	Slice the flank steak against the grain (the grain is the length of the steak) the long way 1/4 inch think pieces and add it to a ziploc bag with the cornstarch.\n"
            + "2.	Press the steak around in the bag making sure each piece is fully coated with cornstarch and leave it to sit.\n"
            + "3.	Add the canola oil to a large frying pan and heat on medium high heat.\n"
            + "4.	Add the steak, shaking off any excess corn starch, to the pan in a single layer and cook on each side for 1 minute.\n"
            + "5.	If you need to cook the steak in batches because your pan isn't big enough do that rather than crowding the pan, you want to get a good sear on the steak and if you crowd the pan your steak with steam instead of sear.\n"
            + "6.	When the steak is done cooking remove it from the pan.\n"
            + "7.	Add the ginger and garlic to the pan and sauté for 10-15 seconds.\n"
            + "8.	Add the soy sauce, water and dark brown sugar to the pan and let it come to a boil.\n"
            + "9.	Put the steak back in and let the sauce thicken for 20-30 seconds.\n"
            + "10.	The cornstarch we used on the steak should thicken the sauce, if you find it isn't thickening enough add 1 tablespoon of cornstarch to 1 tablespoon of cold water and stir to dissolve the cornstarch and add it to the pan.\n"
            + "11.	Add the green onions, stir to combine everything, and cook for a final 20-30 seconds.\n"
            + "Serve immediately."}
            localStorage.setItem("recipe" + index, JSON.stringify(mongolian_beef));
            localStorage.setItem("recipeIndex", ++index);

            var lasagna = {"category": "main_dishes", "name": "Lasagna", "title": "The Most Amazing Lasagna!", "author": "Rachel Farnsworth", "index": "recipe" + index,
            "description": "WHAT KIND OF CHEESE DO I USE IN LASAGNA?\n"
            + "There are three kinds of cheese in this recipe. First you have the classic lasagna filling of ricotta cheese. Use whole milk ricotta cheese in this recipe for best results. The second cheese is sliced mozzarella. We like to get our mozzarella sliced at the deli counter in our grocery store. You want the slices to be pretty thin. 24 slices is the ideal amount and it should equal somewhere around one pound. Third, you’ll need freshly grated Parmesan cheese. Don’t use shredded, you’ll want grated for best results. Also, don’t use that canned stuff. It doesn’t melt the same as real, freshly grated Parmesan cheese.\n"
            + "\n"
            + "DO I NEED TO USE TOMATO PASTE?\n"
            + "You’ll notice that two cans of tomato paste are used in this recipe. It may seem like a lot, but tomato paste has a super concentrated tomato flavor. By adding in so much, we’re able to get a nice, strong tomato flavor, without adding too much liquid to the sauce.\n"
            + "\n"
            + "DO I HAVE TO USE FENNEL SEEDS?\n"
            + "The blend of herbs included in this bolognese is perfect. The fresh herbs all combine to produce the best flavor, and the key to bringing it all together: fennel seeds. You need the fennel seeds for that authentic, Italian flavor.\n"
            + "\n"
            + "WHY IS THERE SUGAR IN THE SAUCE?\n"
            + "Sugar is added to balance the acidity of the tomato. If you prefer to not use sugar, finely chopped carrots are another option, as they are naturally sweet and add another vegetable and flavor to your sauce. Use about a cup in place of the sugar.\n"
            + "\n"
            + "DO I HAVE TO SIMMER THE SAUCE FOR SO LONG?\n"
            + "The sauce develops flavor as it simmers. It needs to be simmered for a minimum of 1 hour to give you the most amazing lasagna, but you can simmer it up to 4 hours for maximum flavor results. It’s worth every second and doesn’t require much effort at all. If you don’t want to leave it simmering on the stove, you can always transfer it all to a slow cooker and simmer it in there on high for 4 hours or low for 6 to 8 hours.\n"
            + "\n"
            + "CAN I USE DRIED HERBS IN THIS RECIPE?\n"
            + "Yes. We love the flavor that comes from the fresh herbs, but we know that it isn’t always an option. If you need to use dried herbs, use them in a third of the amount of fresh herbs called for.\n"
            + "\n"
            + "WHAT IS A LASAGNA PAN? CAN I JUST USE A REGULAR 9×13 PAN?\n"
            + "Lasagna Pans are not the same as 9 x 13 casserole pans. Lasagna pans are deeper in order to accommodate for the layers in the dish. A true lasagna has four layers of noodles, which usually fit pretty nicely in a lasagna pan. If you like lasagna, it is a great investment",
            "ingredients": "1 pound sweet Italian sausage\n"
            + "1 pound lean ground beef\n"
            + "1 large white onion diced\n"
            + "5 cloves garlic minced\n"
            + "1 (28 ounce) can crushed tomatoes\n"
            + "2 (6 ounce) cans tomato paste\n"
            + "1 (15 ounce) can tomato sauce\n"
            + "1/2 cup white wine\n"
            + "2 tablespoons white sugar\n"
            + "1/2 cup chopped fresh basil\n"
            + "1 teaspoon fennel seeds\n"
            + "1 teaspoon ground oregano\n"
            + "1/2 teaspoon salt\n"
            + "1/4 teaspoon ground black pepper\n"
            + "1/4 cup chopped fresh parsley\n"
            + "1 pound lasagna noodles\n"
            + "30 ounces ricotta cheese\n"
            + "2 tablespoons chopped fresh parsley\n"
            + "1 large egg",
            "instructions": "1.	In a large pot over medium heat, add in ground sausage and ground beef. Use a spoon to break up the meat into small pieces. Add in onion and garlic and cook until meat is well browned, stirring constantly. Stir in sugar, fresh basil, fennel, oregano, 1/2 teaspoon salt, pepper, and 1/4 cup chopped parsley. Pour in crushed tomatoes, tomato paste, tomato sauce, and wine*. Stir well and bring to a simmer. Reduce heat to low and simmer 1-4 hours, stirring occasionally.\n"
            + "2.	Meanwhile, place lasagna noodles into the bottom of a pan. Pour hot tap water directly over the noodles, making sure the pasta is completely immersed in the water. Let them soak for 30 minutes, then drain and discard water.\n"
            + "3.	In a mixing bowl, combine ricotta cheese with egg, remaining 2 tablespoons parsley, 1/2 teaspoon salt, and nutmeg. Refrigerate until ready to assemble lasagna. Preheat oven to 375 degrees. Lightly grease a deep 9x13 pan.\n"
            + "4.	To assemble, spread about 1 cup of meat sauce in the bottom of the prepared pan. Place 4 noodles on top. Spread with 1/3 of the ricotta cheese mixture. Top with 1/4 of mozzarella cheese slices. Spoon 1 1/2 cups meat sauce over mozzarella, then sprinkle with 1/4 cup parmesan cheese. Repeat layering two more times to create three complete layers. To finish, place a final layer of pasta, topped with another 1 cup of meat sauce to cover the pasta. Top with remaining mozzarella and Parmesan cheese. Cover loosely with aluminum foil.\n"
            + "5.	Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes to allow cheese to brown. Serve hot."}
            localStorage.setItem("recipe" + index, JSON.stringify(lasagna));
            localStorage.setItem("recipeIndex", ++index);
            
            var profiterole = {"category": "desserts", "name": "Profiterole", "title": "Profiteroles!", "author": "Jane Dunn", "index": "recipe" + index,
            "description": "I first learnt to make these when I was at cookery school before this blog began. It was something I had really wanted to learn to make for so long, but when looking at recipes online I would see ‘choux’ and ‘pastry’ and feel a bit disheartened and give up. After being taught it, I realise its easier than I thought. It just has a posh name\n"
            + "I would also say that these are a bit faffy, but 100% worth it if you want to wow your guests at the dinner table over the festive period with homemade profiteroles. Yes, shop bought ones such as the M&S ones are utterly delightful, but making anything yourself is always better. Usually cheaper too!I used a simple chocolate ganache style sauce for the topping because you want something sweet, chocolatey and ever so slightly gooey to stick all the profiteroles together in a pile.\n"
            + "The beautiful thing about profiteroles is you can afford to be messy. Just get a nice dish, plate, bowl, or anything and pile the profiteroles on. You don’t need to take ages presenting them because they always look glorious.\n"
            + "You could serve these in individual dishes, or one giant pile like I have, but they always look incredible. You need to have faith when making the choux pastry as it can look a little odd at some points when making it, but stick with it.\n"
            + "Make sure to pierce the bottom of each profiterole to let the steam out so they stay in their wonderful shape, and ENJOYYYY.",
            "ingredients": "Choux Pastry\n"
            + "150 ml Water\n"
            + "65 g Plain Flour\n"
            + "50 g Unsalted Butter\n"
            + "2 Medium Eggs\n"
            + "Pinch of Sugar\n"
            + "Pinch of Salt\n"
            + "\n"
            + "Vanilla Mascarpone Cream\n"
            + "250 g Mascarpone\n"
            + "75 ml Double Cream\n"
            + "1 tsp Vanilla\n"
            + "2 tbsp Icing Sugar\n"
            + "\n"
            + "Chocolate Sauce\n"
            + "100 ml Double Cream\n"
            + "150 g Milk Chocolate",
            "instructions": "For the Choux Pastry\n"
            + "1.	Preheat your oven to 200C/180C Fan, and line a large tray with parchment paper.\n"
            + "2.	Bring the water, Sugar, Salt and Unsalted Butter to the boil in a pan over a medium heat.\n"
            + "3.	Remove from the heat as soon as it boils, and add in ALL of the flour in one go.\n"
            + "4.	Stir like crazy and beat for about 15 seconds or so till a smooth ball shape is formed and it's coming away from the edge of the pan. If it doesn't come away, cook the mixture on a low heat for a little longer and try again.\n"
            + "5.	Leave the mixture to cool for five minutes or so, off the heat.\n"
            + "6.	Beat your eggs, and then GRADUALLY beat it into the flour mixture. Beat fully and well each time you add in more egg until you reach a smooth, glossy and dropping consistency.\n"
            + "7.	If the mixture becomes really thin, you've added too much egg. If it curdles, you've added too much at one time, and if the mixture is too stiff, you've not added enough!\n"
            + "8.	Pipe little rounds onto the tray, and bake in the oven for 20 minutes roughly until crisp. I made 20 profiteroles with this batch.\n"
            + "9.	Once baked, remove from the oven and pierce the bottom of the profiterole immediately with a skewer and leave to rest with the hole facing upwards to let the steam escape and let the pastry cool.\n"
            + "\n"
            + "For the Vanilla Mascarpone\n"
            + "1.	Add the vanilla, mascarpone and Double Cream and stir with a spoon to combine.\n"
            + "2.	Add in the icing sugar and stir again! Whisk up until thick.\n"
            + "3.	Pour the mixture into a piping bag, snip off the end, and carefully fill the profiteroles with the cream through the steam hole until full.\n"
            + "\n"
            + "For the Chocolate Sauce\n"
            + "1.	Heat the cream in a pan over a low-medium heat.\n"
            + "2.	Add in the chopped chocolate and whisk till smooth.\n"
            + "3.	Leave to cool before using!\n"
            + "4.	Coat the profiteroles with the sauce and then decorate how you fancy. I made a giant pile and then drizzled over some extra chocolate!"}
            localStorage.setItem("recipe" + index, JSON.stringify(profiterole));
            localStorage.setItem("recipeIndex", ++index);

            var babka = {"category": "desserts", "name": "Chocolate Babka", "title": "How to Make Chocolate Babka?", "author": "Cenk Sönmezsoy", "index": "recipe" + index,
            "description": "I think it was the first week o the lockdown. My doorbell rang. I hadn’t ordered anything, so I opened the door with caution. Turns out a friend of mine had bought Easter breads (flavored with mastic and mahlab) for her close-knit group of friends from a favorite bakery of mine in İstanbul, called Üstün Palmie. And I was one of those lucky recipients. It came to my door still warm from the bakery and I’ve been obsessed with baking the best version of it at home ever since. More on that later.The obsession started with that bread–actually, sweetened and flavored breads are called çörek (pronounced “chö-wreck”) in Turkey–and continued with this wonderful Chocolate Babka, drenched in a dark caramel syrup.\n"
            + "For those who will be baking a babka for the first time, I highly recommend using a stand mixer. The dough is quite wet and sticky in the beginning and becomes smooth and much easier to work with after a 10-minute beating in the mixer. Once the dough is done, the rest is a breeze. I chill both the risen dough and the chocolate filling briefly, which makes it much easier to roll out the dough and spread the filling evenly.\n"
            + "Once the logs are done, I prefer to chill them again until firm–this time in the freezer for 5-10 minutes–so that the layers don’t squish when you cut into the logs.\n"
            + "The recipe makes two babkas. One is for you and the other one is for someone who you feel needs some love during these unsettling times. I wish I could have gifted my second babka to my friend who brightened my day with her thoughtful gesture, but as soon as travel restrictions were lifted she took off to her house in Selimiye–a small fishing village located on the mountainous Bozburun Peninsula, where the Mediterranean sea meets the Aegean sea and the days are always bright, with or without a babka.\n"
            + "Classic recipes call for a simple sugar syrup, but I thought why bother with “simple” when you can drench these beauties in dark caramel? Of course I was right. Almost anything in the world is better with caramel.For this syrup, you start by making a dry caramel, which means there’s no need to add water in the beginning. As soon as the sugar turns dark amber brown, you hold the saucepan at arm’s length and add the water. You have to be very carefully–as soon as you add the water, the caramel will bubble up vigorously and hot steam will rise. To avoid any mishap, I recommend adding the water using a soup ladle. This way, your hand won’t get anywhere near the hot steam.Once the caramel syrup has cooled, you brush it generously over the hot babkas.\n"
            + "And then the exhausting wait starts. You must let them cool completely before slicing. It will be hard, but your patience will be richly rewarded.\n"
            + "\n"
            + "Enjoy!",
            "ingredients": "For the dough:\n"
            + "3¾ cups (530 g/18.7oz) all-purpose flour , plus extra for dusting\n"
            + "½ cup (100 g/3.5oz) granulated sugar\n"
            + "1 tablespoon (10g) instant yeast\n"
            + "3 large eggs\n"
            + "½ cup (120 m) water\n"
            + "¾ teaspoon fine sea salt\n"
            + "⅔ cup (150 g/5.3 oz) unsalted butter , at room temperature, cut into small cubes\n"
            + "Neutral oil (sunflower, canola) for dressing\n"
            + "For the chocolate filling:\n"
            + "½ cup (50 g/1.7oz) powdered sugar\n"
            + "130 g (4 oz) dark chocolate , melted*\n"
            + "½ cup (120 g/4oz) unsalted butter , melted\n"
            + "⅔ cup (120 g/4oz) chocolate chips or chunks OR 1 cup (100g/3.5oz) pecans, coarsely chopped (optional)\n"
            + "For the chocolate filling:\n"
            + "½ cup (120ml) water\n"
            + "½ cup (100g) granulated sugar",
            "instructions": "1.  To make the dough, in the bowl of a stand mixer, stir together the flour and yeast.\n"
            + "2.	The sugar dissolves. Remove the pan from the heat and let the mixture cool for 10 minutes.\n"
            + "3.	Whisk the eggs into the cooled milk mixture and pour it over the dry ingredients.Stir with a silicone spatula until the flour is absorbed.\n"
            + "4.	Attach the bowl and the dough hook onto the mixer and beat at medium speed until the dough pulls away from the sides and becomes elastic and smooth, for about 10 minutes.\n"
            + "5.	Halfway into the beating, a portion of the dough may stick to the sides of the bowl and separate from the main dough. In that case, stop the mixer, scrape the sides of the bowl with the spatula and combine the stuck dough with the main dough, then continue beating.\n"
            + "6.	The dough will be smooth, sticky, and elastic. Scrape the dough into a generously buttered large bowl, cover tightly with lightly buttered plastic wrap, and let rise at room temperature until doubled in size, 60-75 minutes. After the first rise is complete, transfer the dough with the bowl to the refrigerator and chill for 30 minutes.\n"
            + "7.	While the dough chills, make the chocolate filling. In a medium saucepan over medium-low heat, melt the chocolate and butter, stirring occasionally with a wire whisk. Remove the pan from the heat, add the rest of the ingredients and whisk until smooth. Transfer the filling to a bowl and chill, uncovered, until it is thick enough to spread easily, about 15 minutes.\n"
            + "8.	Generously butter the bottom and sides of two 9-inch (23-cm) loaf pans. Dust the pans with flour and tap out the excess.\n"
            + "9.	Turn the chilled dough out onto a lightly floured work surface. Deflate the dough by pressing down in the center with your palm and roughly shape it into a small rectangle with your hands. Lightly flour the dough and roll it out into a 16-by-24-inch (40-by-60-cm) rectangle. Gently stretch out the rounded corners occasionally to make a neat rectangle, taking care not to tear the dough.\n"
            + "10.	Using a metal offset spatula, spread the chilled chocolate filling over the surface of the rectangle in an even layer, leaving a 3⁄4-inch (2-cm) border all around. Starting at the long end of the rectangle that is closest to you, roll up the dough tightly and pinch the seam between your fingers to seal. You will have a log that is 24 inches (60 cm) long. Cut the log in half crosswise into two 12-inch (30-cm) logs. Transfer the logs to a cutting board and freeze, uncovered, until firm enough to cut without squishing the layers, 5-10 minutes.\n"
            + "11.	Using a large heavy serrated knife, cut each of the logs in half lengthwise, exposing the layers. Place two log halves on the cutting board with the cut sides facing up and overlap the top end of one half over the other and pinch the ends together. Working your way down, fold the halves over each other as if you are braiding them until you reach the bottom ends. Pinch together the bottom ends and place the braided dough in one of the prepared pans. Gently arrange the dough so that the top is level and the ends touch the pan on both ends to ensure an even rise. Repeat the same steps for the other two log halves. Cover the pans loosely with plastic wrap and let them rise in a warm spot until they are almost doubled in size and reach 1/2 inch above the top of the pan, 60-75 minutes.\n"
            + "12.	At least 30 minutes before baking, set a rack in the middle of the oven and preheat the oven to 350°F (180°C)."}
            localStorage.setItem("recipe" + index, JSON.stringify(babka));
            localStorage.setItem("recipeIndex", ++index);

            var brownie = {"category": "desserts", "name": "Brownie", "title": "Best Homemade Brownies", "author": "Jeanine Donofrio", "index": "recipe" + index,
            "description": "For years, I couldn’t seem to find a recipe for brownies that met my standards. Anytime I made homemade brownies, I wanted them to be just like the ones I ate as a kid – super fudgy, moist, and chocolaty, with crispy edges and crackly tops. But the thing is, these brownies didn’t come from a recipe. We always made them from a box. Nowadays, I prefer to bake from scratch, but no brownie recipe I tried could live up to the chocolate brownies of my childhood.\n"
            + "So this fall, as I flipped through Michelle Lopez’s new book Weeknight Baking, her recipe for Boxed Mix Brownies, From Scratch caught my eye. Would I finally be able to make homemade brownies that would be just as delicious as the ones from a box?\n"
            + "The verdict: yes! I’ve had this brownie recipe on repeat since the first time I tried it. It calls for basic pantry ingredients, and it’s hardly more difficult than using a mix. As for the brownies, they’re true perfection – glossy, fudgy, and filled with rich chocolate flavor. Trust me, you’re going to want to make them ASAP!\n"
            + "Another thing you should do ASAP is check out Weeknight Baking! This book is packed with crave-worthy recipes that are meant for busy weeknights.\n"
            + "Each one comes with fun variations (I have my eye on the matcha snickerdoodles) as well as tips for becoming a more efficient baker. After years of juggling a 9-to-5 job and running her blog, Hummingbird High, Michelle is full of wisdom on how to bake on a busy schedule. She writes, “We’re all doing the best we can with what we have. And I’m going to help you bake any night of the week that works for you.” If you love baking, you’ll love this book.",
            "ingredients": "1 1/2 cups granulated sugar*\n"
            + "3/4 cup all-purpose flour\n"
            + "2/3 cup cocoa powder, sifted if lumpy\n"
            + "1/2 cup powdered sugar, sifted if lumpy\n"
            + "1/2 cup dark chocolate chips\n"
            + "3/4 teaspoons sea salt\n"
            + "2 large eggs\n"
            + "1/2 cup canola oil or extra-virgin olive oil**\n"
            + "2 tablespoons water\n"
            + "1/2 teaspoon vanilla",
            "instructions": "1.	Preheat the oven to 325°F. Lightly spray an 8x8 baking dish (not a 9x9 dish or your brownies will overcook) with cooking spray and line it with parchment paper. Spray the parchment paper.\n"
            + "2.	In a medium bowl, combine the sugar, flour, cocoa powder, powdered sugar, chocolate chips, and salt.\n"
            + "3.	In a large bowl, whisk together the eggs, olive oil, water, and vanilla. Sprinkle the dry mix over the wet mix and stir until just combined.\n"
            + "4.	Pour the batter into the prepared pan (it'll be thick - that's ok) and use a spatula to smooth the top. Bake for 40 to 48 minutes, or until a toothpick comes out with only a few crumbs attached (note: it's better to pull the brownies out early than to leave them in too long).\n"
            + "5.	Cool completely before slicing.*** Store in an airtight container at room temperature for up to 3 days. These also freeze well!"}
            localStorage.setItem("recipe" + index, JSON.stringify(brownie));
            localStorage.setItem("recipeIndex", ++index);

            localStorage.setItem("inserted", true);
            }
    }
	else {
		alert("Sorry, your browser does not support local storage");
	}
}