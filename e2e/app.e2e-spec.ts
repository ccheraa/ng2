import { TESTS } from '../src/app/routes/test';

TESTS.forEach(test => describe(test.name, test.function));