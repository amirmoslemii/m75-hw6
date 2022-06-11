let user = {
    id: 6, firstName: "Hossein", lastName: "Zenderoh", roles: ["student", "admin"], age:
        17, scores: { english: 10, math: 19.5, physics: 14 },
};

function newScores(newScore) {
    let newObj = { newScore }
    let newobj2 = Object.assign(user, newObj)
    console.log(newobj2);

}
// newScores({ english: 11, math: 12, physics: 13 })

function newRoles(newRole) {
    let newRoles = { newRole }
    let newObj = Object.assign(user, newRoles)
    if (user.age < 18) {
        let status = { status: "very young" }
        let text = Object.assign(user, status)
    }
    console.log(newObj);

}
// newRoles(['amir', 'moslemi'])

const convertToArr = Object.entries(user);
convertToArr.push(['fatherName', "ali"])
let convertToObj = Object.assign({}, convertToArr);
console.log(convertToObj);
