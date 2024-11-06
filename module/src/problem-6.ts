{


    interface Profile {
        name: string;
        age: number,
        email: string;
    }

    // interface Partial {}

    const  updateProfile = (profile:Profile,partial:{}):Profile =>{
       return {...profile, ...partial}

    }

    const myProfile:Profile = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
    }

    const updateMyProfile = updateProfile(myProfile, {age: 29})
    // console.log(updateMyProfile)




}