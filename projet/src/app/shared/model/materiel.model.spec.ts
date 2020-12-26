import { Materiel } from './materiel.model';

describe('Materiel', () => {
  let materiel: Materiel;

  beforeEach(() => {
    materiel = new Materiel();
  });

  it('should create an instance', () => {
    expect(new Materiel()).toBeTruthy();
  });
});
