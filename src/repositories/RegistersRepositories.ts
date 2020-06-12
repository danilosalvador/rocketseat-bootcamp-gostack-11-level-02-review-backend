import Register from '../models/Register';

interface CreateRegister {
  name: string;
  document: string;
  dateOfBirth: Date;
}

class RegistersRepository {
  private registers: Register[] = [];

  public all(): Register[] {
    return this.registers;
  }

  public findByDocument(document: string): Register | null {
    const findRegister = this.registers.find(
      register => register.document === document,
    );

    return findRegister || null;
  }

  public create({ name, document, dateOfBirth }: CreateRegister): Register {
    const register = new Register({ name, document, dateOfBirth });

    this.registers.push(register);

    return register;
  }
}

export default RegistersRepository;
