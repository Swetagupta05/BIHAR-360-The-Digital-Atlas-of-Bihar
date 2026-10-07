/**
 * BIHAR 360 — AI Grounded Knowledge Base
 * Adapts existing verified structured data into an AI-ready Knowledge Graph & Document Store.
 * Reuses existing canonical entities with zero manual duplication of facts.
 */

import { ALL_DISTRICTS } from '../data/districts';
import {
  DISTRICT_DIVISIONS,
  NEIGHBORING_DISTRICTS,
  DISTRICT_TRAVEL_CIRCUITS,
  DISTRICT_STORIES,
  DISTRICT_DID_YOU_KNOW,
  DISTRICT_LANDSCAPE_DATA,
} from '../data/districtDossiers';
import { HERITAGE_SITES } from '../data/heritage';
import { BIHAR_LANDSCAPE_PLACES, BIHAR_RIVERS } from '../data/places';
import { NOTABLE_PERSONALITIES } from '../data/personalities';
import { CUISINE_ITEMS } from '../data/cuisine';
import { FESTIVALS_DATA } from '../data/festivals';
import { BIHAR_LANGUAGES } from '../data/languages';
import { ARTS_AND_CRAFTS } from '../data/arts';
import { MUSIC_TRACKS } from '../data/music';
import { CURATED_JOURNEYS } from '../data/itineraries';
import { ALL_HISTORICAL_EVENTS, HISTORICAL_ERAS } from '../data/history';
import { DISCOVERY_INDEX } from '../data/discovery';
import {
  KnowledgeEntity,
  KnowledgeEntityType,
  KnowledgeRelationship,
  KnowledgeDocument,
  GroundingSource,
} from './types';

// Map of canonical entity id to KnowledgeEntity
let KNOWLEDGE_ENTITIES_CACHE: Map<string, KnowledgeEntity> | null = null;
let KNOWLEDGE_DOCUMENTS_CACHE: Map<string, KnowledgeDocument> | null = null;

/**
 * Builds the canonical AI Knowledge Graph from the verified atlas data.
 */
