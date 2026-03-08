/* ============================================= */
/* KI-Reifegrad-Assessment — Question Definitions */
/* ============================================= */

const ROUTING_QUESTION = {
  id: 'q1',
  section: 'Aktuelle KI-Nutzung',
  text: 'Hat Ihr Unternehmen bereits KI implementiert?',
  type: 'single',
  options: [
    { value: 'novice',       label: 'Nein, wir haben bisher keine KI-Projekte durchgeführt.' },
    { value: 'intermediate', label: 'Ja, wir haben mit ersten Piloten begonnen.' },
    { value: 'expert',       label: 'Ja, KI ist in erste Geschäftsprozesse integriert.' }
  ]
};

/* -------------------------------------------------- */
/*  EINSTEIGER (Novice) — 12 follow-up questions       */
/* -------------------------------------------------- */
const NOVICE_QUESTIONS = [
  {
    id: 'n2', section: 'KI-Potenzial & Strategische Vision',
    text: 'Wenn KI kostenlos und einfach zu implementieren wäre, wie würden Sie diese in Ihrem Unternehmen einsetzen?',
    type: 'multi',
    options: [
      { value: 'datenanalyse',      label: 'Datenanalyse & Reporting' },
      { value: 'prozessauto',       label: 'Prozessautomatisierung (z.B. Rechnungsverarbeitung, Dateneingabe)' },
      { value: 'kundenkommunikation', label: 'Kundenkommunikation & Chatbots' },
      { value: 'qualitaet',         label: 'Qualitätskontrolle & Fehlererkennung' },
      { value: 'lieferkette',       label: 'Lieferketten- & Bestandsoptimierung' },
      { value: 'hr',                label: 'HR & Recruiting (z.B. Lebenslaufanalyse)' },
      { value: 'betrug',            label: 'Betrugserkennung & Compliance' },
      { value: 'marketing',         label: 'Marketing & Personalisierung' },
      { value: 'maintenance',       label: 'Predictive Maintenance' },
      { value: 'produktentwicklung', label: 'Produktentwicklung & Innovation' },
      { value: 'sonstiges',         label: 'Sonstiges', hasTextInput: true }
    ]
  },
  {
    id: 'n3', section: 'Organisatorische Weichenstellung',
    text: 'Wie wichtig ist KI für Ihre Geschäftsstrategie in den nächsten 3 Jahren?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'n4', section: 'Dateninfrastruktur',
    text: 'Was beschreibt die aktuelle Dateninfrastruktur Ihres Unternehmens am besten?',
    type: 'single',
    options: [
      { value: 1, label: 'Wir sammeln oder speichern keine strukturierten Daten.' },
      { value: 2, label: 'Wir haben einige strukturierte Daten, aber diese sind nicht zentralisiert oder standardisiert.' },
      { value: 3, label: 'Wir verfügen über eine gut verwaltete Dateninfrastruktur mit klarer Governance.' }
    ]
  },
  {
    id: 'n5', section: 'Unterstützung durch die Unternehmensführung',
    text: 'Leadership Buy-in',
    type: 'compound',
    subQuestions: [
      {
        id: 'n5a',
        text: 'Wie würden Sie die Unterstützung Ihrer Unternehmensführung für KI-Initiativen beschreiben?',
        type: 'stars', maxStars: 5
      },
      {
        id: 'n5b',
        text: 'Haben Sie Klarheit zu der KI-Ausrichtung durch die Unternehmensführung, insbesondere bzgl. Kommunikation, Ressourcen und Kapazitäten?',
        type: 'single',
        options: [
          { value: 1, label: 'Die Unterstützung ist punktuell und nicht planbar.' },
          { value: 2, label: 'Wir haben für dedizierte Projekte die volle Unterstützung.' },
          { value: 3, label: 'Wir haben die volle Unterstützung und können loslegen, die Dinge mit dem meisten Potential zu entdecken.' }
        ]
      }
    ]
  },
  {
    id: 'n6', section: 'Technische Bereitschaft',
    text: 'Welche der folgenden Aussagen beschreibt am besten die technische Reife Ihres Unternehmens zur Einführung von KI?',
    type: 'single',
    options: [
      { value: 1, label: 'Wir haben keine interne KI-Expertise oder IT-Ressourcen für KI-Projekte.' },
      { value: 2, label: 'Wir haben ein IT-Team, aber keine spezifische KI-Expertise.' },
      { value: 3, label: 'Wir haben spezialisierte Talente im Bereich KI oder Data Science.' }
    ]
  },
  {
    id: 'n7', section: 'KI-Bewusstsein & Schulung',
    text: 'Welche KI-bezogenen Lerninitiativen sowie Wissensvermittlung gibt es in Ihrem Unternehmen?',
    type: 'single',
    options: [
      { value: 1, label: 'Keine.' },
      { value: 2, label: 'Einige Mitarbeiter haben KI-bezogene Konferenzen oder Webinare besucht.' },
      { value: 3, label: 'Wir bieten intern strukturierte KI-Schulungsprogramme an.' },
      { value: 4, label: 'Wir arbeiten mit Universitäten oder Forschungsinstituten für den Wissensaustausch im Bereich KI zusammen.' },
      { value: 5, label: 'Wir haben eine KI-Initiative aus diversen Bereichen, die gemeinsam Entdecken und Lernen und dieses Wissen in der Organisation verbreiten.' }
    ]
  },
  {
    id: 'n8', section: 'Branchen-Benchmark',
    text: 'Wie bewerten Sie Ihre KI-Bereitschaft im Vergleich zu Ihren Wettbewerbern?',
    type: 'single',
    options: [
      { value: 1, label: 'Wir liegen bei der KI-Einführung hinter unseren Wettbewerbern zurück.' },
      { value: 2, label: 'Wir liegen etwa gleichauf mit unseren Wettbewerbern.' },
      { value: 3, label: 'Wir sind unseren Wettbewerbern bei der KI-Einführung voraus.' },
      { value: 0, label: 'Wir wissen nicht, wie weit sich unsere Wettbewerber bisher mit KI beschäftigen.' }
    ]
  },
  {
    id: 'n9', section: 'Budgetüberlegungen',
    text: 'Wenn KI in Ihrem Unternehmen eingeführt würde, was wäre die größte finanzielle Hürde?',
    type: 'single',
    options: [
      { value: 1, label: 'Wir haben kein Budget für KI vorgesehen.' },
      { value: 2, label: 'Es fehlt uns an einem klaren Verständnis des ROI (Return on Investment) von KI, um Investitionen zu rechtfertigen.' },
      { value: 3, label: 'Wir investieren in Technologie, aber KI hat keine Priorität.' }
    ]
  },
  {
    id: 'n10', section: 'Wahrgenommene KI-Risiken',
    text: 'Was sind die Hauptbedenken, die die Einführung von KI in Ihrem Unternehmen verhindern?',
    type: 'multi',
    options: [
      { value: 'use_cases',    label: 'Mangel an klaren Anwendungsfällen (Use Cases).' },
      { value: 'kosten',       label: 'Hohe Implementierungskosten.' },
      { value: 'regulierung',  label: 'Regulatorische oder Compliance-Bedenken.' },
      { value: 'expertise',    label: 'Mangel an interner Expertise.' },
      { value: 'auswirkungen', label: 'Unsicherheit über die geschäftlichen Auswirkungen von KI.' },
      { value: 'vertraulich',  label: 'Unsicherheit zum Schutz vertraulicher Inhalte.' }
    ]
  },
  {
    id: 'n11', section: 'Bereitschaft für KI-Experimente',
    text: 'Wie bewerten Sie die Bereitschaft Ihres Unternehmens, in den nächsten 12 Monaten mit KI zu experimentieren?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'n12', section: 'Kenntnis der Regulierung',
    text: 'Wie vertraut ist Ihr Unternehmen mit KI-Vorschriften wie dem EU AI Act?',
    type: 'single',
    options: [
      { value: 1, label: 'Überhaupt nicht bekannt.' },
      { value: 2, label: 'Wir haben von KI-Vorschriften gehört, haben aber keine Compliance-Strategie.' },
      { value: 3, label: 'Wir überwachen KI-Vorschriften aktiv und bereiten uns darauf vor.' }
    ]
  },
  {
    id: 'n13', section: 'Potenzial für KI-Anwendungsfälle',
    text: 'Wie klar kann Ihr Unternehmen potenzielle KI-Anwendungsfälle definieren?',
    type: 'stars', maxStars: 5
  }
];

