{


    interface Profile {
        name: string;
        age: number,
        email: string;
    }

    const  updateProfile = (profile:Profile, partial:Partial<Profile>):Profile =>{
       return {...profile, ...partial}

    }

    const myProfile:Profile = {
        name: 'Alice',
        age: 25,
        email: 'alice@example.com'
    }

    const updateMyProfile = updateProfile(myProfile, {age: 39})
    // console.log(updateMyProfile)




}