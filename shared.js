// Shared constants and helpers for index.html and reference.html
// Update this file — both pages load it.

const SUBCATEGORY_FAM = {
  // NIV — 9 FAM 402.X (verified page titles)
  'A':'402.3',    // Officials & Employees of Foreign Gov'ts & Int'l Orgs
  'B':'402.2',    // Tourists & Business Visitors
  'C':'402.4',    // Transit
  'CW':'402.18',  // CNMI Workers
  'D':'402.8',    // Crew
  'E':'402.9',    // Treaty Traders, Investors, Specialty Occupations
  'F':'402.5',    // Students & Exchange Visitors (F, M, J)
  'G':'402.3',    // Officials & Employees of Foreign Gov'ts & Int'l Orgs
  'H':'402.10',   // Temporary Workers & Trainees
  'I':'402.11',   // Information Media Representatives
  'J':'402.5',    // Students & Exchange Visitors (F, M, J)
  'K':'402.7',    // Fiancé(e) & Other NIV Family Members
  'L':'402.12',   // Intracompany Transferees
  'M':'402.5',    // Students & Exchange Visitors (F, M, J)
  'N':'402.7',    // Fiancé(e) & Other NIV Family Members
  'NATO':'402.3', // Officials & Employees of Foreign Gov'ts & Int'l Orgs
  'O':'402.13',   // Extraordinary Ability
  'P':'402.14',   // Athletes, Artists, Entertainers
  'Q':'402.15',   // International Cultural Exchange
  'R':'402.16',   // Religious Occupations
  'S':'402.6',    // Witnesses, Informants & Victims (S, T, U)
  'T':'402.6',    // Witnesses, Informants & Victims (S, T, U)
  'TN':'402.17',  // USMCA Professionals
  'U':'402.6',    // Witnesses, Informants & Victims (S, T, U)
  'V':'402.7',    // Fiancé(e) & Other NIV Family Members
  // IV — 9 FAM 502.X (verified page titles)
  'IR':'502.2','IB':'502.2','IW':'502.2','Born Abroad':'502.2', // Family-Based
  'F1':'502.2','F2':'502.2','F3':'502.2','F4':'502.2',          // Family Preference
  'EB-1':'502.4','EB-2':'502.4','EB-3':'502.4',                 // Employment-Based
  'EB-4':'502.5','GRATEFUL':'502.5','Special Immigrant':'502.5', // Special Immigrants
  'EB-5':'502.4','EB-5-Reform':'502.4',                         // Employment-Based
  'DV':'502.6',                                                  // Diversity
  'Refugee':'502.7','Asylee':'502.7',                            // Other IV
  'T-Adjustment':'502.7','U-Adjustment':'502.7',                 // Other IV
  'NACARA':'502.7','HRIFA':'502.7',                              // Other IV
  'IRCA':'502.7','Amerasian':'502.7','CNMI':'502.7',             // Other IV
  'Registry':'502.7','Legacy':'502.7',                           // Other IV
  'Diplomatic':'502.7','Citizenship Restoration':'502.7',        // Other IV
  'Administrative':'502.7',                                      // Other IV
};

