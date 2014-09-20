var phrases = [	'Two wrongs dont make a right.',
				'The pen is mightier than the sword.',
				'When in Rome, do as the Romans.',
				'The squeaky wheel gets the grease.',
				'When the going gets tough, the tough get going.',
				'No man is an island.',
				'Fortune favors the bold.',
				'People who live in glass houses should not throw stones.',
				'Hope for the best, but prepare for the worst.',
				'Better late than never.'
			  ];
			  
function getPhrase()
{
	$('#phraseText').text(phrases[Math.floor(Math.random() * phrases.length)]);
}