/* ============================================= */
/* KI-Reifegrad-Assessment — Report Templates     */
/* German template text + report generation       */
/* ============================================= */

// =====================
// Path Descriptions
// =====================
const PATH_DESCRIPTIONS = {
  novice: {
    title: 'Einsteiger',
    emoji: '🟡',
    description: 'Ihr Unternehmen steht am Anfang der KI-Reise. Sie haben bisher keine KI-Projekte implementiert, aber es gibt wertvolles Potenzial, das es zu entdecken gilt. Viele Unternehmen befinden sich in dieser Phase — der entscheidende Schritt ist, mit dem Aufbau von Wissen und ersten Experimenten zu beginnen.',
    peerIntro: 'Ihre Ergebnisse werden mit anderen Teilnehmern verglichen, die sich ebenfalls in der Einsteigerphase befinden. So können Sie sehen, wo Sie im Vergleich zu ähnlich aufgestellten Unternehmen stehen.',
    nextSteps: [
      'Bauen Sie ein grundlegendes KI-Verständnis im Unternehmen auf — z.B. durch Workshops oder Webinare.',
      'Identifizieren Sie 2–3 konkrete Anwendungsfälle, bei denen KI den größten Mehrwert bieten könnte.',
      'Bewerten Sie Ihre Dateninfrastruktur und beginnen Sie mit der Strukturierung Ihrer Daten.',
      'Holen Sie die Unterstützung der Führungsebene ein und definieren Sie ein erstes KI-Pilotprojekt.',
      'Informieren Sie sich über relevante KI-Vorschriften (z.B. EU AI Act) und deren Auswirkungen.'
    ]
  },
  intermediate: {
    title: 'Fortgeschrittene',
    emoji: '🟠',
    description: 'Ihr Unternehmen hat bereits erste Schritte in Richtung KI unternommen und mit Pilotprojekten begonnen. Sie befinden sich in einer entscheidenden Phase: Der Übergang von Experimenten hin zur systematischen Skalierung erfordert klare Prozesse, Governance und Führungsunterstützung.',
    peerIntro: 'Ihre Ergebnisse werden mit anderen Teilnehmern verglichen, die sich ebenfalls in der Fortgeschrittenen-Phase befinden — Unternehmen, die bereits erste KI-Piloten durchgeführt haben.',
    nextSteps: [
      'Entwickeln Sie einen strukturierten Rahmen für die KI-Governance, einschließlich ethischer Richtlinien.',
      'Erstellen Sie messbare KPIs für Ihre KI-Pilotprojekte, um den ROI nachzuweisen.',
      'Investieren Sie in den Aufbau interner KI-Kompetenzen und die Weiterbildung bestehender Teams.',
      'Skalieren Sie erfolgreiche Pilotprojekte in den operativen Betrieb.',
      'Etablieren Sie eine regelmäßige Kommunikation über KI-Fortschritte an die Führungsebene.'
    ]
  },
  expert: {
    title: 'Experten',
    emoji: '🟢',
    description: 'Ihr Unternehmen hat KI bereits in Geschäftsprozesse integriert und verfügt über fundierte Erfahrung. In dieser Phase geht es darum, KI-Systeme kontinuierlich zu optimieren, den ROI systematisch zu messen und eine nachhaltige KI-Strategie für die Zukunft sicherzustellen.',
    peerIntro: 'Ihre Ergebnisse werden mit anderen Teilnehmern verglichen, die KI ebenfalls bereits operativ einsetzen. Dieser Vergleich zeigt, wo Ihr Unternehmen unter den fortgeschrittensten Anwendern steht.',
    nextSteps: [
      'Verankern Sie KI-Metriken fest in Ihren unternehmensweiten KPIs und Strategieprozessen.',
      'Investieren Sie in kontinuierliche Modellverbesserung und MLOps-Praktiken.',
      'Stellen Sie eine unternehmensweite KI-Literacy sicher — nicht nur in technischen Teams.',
      'Bauen Sie ein robustes KI-Risikomanagement und Compliance-Framework auf.',
      'Evaluieren Sie regelmäßig neue KI-Technologien und -Ansätze für strategische Vorteile.'
    ]
  }
};

// =====================
// Dimension Interpretations
// =====================
// Each scored dimension gets low/mid/high interpretation text.
// Keys match question IDs from questions.js.

