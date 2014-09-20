var phrases = [	'Great and important product for the scholarly community!',
				'It is a very cool tool and very helpful for researchers.',
				'I think the Altmetric score is a great way of showing popular interest in a paper - something that funding sources, administrators and institutional media representatives are keen to see.',
				'A very useful application that is easy install and use. Gives a different set of information from citation analysis.',
				'I found Altmetric to be an intriguing way to track how an article was being "discovered" beyond the more common number of citations.',
				'Your service collects information and stores it in an easy-to-access way.',
				'I think the Altmetric donut is a very appealing image and like that when you hover over it, it provides more information.',
				'An intuitive interface with keyword searching (and not just by author name) that allows for data export.',
				'Support at Altmetric is always very responsive. I receive a response within 24 hours of sending a request despite the difference in time zones.',
				'Very cool tool!',
				'Science communication is important and Altmetric is a great tool to track media impact.',
				'The user experience of the interface is excellent, nice clean and well designed website. Support is always prompt and helpful.',
				'Altmetric provides interesting stats at article-level and is really easy to use.',
				'Altmetric bookmarklet is TOO COOL FOR SCHOOL. School must become far cooler.',
				'I love the Altmetric app for Scopus.',
				'Thanks for increasing my awareness of altmetrics. Words cannot express my fondness for Altmetric Explorer.',
				'This is no doubt one of the best tools around at the moment!',
				'Just got access to Altmetric...and I’m already geeking out like crazy. Very interesting.',
				'The Bookmarklet is a FREE and amazing tool for seeing how research papers (with DOI) are floating around on social media.',
				'Holy crap this is cool - instantly get altmetrics for any article for free with this bookmarklet.',
				'Looking forward to the day I can put Altmetric measures on my CV and have everyone who reads it know what they mean! I am a fan.',
				'Altmetric is a excellent way to read, monitor, and collect secondary articles on publications. I also do not know of another source that provides this kind of resource for the community.',
				'Altmetric is a comprehensive service that grasps a large amount of social activity around scientific papers. In that regard, I would definitely encourage its use among scientists and, even more, librarians.',
				'While we are deciding on an institution level tool, the free applet is immediately useful to our faculty and students, which is fantastic.'
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