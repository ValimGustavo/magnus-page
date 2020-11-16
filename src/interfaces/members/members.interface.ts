type ID = string | number

export interface Member {
  id: ID;
  firstName: string;
  lastName: string;
  contacts: {
    phone: string | null;
    cel: string | null;
    email: string | null;
  };
  address: {
    street: string,
    number:  number,
    neighborhood:  string,
    city: string,
 },
 birthDate: string
}
