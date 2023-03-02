import { Family } from "@/store/types";

export const ListFamily = () => {
    const selectedFamily: Family = {
        user: 1,
        name: 'Familien Lavoll',
        description: 'Kult right',
        status: 1,
        members: [{
            firstname: 'Robin',
            lastname: 'Lavoll',
            age: '02.24.1994',
            permission: 1,
        },
        {
            firstname: 'Jasmin',
            lastname: 'Lavoll',
            age: '11.26.1996',
            permission: 1,
        }]
    };

    const SelectFamily = () => (
        <div>
            Velg familie
        </div>
    );
    
    function getAge(birthdate: Date) {
        var ageDifferenceInMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifferenceInMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    const Family = () => (
        <div className="container">
            <div className="container-title flex">
                {selectedFamily.name} <div className="ml-auto">{selectedFamily.status === 1 ? 'Aktiv' : 'Deaktivert'}</div>
            </div>
            <hr />
            <div className="container-body mt-20">
                Medlemmer
                <div className="container-box">
                    {selectedFamily.members.map((member, key) => (
                        <div key={key} className="container-box-item">
                            <div className="container-content two-sided">
                                <div className="container-split flex">
                                    <div className="container-box-item-name">
                                        {member.firstname} {member.lastname}
                                    </div>
                                    <div className="ml-20">
                                        {getAge(new Date(member.age))}
                                    </div>
                                </div>
                                <div className="container-split">
                                    <div className="text-right">Handling</div>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    );

    return (
        <div className="container-title">
            {selectedFamily ? <Family /> : <SelectFamily />} 
        </div>
    )
}