// Per-visa deep-link anchors (curated from FAM page structure)
const VISA_FAM_ANCHORS = {
  // 402.10 — H visas
  'H-1B':'M402_10_4_B','H-1B1':'M402_10_5','H-1C':'M402_10_4_C',
  'H-2A':'M402_10_4_D','H-2B':'M402_10_4_E','H-3':'M402_10_4_F','H-4':'M402_10_14',
  // 402.2 — B visas
  'B-1':'M402_2_5','B-2':'M402_2_4','B-1_B-2':'M402_2_4','BCC':'M402_2_7',
  // 402.3 — A visas
  'A-1':'M402_3_5_C','A-2':'M402_3_5_D_1','A-3':'M402_3_9',
  // 402.3 — G visas
  'G-1':'M402_3_7','G-2':'M402_3_7','G-3':'M402_3_7','G-4':'M402_3_7',
  'G-5':'M402_3_9',
  // 402.3 — NATO
  'NATO-1':'M402_3_8','NATO-2':'M402_3_8','NATO-3':'M402_3_8',
  'NATO-4':'M402_3_8','NATO-5':'M402_3_8','NATO-6':'M402_3_8','NATO-7':'M402_3_9',
  // 402.3 — C-2/C-3 (on 402.3 page, not 402.4)
  'C-2':'M402_3_6','C-3':'M402_3_9',
  // 402.8 — D crew
  'D-1':'M402_8_3_A','D-2':'M402_8_3_B',
  // 402.4 — C transit
  'C-1':'M402_4_6','C-1_D':'M402_8_5',
  // 402.9 — E visas
  'E-1':'M402_9_5','E-2':'M402_9_6','E-2C':'M402_9_6','E-3':'M402_9_8','E-3D':'M402_9_8','E-3R':'M402_9_8',
  // 402.7 — K, N, V
  'K-1':'M402_7_3','K-2':'M402_7_3','K-3':'M402_7_3','K-4':'M402_7_3',
  'N-8':'M402_7_4','N-9':'M402_7_4',
  'V-1':'M402_7_3','V-2':'M402_7_3','V-3':'M402_7_3',
  // 402.5 — F, J, M
  'F-1':'M402_5_5','F-2':'M402_5_5','F-3':'M402_5_5',
  'J-1':'M402_5_6','J-2':'M402_5_6',
  'M-1':'M402_5_5','M-2':'M402_5_5','M-3':'M402_5_5',
  // 402.6 — S, T, U
  'S-5':'M402_6_4_C','S-6':'M402_6_4_D','S-7':'M402_6_4_E',
  'T-1':'M402_6_5','T-2':'M402_6_5','T-3':'M402_6_5',
  'T-4':'M402_6_5','T-5':'M402_6_5','T-6':'M402_6_5',
  'U-1':'M402_6_6','U-2':'M402_6_6','U-3':'M402_6_6','U-4':'M402_6_6','U-5':'M402_6_6',
  // 402.11 — I visa
  'I':'M402_11_3',
  // 402.12 — L visas
  'L-1A':'M402_12_4','L-1B':'M402_12_4','L-2':'M402_12_3',
  // 402.13 — O visas
  'O-1A':'M402_13_4_A','O-1B':'M402_13_4_A','O-2':'M402_13_4_B','O-3':'M402_13_4_C',
  // 402.14 — P visas
  'P-1A':'M402_14_5_A','P-1B':'M402_14_5_A','P-2':'M402_14_5_B','P-3':'M402_14_5_C','P-4':'M402_14_5_D',
  // 402.15 — Q visas
  'Q-1':'M402_15_4',
  // 402.16 — R visas
  'R-1':'M402_16_7','R-2':'M402_16_3',
  // 402.17 — TN/TD
  'TN':'M402_17_4','TD':'M402_17_10',
  // 402.18 — CW
  'CW-1':'M402_18_4_C','CW-2':'M402_18_4_D',
  // 502.5 — Special Immigrants (EB-4)
  'SD1':'M502_5_2','SD2':'M502_5_2','SD3':'M502_5_2',
  'SR1':'M502_5_2','SR2':'M502_5_2','SR3':'M502_5_2',
  'SE1':'M502_5_3','SE2':'M502_5_3','SE3':'M502_5_3',
  'SS1':'M502_5_3','SS2':'M502_5_3','SS3':'M502_5_3',
  'GS1':'M502_5_3','GV1':'M502_5_3','GV2':'M502_5_3','GV3':'M502_5_3',
  'SF1':'M502_5_4','SF2':'M502_5_4',
  'SG1':'M502_5_4','SG2':'M502_5_4',
  'SH1':'M502_5_4','SH2':'M502_5_4',
  'SJ1':'M502_5_5','SJ2':'M502_5_5',
  'SK1':'M502_5_6','SK2':'M502_5_6','SK3':'M502_5_6','SK4':'M502_5_6',
  'SN1':'M502_5_6','SN2':'M502_5_6','SN3':'M502_5_6','SN4':'M502_5_6',
  'SL1':'M502_5_7',
  'SM1':'M502_5_8','SM2':'M502_5_8','SM3':'M502_5_8','SM4':'M502_5_8','SM5':'M502_5_8',
  'BC1':'M502_5_9','BC2':'M502_5_9','BC3':'M502_5_9',
  'SP':'M502_5_10',
  'SI1':'M502_5_11','SI2':'M502_5_11','SI3':'M502_5_11',
  'SQ1':'M502_5_12','SQ2':'M502_5_12','SQ3':'M502_5_12',
  // 502.7 — Other IV
  'SB1':'M502_7_2',
  // 502.2 — Family IV
  'IR1':'M502_2_2','IR2':'M502_2_2','IR3':'M502_2_2','IR4':'M502_2_2','IR5':'M502_2_2',
  'CR1':'M502_2_2','CR2':'M502_2_2','CF1':'M502_2_2','CF2':'M502_2_2',
  'AR1':'M502_2_2','IF1':'M502_2_2','IF2':'M502_2_2',
  'IH3':'M502_2_2','IH4':'M502_2_2','VI5':'M502_2_2',
  'IB1':'M502_2_2','IB2':'M502_2_2','IB3':'M502_2_2','IB5':'M502_2_2',
  'IW1':'M502_2_2','IW2':'M502_2_2',
  'F11':'M502_2_3','F12':'M502_2_3',
  'F21':'M502_2_3','F22':'M502_2_3','F23':'M502_2_3','F24':'M502_2_3','F25':'M502_2_3',
  'F31':'M502_2_3','F32':'M502_2_3','F33':'M502_2_3',
  'F41':'M502_2_3','F42':'M502_2_3','F43':'M502_2_3',
  'AM1':'M502_2_4','AM2':'M502_2_4','AM3':'M502_2_4',
};

