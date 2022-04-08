class Submariner {
  constructor(model, life, profondita) {
    this.model = model;
    this.life = life;
    this.profondita = profondita;
  }

  //ottieni profondita
  getProfondita() {
    return this.profondita;
  }

  //immersione
  immersione(metriRichiesti) {
    let metriTotali = this.profondita + metriRichiesti; // 300 + 700 = 1000
    // limite di metri 900
    if (metriTotali < 900) {
      this.profondita = metriTotali;
      return this.profondita;
    } else {
      return "error";
    }
  }

  //emersione
  emersione(metri) {
    let metriRisalita = this.profondita - metri; // 200mt - 450mt = POSITIVI

    if (metriRisalita >= 0) {
      this.profondita = metriRisalita;
      return this.profondita;
    } else {
      return "errore";
    }
  }

  //attaco
  attacco(sottomarinoAvversario) {
    // attaccare sub2
    // togliere damage a vita sott2
    // quanto damage ho
    // vita sott2
    // sott2.vita - damage

    const damage = Math.floor(Math.random() * 10);
    let vitaSottomarinoAvversarioPostAttacco =
      sottomarinoAvversario.life - damage;
    sottomarinoAvversario.life = vitaSottomarinoAvversarioPostAttacco;
    return sottomarinoAvversario.life;
  }
}

const sottomarino1 = new Submariner("torpedo", 100, 0);
const sottomarino2 = new Submariner("andromeda", 100, 0);

console.log(sottomarino2);
sottomarino2.immersione(300);
console.log(sottomarino2.getProfondita());
sottomarino1.attacco(sottomarino2);
console.log(sottomarino2);
