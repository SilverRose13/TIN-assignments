function Student(firstName, lastName, id, grades){
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;

    this.printInfo = function() {
        console.log(firstName + ' ' + lastName);
        gradeCount = 0;
        gradeSum = 0;
        for(var i in grades){
        	for(var j in grades[i]){
            //console.log(grades[i][j]);
          	gradeCount += 1;
          	gradeSum += grades[i][j];
          }

        }
        gradeAvg = gradeSum / gradeCount;
        console.log(gradeAvg);
    }
}

student1 = new Student('Maja', 'Karolak', 5344, [[5, 5, 6, 4, 3],[3, 4, 2, 3, 5]]);
student1.printInfo();