function buildKnowledgeGraph(): {
  entities: Map<string, KnowledgeEntity>;
  documents: Map<string, KnowledgeDocument>;
} {
  const entities = new Map<string, KnowledgeEntity>();
  const documents = new Map<string, KnowledgeDocument>();

  // 1. DISTRICTS (38 districts with administrative divisions, dossiers, stories & neighbors)
  for (const district of ALL_DISTRICTS) {
    const didYouKnow = DISTRICT_DID_YOU_KNOW[district.id] || [];
    const landscape = DISTRICT_LANDSCAPE_DATA[district.id];
    const stories = DISTRICT_STORIES[district.id] || [];
    const division = DISTRICT_DIVISIONS[district.id] || `${district.region} Division`;
    const neighbors = NEIGHBORING_DISTRICTS[district.id] || [];
    const circuit = DISTRICT_TRAVEL_CIRCUITS[district.id];

    const relationships: KnowledgeRelationship[] = [];

    // Neighbors
    for (const neighborId of neighbors) {
      const neighborDistrict = ALL_DISTRICTS.find(d => d.id === neighborId);
      relationships.push({
        targetId: neighborId,
        targetType: 'district',
        relationshipType: 'neighboring_district',
        label: neighborDistrict ? neighborDistrict.name : neighborId,
        hindiLabel: neighborDistrict?.hindiName,
        districtId: neighborId,
        description: `Bordering district in ${neighborDistrict?.region || 'Bihar'}`
      });
    }

    // Circuit association
    if (circuit) {
      relationships.push({
        targetId: `circuit-${district.id}`,
        targetType: 'journey',
        relationshipType: 'circuit_stop',
        label: circuit.circuitName,
        districtId: district.id,
        description: circuit.description
      });
    }

    const facts: string[] = [];
    if (didYouKnow.length) {
      facts.push(...didYouKnow.map(k => `${k.fact} (Source: ${k.source})`));
    }
    if (landscape) {
      facts.push(
        `Terrain: ${landscape.terrainType}. Ecological Character: ${landscape.ecologicalCharacter}. Primary Rivers: ${landscape.primaryRivers.join(', ')}.`
      );
    }

    const sources = [
      'Government of Bihar Administrative Portal',
      ...didYouKnow.map(k => k.source)
    ];

    const entity: KnowledgeEntity = {
      id: district.id,
      type: 'district',
      title: `${district.name} District`,
      hindiTitle: district.hindiName,
      subtitle: `${district.region} Region • HQ: ${district.headquarters} • ${division}`,
      description: district.overview || district.whyItMatters || `${district.name} district in ${district.region} region of Bihar.`,
      region: district.region,
      districtId: district.id,
      districtName: district.name,
      headquarters: district.headquarters,
      tags: [
        'district',
        district.region.toLowerCase(),
        district.headquarters.toLowerCase(),
        division.toLowerCase()
      ],
      aliases: [
        district.name,
        `${district.name} District`,
        district.headquarters,
        district.hindiName
      ],
      facts,
      sources,
      relationships,
      route: {
        tab: 'districts',
        districtId: district.id
      },
      metadata: {
        populationApprox: district.populationApprox,
        areaSqKm: district.areaSqKm,
        headquarters: district.headquarters,
        division,
        literacyRate: district.literacyRate,
        sexRatio: district.sexRatio
      }
    };

    entities.set(entity.id, entity);

    // Build document
    const doc: KnowledgeDocument = {
      entityId: entity.id,
      entityType: 'district',
      title: entity.title,
      hindiTitle: entity.hindiTitle,
      summary: `${district.name} is an administrative district in the ${district.region} region of Bihar with headquarters at ${district.headquarters}.`,
      fullNarrative: `${district.overview || district.whyItMatters}\n\nAdministrative Division: ${division}.\nHeadquarters: ${district.headquarters}.\nGeographic Landscape: ${landscape?.ecologicalCharacter || 'Gangetic alluvial plain'}.\n\nNotable Historical Dossier:\n${stories.length ? stories.map(s => `• ${s.title}: ${s.narrative}`).join('\n') : 'Rich regional heritage.'}`,
      keyFacts: facts,
      relationships,
      sources,
      districtName: district.name,
      region: district.region
    };
    documents.set(entity.id, doc);
  }

  // 2. HERITAGE SITES
  for (const site of HERITAGE_SITES) {
    const parentDistrict = ALL_DISTRICTS.find(d => d.id === site.districtId);
    const districtDisplay = parentDistrict ? parentDistrict.name : site.location;
    const relationships: KnowledgeRelationship[] = [
      {
        targetId: site.districtId,
        targetType: 'district',
        relationshipType: 'located_in',
        label: districtDisplay,
        districtId: site.districtId,
        description: `Located in ${districtDisplay} district`
      }
    ];

    if (site.period) {
      relationships.push({
        targetId: site.period.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        targetType: 'history_era',
        relationshipType: 'associated_era',
        label: site.period,
        description: `Architectural antiquity: ${site.period} (${site.dynasty})`
      });
    }

    const facts: string[] = [
      `Significance: ${site.significance}`,
      `Antiquity Epoch: ${site.period}`,
      `Architectural Character: ${site.architecture}`,
      `Conservation Authority: ${site.isUnesco ? 'UNESCO World Heritage Site' : 'Archaeological Survey of India (ASI)'}`
    ];

    const entity: KnowledgeEntity = {
      id: site.id,
      type: 'heritage',
      title: site.name,
      hindiTitle: site.hindiName,
      subtitle: `${site.location} • ${districtDisplay} District • ${site.period}`,
      description: site.description,
      region: parentDistrict?.region,
      districtId: site.districtId,
      districtName: districtDisplay,
      tags: ['heritage', 'monument', 'archaeology', site.category.toLowerCase(), site.period.toLowerCase()],
      aliases: [
        site.name,
        site.hindiName,
        site.location
      ],
      facts,
      sources: ['Archaeological Survey of India (ASI)', 'UNESCO World Heritage Centre', 'Bihar State Archaeology'],
      relationships,
      route: {
        tab: 'heritage',
        targetId: site.id,
        districtId: site.districtId
      },
      metadata: {
        category: site.category,
        period: site.period,
        dynasty: site.dynasty,
        isUnesco: site.isUnesco,
        coordinates: site.coordinates
      }
    };

    entities.set(entity.id, entity);

    // Cross-link to district
    const districtEntity = entities.get(site.districtId);
    if (districtEntity) {
      districtEntity.relationships.push({
        targetId: site.id,
        targetType: 'heritage',
        relationshipType: 'located_in',
        label: site.name,
        hindiLabel: site.hindiName,
        districtId: site.districtId,
        description: `${site.name} (${site.significance})`
      });
    }

    documents.set(entity.id, {
      entityId: entity.id,
      entityType: 'heritage',
      title: entity.title,
      hindiTitle: entity.hindiTitle,
      summary: `${site.name} is a premier heritage landmark in ${districtDisplay} district (${site.period}).`,
      fullNarrative: `${site.description}\n\nArchitectural Antiquity & Significance:\n${site.architecture}\n\nAntiquity Epoch:\n${site.period} (${site.dynasty}).`,
      keyFacts: facts,
      relationships,
      sources: entity.sources || [],
      districtName: districtDisplay,
      region: parentDistrict?.region
    });
  }

  // 3. LANDSCAPE PLACES & RIVERS
  for (const place of BIHAR_LANDSCAPE_PLACES) {
    const parentDistrict = ALL_DISTRICTS.find(d => d.id === place.districtId);
    const relationships: KnowledgeRelationship[] = [
      {
        targetId: place.districtId,
        targetType: 'district',
        relationshipType: 'located_in',
        label: parentDistrict?.name || place.districtName,
        districtId: place.districtId,
        description: `Located in ${parentDistrict?.name || place.districtName}`
      }
    ];

    const facts: string[] = [
      `Landscape Type: ${place.landscapeType || place.category}`,
      `Ecological Highlights: ${place.wildlifeAndEcology || place.whyItMatters}`,
      `Key Sights: ${place.thingsToSee.slice(0, 3).join(', ')}`
    ];

    const entity: KnowledgeEntity = {
      id: place.id,
      type: 'place',
      title: place.name,
      hindiTitle: place.hindiName,
      subtitle: `${place.districtName} • ${place.category}`,
      description: place.intro || place.whyItMatters,
      region: parentDistrict?.region,
      districtId: place.districtId,
      districtName: place.districtName,
      tags: ['place', 'nature', 'landscape', place.category.toLowerCase()],
      aliases: [place.name, place.hindiName, place.tagline],
      facts,
      sources: place.sources || ['Bihar State Tourism Development Corporation (BSTDC)', 'Forest Department, Government of Bihar'],
      relationships,
      route: {
        tab: 'places',
        targetId: place.id,
        districtId: place.districtId
      },
      metadata: {
        category: place.category,
        landscapeType: place.landscapeType,
        sacredTradition: place.sacredTradition
      }
    };

    entities.set(entity.id, entity);

    const districtEntity = entities.get(place.districtId);
    if (districtEntity) {
      districtEntity.relationships.push({
        targetId: place.id,
        targetType: 'place',
        relationshipType: 'located_in',
        label: place.name,
        hindiLabel: place.hindiName,
        districtId: place.districtId,
        description: `${place.name} (${place.category})`
      });
    }
  }

  for (const river of BIHAR_RIVERS) {
    const districtsList = river.primaryDistricts || [];
    const entity: KnowledgeEntity = {
      id: river.id,
      type: 'place',
      title: river.name,
      hindiTitle: river.hindiName,
      subtitle: `River System • Length in Bihar: ${river.lengthInBiharKm || 0} km • Origin: ${river.origin}`,
      description: `${river.geographicRole} ${river.culturalSignificance}`,
      tags: ['river', 'waterway', 'geography', 'landscape'],
      aliases: [river.name, river.hindiName, `${river.name} River`],
      facts: [
        `Origin: ${river.origin}`,
        `Length inside Bihar: ${river.lengthInBiharKm || 'Major'} km`,
        `Confluence: ${river.confluence}`,
        `Key Districts Traversed: ${districtsList.map(dId => ALL_DISTRICTS.find(d => d.id === dId)?.name || dId).join(', ')}`
      ],
      sources: river.sources || ['Water Resources Department, Government of Bihar'],
      relationships: districtsList.map(dId => {
        const dObj = ALL_DISTRICTS.find(d => d.id === dId);
        return {
          targetId: dId,
          targetType: 'district',
          relationshipType: 'located_in',
          label: dObj ? dObj.name : dId,
          districtId: dId,
          description: `River ${river.name} traverses ${dObj ? dObj.name : dId} district`
        };
      }),
      route: {
        tab: 'places',
        targetId: river.id
      }
    };
    entities.set(entity.id, entity);
  }

  // 4. NOTABLE PERSONALITIES
  for (const person of NOTABLE_PERSONALITIES) {
    const parentDistrict = person.districtOrigin ? ALL_DISTRICTS.find(d => d.id === person.districtOrigin) : undefined;
    const relationships: KnowledgeRelationship[] = [];

    if (person.districtOrigin) {
      relationships.push({
        targetId: person.districtOrigin,
        targetType: 'district',
        relationshipType: 'located_in',
        label: parentDistrict ? parentDistrict.name : person.districtOrigin,
        districtId: person.districtOrigin,
        description: `Associated district origin: ${parentDistrict ? parentDistrict.name : person.districtOrigin}`
      });
    }

    if (person.eraPeriod) {
      relationships.push({
        targetId: person.eraPeriod.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        targetType: 'history_era',
        relationshipType: 'associated_era',
        label: person.eraPeriod,
        description: `Historical Era: ${person.eraPeriod} (${person.era || ''})`
      });
    }

    const facts: string[] = [
      `Era: ${person.era || 'Historic'} (${person.eraPeriod || 'Ancient Bihar'})`,
      `Field of Contribution: ${person.field || 'Philosophy & Leadership'}`,
      `Key Legacy: ${person.shortContribution || person.title}`,
      ...(person.majorAchievements || [])
    ];

    const entity: KnowledgeEntity = {
      id: person.id,
      type: 'person',
      title: person.name,
      hindiTitle: person.hindiName,
      subtitle: `${person.title} • ${person.era || person.eraPeriod || ''}`,
      description: person.biography || person.shortContribution || person.title,
      districtId: person.districtOrigin,
      districtName: parentDistrict?.name,
      region: parentDistrict?.region,
      tags: ['personality', 'history', (person.field || 'leadership').toLowerCase(), (person.eraPeriod || 'bihar').toLowerCase()],
      aliases: [
        person.name,
        person.hindiName,
        person.title
      ],
      facts,
      sources: person.sources || ['National Biography Registry', 'Bihar State Historical Archives', 'Archaeological Records'],
      relationships,
      route: {
        tab: 'personalities',
        targetId: person.id,
        districtId: person.districtOrigin
      },
      metadata: {
        field: person.field,
        era: person.era,
        eraPeriod: person.eraPeriod,
        historicalConnection: person.historicalConnection,
        languageAssociation: person.languageAssociation
      }
    };

    entities.set(entity.id, entity);

    if (person.districtOrigin) {
      const districtEntity = entities.get(person.districtOrigin);
      if (districtEntity) {
        districtEntity.relationships.push({
          targetId: person.id,
          targetType: 'person',
          relationshipType: 'associated_personality',
          label: person.name,
          hindiLabel: person.hindiName,
          districtId: person.districtOrigin,
          description: `${person.title} (${person.field || 'Scholar'})`
        });
      }
    }

    documents.set(entity.id, {
      entityId: entity.id,
      entityType: 'person',
      title: entity.title,
      hindiTitle: entity.hindiTitle,
      summary: `${person.name} (${person.era || ''}): ${person.title}. Key legacy: ${person.shortContribution || person.title}`,
      fullNarrative: `${person.biography}\n\nWhy Places Matter in Bihar:\n${person.whyPlaceMatters || 'Deep geographic connection.'}\n\nHistorical Connection:\n${person.historicalConnection?.event || ''} — ${person.historicalConnection?.significance || ''}`,
      keyFacts: facts,
      relationships,
      sources: entity.sources || [],
      districtName: parentDistrict?.name,
      region: parentDistrict?.region
    });
  }

  // 5. CUISINE
  for (const item of CUISINE_ITEMS) {
    const districtKey = item.originDistrict || item.districts?.[0];
    const parentDistrict = districtKey ? ALL_DISTRICTS.find(d => d.id === districtKey) : undefined;
    const relationships: KnowledgeRelationship[] = [];

    if (districtKey) {
      relationships.push({
        targetId: districtKey,
        targetType: 'district',
        relationshipType: 'culinary_tradition',
        label: parentDistrict ? parentDistrict.name : (item.region || 'Bihar'),
        districtId: districtKey,
        description: `Originated / traditional in ${parentDistrict ? parentDistrict.name : (item.region || 'Bihar')}`
      });
    }

    const ingredientsList = item.ingredients || [];
    const facts: string[] = [
      `Regional Origin: ${parentDistrict?.name || item.region || 'Bihar'}`,
      `Category: ${item.category}`,
      item.giTag ? `GI Tag Status: Certified Geographical Indication` : 'GI Tag Status: Traditional regional delicacy',
      `Key Ingredients: ${ingredientsList.slice(0, 5).join(', ')}`,
      `Best Season: ${item.season || 'Year-round'}`
    ];

    const entity: KnowledgeEntity = {
      id: item.id,
      type: 'food',
      title: item.name,
      hindiTitle: item.hindiName,
      subtitle: `${parentDistrict?.name || item.region || 'Bihar'} • ${item.category}${item.giTag ? ' • GI Tagged' : ''}`,
      description: item.description,
      districtId: districtKey,
      districtName: parentDistrict?.name || (item.region ? String(item.region) : 'Bihar'),
      region: item.region ? String(item.region) : parentDistrict?.region,
      tags: ['food', 'cuisine', item.category.toLowerCase(), item.giTag ? 'gi-tagged' : 'traditional'],
      aliases: [item.name, item.hindiName, item.region ? String(item.region) : 'Bihar'],
      facts,
      sources: item.sources || ['Geographical Indications Registry of India', 'Culinary Survey of Bihar Heritage'],
      relationships,
      route: {
        tab: 'cuisine',
        targetId: item.id,
        districtId: districtKey
      },
      metadata: {
        isGI: item.giTag,
        keyIngredients: item.ingredients,
        culturalContext: item.culturalContext
      }
    };

    entities.set(entity.id, entity);

    if (districtKey) {
      const districtEntity = entities.get(districtKey);
      if (districtEntity) {
        districtEntity.relationships.push({
          targetId: item.id,
          targetType: 'food',
          relationshipType: 'culinary_tradition',
          label: item.name,
          hindiLabel: item.hindiName,
          districtId: districtKey,
          description: `${item.name} (${item.giTag ? 'GI-Tagged ' : ''}${item.category})`
        });
      }
    }
  }

  // 6. FESTIVALS
  for (const fest of FESTIVALS_DATA) {
    const relationships: KnowledgeRelationship[] = [];
    const primaryDistricts = fest.associatedDistricts || [];

    if (primaryDistricts.length) {
      for (const dId of primaryDistricts) {
        const dObj = ALL_DISTRICTS.find(d => d.id === dId);
        relationships.push({
          targetId: dId,
          targetType: 'district',
          relationshipType: 'celebrated_in',
          label: dObj ? dObj.name : dId,
          districtId: dId,
          description: `Celebrated prominently in ${dObj ? dObj.name : dId}`
        });

        const districtEntity = entities.get(dId);
        if (districtEntity) {
          districtEntity.relationships.push({
            targetId: fest.id,
            targetType: 'festival',
            relationshipType: 'celebrated_in',
            label: fest.name,
            hindiLabel: fest.hindiName,
            districtId: dId,
            description: `${fest.name} (${fest.timing || 'Festival'})`
          });
        }
      }
    }

    const facts: string[] = [
      `Timing / Lunar Calendar: ${fest.timing || 'Traditional calendar'}`,
      `Cultural Prominence: ${fest.prominence || 'Celebrated across Bihar'}`,
      `Primary Celebrations: ${primaryDistricts.map(id => ALL_DISTRICTS.find(d => d.id === id)?.name || id).join(', ') || 'All 38 districts of Bihar'}`
    ];

    const entity: KnowledgeEntity = {
      id: fest.id,
      type: 'festival',
      title: fest.name,
      hindiTitle: fest.hindiName,
      subtitle: `${fest.timing || 'Celebrated Seasonally'} • ${fest.traditionCategory || 'Living Cultural Festival'}`,
      description: fest.description || fest.overview || `${fest.name} celebrated in Bihar.`,
      region: fest.regions?.[0] || 'Pan-Bihar',
      tags: ['festival', 'tradition', 'culture', (fest.timing || 'tradition').toLowerCase()],
      aliases: [fest.name, fest.hindiName],
      facts,
      sources: ['State Cultural Council, Bihar', 'Anthropological Survey of India'],
      relationships,
      route: {
        tab: 'festivals',
        targetId: fest.id
      },
      metadata: {
        timing: fest.timing,
        rituals: fest.rituals,
        regions: fest.regions
      }
    };

    entities.set(entity.id, entity);
  }

  // 7. LANGUAGES & LITERARY TRADITIONS
  for (const lang of BIHAR_LANGUAGES) {
    const relationships: KnowledgeRelationship[] = [];
    const districts = lang.associatedDistricts || [];

    for (const dId of districts) {
      const dObj = ALL_DISTRICTS.find(d => d.id === dId);
      relationships.push({
        targetId: dId,
        targetType: 'district',
        relationshipType: 'spoken_in',
        label: dObj ? dObj.name : dId,
        districtId: dId,
        description: `Spoken in ${dObj ? dObj.name : dId} district`
      });

      const districtEntity = entities.get(dId);
      if (districtEntity) {
        districtEntity.relationships.push({
          targetId: lang.id,
          targetType: 'language',
          relationshipType: 'spoken_in',
          label: lang.name,
          districtId: dId,
          description: `Regional language: ${lang.name}`
        });
      }
    }

    const facts: string[] = [
      `Official Status: ${lang.officialStatus}`,
      `Primary Script: ${lang.primaryScript}`,
      `Traditional Scripts: ${lang.traditionalScripts?.join(', ')}`,
      `Primary Regions: ${lang.primaryRegions?.join(', ')}`
    ];

    const entity: KnowledgeEntity = {
      id: lang.id,
      type: 'language',
      title: lang.name,
      hindiTitle: lang.localName,
      subtitle: `${lang.officialStatus} • Scripts: ${lang.traditionalScripts?.join(', ')}`,
      description: `${lang.overview} ${lang.literaryTradition}`,
      region: lang.primaryRegions?.join(', '),
      tags: ['language', 'literature', lang.primaryScript.toLowerCase(), ...(lang.primaryRegions || []).map(r => r.toLowerCase())],
      aliases: [lang.name, lang.localName, `${lang.name} Language`],
      facts,
      sources: ['Census of India Language Survey', 'Sahitya Akademi Publications', 'Linguistic Survey of India (Grierson)'],
      relationships,
      route: {
        tab: 'languages',
        targetId: lang.id
      },
      metadata: {
        script: lang.primaryScript,
        regions: lang.primaryRegions,
        classification: lang.classification
      }
    };

    entities.set(entity.id, entity);
  }

  // 8. ARTS & CRAFTS
  for (const art of ARTS_AND_CRAFTS) {
    const parentDistrict = art.districtId ? ALL_DISTRICTS.find(d => d.id === art.districtId) : undefined;
    const relationships: KnowledgeRelationship[] = [];

    if (art.districtId) {
      relationships.push({
        targetId: art.districtId,
        targetType: 'district',
        relationshipType: 'art_tradition',
        label: parentDistrict ? parentDistrict.name : art.districtId,
        districtId: art.districtId,
        description: `Originating center: ${parentDistrict ? parentDistrict.name : art.districtId}`
      });

      const districtEntity = entities.get(art.districtId);
      if (districtEntity) {
        districtEntity.relationships.push({
          targetId: art.id,
          targetType: 'art',
          relationshipType: 'art_tradition',
          label: art.name,
          hindiLabel: art.hindiName,
          districtId: art.districtId,
          description: `${art.name} (${art.giTag ? 'GI-Tagged ' : ''}Traditional Art)`
        });
      }
    }

    const facts: string[] = [
      `Geographic Center: ${parentDistrict?.name || art.originRegion}`,
      art.giTag ? `GI Tag: Certified Geographical Indication` : 'GI Tag: Traditional Living Craft',
      `Natural Materials: ${art.materials?.slice(0, 4).join(', ') || 'Natural pigments and regional fibers'}`,
      `Distinct Styles: ${art.fiveStyles?.map(s => s.name).join(', ') || 'Traditional motifs'}`
    ];

    const entity: KnowledgeEntity = {
      id: art.id,
      type: 'art',
      title: art.name,
      hindiTitle: art.hindiName,
      subtitle: `${parentDistrict?.name || art.originRegion} • ${art.category}${art.giTag ? ' • GI Tagged' : ''}`,
      description: art.description,
      districtId: art.districtId,
      districtName: parentDistrict?.name,
      region: art.originRegion,
      tags: ['art', 'craft', art.category.toLowerCase(), art.giTag ? 'gi-tagged' : 'traditional'],
      aliases: [art.name, art.hindiName, art.originRegion],
      facts,
      sources: ['Development Commissioner (Handicrafts), Ministry of Textiles', 'Upendra Maharathi Shilp Anusandhan Sansthan'],
      relationships,
      route: {
        tab: 'arts',
        targetId: art.id,
        districtId: art.districtId
      },
      metadata: {
        isGI: art.giTag,
        materials: art.materials,
        fiveStyles: art.fiveStyles,
        masterArtisans: art.masterArtisans
      }
    };

    entities.set(entity.id, entity);
  }

  // 9. MUSIC & SOUNDSCAPES
  for (const track of MUSIC_TRACKS) {
    const parentDistrict = track.districtId ? ALL_DISTRICTS.find(d => d.id === track.districtId) : undefined;
    const relationships: KnowledgeRelationship[] = [];

    if (track.districtId) {
      relationships.push({
        targetId: track.districtId,
        targetType: 'district',
        relationshipType: 'musical_tradition',
        label: parentDistrict ? parentDistrict.name : (track.districtName || 'Bihar'),
        districtId: track.districtId,
        description: `Regional musical lineage: ${parentDistrict ? parentDistrict.name : (track.districtName || 'Bihar')}`
      });
    }

    const facts: string[] = [
      `Tradition: ${track.tradition}`,
      `Performer / Artist: ${track.performer}`,
      `Cultural Context: ${track.culturalContext}`,
      `Traditional Instruments: ${track.instruments?.join(', ') || 'Dholak, Harmonium, Manjira'}`
    ];

    const entity: KnowledgeEntity = {
      id: track.id,
      type: 'music',
      title: track.title,
      hindiTitle: track.hindiTitle,
      subtitle: `${track.performer} • ${track.tradition} • ${track.regionDisplay}`,
      description: track.description,
      districtId: track.districtId,
      districtName: parentDistrict?.name,
      region: track.regionDisplay,
      tags: ['music', 'track', track.category.toLowerCase(), track.traditionType.toLowerCase()],
      aliases: [track.title, track.hindiTitle, track.performer],
      facts,
      sources: [track.source || 'Bihar Sangeet Natak Parishad Heritage Archive'],
      relationships,
      route: {
        tab: 'music',
        targetId: track.id,
        districtId: track.districtId
      },
      metadata: {
        performer: track.performer,
        category: track.category,
        tradition: track.tradition,
        instruments: track.instruments
      }
    };

    entities.set(entity.id, entity);
  }

  // 10. CURATED JOURNEYS
  for (const journey of CURATED_JOURNEYS) {
    const relationships: KnowledgeRelationship[] = [];
    const districtsCovered = journey.districts || [];

    for (const dId of districtsCovered) {
      const dObj = ALL_DISTRICTS.find(d => d.id === dId);
      relationships.push({
        targetId: dId,
        targetType: 'district',
        relationshipType: 'circuit_stop',
        label: dObj ? dObj.name : dId,
        districtId: dId,
        description: `Curated stop along ${journey.title}`
      });

      const districtEntity = entities.get(dId);
      if (districtEntity) {
        districtEntity.relationships.push({
          targetId: journey.id,
          targetType: 'journey',
          relationshipType: 'circuit_stop',
          label: journey.title,
          hindiLabel: journey.hindiTitle,
          districtId: dId,
          description: `${journey.title} (${journey.durationDays} Days)`
        });
      }
    }

    const facts: string[] = [
      `Duration: ${journey.durationDays} Days (${journey.totalStops} Stops)`,
      `Theme: ${journey.themeLabel || journey.theme}`,
      `Districts Covered: ${districtsCovered.map(id => ALL_DISTRICTS.find(d => d.id === id)?.name || id).join(', ')}`,
      `Key Itinerary Highlights: ${journey.stops?.map(s => s.placeName).join(' → ') || 'Across archaeological corridors'}`
    ];

    const entity: KnowledgeEntity = {
      id: journey.id,
      type: 'journey',
      title: journey.title,
      hindiTitle: journey.hindiTitle,
      subtitle: `${journey.durationDays} Days • ${journey.themeLabel} • ${districtsCovered.length} Districts`,
      description: `${journey.tagline} ${journey.storyNarrative}`,
      tags: ['journey', 'circuit', 'itinerary', journey.theme.toLowerCase()],
      aliases: [journey.title, journey.hindiTitle],
      facts,
      sources: ['Bihar State Tourism Development Corporation (BSTDC) Curated Trails'],
      relationships,
      route: {
        tab: 'circuits',
        targetId: journey.id
      },
      metadata: {
        durationDays: journey.durationDays,
        theme: journey.theme,
        stops: journey.stops
      }
    };

    entities.set(entity.id, entity);
  }

  // 11. HISTORICAL ERAS & EVENTS
  for (const era of HISTORICAL_ERAS) {
    const entity: KnowledgeEntity = {
      id: era.id,
      type: 'history_era',
      title: era.title,
      hindiTitle: era.hindiTitle,
      subtitle: `${era.dateLabel} • ${era.period}`,
      description: era.summary,
      tags: ['history', 'era', era.dateLabel.toLowerCase()],
      aliases: [era.title, era.hindiTitle, era.dateLabel],
      facts: [
        `Timeframe: ${era.period}`,
        `Period: ${era.dateLabel}`,
        `Geography: ${era.historicalGeography}`,
        `Key Themes: ${era.keyThemes?.join(', ')}`,
        `Surviving Landmarks: ${era.survivingLandmarks?.join(', ')}`
      ],
      sources: era.sources || ['Archaeological Survey of India', 'Bihar State Historical Archives'],
      relationships: [],
      route: {
        tab: 'history',
        targetId: era.id
      }
    };
    entities.set(entity.id, entity);
  }

  for (const event of ALL_HISTORICAL_EVENTS) {
    const parentDistrict = event.districtId ? ALL_DISTRICTS.find(d => d.id === event.districtId) : undefined;
    const relationships: KnowledgeRelationship[] = [];

    if (event.districtId) {
      relationships.push({
        targetId: event.districtId,
        targetType: 'district',
        relationshipType: 'historical_event',
        label: parentDistrict ? parentDistrict.name : event.location,
        districtId: event.districtId,
        description: `Site of historic event: ${event.location}`
      });
    }

    const entity: KnowledgeEntity = {
      id: event.id,
      type: 'history_event',
      title: event.title,
      hindiTitle: event.hindiTitle,
      subtitle: `${event.dateLabel} • ${event.location}`,
      description: event.description,
      districtId: event.districtId,
      districtName: parentDistrict?.name,
      tags: ['history', 'event', event.dateLabel.toLowerCase()],
      aliases: [event.title, event.hindiTitle, event.location],
      facts: [
        `Date / Period: ${event.dateLabel}`,
        `Location: ${event.location}`,
        `Evidence: ${event.evidenceType} (${event.survivingEvidence})`,
        `Modern Remainder: ${event.whatRemainsToday}`
      ],
      sources: event.sources || ['Comprehensive History of Bihar (K.P. Jayaswal Research Institute)'],
      relationships,
      route: {
        tab: 'history',
        targetId: event.id,
        districtId: event.districtId
      }
    };
    entities.set(entity.id, entity);
  }

  // Cross-reference typed aliases from DISCOVERY_INDEX into knowledge entities
  for (const discoveryRecord of DISCOVERY_INDEX) {
    const existing = entities.get(discoveryRecord.id);
    if (existing) {
      // Merge typed aliases and keywords
      const additionalAliases = discoveryRecord.aliases || [];
      for (const a of additionalAliases) {
        if (!existing.aliases.includes(a)) {
          existing.aliases.push(a);
        }
      }
      for (const kw of discoveryRecord.keywords || []) {
        if (!existing.tags.includes(kw)) {
          existing.tags.push(kw);
        }
      }
      // Merge connections from discovery
      for (const conn of discoveryRecord.connections || []) {
        const alreadyHas = existing.relationships.some(r => r.targetId === conn.targetId);
        if (!alreadyHas) {
          existing.relationships.push({
            targetId: conn.targetId,
            targetType: conn.targetType as KnowledgeEntityType,
            relationshipType: 'thematic_connection',
            label: conn.label,
            hindiLabel: conn.hindiLabel,
            districtId: conn.districtId,
            description: conn.relationship
          });
        }
      }
    }
  }

  return { entities, documents };
}

