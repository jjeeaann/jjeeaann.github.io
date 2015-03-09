var phrases = [	'Ace Nando’s (makes 4 portions)',
				'Chicken pad thai (makes 4 portions)',
				'Slow cooker BBQ ribs (makes 4-5 portions)',
				'Slow cooker pulled pork (makes 5+ portions)',
				'Slow cooker beef chili (makes 8 portions)',
				'Butter chicken (makes 4 portions)',
				'Maple dijon chicken (makes 4 portions)',
				'Sesame chicken (makes 4 portions)',
				'Frozen pizza (makes 2 portions)',
				'Snobby joes (makes 4 fresh + 2 frozen portions)',
				'Beef and broccoli (makes 4 portions)',
				'Chorizo pasta (makes 5 portions)',
				'Meatball and veggie pasta (makes 4 portions)',
			  ];
			  
var currentPhrase;
			  
function getPhrase()
{
	var index = currentPhrase;
	
	while (index === currentPhrase)
	{
		index = getIndex();
	}
	
	$('#phraseText').text(phrases[index]);
	currentPhrase = index;
}

function getIndex()
{
	return Math.floor(Math.random() * phrases.length);
}