const FAM_TITLES = {
  'M402_2_3':'Categories of B Visas',
  'M402_2_4':'Tourist Visas (B-2)',
  'M402_2_5':'Business Visas (B-1)',
  'M402_2_7':'Border Crossing Cards (BCC)',
  'M402_3_3':'Classification Codes',
  'M402_3_5_C':'Applicants Entitled to A-1 Classification',
  'M402_3_5_D_1':'A-2 — Employee at Diplomatic or Consular Post',
  'M402_3_6':'Officials in Transit — C-2 and C-3 Visas',
  'M402_3_7':'International Organizations — G Visas',
  'M402_3_8':'NATO Representatives, Officials, and Employees',
  'M402_3_9':'Personal or Domestic Employees — A-3, C-3, G-5, NATO-7',
  'M402_4_3':'Categories of C Visas',
  'M402_4_6':'C-1 Transit Aliens',
  'M402_5_3':'Categories of F, J, and M Visas',
  'M402_5_5':'Students: Academic and Nonacademic — F and M Visas',
  'M402_5_6':'Exchange Visitors — J Visas',
  'M402_6_3':'Categories of S, T, and U Visas',
  'M402_6_4_C':'S-5 Classification — INA 101(a)(15)(S)(i)',
  'M402_6_4_D':'S-6 Classification — INA 101(a)(15)(S)(ii)',
  'M402_6_4_E':'S-7 Accompanying or Following-to-Join Dependents',
  'M402_6_5':'Victims of Trafficking in Persons — T Visas',
  'M402_6_6':'Victims of Criminal Activity — U Visas',
  'M402_7_3':'Fiancé(e)/Spouse of American Citizen — K Visas',
  'M402_7_4':'Parent or Child of SK or SN Special Immigrant — N Visas',
  'M402_8_3':'Classification as Crewmember — D Visas',
  'M402_8_3_A':'D Visa Under INA 101(a)(15)(D)(i)',
  'M402_8_3_B':'D Visa Under INA 101(a)(15)(D)(ii) — Fishing Vessels',
  'M402_8_5':'C-1 Visa for Crewmember Traveling to Join Vessel/Aircraft',
  'M402_9_3':'Classification Codes',
  'M402_9_5':'Requirements for E-1 Treaty Trader Visas',
  'M402_9_6':'Requirements for E-2 Treaty Investor Visas',
  'M402_9_8':'Requirements for E-3 Visas',
  'M402_10_3':'Classification Codes',
  'M402_10_4_B':'H-1B Nonimmigrants',
  'M402_10_4_C':'H-1C Nurse in Health Professional Shortage Area',
  'M402_10_4_D':'H-2A Nonimmigrants',
  'M402_10_4_E':'H-2B Nonimmigrants',
  'M402_10_4_F':'H-3 Nonimmigrants',
  'M402_10_5':'H-1B1 Free Trade Agreement Professionals',
  'M402_10_14':'Spouses and Children of H Nonimmigrants',
  'M402_11_3':'Information Media Representatives — I Visas',
  'M402_12_3':'Classification Codes',
  'M402_12_4':'Classification Criteria for Intracompany Transferees',
  'M402_13_3':'Classification Symbols',
  'M402_13_4_A':'O-1 Nonimmigrants',
  'M402_13_4_B':'O-2 Nonimmigrants',
  'M402_13_4_C':'O-3 Nonimmigrants',
  'M402_14_3':'Classification Symbols — P Visas',
  'M402_14_5_A':'P-1 Athletes and Group Entertainers',
  'M402_14_5_B':'P-2 Reciprocal Exchange Programs',
  'M402_14_5_C':'P-3 Culturally Unique Programs',
  'M402_14_5_D':'P-4 Spouse and Children',
  'M402_15_3':'Classification Symbols',
  'M402_15_4':'Requirements for Q Classification',
  'M402_16_3':'Classification Symbols',
  'M402_16_7':'Classification Criteria — R Visas',
  'M402_17_3':'Classification Symbols',
  'M402_17_4':'Professional Requirements — TN',
  'M402_17_10':'Spouses and Minor Children — TD Visas',
  'M402_18_3':'Classification Symbols',
  'M402_18_4_C':'CW-1 Employment Restrictions',
  'M402_18_4_D':'Spouses and Children of CW-1 Beneficiaries',
  'M502_2_2':'Immediate Relatives',
  'M502_2_3':'Family Preference Classifications',
  'M502_2_4':'Amerasian Family-Based Classification',
  'M502_3_3':'Orphans Adopted Under INA 101(b)(1)(F) — IR3 and IR4',
  'M502_4_3':'Employment-Based IV Classifications',
  'M502_5_2':'Special Immigrants — Religious Workers',
  'M502_5_3':'Special Immigrants — U.S. Government Employees',
  'M502_5_4':'Special Immigrants — Panama Canal Employees',
  'M502_5_5':'Special Immigrants — Foreign Medical Graduates',
  'M502_5_6':'Special Immigrants — Int\'l Org and NATO Civilian Employees',
  'M502_5_7':'Special Immigrants — Juvenile Court Dependents',
  'M502_5_8':'Special Immigrants — U.S. Armed Forces Recruited Abroad',
  'M502_5_9':'Special Immigrants — International Broadcasting Employees',
  'M502_5_10':'Special Immigrants — Victims of Terrorism',
  'M502_5_11':'Special Immigrants — Translators',
  'M502_5_12':'Special Immigrants — Iraqi/Afghan U.S. Gov\'t Employees',
  'M502_6_3':'Diversity Visa Eligibility',
  'M502_7_2':'Returning Residents',
  'M502_7_3':'K Visas — Spouse or Fiancé(e) of U.S. Citizen',
};

