// Task 1 - Select Element by ID

        const item = document.getElementById('uniId');

        // Change the background color and font size
        item.style.backgroundColor = 'lightblue';
        item.style.fontSize = '30px';
        item.style.padding = '10px';


// 2. Select Elements by Class Name
        const elements = document.getElementsByClassName('newClass');

        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = 'darkgreen';
            elements[i].style.fontSize = '20px';
            elements[i].style.padding = '10px';
        }

// 3. Select Elements by Tag Name
         const paragraphs = document.getElementsByTagName('p');
         for (let i = 0; i < paragraphs.length; i++) {
            paragraphs[i].style.border = '2px solid pink';
            paragraphs[i].style.padding = '10px';
         }

// 4. Select Element by Query Selector
        const ul = document.querySelector("ul");
        ul.querySelector("li").style.fontStyle = "italic";
        ul.querySelector("li").style.color = "blue";


// 5. Select Elements by Query Selector All
        const items = document.querySelectorAll('.item');
        items.forEach(function(item){

            item.style.margin = '20px';
        });

 // 6.  Change Styles of Selected Elements
        const quote = document.getElementById('Quote');
        quote.style.backgroundColor = 'beige';
        quote.style.textAlign = 'center';
        quote.style.border = '2px solid brown';
        quotet.style.padding = '30px';
        quote.style.fontFamily = 'Georgia, serif';
        quote.style.fontSize = '20px';
       

       

          