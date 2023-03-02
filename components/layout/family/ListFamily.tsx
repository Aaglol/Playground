import { Family } from "@/store/types";
import { useSelector } from "react-redux";
import { storeSelectedFamily, storeAvaiableFamilys } from "@/store/slices/familySlice";

export const ListFamily = () => {
    
    const selectedFamily = useSelector(storeSelectedFamily);
    const familys = useSelector(storeAvaiableFamilys);

    const SelectFamily = () => (
        <div>
            Velg familie

            {familys.map((familie, key) => (
                <div className="flex" key={key}>
                    <div>{familie.name}</div>
                    <div>Velg</div>
                </div>
            ))}
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

    return selectedFamily.name !== '' ? <Family /> : <SelectFamily />;
}