const DIMENSION_INTERPRETATIONS = {
  // ---- NOVICE ----
  n3: {
    label: 'Strategische Bedeutung von KI',
    low: 'KI hat derzeit eine geringe strategische Priorität in Ihrem Unternehmen. Dies kann bedeuten, dass andere Geschäftsbereiche Vorrang haben oder das Potenzial von KI noch nicht vollständig erkannt wurde.',
    mid: 'KI wird als relevant für Ihre Geschäftsstrategie erkannt, ist aber noch nicht fest in der Unternehmensplanung verankert. Es gibt Raum, KI stärker in strategische Überlegungen einzubinden.',
    high: 'KI ist ein zentraler Bestandteil Ihrer Zukunftsstrategie. Ihr Unternehmen erkennt das transformative Potenzial von KI und plant aktiv damit.'
  },
  n4: {
    label: 'Dateninfrastruktur',
    low: 'Ihre Dateninfrastruktur ist kaum vorhanden oder nicht strukturiert. Ohne eine solide Datenbasis ist es schwierig, KI-Projekte erfolgreich umzusetzen.',
    mid: 'Sie verfügen über grundlegende Datenstrukturen, die jedoch noch nicht optimal organisiert sind. Eine Verbesserung der Datenverwaltung würde KI-Initiativen erheblich erleichtern.',
    high: 'Ihre Dateninfrastruktur ist gut aufgestellt und bietet eine solide Grundlage für KI-Projekte.'
  },
  n5a: {
    label: 'Unterstützung der Führungsebene',
    low: 'Die Führungsebene zeigt wenig Engagement für KI-Initiativen. Ohne Unterstützung von oben ist es schwer, Ressourcen und Budget für KI-Projekte zu sichern.',
    mid: 'Es gibt grundlegende Unterstützung der Führungsebene, aber noch keine klare strategische Priorisierung von KI.',
    high: 'Die Führungsebene steht voll hinter KI-Initiativen und unterstützt aktiv die notwendigen Investitionen.'
  },
  n5b: {
    label: 'Klarheit der KI-Ausrichtung',
    low: 'Die KI-Ausrichtung durch die Führung ist unklar und punktuell. Es fehlt an konsistenter Kommunikation und Ressourcenzuweisung.',
    mid: 'Für einzelne Projekte gibt es klare Unterstützung, aber eine übergreifende KI-Vision fehlt noch.',
    high: 'Die Führungsebene hat eine klare KI-Vision kommuniziert und stellt Ressourcen für die Exploration bereit.'
  },
  n6: {
    label: 'Technische Bereitschaft',
    low: 'Es gibt keine interne KI-Expertise oder dedizierte IT-Ressourcen. Der Aufbau technischer Kapazitäten ist ein wichtiger erster Schritt.',
    mid: 'Sie haben ein IT-Team, aber keine spezifische KI-Expertise. Gezielte Weiterbildung oder externe Partnerschaften könnten diese Lücke schließen.',
    high: 'Ihr Unternehmen verfügt über spezialisierte KI- oder Data-Science-Talente.'
  },
  n7: {
    label: 'KI-Bewusstsein & Schulung',
    low: 'Es gibt keine KI-bezogenen Lerninitiativen. Das Bewusstsein für KI-Möglichkeiten ist begrenzt.',
    mid: 'Erste Schritte in Richtung KI-Bildung wurden unternommen, aber es fehlt ein strukturiertes Programm.',
    high: 'Ihr Unternehmen investiert aktiv in KI-Bildung und Wissensaustausch.'
  },
  n8: {
    label: 'Branchen-Benchmark',
    low: 'Sie schätzen Ihre KI-Bereitschaft als unterdurchschnittlich im Branchenvergleich ein.',
    mid: 'Sie befinden sich auf einem ähnlichen Niveau wie Ihre Wettbewerber.',
    high: 'Sie sehen sich als Vorreiter in der KI-Einführung in Ihrer Branche.'
  },
  n9: {
    label: 'Budgetbereitschaft',
    low: 'Es gibt kein dediziertes Budget für KI. Die finanziellen Hürden sind eine wesentliche Barriere.',
    mid: 'Der ROI von KI ist noch unklar, was Investitionen erschwert. Eine klare Business-Case-Entwicklung könnte helfen.',
    high: 'Es wird bereits in Technologie investiert, auch wenn KI noch nicht die höchste Priorität hat.'
  },
  n11: {
    label: 'Experimentierbereitschaft',
    low: 'Die Bereitschaft, mit KI zu experimentieren, ist gering. Mögliche Ursachen könnten Unsicherheit oder fehlende Ressourcen sein.',
    mid: 'Es gibt eine gewisse Offenheit für KI-Experimente, aber noch keinen klaren Fahrplan.',
    high: 'Ihr Unternehmen ist bereit und motiviert, in naher Zukunft mit KI zu experimentieren.'
  },
  n12: {
    label: 'Regulierungskenntnisse',
    low: 'KI-Vorschriften wie der EU AI Act sind noch unbekannt. Es ist wichtig, sich frühzeitig damit vertraut zu machen.',
    mid: 'Sie haben von KI-Vorschriften gehört, aber es fehlt eine konkrete Compliance-Strategie.',
    high: 'Ihr Unternehmen überwacht KI-Vorschriften aktiv und bereitet sich proaktiv darauf vor.'
  },
  n13: {
    label: 'Anwendungsfall-Klarheit',
    low: 'Es fällt Ihrem Unternehmen schwer, konkrete KI-Anwendungsfälle zu definieren. Ein strukturierter Discovery-Workshop könnte helfen.',
    mid: 'Es gibt erste Ideen für KI-Anwendungsfälle, aber diese sind noch nicht klar ausgearbeitet.',
    high: 'Ihr Unternehmen kann klar definieren, wo KI den größten Mehrwert bieten würde.'
  },

  // ---- INTERMEDIATE ----
  i2a: {
    label: 'Bisheriger KI-Erfolg',
    low: 'Die bisherige KI-Einführung wird als wenig erfolgreich bewertet. Es lohnt sich, die Ursachen zu analysieren und den Ansatz anzupassen.',
    mid: 'Die KI-Einführung zeigt gemischte Ergebnisse. Einige Projekte waren erfolgreich, andere weniger.',
    high: 'Die bisherige KI-Einführung wird als sehr erfolgreich bewertet — eine starke Basis für die Skalierung.'
  },
  i4: {
    label: 'KI-Datenreife',
    low: 'Die Daten sind noch nicht für KI-Projekte aufbereitet. Investitionen in Datenqualität und -struktur sind erforderlich.',
    mid: 'Die Daten sind teilweise strukturiert, aber es gibt Verbesserungspotenzial für KI-Anwendungen.',
    high: 'Ihre Daten sind hochwertig, gut verwaltet und bereit für KI-Projekte.'
  },
  i5: {
    label: 'KI-Entwicklungsprozess',
    low: 'KI-Projekte werden ad hoc und ohne strukturierten Ansatz durchgeführt. Ein Framework könnte helfen.',
    mid: 'KI-Projekte sind in IT-Teams angesiedelt, aber es fehlt die strategische Ausrichtung.',
    high: 'Ihr Unternehmen folgt einem strukturierten Framework für KI-Entwicklung und Governance.'
  },
  i6: {
    label: 'Skalierungsfähigkeit',
    low: 'Die Fähigkeit, KI-Experimente zu skalieren, wird als gering eingeschätzt. Der Übergang von Piloten zum operativen Betrieb ist eine zentrale Herausforderung.',
    mid: 'Es gibt erste Ansätze zur Skalierung, aber der Prozess ist noch nicht systematisch.',
    high: 'Ihr Unternehmen ist gut aufgestellt, um KI-Experimente in den produktiven Betrieb zu überführen.'
  },
  i7: {
    label: 'Führungsunterstützung',
    low: 'Die Führungsebene unterstützt KI-Projekte kaum über die Experimentierphase hinaus. Stärkeres Engagement ist notwendig.',
    mid: 'Es gibt grundlegende Führungsunterstützung, aber die langfristige Verpflichtung fehlt noch.',
    high: 'Die Führungsebene steht voll hinter der Skalierung von KI-Projekten.'
  },
  i8: {
    label: 'KI-Governance',
    low: 'Es gibt keine formellen KI-Governance-Richtlinien. Dies kann zu Risiken bei der Skalierung führen.',
    mid: 'Erste ethische Richtlinien existieren, aber es fehlt ein dediziertes Governance-Team.',
    high: 'Ihr Unternehmen verfügt über ein dediziertes KI-Governance-Team mit klaren Richtlinien.'
  },
  i9: {
    label: 'KI-Talente',
    low: 'Es fehlen interne KI-Ingenieure. Der Aufbau oder die Rekrutierung von Talenten ist entscheidend.',
    mid: 'Es gibt Data Scientists oder KI-Ingenieure, aber die Erfahrung in der produktiven Implementierung ist begrenzt.',
    high: 'Ihr Unternehmen verfügt über erfahrene KI-Experten, die eng mit Geschäftseinheiten zusammenarbeiten.'
  },
  i11: {
    label: 'Erfolgsmessung',
    low: 'Der Erfolg von KI-Pilotprojekten wird kaum gemessen. Ohne klare Metriken ist es schwer, den Wert von KI nachzuweisen.',
    mid: 'Es gibt erste Ansätze zur Erfolgsmessung, aber die Systematik fehlt noch.',
    high: 'Ihr Unternehmen misst den Erfolg von KI-Projekten effektiv und kann den ROI nachweisen.'
  },
  i12: {
    label: 'Budget & Investition',
    low: 'Die Führungsebene ist vom ROI von KI nicht überzeugt. Stärkere Business Cases sind erforderlich.',
    mid: 'KI-Projekte konkurrieren mit anderen Prioritäten. Klarere Skalierungsstrategien könnten helfen.',
    high: 'Es gibt dedizierte KI-Investitionen mit klaren Skalierungsstrategien.'
  },
  i13: {
    label: 'Anwendungsfall-Definition',
    low: 'Die KI-Anwendungsfälle sind noch unscharf definiert. Eine klarere Priorisierung würde helfen.',
    mid: 'Es gibt definierte Anwendungsfälle, aber ihre Bewertung und Priorisierung könnte verbessert werden.',
    high: 'Ihre KI-Anwendungsfälle sind klar definiert, priorisiert und bereit für die Skalierung.'
  },

  // ---- EXPERT ----
  e3: {
    label: 'KI-Integration',
    low: 'KI ist noch nicht tief in die Kernprozesse integriert. Es gibt Potenzial für eine stärkere Verankerung.',
    mid: 'KI ist in einige Prozesse integriert, aber eine durchgängige Integration steht noch aus.',
    high: 'KI ist umfassend in die Kernprozesse Ihres Unternehmens integriert.'
  },
  e4: {
    label: 'Dateninfrastruktur für KI',
    low: 'Die Daten sind fragmentiert. Eine Konsolidierung und Zentralisierung ist für fortgeschrittene KI-Operationen notwendig.',
    mid: 'Strukturierte Daten sind vorhanden, aber Anpassungen für den KI-Betrieb sind erforderlich.',
    high: 'Ihre Dateninfrastruktur ist zentralisiert und für KI-Operationen in Echtzeit optimiert.'
  },
  e5: {
    label: 'KI-ROI-Messung',
    low: 'Der KI-ROI wird nicht systematisch gemessen. Dies erschwert die strategische Rechtfertigung von KI-Investitionen.',
    mid: 'Kosteneinsparungen und Effizienzsteigerungen durch KI werden verfolgt, aber die Messung könnte umfassender sein.',
    high: 'Der KI-ROI ist mit strategischen Geschäftszielen und unternehmensweiten KPIs verknüpft.'
  },
  e6: {
    label: 'KI-Compliance & Ethik',
    low: 'Es gibt keine formelle KI-Ethik-Richtlinie. Angesichts Ihres Reifegrads ist dies ein wichtiger Entwicklungsbereich.',
    mid: 'KI-Modelle werden auf Bias geprüft oder entsprechen regulatorischen Anforderungen, aber eine systematische Integration fehlt noch.',
    high: 'KI-Ethik und Compliance sind vollständig in Ihre Governance-Rahmenwerke integriert.'
  },
  e7: {
    label: 'Kontinuierliche Verbesserung',
    low: 'Prozesse zur kontinuierlichen Verbesserung von KI-Modellen sind noch nicht etabliert.',
    mid: 'Es gibt erste Ansätze zur Modellverbesserung, aber der Prozess ist noch nicht vollständig ausgereift.',
    high: 'Ihr Unternehmen verfügt über ausgereife Prozesse zur kontinuierlichen Optimierung von KI-Modellen.'
  },
  e8: {
    label: 'Schulung der Belegschaft',
    low: 'Es gibt keine KI-Weiterbildungsinitiativen. Dies kann die Akzeptanz und effektive Nutzung von KI einschränken.',
    mid: 'KI-Schulungen sind vorhanden, aber nicht für alle Mitarbeitenden zugänglich.',
    high: 'Unternehmensweite KI-Literacy-Programme stellen sicher, dass alle Mitarbeitenden KI verstehen und nutzen können.'
  },
  e9: {
    label: 'KI-Infrastruktur & Cloud',
    low: 'KI-Modelle werden ausschließlich On-Premise betrieben. Cloud- oder Hybridlösungen könnten Flexibilität und Skalierbarkeit verbessern.',
    mid: 'Eine Hybrid- oder Cloud-basierte Infrastruktur ist im Einsatz, bietet aber noch Optimierungspotenzial.',
    high: 'Ihre KI-Infrastruktur ist modern und optimal auf Ihre Anforderungen abgestimmt.'
  },
  e10: {
    label: 'KI-Risikomanagement',
    low: 'KI-bezogene Risiken werden kaum aktiv verwaltet. Ein strukturiertes Risikomanagement ist für den Expertenstatus unerlässlich.',
    mid: 'Es gibt erste Ansätze zum KI-Risikomanagement, aber der Prozess könnte systematischer sein.',
    high: 'Ihr Unternehmen verwaltet KI-bezogene Risiken effektiv und proaktiv.'
  }
};

