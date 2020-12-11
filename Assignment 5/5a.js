

var dog = new function () {
    this.breed = 'Golden Retriever';
    this.age = 2;
    this.sex = 'famale';

    this.bark = function() {
        console.log("Woof, woof!");
    };

    this.sit = function() {
        console.log('dog is sitting');
    };

    
    }

 function dogInfo(dogObj){

	for(var i in dogObj){
    console.log(dogObj[i]);
    console.log(typeof(dogObj[i]));
  }
}

dogInfo(dog);


