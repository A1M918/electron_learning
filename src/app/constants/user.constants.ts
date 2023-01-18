export type User = {
  name: String;
  assignedRoles: Array<UserRoles>;
  email: String;
  phone: String;
  details: String;
};

export type UserRoles = {
  roleName: String;
  canAccessAdmin: false | Boolean;
}