/* -------------------------------------------------- */
/*  FORTGESCHRITTENE (Intermediate) — 12 follow-up     */
/* -------------------------------------------------- */
const INTERMEDIATE_QUESTIONS = [
  {
    id: 'i2', section: 'Hauptherausforderungen bei der KI-Einführung',
    text: 'KI-Einführung: Erfolg & Herausforderungen',
    type: 'compound',
    subQuestions: [
      {
        id: 'i2a',
        text: 'Wie erfolgreich war die KI-Einführung bisher?',
        type: 'stars', maxStars: 5
      },
      {
        id: 'i2b',
        text: 'Welchen Herausforderung sind Sie bei der Einführung von KI bisher begegnet?',
        type: 'multi',
        options: [
          { value: 'einsatzfelder',    label: 'Unklare Einsatzfelder' },
          { value: 'widerstand',       label: 'Widerstand und Gerüchte' },
          { value: 'budget',           label: 'Fehlendes Budget und/oder Ressourcen' },
          { value: 'kompetenzen',      label: 'Fehlende Kompetenzen im KI-Bereich' },
          { value: 'unterstuetzung',   label: 'Fehlende Unterstützung' },
          { value: 'mehrwerte',        label: 'Fehlendes Bewusstsein zu Mehrwerten' },
          { value: 'kommunikation',    label: 'Fehlende Kommunikation' },
          { value: 'risikenwissen',    label: 'Fehlendes Wissen zu Risiken' },
          { value: 'sonstige',         label: 'Sonstige', hasTextInput: true }
        ]
      }
    ]
  },
  {
    id: 'i3', section: 'Aktuelle KI-Anwendungsfälle',
    text: 'Mit welchen der folgenden KI-Anwendungen hat Ihr Unternehmen bereits experimentiert?',
    type: 'multi',
    options: [
      { value: 'agenten',        label: 'KI-Agenten' },
      { value: 'generative',     label: 'Generative KI (Chatbots & virtuelle Assistenten)' },
      { value: 'predictive',     label: 'Datenbasierte Prognosen (Predictive Analytics)' },
      { value: 'prozessauto',    label: 'Prozessautomatisierung' },
      { value: 'computervision', label: 'KI-gestützte Bilderkennung (Computer Vision)' },
      { value: 'betrug',         label: 'Intelligente Betrugserkennung & Risikoanalyse' },
      { value: 'empfehlung',     label: 'Intelligente Empfehlungslogik und -systeme' },
      { value: 'keine',          label: 'Wir haben noch keine KI-Experimente durchgeführt.' }
    ]
  },
  {
    id: 'i4', section: 'KI-Datenreife',
    text: 'Wie gut sind die Daten Ihres Unternehmens auf KI-Projekte vorbereitet?',
    type: 'single',
    options: [
      { value: 1, label: 'Uns fehlen die notwendigen strukturierten Daten für KI.' },
      { value: 2, label: 'Unsere Daten sind teilweise strukturiert, aber Verbesserungen sind erforderlich.' },
      { value: 3, label: 'Wir verfügen über qualitativ hochwertige, gut verwaltete Daten, die bereit für KI sind.' }
    ]
  },
  {
    id: 'i5', section: 'KI-Entwicklungsprozess',
    text: 'Wie werden KI-Projekte derzeit in Ihrem Unternehmen entwickelt?',
    type: 'single',
    options: [
      { value: 1, label: 'Ad-hoc-Experimente ohne strukturierten Ansatz.' },
      { value: 2, label: 'KI-Projekte werden innerhalb der IT- oder Datenteams bearbeitet, es fehlt jedoch an strategischer Ausrichtung.' },
      { value: 3, label: 'Wir folgen einem strukturierten Rahmenwerk für die Entwicklung und Governance von KI.' }
    ]
  },
  {
    id: 'i6', section: 'Skalierung von KI',
    text: 'Wie schätzen Sie Ihr Unternehmen ein, KI-Experimente zu skalieren?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'i7', section: 'Unterstützung durch die Unternehmensführung',
    text: 'Wie stark ist die Führungsebene dabei, KI-Projekte über die Experimentierphase hinaus zu unterstützen?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'i8', section: 'KI-Governance & Compliance',
    text: 'Welches Maß an KI-Governance gibt es in Ihrem Unternehmen?',
    type: 'single',
    options: [
      { value: 1, label: 'Keine formellen KI-Governance-Richtlinien.' },
      { value: 2, label: 'Einige ethische Richtlinien, aber kein dediziertes Governance-Team.' },
      { value: 3, label: 'Dediziertes KI-Governance-Team mit klaren Richtlinien und Risikomanagement.' }
    ]
  },
  {
    id: 'i9', section: 'KI-Talente & Fähigkeiten',
    text: 'Welche internen KI-Fähigkeiten besitzt Ihr Unternehmen derzeit?',
    type: 'single',
    options: [
      { value: 1, label: 'Es sind keine internen KI-Ingenieure da.' },
      { value: 2, label: 'Data Scientists, aber keine dedizierten KI-Ingenieure.' },
      { value: 3, label: 'KI-Ingenieure, aber begrenzte Erfahrung in der Implementierung (Deployment).' },
      { value: 4, label: 'KI-Experten, die in Zusammenarbeit mit Geschäftseinheiten arbeiten.' },
      { value: 5, label: 'KI-Team mit fundierter Erfahrung in produktiven KI-Systemen.' }
    ]
  },
  {
    id: 'i10', section: 'KI-Technologie-Stack',
    text: 'Welche KI-bezogenen Technologien nutzt Ihr Unternehmen?',
    type: 'multi',
    options: [
      { value: 'keine',      label: 'Keine spezifischen KI-Technologien im Einsatz.' },
      { value: 'onpremise',  label: 'On-Premise-KI-Infrastruktur.' },
      { value: 'cloud',      label: 'Cloud-basierte KI-Plattformen.' },
      { value: 'opensource',  label: 'Open-Source-KI-Frameworks.' },
      { value: 'automl',     label: 'Automatisierte ML-Plattformen (AutoML).' }
    ]
  },
  {
    id: 'i11', section: 'Messung des Erfolgs',
    text: 'Wie effektiv misst Ihr Unternehmen den Erfolg von KI-Pilotprojekten?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'i12', section: 'Budget & Investition',
    text: 'Was ist die primäre Herausforderung bei der Sicherung von KI-Finanzierungen für skalierbare Projekte?',
    type: 'single',
    options: [
      { value: 1, label: 'Die Führungsebene ist nicht vom ROI von KI überzeugt.' },
      { value: 2, label: 'KI-Projekte konkurrieren mit anderen Geschäftsprioritäten um Finanzierung.' },
      { value: 3, label: 'Mangel an KI-Business-Cases mit messbarem finanziellem Nutzen.' },
      { value: 4, label: 'Wir haben dedizierte KI-Investitionen, benötigen aber klarere Skalierungsstrategien.' }
    ]
  },
  {
    id: 'i13', section: 'Anwendungsfälle für KI-Experimente',
    text: 'Wie gut definiert sind die KI-Anwendungsfälle, die Ihr Unternehmen derzeit testet?',
    type: 'stars', maxStars: 5
  }
];

