import RegistersRepository from '../repositories/RegistersRepositories';
import Register from '../models/Register';

interface RequestDTO {
  name: string;
  document: string;
  dateOfBirth: Date;
}

class CreateRegisterService {
  private registersRepository: RegistersRepository;

  constructor(registersRepository: RegistersRepository) {
    this.registersRepository = registersRepository;
  }

  public execute({ name, document, dateOfBirth }: RequestDTO): Register {
    const findRegisterInSameDocument = this.registersRepository.findByDocument(
      document,
    );

    if (findRegisterInSameDocument) {
      throw Error('Já existe um registro com o mesmo documento.');
    }

    const register = this.registersRepository.create({
      name,
      document,
      dateOfBirth,
    });

    return register;
  }
}

export default CreateRegisterService;
