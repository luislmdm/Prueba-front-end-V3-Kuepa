import { usersCalls } from "../interfaces/usersCalls";

  //filters users peding for calling by name
export function fnSearch (array:usersCalls[], setStateRender:any, filter:string) {

    const usersFiltereds = array.filter(user => user.localized_name.toLowerCase().trim().includes(filter.toLocaleLowerCase().trim()));
    setStateRender(usersFiltereds);
}