// Show a list of users from a static JSON array.

const USERS=[{id:1,name:"A"},{id:2,name:"B"}];
export default () => <ul>{USERS.map(u=><li key={u.id}>{u.name}</li>)}</ul>;
