export let languages = {
  cs: {
    y: (c: any) => { return ['rok', 'roku', 'roky', 'let'][getCzechForm(c)]; },
    mo: (c: any) => { return ['měsíc', 'měsíce', 'měsíce', 'měsíců'][getCzechForm(c)]; },
    w: (c: any) => { return ['týden', 'týdne', 'týdny', 'týdnů'][getCzechForm(c)]; },
    d: (c: any) => { return ['den', 'dne', 'dny', 'dní'][getCzechForm(c)]; },
    h: (c: any) => { return ['hodina', 'hodiny', 'hodiny', 'hodin'][getCzechForm(c)]; },
    m: (c: any) => { return ['minuta', 'minuty', 'minuty', 'minut'][getCzechForm(c)]; },
    s: (c: any) => { return ['sekunda', 'sekundy', 'sekundy', 'sekund'][getCzechForm(c)]; },
    ms: (c: any) => { return ['milisekunda', 'milisekundy', 'milisekundy', 'milisekund'][getCzechForm(c)]; },
    decimal: ','
  }
};

// Internal helper function for Czech language.
function getCzechForm(c: number) {
  if (c === 1) {
    return 0;
  } else if (Math.floor(c) !== c) {
    return 1;
  } else if (c % 10 >= 2 && c % 10 <= 4 && c % 100 < 10) {
    return 2;
  } else {
    return 3;
  }
}
