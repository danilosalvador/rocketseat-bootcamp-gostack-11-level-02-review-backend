import { Router } from 'express';
import { parseISO } from 'date-fns';

import RegistersRepository from '../repositories/RegistersRepositories';
import CreateRegisterService from '../services/CreateRegisterService';

const registersRouter = Router();
const registersRepository = new RegistersRepository();

registersRouter.get('/', (request, response) => {
  const registers = registersRepository.all();

  return response.json(registers);
});

registersRouter.post('/', (request, response) => {
  try {
    const { name, document, dateOfBirth } = request.body;

    const createRegisterService = new CreateRegisterService(
      registersRepository,
    );

    const parsedDateOfBirth = parseISO(dateOfBirth);

    const register = createRegisterService.execute({
      name,
      document,
      dateOfBirth: parsedDateOfBirth,
    });

    return response.json(register);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default registersRouter;
