/**
 * Created by ou on 2018/8/8.
 */
class a {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	hello() {
		console.log(`hello, my name is ${this.name} and i am ${this.age} years old`);
		Symbol('test');
	}
}

export default a;