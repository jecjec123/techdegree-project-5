const images = [
{ 
  img: '01', 
  datacaption:'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
  alt:'Hay Bales'
},
{
 img: '02',
 datacaption:' The lake was so calm today. We had a great view of the snow on the mountains from here.',
 alt:'Lake'
},
{ 
img: '03',
datacaption:'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
alt:'Canyon'
},
{ 
img: '04',
datacaption:' It was amazing to see an iceberg up close, it was so cold but didn’t snow today.',
alt:'Iceberg'
},
{
img: '05',
datacaption:' The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
alt:'Desert'
},
{
img: '06',
datacaption:'Fall is coming, I love when the leaves on the trees start to change color.',
alt: 'Fall '
},
{
img: '07',
datacaption:' I drove past this plantation yesterday, everything is so green!',
alt: 'Plantation'
},
{
img: '08',
datacaption:' My summer vacation to the Oregon Coast. I love the sandy dunes!',
alt: 'Dunes'
},
{
img: '09',
datacaption:' We enjoyed a quiet stroll down this countryside lane. ',
alt: 'Countryside Lane'
},
{
img: '10',
datacaption:'Sunset at the coast! The sky turned a lovely shade of orange.',
alt: 'Sunset'
},
{
img: '11',
datacaption:' I did a tour of a cave today and the view of the landscape below was breathtaking.',
alt: 'Cave'
},
{ 
img: '12',
datacaption:'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.',
alt: 'Bluebells'
}
];
 const imageGallery = images.map(element => ` <a href="img/thumbnails/${element.img}.jpg" data-caption="${element.datacaption}">
                                                <img src="img/thumbnails/${element.img}.jpg" alt="${element.alt}">
                                                </a>`
                                              );
 document.querySelector(".gallery").innerHTML = imageGallery.join(' ');

const search = new Filter('search', 'data-caption');

  


  


 