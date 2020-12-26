import { Cereale } from './cereale.model';

describe('Cereale', () => {
  let cereale: Cereale;

  beforeEach(() => {
    cereale = new Cereale();
  });

  it('should create an instance', () => {
    expect(new Cereale()).toBeTruthy();
  });

  it('Retourne le bon acheminement', () => {
    cereale.acheminement = "";
    expect(cereale.getAcheminementList()).toEqual([]);

    cereale.acheminement = "Lyon, Paris";
    expect(cereale.getAcheminementList()).toEqual(["Lyon", "Paris"]);
  });

  it('Retourne les bons champs de formulaire', () => {
    expect(cereale.getFormFields()).toEqual(["num", "type", "poids", "qualite", "acheminement"]);
  });
});