function famUrl(section, anchor) {
  const [major, minor] = section.split('.');
  const base = `https://fam.state.gov/fam/09FAM/09FAM0${major}${minor.padStart(2, '0')}.html`;
  const frag = anchor || `M${section.replace('.', '_')}_3`;
  return `${base}#${frag}`;
}

let rawData = null;
let overlayLinks = [];
let multiParentLinks = [];
let currentLayout = 'tree';
let nodePositions = {};
let currentRootData = null;
let currentUpdateFn = null;
let selectedLeafId = null;
let currentSvg = null;
let currentZoom = null;

// ── Data Loading ──

d3.json('visa_data.json').then(data => {
  rawData = data;
  currentRootData = null;
  render();
  showInaDefault();
});

function showInaDefault() {
  const panel = document.getElementById('detail-panel');
  const content = document.getElementById('detail-content');
  const nivCount = rawData.nodes.filter(n => n.group === 'NIV').length;
  const ivCount = rawData.nodes.filter(n => n.group === 'IV').length;

  content.innerHTML = `
    <div class="detail-hero" style="border-top: 3px solid #e0e0e0; padding: 20px 20px 16px;">
      <div class="detail-id" style="color:#e0e0e0">VISA MILL</div>
      <div class="detail-name">Every visa the embassy wishes you'd stop asking about</div>
    </div>
    <div class="detail-body">
      <div class="detail-section"><span class="detail-label">Codification</span><div class="detail-value-mono">8 U.S.C. &sect;1101 et seq. (Public Law 82-414)</div></div>
      <div class="detail-section"><span class="detail-label">Description</span><div class="detail-value">The foundational federal law governing all immigration to the United States. Defines all nonimmigrant classifications (&sect;101(a)(15)), immigrant preferences (&sect;203), and special immigrant categories (&sect;101(a)(27)).</div></div>
      <div class="detail-section"><span class="detail-label">Dataset</span><div class="detail-value">${rawData.nodes.length} visa classifications &mdash; ${nivCount} nonimmigrant, ${ivCount} immigrant &mdash; ${rawData.links.length} dependency links</div></div>
      <div class="detail-section"><span class="detail-label">Classification Symbols</span>
        <div class="detail-value-mono" style="margin-top:4px;">NIV: 22 CFR &sect;41.12 &middot; 9 FAM 402.1</div>
        <div class="detail-value-mono">IV: 22 CFR &sect;42.11 &middot; 9 FAM 502.1</div>
      </div>
    </div>
  `;

  panel.classList.add('active');
  document.getElementById('panel-empty').style.display = 'none';
}

