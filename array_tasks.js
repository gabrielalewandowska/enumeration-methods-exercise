var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		return arr;
	},

	square: function (arr) {
		return arr.map(function(x){
			return x * x;
		})
	},

	sum: function (arr) {
		return arr.reduce(function(total, currentNumber){
			return total + currentNumber;
		}, 0);
	},

	findDuplicates: function (arr) {
		var results = arr.filter(function(number, pos){
			return number === arr[pos + 1] && number !== arr[pos - 1];
		})
	return results;
},

removeAndClone: function (arr, valueToRemove) {
	return arr.filter(function(number){
		return number !== valueToRemove;
	})
	},

	findIndexesOf: function (arr, itemToFind) {
		var indexes = [];
			for(var i = 0; i < arr.length; i++)
		  if (arr[i] === itemToFind)
		 		 indexes.push(i);

		return indexes;
		},

	sumOfAllEvenNumbersSquared: function (arr) {

		var evenNumbers = arr.filter(function(number){
			return number % 2 === 0;
		})

		var numbersSquared = evenNumbers.map(function(number) {
			return number * number;
		})

		var sum = numbersSquared.reduce(function(sum, number){
			return sum + number;
		})

		return sum;
	}
}
module.exports = arrayTasks;