/**
 * Initializes and retrieves all knowledge entities
 */
export function getAllKnowledgeEntities(): KnowledgeEntity[] {
  if (!KNOWLEDGE_ENTITIES_CACHE) {
    const { entities, documents } = buildKnowledgeGraph();
    KNOWLEDGE_ENTITIES_CACHE = entities;
    KNOWLEDGE_DOCUMENTS_CACHE = documents;
  }
  return Array.from(KNOWLEDGE_ENTITIES_CACHE.values());
}

/**
 * Retrieves a single knowledge entity by canonical ID
 */
export function getKnowledgeEntityById(id: string): KnowledgeEntity | undefined {
  if (!KNOWLEDGE_ENTITIES_CACHE) {
    getAllKnowledgeEntities();
  }
  return KNOWLEDGE_ENTITIES_CACHE?.get(id);
}

/**
 * Retrieves a rich knowledge document by entity ID
 */
export function getKnowledgeDocument(entityId: string): KnowledgeDocument | undefined {
  if (!KNOWLEDGE_DOCUMENTS_CACHE) {
    getAllKnowledgeEntities();
  }
  return KNOWLEDGE_DOCUMENTS_CACHE?.get(entityId);
}

/**
 * Retrieves entities filtered by category
 */
export function getKnowledgeEntitiesByType(type: KnowledgeEntityType): KnowledgeEntity[] {
  return getAllKnowledgeEntities().filter(e => e.type === type);
}

/**
 * Retrieves all entities associated with an administrative district
 */
export function getEntitiesByDistrict(districtId: string): KnowledgeEntity[] {
  return getAllKnowledgeEntities().filter(
    e => e.districtId === districtId || e.id === districtId || e.relationships.some(r => r.districtId === districtId)
  );
}

/**
 * Retrieves all entities associated with a cultural / geographic region
 */
export function getEntitiesByRegion(region: string): KnowledgeEntity[] {
  const norm = region.toLowerCase().trim();
  return getAllKnowledgeEntities().filter(
    e => e.region?.toLowerCase().includes(norm) || e.tags.some(t => t.toLowerCase() === norm)
  );
}

/**
 * Converts a KnowledgeEntity into a verified GroundingSource object
 */
export function entityToGroundingSource(entity: KnowledgeEntity): GroundingSource {
  return {
    entityId: entity.id,
    title: entity.title,
    type: entity.type,
    district: entity.districtName,
    tab: entity.route?.tab || 'home',
    targetId: entity.route?.targetId,
    snippet: entity.subtitle || entity.description.slice(0, 180) + '...'
  };
}
