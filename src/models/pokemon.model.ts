export default interface IPokemon {
    name: string,
    url: string,
    id: number,
    types: Array<IType>,
    height: number,
    abilities: Array<IAbility>
}

interface IType {
    slot: number,
    type: {
        name: string,
        url: string
    }
}

interface IAbility {
    ability: {
        name: string,
        url: string
    },
    is_hidden: boolean,
    slot: number
}