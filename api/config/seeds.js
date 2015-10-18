var seeder = require('mongoose-seed');

// Connect to MongoDB via Mongoose 
seeder.connect('mongodb://localhost:27017/hate-angular', function() {
  // Load Mongoose models 
  console.log('data?')
  seeder.loadModels(['./models/Hate.js']);
  // Clear specified collections 
  seeder.clearModels(['Hate'], function() {
    // Callback to populate DB once collections have been cleared 
    seeder.populateModels(data);
  });
});


var data = [
	{
		'model': 'Hate',
		'documents': [
			{
				'title': 'Should I learn AngularJS?',
				'image': 'https://img.youtube.com/vi/N-6lUR4bEcc/1.jpg',
				'video': 'https://www.youtube.com/watch?v=N-6lUR4bEcc',
				'likes': 0
			},
				{
				'title': 'Avoid Noob Bad Practices with AngularJS',
				'image': 'https://img.youtube.com/vi/Ii06dFABwCQ/1.jpg',
				'video': 'https://www.youtube.com/watch?v=Ii06dFABwCQ',
				'likes': 0
			},
				{
				'title': 'Using Nested States with The Angular JS UI Router',
				'image':'https://img.youtube.com/vi/5JJFiAS1ys4/1.jpg',
				'video': 'https://www.youtube.com/watch?v=5JJFiAS1ys4',
				'likes': 0
			},
				{
				'title': 'AngularJS Form Validation',
				'image': 'https://img.youtube.com/vi/t6XUPVmlYbY/1.jpg',
				'video': 'https://www.youtube.com/watch?v=t6XUPVmlYbY',
				'likes': 0
			},
				{
				'title': 'AngularJS Authorization Token Tutorial | PluralSight',
				'image': 'https://img.youtube.com/vi/xJScCjCNhLE/1.jpg',
				'video': 'https://www.youtube.com/watch?v=xJScCjCNhLE',
				'likes': 0
			},
				{
				'title': "Realtime 'EyeCandy' with AngularJS",
				'image': 'https://img.youtube.com/vi/8uj7YSqby7s/1.jpg',
				'video': 'https://www.youtube.com/watch?v=8uj7YSqby7s',
				'likes': 0
			},
				{
				'title': 'AngularJS to MongoDB',
				'image': 'https://img.youtube.com/vi/mVtRK89MrHc/1.jpg',
				'video': 'https://www.youtube.com/watch?v=mVtRK89MrHc',
				'likes': 0
			},
				{
				'title': 'AngularJS Tutorial: Part 13 - Filters and Sorting',
				'image': 'https://img.youtube.com/vi/7nOcg6SPspI/1.jpg',
				'video': 'https://www.youtube.com/watch?v=7nOcg6SPspI',
				'likes': 0
			},
				{
				'title': 'AngularJS Video Tutorial - Creating a Custom Filter',
				'image': 'https://img.youtube.com/vi/WHAWTOfUHOM/1.jpg',
				'video': 'https://www.youtube.com/watch?v=WHAWTOfUHOM',
				'likes': 0
			}
		]
	}
];