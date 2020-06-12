import { uuid } from 'uuidv4';

class Register {
  id: string;

  name: string;

  document: string;

  dateOfBirth: Date;

  constructor({ name, document, dateOfBirth }: Omit<Register, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.document = document;
    this.dateOfBirth = dateOfBirth;
  }
}

export default Register;
