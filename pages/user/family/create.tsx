import { FormGroup } from "@/components/FormGroup";
import { ProfileHeader } from "@/components/layout/profile/ProfileHeader";

export const UserProfile = () => {


    const handleCreateFamily = async (e: any) => {
        if (!e) {
            return;
        }
        const data = new FormData(e.target);
        console.log('data: ', data);
        //await useRequesthandler('http://localhost:8081/', 'family/create', 'POST', {});
    };

    const formInputs = [
        {
            title: 'Brukernavn',
            name: 'username',
            type: 'text',
            attribute: 'username',
        },
        {
            title: 'Passord',
            name: 'password',
            type: 'password',
            attribute: 'current-password',
        },
        {
            title: 'E-post',
            name: 'email',
            type: 'email',
            attribute: 'email',
        },
    ];

    return ( 
        <div className="py-20">
            <ProfileHeader page='profile' />

            <hr />
            <form onClick={(e) => handleCreateFamily(e)}>
                {formInputs.map((input, key) => 
                    <FormGroup
                        data={input}
                        key={key}
                        inputOnChange={() => {}}
                    />
                )}
            </form>
        </div>
    )
}

export default UserProfile;