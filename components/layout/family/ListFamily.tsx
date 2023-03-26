import { useSelector } from "react-redux";
import { storeSelectedFamily, storeAvaiableFamilys } from "@/store/slices/familySlice";
import { Family, FamilyMember } from "@/store/types";

export const ListFamily = () => {
    
    const selectedFamily = useSelector(storeSelectedFamily);
    const availableFamilies = useSelector(storeAvaiableFamilys);
    
    const SelectFamily = () => (
        <div>
            <div className="container-title">
                Velg familie
            </div>

            <table className="table fixed-layout mt-20">
                <thead>
                    <tr>
                        <th className="text-left">Navn</th>
                        <th className="text-center">Beskrivelse</th>
                        <th className="text-right">Handling</th>
                    </tr>
                </thead>
            </table>
            <table className="table fixed-layout container-box">
                <tbody>
                    {availableFamilies.map((family: Family, key: number) => (
                        <tr key={key}>
                            <td className="text-left">{family.family_name}</td>
                            <td className="text-center">{family.family_description}</td>
                            <td className="text-right">Velg</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
    
    function getAge(birthdate: Date) {
        var ageDifferenceInMs = Date.now() - birthdate.getTime();
        var ageDate = new Date(ageDifferenceInMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    
    const Family = () => (
        <div className="container-body">
            <div className="container-body mt-20">
                Medlemmer
                <div className="container-box">
                    {selectedFamily.members.map((member: FamilyMember, key: number) => (
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

    return selectedFamily.family_name !== '' ? <Family /> : <SelectFamily />;
}