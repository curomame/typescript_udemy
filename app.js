// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
//자동적으로 0,1,2 라는 숫자가 부여됨
var person 
//  : {
//   // name:string;
//   // age:number;
//   // hobbies:string[];
//   // role: [number,string]; // 튜플 타입 설정 
// } 
= {
    name: 'Lee',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    // role:[2,'author'] // tuple 첫번째 요소 숫자 식별자, 두번째 요소 문자열 식별자
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log('admin');
}
//person.role.push('admin') 이런게 실행되서 튜플을 깨면 안됨,
//하지만 push는 허용되어버려서 오류가 발생할 수 있음
// person.role[1] = 10; //이렇게 불가능 -> 위에서 타입을 지정해뒀기 때문
// person.role = [0,'admin, 'user] => 이런식으로 글자수를 넘어가면은 또 안됨
// let favoriteActivities : string[];
// favoriteActivities = ['Sports'];
// console.log(person.name);
// for (let hobby of person.hobbies){
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); error!
// }
