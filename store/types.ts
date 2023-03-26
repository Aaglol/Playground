export interface User {
    id: number
    username: string
    email: string
}

export interface FamilyMember {
    firstname: string
    lastname: string
    age: string
    permission: number
}

export interface Family {
    user: number
    family_name: string
    family_description: string
    status: number
    members: Array<FamilyMember>
}

export interface FormRegisterDataTypes { 
    username: 'Robin',
    password: '',
    email: ''
}

export interface DropdownItem {
    name: string
    href: string
}
