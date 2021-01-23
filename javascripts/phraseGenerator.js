var phrases = [	'Awesome!',
				'Superlative!',
				'Interesting!'
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