// ── Transform flat data → hierarchy ──

function transformToHierarchy(data) {
  const groups = { NIV: {}, IV: {} };
  const overlays = [];
  const multiParentArcs = [];

  for (const node of data.nodes) {
    const g = node.group;
    const cat = node.category;
    const sub = node.subcategory;
    if (!groups[g]) groups[g] = {};
    if (!groups[g][cat]) groups[g][cat] = {};
    if (!groups[g][cat][sub]) groups[g][cat][sub] = [];
    groups[g][cat][sub].push(node);
  }

  const rootChildren = [];
  for (const grp of ['NIV', 'IV']) {
    const catChildren = [];
    for (const cat of Object.keys(groups[grp]).sort()) {
      const subChildren = [];
      for (const sub of Object.keys(groups[grp][cat]).sort()) {
        const allLeaves = groups[grp][cat][sub]
          .sort((a, b) => a.id.localeCompare(b.id));

        const leafIds = new Set(allLeaves.map(n => n.id));

        // Find internal links (both source and target in this subcategory)
        const internalLinks = data.links.filter(l =>
          leafIds.has(l.source) && leafIds.has(l.target)
        );

        let subKids;

        if (internalLinks.length === 0) {
          // No internal connections — all leaves stay flat
          subKids = allLeaves.map(n => ({
            name: n.id,
            nodeData: n,
            _children: null,
            children: null,
          }));
        } else {
          // Link-based clustering
          const inbound = new Set(internalLinks.map(l => l.target));
          const outbound = new Set(internalLinks.map(l => l.source));

          // Principals: have outbound but no inbound (within subcategory)
          const principals = allLeaves.filter(n =>
            outbound.has(n.id) && !inbound.has(n.id)
          );

          // Build cluster for each principal
          const assigned = new Set(); // track which derivatives are already assigned
          const clusters = [];

          for (const principal of principals.sort((a, b) => a.id.localeCompare(b.id))) {
            // Find direct derivatives of this principal within the subcategory
            const derivativeIds = internalLinks
              .filter(l => l.source === principal.id && leafIds.has(l.target))
              .map(l => l.target);

            const clusterLeaves = [principal];
            for (const did of derivativeIds) {
              if (!assigned.has(did)) {
                const dNode = allLeaves.find(n => n.id === did);
                if (dNode) {
                  clusterLeaves.push(dNode);
                  assigned.add(did);
                }
              } else {
                multiParentArcs.push({ source: principal.id, target: did });
              }
            }
            assigned.add(principal.id);

            if (clusterLeaves.length === 1) {
              // Principal with no unassigned derivatives — stays flat
              clusters.push({
                name: principal.id,
                nodeData: principal,
                _children: null,
                children: null,
              });
            } else {
              // Principal IS the intermediate — derivatives are its children
              const derivOnly = clusterLeaves.filter(n => n.id !== principal.id);
              clusters.push({
                name: principal.id,
                nodeData: principal,
                _nodeType: 'principal',
                _category: cat,
                children: null,
                _children: derivOnly.map(n => ({
                  name: n.id,
                  nodeData: n,
                  _children: null,
                  children: null,
                })),
              });
            }
          }

          // Orphans: not assigned to any cluster
          const orphans = allLeaves
            .filter(n => !assigned.has(n.id))
            .map(n => ({
              name: n.id,
              nodeData: n,
              _children: null,
              children: null,
            }));

          subKids = [...clusters, ...orphans];
        }

        subChildren.push({
          name: sub,
          _nodeType: 'subcategory',
          _category: cat,
          children: null,
          _children: subKids,
        });
      }
      catChildren.push({
        name: cat.replace(`${grp} — `, ''),
        _fullCategory: cat,
        _nodeType: 'category',
        children: null,
        _children: subChildren,
      });
    }
    rootChildren.push({
      name: grp,
      _nodeType: 'hub',
      children: catChildren,
      _children: catChildren,
    });
  }

  // Identify overlay links (all links become overlays since tree uses hierarchy)
  for (const link of data.links) {
    overlays.push({
      source: link.source,
      target: link.target,
      type: link.relation_type,
      label: link.label,
    });
  }

  return {
    root: {
      name: 'VISA MILL',
      _nodeType: 'root',
      _fullName: 'Every visa the embassy wishes you\'d stop asking about',
      _subtitle: '8 U.S.C. §1101 et seq.',
      children: rootChildren,
    },
    overlays,
    multiParentArcs,
  };
}

