var photos = [];
var descTexts = [
    "Bella",
    "Max",
    "Charlie",
    "Lucy",
    "Rocky",
    "Luna",
    "Milo",
    "Nala",
    "Simba",
    "Gizmo",
    "Peanut",
    "Whiskers"
];
var captionTexts = [
    // Dogs
    "Loyal and loving, Bella enjoys playful walks daily.",
    "Energetic and curious, Max loves chasing tennis balls.",
    "Gentle giant, Charlie adores cuddles and belly rubs.",
    "Sweet and friendly, Lucy brightens everyone's day.",
    "Brave and protective, Rocky guards his family fiercely.",
    // Cats
    "Mysterious and graceful, Luna loves napping in sunspots.",
    "Playful and mischievous, Milo enjoys climbing and exploring.",
    "Elegant and serene, Nala purrs softly when petted.",
    "Adventurous and bold, Simba loves outdoor escapades.",
    // Hamsters
    "Tiny and quick, Gizmo enjoys running on his wheel.",
    "Adorable and fluffy, Peanut loves hoarding tasty treats.",
    "Curious and friendly, Whiskers explores every corner curiously."
];
var floatTexts = [
    "Bella is a loyal and loving companion who enjoys playful walks daily. She loves to explore new places and is always ready for an adventure with her family.",
    "Max is an energetic and curious dog who loves chasing tennis balls and exploring his surroundings. He enjoys spending time outdoors and thrives on plenty of exercise and mental stimulation.",
    "Charlie is a gentle giant who adores cuddles and belly rubs. Despite his size, he has a heart of gold and is always eager to make new friends, both human and canine.",
    "Lucy is sweet and friendly, brightening everyone's day with her playful antics and affectionate nature. She loves nothing more than spending time with her family and receiving lots of love and attention.",
    "Rocky is brave and protective, guarding his family fiercely with unwavering loyalty and devotion. He is a true companion, always by your side through thick and thin.",
    "Luna is a mysterious and graceful cat who loves napping in sunspots and watching the world go by. She is independent yet affectionate, enjoying quiet moments with her favorite humans.",
    "Milo is a playful and mischievous cat who enjoys climbing and exploring his surroundings. He is always on the lookout for new adventures and loves to entertain his family with his playful antics.",
    "Nala is elegant and serene, with a gentle purr that soothes the soul. She enjoys curling up in cozy spots and receiving gentle pets from her favorite humans.",
    "Simba is adventurous and bold, with a fearless spirit that leads him on outdoor escapades. He loves exploring the great outdoors and is always up for a new adventure with his family.",
    "Gizmo is tiny and quick, always on the move as he scurries around his cage and runs on his wheel. Despite his small size, he has a big personality and loves to show off his agility.",
    "Peanut is adorable and fluffy, with a penchant for hoarding tasty treats in his cheeks. He is curious and playful, always exploring every nook and cranny of his habitat.",
    "Whiskers is curious and friendly, with a sense of adventure that leads him to explore every corner curiously. He is always on the lookout for new sights and smells, eager to satisfy his curiosity."
];
var names = [];
var descriptions = [];
var floatDescription = [];
var fileNames = [];
var imageList = [];
var image;
var openList = '<li id="photo';
var closeList = '</li>'
var openCaptionTag='<div class="caption">';
var closeCaptionTag='</div>';
var openDescTag='<div class="description">';
var closeDescTag='</div>';

//event handler
function showdetails(i){
    var floatDescription = document.getElementById("float_description");
    floatDescription.querySelector('h2').textContent = descTexts[i];
    floatDescription.querySelector('span').textContent = floatTexts[i];
    floatDescription.style.display = 'block';
}
document.getElementById("close-float-description").addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    document.getElementById("float_description").style.display = 'none'; // Hide float_description div
});

//create for loop to create the 12 images
for (var i=0; i<12; i++){
    //creat file name and add to array
    openList_=openList+(i+1)+'">'
    fileNames.push("animal_gallery"+(i+1));
    photos.push('<img src="images/' + fileNames[i] + '.jpg">');
    names.push('<div class="description" onclick="showdetails(' + i + ')">'+ descTexts[i] +'</div>')
    descriptions.push('<div class="caption">'+ captionTexts[i] +'</div>')
    image = openList_ + photos[i] + names[i] + descriptions[i] + closeList; 
    imageList.push(image);
}


//display our images
document.getElementById("gallery").innerHTML=imageList.join(" ");
console.log(fileNames);

$(document).ready(function(){
    
    /* Open lightbox on button click */
    $('#gallery img').click(function(){
        $('.backdrop').animate({'opacity':'.50'}, 300, 'linear').css('display', 'block');
        $('.box').fadeIn();

        //Check if lightbox has an image
        if ($('.box').contents('img')) {
            $('.box').contents().remove('img'); //If true, clear image
        }

        //Get text content in attribute
        var $srcvalue = $(this).attr('src'); //or var altvalue = $(this).attr('alt');
        
        //Clone element
        var img = $('#gallery img[src="' + $srcvalue + '"]').clone();
        $('.box').append(img); //Insert duplicated element in another element
    });

    /* Click to close lightbox */
    $('.close, .backdrop').click(function(){
        $('.backdrop').animate({'opacity':'0'}, 300, 'linear', function(){
            $('.backdrop').css('display', 'none');
        });
        $('.box').fadeOut();
    });
});


