class animal_kingdom{
    constructor(){
        if (this.constructor == animal_kingdom) {
            throw new Error ("please implement")
        }
}
}



// with backbone
class back_bone extends animal_kingdom{
bone() {
    console.log(`fish, toad, turtle, bird, dog`)
    console.log(`we have back bone`)
}
}
const fish = new back_bone
fish.bone()
.


// without backbone

class without_backBone extends animal_kingdom{
    bone() {
        console.log(`butterfly`)
        console.log(`we dont have back bone`)
    }
    }
    const fly = new without_backBone
    fly.bone()