// =====================
// Report Generation
// =====================

/**
 * Generate a structured report for one participant.
 * @param {Object} response — the participant's response document
 * @param {Array} peerResponses — all responses from same maturity path in this session
 * @returns {Object} report data ready for rendering
 */
function generateReport(response, peerResponses) {
  const path = response.path;
  const pathDesc = PATH_DESCRIPTIONS[path];
  const questions = getQuestionsForPath(path);

  // 1. Get individual dimension scores
  const individualDimensions = getDimensionScores(response.answers, path);

  // 2. Calculate peer averages for each dimension
  const peerDimensionAverages = individualDimensions.map((dim, i) => {
    const peerVals = peerResponses.map(pr => {
      const peerDims = getDimensionScores(pr.answers, pr.path);
      const match = peerDims[i];
      return match ? (match.score / match.max) * 5 : null;
    }).filter(v => v !== null);

    const avg = peerVals.length > 0
      ? peerVals.reduce((a, b) => a + b, 0) / peerVals.length
      : 0;

    return avg;
  });

  // 3. Build dimension report entries
  const dimensionEntries = individualDimensions.map((dim, i) => {
    const normalized = (dim.score / dim.max) * 5;
    const peerAvg = peerDimensionAverages[i];
    const delta = normalized - peerAvg;
    const interp = DIMENSION_INTERPRETATIONS[dim.id];

    let level, interpText;
    if (normalized <= 2) {
      level = 'low';
      interpText = interp ? interp.low : '';
    } else if (normalized <= 3.5) {
      level = 'mid';
      interpText = interp ? interp.mid : '';
    } else {
      level = 'high';
      interpText = interp ? interp.high : '';
    }

    return {
      id: dim.id,
      label: interp ? interp.label : dim.label,
      score: parseFloat(normalized.toFixed(2)),
      peerAvg: parseFloat(peerAvg.toFixed(2)),
      delta: parseFloat(delta.toFixed(2)),
      level,
      interpretation: interpText
    };
  });

  // 4. Sort for strengths and growth areas
  const sorted = [...dimensionEntries].sort((a, b) => b.score - a.score);
  const strengths = sorted.slice(0, 3);
  const growthAreas = sorted.slice(-3).reverse(); // lowest 3, worst first

  // 5. Overall scores
  const individualScore = parseFloat(response.maturityScore || calculateMaturityScore(response.answers, path));
  const peerScores = peerResponses.map(pr => parseFloat(pr.maturityScore || 0));
  const peerAvgScore = peerScores.length > 0
    ? parseFloat((peerScores.reduce((a, b) => a + b, 0) / peerScores.length).toFixed(2))
    : 0;

  return {
    respondentName: response.respondentName,
    email: response.email,
    path,
    pathDescription: pathDesc,
    individualScore,
    peerAvgScore,
    peerCount: peerResponses.length,
    dimensions: dimensionEntries,
    strengths,
    growthAreas,
    createdAt: response.createdAt
  };
}
