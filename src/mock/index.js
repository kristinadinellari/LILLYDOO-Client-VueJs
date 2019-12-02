export const banner = {
  desktop: require('@/assets/images/banner/cover-desktop.png'),
  mobile: require('@/assets/images/banner/cover-mobile.png'),
  el: require('@/assets/images/banner/banner-el.png'),
  content: {
    title: 'Entdecke unsere </br> Hauftreundlichkeit',
    button: 'Jetzt deine grÖsse wÄhlen'
  }
};

export const howItWorks = {
  title: 'Wie es funktionert',
  steps: [
    {
      title: 'Dein testpaket',
      description: 'Wir schenbken Dir die Produkte,  du übernimmst nur das Porto',
      icon: require('@/assets/svg/deinTestpaket.svg')
    },
    {
      title: 'Deine flexibilitÄt',
      description: 'Erste Monatsbox nach 14 Tagen für 49,50 € erhalten. Order noch vor der ersten Lieferung küdigen',
      description2: 'Erfahre hier mehr über das LILLYDOO Windel-Abo',
      icon: require('@/assets/svg/deineFlexibilitat.svg')
    },
    {
      title: 'Deine monatsbox',
      description: 'Jederzeit Designs order Lieferintervalle anpassen order die Windelgröße ändern',
      icon: require('@/assets/svg/deineMonatsbox.svg')
    }
  ]
};

export const testPackage = {
  title: 'Unser gratis Testpaket',
  subtitle: 'wÄhle deine grÖsse',
  description: 'Test jetzt unsere Windeln und Feuchttucher. Wir zahlen die Produkte, Du nur den Versand',
  sizes: [
    {
      imgKey: '2-3'
    },
    {
      imgKey: '3-4'
    },
    {
      imgKey: '4-7'
    },
    {
      imgKey: '7-10'
    },
    {
      imgKey: '10-12'
    }
  ],
  details: [
    'Automatischer Ubergang ins jederzeit kundbare Windel-Abo fur 49.50 € pro Lieferung',
    'Preise inkl. MwSt., ggf. zzgl. <span>Versandkosten.</span>'
  ],
  button: 'In den warenkorob legen'
};

export const testerContent = {
  title: 'Dein Testpaket enthält',
  items: [
    {
      title: '1O lillydo windeln',
      img: require('@/assets/images/tp.jpg'),
      details: [
        'O % Parfume & Lotionen, 1OO % LILLYDOO Schutz',
        'Extra weich und mit idealer Passform'
      ]
    },
    {
      title: '15 SENSETIVE FEUCHTTÜCHER10 ',
      details: [
        'O % Parfüme & PEGs, 1OO % biologisch abbaubar',
        'Extra dickes und kompostierbares Tuch'
      ]
    }
  ]
};