/* -------------------------------------------------- */
/*  EXPERTEN (Expert) — 9 follow-up questions          */
/* -------------------------------------------------- */
const EXPERT_QUESTIONS = [
  {
    id: 'e2', section: 'Messung des KI-Erfolgs',
    text: 'Wie misst Ihr Unternehmen den Erfolg von KI-Initiativen?',
    type: 'multi',
    options: [
      { value: 'finanziell',      label: 'Finanzielle Wirkung' },
      { value: 'produktivitaet',  label: 'Mitarbeiterproduktivität' },
      { value: 'kundenerfahrung', label: 'Kundenerfahrung' },
      { value: 'strategisch',     label: 'Strategischer Beitrag' }
    ]
  },
  {
    id: 'e3', section: 'KI-Integration in Geschäftsprozesse',
    text: 'Wie gut ist KI in die Kernprozesse Ihres Unternehmens integriert?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'e4', section: 'Dateninfrastruktur für KI',
    text: 'Was beschreibt die Dateninfrastruktur Ihres Unternehmens für den KI-Betrieb?',
    type: 'single',
    options: [
      { value: 1, label: 'Daten sind fragmentiert und nicht zentralisiert.' },
      { value: 2, label: 'Strukturierte Daten vorhanden, benötigen aber Anpassungen für die KI-Nutzung.' },
      { value: 3, label: 'Zentralisierte, hochwertige Dateninfrastruktur.' },
      { value: 4, label: 'Integrierte Daten-Pipelines, optimiert für KI-Operationen in Echtzeit.' }
    ]
  },
  {
    id: 'e5', section: 'Messung des KI-ROI',
    text: 'Wie misst Ihr Unternehmen den Return on Investment (ROI) von KI-Projekten?',
    type: 'single',
    options: [
      { value: 1, label: 'Wir messen den KI-ROI nicht.' },
      { value: 2, label: 'Wir verfolgen Kosteneinsparungen und Effizienzsteigerungen durch KI.' },
      { value: 3, label: 'KI-Erfolg wird durch Auswirkungen auf den Umsatz und das Kundenerlebnis gemessen.' },
      { value: 4, label: 'Der KI-ROI ist mit strategischen Geschäftszielen und unternehmensweiten KPIs verknüpft.' }
    ]
  },
  {
    id: 'e6', section: 'KI-Compliance & Ethik',
    text: 'Welche KI-Compliance- und Ethik-Erwägungen befolgt Ihr Unternehmen?',
    type: 'single',
    options: [
      { value: 1, label: 'Keine formelle KI-Ethik-Richtlinie.' },
      { value: 2, label: 'KI-Modelle werden auf Bias (Voreingenommenheit) geprüft, aber nicht systematisch auditiert.' },
      { value: 3, label: 'KI-Projekte entsprechen der DSGVO, dem EU AI Act oder ähnlichen Vorschriften.' },
      { value: 4, label: 'KI-Ethik und Compliance sind in die Governance-Rahmenwerke integriert.' }
    ]
  },
  {
    id: 'e7', section: 'Kontinuierliche Verbesserung',
    text: 'Wie ausgereift ist Ihr Prozess zur kontinuierlichen Verbesserung von KI-Modellen?',
    type: 'stars', maxStars: 5
  },
  {
    id: 'e8', section: 'Schulung der Belegschaft',
    text: 'Welche Initiativen zur Weiterbildung der Mitarbeitenden im Bereich KI gibt es?',
    type: 'single',
    options: [
      { value: 1, label: 'Keine KI-Weiterbildungs-Initiativen.' },
      { value: 2, label: 'Grundlegende KI-Sensibilisierungsschulungen für Mitarbeitende.' },
      { value: 3, label: 'KI-Schulungen sind nur für technisches Personal verfügbar.' },
      { value: 4, label: 'Unternehmensweite Programme zur KI-Literacy (KI-Kompetenz) für alle Mitarbeitenden.' }
    ]
  },
  {
    id: 'e9', section: 'Nutzung von KI-Anbietern & Cloud',
    text: 'Wo stellt Ihr Unternehmen primär KI-Modelle bereit?',
    type: 'single',
    options: [
      { value: 1, label: 'On-Premise-Infrastruktur.' },
      { value: 2, label: 'Hybrid (On-Premise und Cloud).' },
      { value: 3, label: 'Cloud-basierte KI-Plattformen (AWS, Azure, Google Cloud).' },
      { value: 4, label: 'Vollständig ausgelagerte KI-Lösungen über Drittanbieter.' }
    ]
  },
  {
    id: 'e10', section: 'KI-Risikomanagement',
    text: 'Wie effektiv verwaltet Ihr Unternehmen KI-bezogene Risiken?',
    type: 'stars', maxStars: 5
  }
];

/* -------------------------------------------------- */
/*  Helper: get questions for a maturity path          */
/* -------------------------------------------------- */
function getQuestionsForPath(path) {
  switch (path) {
    case 'novice':       return NOVICE_QUESTIONS;
    case 'intermediate': return INTERMEDIATE_QUESTIONS;
    case 'expert':       return EXPERT_QUESTIONS;
    default:             return [];
  }
}

function getPathLabel(path) {
  switch (path) {
    case 'novice':       return 'Einsteiger';
    case 'intermediate': return 'Fortgeschrittene';
    case 'expert':       return 'Experten';
    default:             return path;
  }
}

function getPathEmoji(path) {
  switch (path) {
    case 'novice':       return '🟡';
    case 'intermediate': return '🟠';
    case 'expert':       return '🟢';
    default:             return '⚪';
  }
}
