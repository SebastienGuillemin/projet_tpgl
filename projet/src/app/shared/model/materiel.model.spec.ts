import { Materiel } from './materiel.model';
import { Silo } from './materiels/silo.model';

describe('Materiel', () => {
  let materiel: Materiel;
  let siloTest: Silo;

  beforeEach(() => {
    materiel = new Materiel("Silo", "Plein", "Silo");
    //Comme par défaut les état et les labels de la classe Materiel sont vides, il faut prendre une classe enfant.
    siloTest = new Silo("Silo", "Vide");
  });

  it('should create an instance', () => {
    expect(new Materiel()).toBeTruthy();
  });

  it('Doit retourner les bonnes données', () => {
    expect(materiel.getDonnees()).toEqual("[Silo]Silo : Plein");
  });

  it('Doit retourner le bon index', () => {
    expect(siloTest.getEtatIndex()).toEqual(0);

    siloTest.etat = "Plein"
    expect(siloTest.getEtatIndex()).toEqual(1);

    //Test pour une valeur qui n'est pas dans le tableau.
    siloTest.etat = "";
    expect(siloTest.getEtatIndex()).toEqual(-1);
  });

  it('Doit retourner les bonnes données', () => {
    expect(materiel.getDonnees()).toEqual("[Silo]Silo : Plein");
  });

  it('Doit retourner la bonne action', () => {
    siloTest.action();
    expect(siloTest.etat).toEqual("Plein");

    siloTest.action();
    expect(siloTest.etat).toEqual("Vide");
  });

  it('Doit retourner le bon label', () => {
    expect(siloTest.getActionLabel()).toEqual("Remplir");

    siloTest.action();
    expect(siloTest.getActionLabel()).toEqual("Vider");
  });

  it('Doit retourner les bons etats', () => {
    expect(siloTest.getEtats()).toEqual(["Vide", "Plein"]);
  });

  it('Doit retourner les bons noms de champs de formulaire', () => {
    expect(materiel.getFormFields()).toEqual(["nom", "etat"]);
  });
});