// ── Rendering ──

function render() {
  const container = document.getElementById('canvas-container');
  const w = container.clientWidth;
  const h = container.clientHeight;

  const svg = d3.select('#viz')
    .attr('viewBox', null)
    .html('');

  const g = svg.append('g').attr('class', 'zoomable');

  const zoom = d3.zoom()
    .scaleExtent([0.1, 4])
    .on('zoom', e => g.attr('transform', e.transform));
  svg.call(zoom);
  currentSvg = svg;
  currentZoom = zoom;

  // Always rebuild hierarchy fresh (preserving expand/collapse state via currentRootData)
  const freshResult = transformToHierarchy(rawData);
  if (!currentRootData) {
    currentRootData = freshResult.root;
  }
  overlayLinks = freshResult.overlays;
  multiParentLinks = freshResult.multiParentArcs;

  const root = d3.hierarchy(currentRootData);

  if (currentLayout === 'tree') {
    renderTree(g, root, w, h, svg, zoom);
  } else {
    renderRadial(g, root, w, h, svg, zoom);
  }
}

function getNodeColor(d) {
  if (d.data._nodeType === 'root') return '#e0e0e0';
  if (d.data._nodeType === 'hub') return HUB_COLORS[d.data.name] || '#fff';
  if (d.data._nodeType === 'category') return COLORS[d.data._fullCategory] || '#888';
  if (d.data._nodeType === 'subcategory') return COLORS[d.data._category] || '#888';
  if (d.data._nodeType === 'intermediate' || d.data._nodeType === 'principal') return COLORS[d.data._category] || '#888';
  if (d.data.nodeData) {
    return COLORS[d.data.nodeData.category] || '#888';
  }
  return '#888';
}

function getNodeRadius(d) {
  if (d.data._nodeType === 'root') return 18;
  if (d.data._nodeType === 'hub') return 14;
  if (d.data._nodeType === 'category') return 10;
  if (d.data._nodeType === 'subcategory') return 7;
  return 5;
}

function hasChildren(d) {
  return d.data._children && d.data._children.length > 0;
}

function toggleNode(d, root) {
  if (d.data._nodeType === 'hub') return;

  // Accordion: only one node open at a time per level
  // (skipped when expandAll is active)
  if (!window._expandAllActive && !d.data.children && d.data._children) {
    // Close ALL other open nodes at the same depth
    collapseAllExcept(root.data, d.data);
  }

  if (d.data.children) {
    d.data._children = d.data.children;
    d.data.children = null;
  } else if (d.data._children) {
    d.data.children = d.data._children;
  }
}

function findParentData(rootData, targetData) {
  const children = rootData.children || rootData._children || [];
  for (const child of children) {
    if (child === targetData) return rootData;
    const found = findParentData(child, targetData);
    if (found) return found;
  }
  return null;
}

function collapseAllExcept(rootData, keep) {
  // Find the depth of the node being opened
  const keepType = keep._nodeType;

  // Walk the tree and close siblings + cousins at the same level
  // But leave ancestors open so we can see the path
  _collapseSiblings(rootData, keep);
}

function _collapseSiblings(node, keep) {
  const kids = node.children || [];
  for (const child of kids) {
    if (child === keep) continue;

    // Collapse this sibling if it's at the same level
    if (child._nodeType === keep._nodeType && child.children) {
      // First collapse all descendants inside it
      _collapseDeep(child);
      child._children = child.children;
      child.children = null;
    }

    _collapseSiblings(child, keep);
  }
}

function _collapseDeep(node) {
  const kids = node.children || [];
  for (const child of kids) {
    _collapseDeep(child);
    if (child.children && child._nodeType !== 'hub' && child._nodeType !== 'root') {
      child._children = child.children;
      child.children = null;
    }
  }
}

// ── Color Helpers ──

function blendWithBg(hex, amount) {
  const bg = themeBg;
  const c = hexToRgb(hex);
  const r = Math.round(bg.r + (c.r - bg.r) * amount);
  const g = Math.round(bg.g + (c.g - bg.g) * amount);
  const b = Math.round(bg.b + (c.b - bg.b) * amount);
  return `rgb(${r},${g},${b})`;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
}

// ── Law Link Helpers ──

const INA_TO_USC = {
  '101':'1101','201':'1151','202':'1152','203':'1153','204':'1154',
  '207':'1157','208':'1158','209':'1159','210':'1160','212':'1182','213':'1183','213A':'1183a',
  '214':'1184','216':'1186a','221':'1201','244':'1254a','245':'1255','245A':'1255a',
  '247':'1257',
  '249':'1259','252':'1282','289':'1359','324':'1435','327':'1438',
};

const NAMED_ACT_PL = [
  ['TVPA', '106-386'], ['VTVPA', '106-386'],
  ['LIFE Act', '106-553'], ['Nursing Relief Act', '106-95'],
];

const RE_INA = /^INA\s*§(\d+[A-Z]?)((?:\([^)]+\))*)/;
const RE_USC = /^(\d+)\s*U\.S\.C\.\s*§(\d+[a-z]?)/;
const RE_CFR = /^(\d+)\s*CFR\s*§([\d.]+)((?:\([^)]+\))*)/;
const RE_CFR_PART = /^(\d+)\s*CFR\s*Part\s*(\d+)/;
const RE_FAM = /^9\s*FAM\s*([\d.]+)/;
const RE_PL = /^PL\s*(\d+)-(\d+)/;

function govInfoUrl(congress, number) {
  return `https://www.govinfo.gov/content/pkg/PLAW-${congress}publ${number}/html/PLAW-${congress}publ${number}.htm`;
}

function parseSubs(str) {
  if (!str) return '';
  const subs = str.match(/\(([^)]+)\)/g);
  return subs ? '#' + subs.map(s => s.slice(1, -1)).join('_') : '';
}

// Returns { url, label, key } or null for a single citation fragment
function parseCitation(p) {
  p = p.trim();
  const ina = p.match(RE_INA);
  if (ina && INA_TO_USC[ina[1]])
    return { url: `https://www.law.cornell.edu/uscode/text/8/${INA_TO_USC[ina[1]]}${parseSubs(ina[2])}`, label: p };
  const usc = p.match(RE_USC);
  if (usc)
    return { url: `https://www.law.cornell.edu/uscode/text/${usc[1]}/${usc[2]}`, label: p };
  const cfr = p.match(RE_CFR);
  if (cfr)
    return { url: `https://www.law.cornell.edu/cfr/text/${cfr[1]}/${cfr[2]}${parseSubs(cfr[3])}`, label: p };
  const cfrPart = p.match(RE_CFR_PART);
  if (cfrPart)
    return { url: `https://www.law.cornell.edu/cfr/text/${cfrPart[1]}/part-${cfrPart[2]}`, label: p };
  const fam = p.match(RE_FAM);
  if (fam)
    return { url: famUrl(fam[1]), label: p };
  const pl = p.match(RE_PL);
  if (pl && parseInt(pl[1]) >= 104)
    return { url: govInfoUrl(pl[1], pl[2]), label: p };
  for (const [prefix, plNum] of NAMED_ACT_PL) {
    if (p.startsWith(prefix)) {
      const [c, n] = plNum.split('-');
      return { url: govInfoUrl(c, n), label: p };
    }
  }
  return null;
}

function famLabel(subcategory, visaId) {
  const sec = SUBCATEGORY_FAM[subcategory];
  if (!sec) return null;
  const anchor = visaId ? VISA_FAM_ANCHORS[visaId] : null;
  if (!anchor) return `9 FAM ${sec}`;
  // M402_3_9 → 402.3-9, M402_10_4_B → 402.10-4(B)
  const parts = anchor.replace('M', '').split('_');
  const major = parts[0];
  const minor = parts[1];
  const rest = parts.slice(2);
  if (!rest.length) return `9 FAM ${major}.${minor}`;
  const sub = rest[0];
  const deeper = rest.slice(1).map(p => `(${p})`).join('');
  return `9 FAM ${major}.${minor}-${sub}${deeper}`;
}

function buildFamSection(subcategory, visaId) {
  const sec = SUBCATEGORY_FAM[subcategory];
  if (!sec) return '';
  const anchor = visaId ? VISA_FAM_ANCHORS[visaId] : undefined;
  const resolvedAnchor = anchor || `M${sec.replace('.', '_')}_3`;
  const label = famLabel(subcategory, visaId) || `9 FAM ${sec}`;
  const title = FAM_TITLES[resolvedAnchor] || '';
  const titleHtml = title ? `<div class="detail-value" style="margin-top:2px;">${title}</div>` : '';
  return `<div class="detail-section"><span class="detail-label">FAM</span><div class="detail-value-mono"><a href="${famUrl(sec, anchor)}" target="_blank">${label}</a></div>${titleHtml}</div>`;
}

function linkifyLaw(lawStr) {
  if (!lawStr) return 'N/A';
  return lawStr.split(/;\s*/).map(p => {
    const c = parseCitation(p);
    return c ? `<a href="${c.url}" target="_blank">${c.label}</a>` : p.trim();
  }).join('<br>');
}
