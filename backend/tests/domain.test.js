import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app/app.js';

const app = createApp();

describe('BIHAR 360 Normalized Domain Model & REST API Modules', () => {
  // ==========================================
  // 1. DISTRICTS & DISTRICT INTEGRITY
  // ==========================================
  describe('Districts Domain & District Integrity', () => {
    it('GET /api/v1/districts should return all 38 administrative districts', async () => {
      const res = await request(app).get('/api/v1/districts');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data).toHaveLength(38);
      expect(res.body.meta?.total).toBe(38);
    });

    it('GET /api/v1/districts/:id should preserve Rohtas ≠ Sasaram distinction', async () => {
      const res = await request(app).get('/api/v1/districts/rohtas');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('rohtas');
      expect(res.body.data.name).toBe('Rohtas');
      expect(res.body.data.headquarters).toBe('Sasaram');
      expect(res.body.data.name).not.toBe(res.body.data.headquarters);
    });

    it('GET /api/v1/districts/:id should preserve East Champaran ≠ Motihari distinction', async () => {
      const res = await request(app).get('/api/v1/districts/east-champaran');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('east-champaran');
      expect(res.body.data.name).toBe('East Champaran');
      expect(res.body.data.headquarters).toBe('Motihari');
    });

    it('GET /api/v1/districts/:id should preserve West Champaran ≠ Bettiah distinction', async () => {
      const res = await request(app).get('/api/v1/districts/west-champaran');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('west-champaran');
      expect(res.body.data.headquarters).toBe('Bettiah');
    });

    it('GET /api/v1/districts/:id should preserve Nalanda district ≠ Nalanda Mahavihara distinction', async () => {
      const res = await request(app).get('/api/v1/districts/nalanda');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('nalanda');
      expect(res.body.data.headquarters).toBe('Bihar Sharif');
      expect(res.body.data.name).toBe('Nalanda');
    });

    it('GET /api/v1/districts/:id should preserve Madhubani ≠ Mithila distinction', async () => {
      const res = await request(app).get('/api/v1/districts/madhubani');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.id).toBe('madhubani');
      expect(res.body.data.name).toBe('Madhubani');
      expect(res.body.data.region).toBe('Mithila');
      expect(res.body.data.name).not.toBe(res.body.data.region);
    });

    it('GET /api/v1/districts?region=Magadh should filter correctly', async () => {
      const res = await request(app).get('/api/v1/districts?region=Magadh');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      for (const d of res.body.data) {
        expect(d.region).toBe('Magadh');
      }
    });
  });

  // ==========================================
  // 2. PLACES & LANDSCAPES
  // ==========================================
  describe('Places & Landscapes Domain', () => {
    it('GET /api/v1/places should return places, landscapes, and rivers', async () => {
      const res = await request(app).get('/api/v1/places');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThanOrEqual(25);
    });

    it('GET /api/v1/places?placeType=river should filter rivers', async () => {
      const res = await request(app).get('/api/v1/places?placeType=river');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
      for (const p of res.body.data) {
        expect(p.placeType).toBe('river');
      }
    });
  });

  // ==========================================
  // 3. HERITAGE SITES
  // ==========================================
  describe('Heritage Sites Domain', () => {
    it('GET /api/v1/heritage should return heritage monuments', async () => {
      const res = await request(app).get('/api/v1/heritage');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(11);
    });

    it('GET /api/v1/heritage/:id should return Nalanda Mahavihara as distinct monument entity', async () => {
      const res = await request(app).get('/api/v1/heritage/nalanda-mahavihara');
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe('nalanda-mahavihara');
      expect(res.body.data.isUnesco).toBe(true);
      expect(res.body.data.districtId).toBe('nalanda');
    });

    it('GET /api/v1/heritage?isUnesco=true should return only UNESCO World Heritage sites', async () => {
      const res = await request(app).get('/api/v1/heritage?isUnesco=true');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(2);
      for (const h of res.body.data) {
        expect(h.isUnesco).toBe(true);
      }
    });
  });

  // ==========================================
  // 4. PERSONALITIES
  // ==========================================
  describe('Notable Personalities Domain', () => {
    it('GET /api/v1/personalities should return all canonical figures', async () => {
      const res = await request(app).get('/api/v1/personalities');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(25);
    });

    it('GET /api/v1/personalities/gautama-buddha should return Buddha profile', async () => {
      const res = await request(app).get('/api/v1/personalities/gautama-buddha');
      expect(res.status).toBe(200);
      expect(res.body.data.name).toContain('Gautama Buddha');
      expect(res.body.data.districtOrigin).toBe('gaya');
    });
  });

  // ==========================================
  // 5. FOODS & CUISINE
  // ==========================================
  describe('Cuisine Domain', () => {
    it('GET /api/v1/foods should return traditional dishes', async () => {
      const res = await request(app).get('/api/v1/foods');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(16);
    });

    it('GET /api/v1/foods/litti-chokha should return Litti Chokha details', async () => {
      const res = await request(app).get('/api/v1/foods/litti-chokha');
      expect(res.status).toBe(200);
      expect(res.body.data.name).toBe('Litti Chokha');
      expect(res.body.data.isVegetarian).toBe(true);
    });
  });

  // ==========================================
  // 6. FESTIVALS
  // ==========================================
  describe('Festivals Domain', () => {
    it('GET /api/v1/festivals should return festival traditions', async () => {
      const res = await request(app).get('/api/v1/festivals');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(11);
    });

    it('GET /api/v1/festivals/chhath-puja should return Chhath Mahaparva', async () => {
      const res = await request(app).get('/api/v1/festivals/chhath-puja');
      expect(res.status).toBe(200);
      expect(res.body.data.name).toContain('Chhath');
    });
  });

  // ==========================================
  // 7. ARTS & CRAFTS
  // ==========================================
  describe('Arts & Crafts Domain', () => {
    it('GET /api/v1/arts should return traditional art forms', async () => {
      const res = await request(app).get('/api/v1/arts');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(6);
    });

    it('GET /api/v1/arts/madhubani-painting should return Mithila painting with foreign key to madhubani district', async () => {
      const res = await request(app).get('/api/v1/arts/madhubani-painting');
      expect(res.status).toBe(200);
      expect(res.body.data.name).toContain('Madhubani');
      expect(res.body.data.districtId).toBe('madhubani');
      expect(res.body.data.giTag).toBe(true);
    });
  });

  // ==========================================
  // 8. LANGUAGE MODEL DISTINCTIONS
  // ==========================================
  describe('Language Architecture & Distinctions', () => {
    it('GET /api/v1/languages/interface should return 23 interface languages', async () => {
      const res = await request(app).get('/api/v1/languages/interface');
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(23);
      const codes = res.body.data.map((l) => l.code);
      expect(codes).toContain('en');
      expect(codes).toContain('hi');
      expect(codes).toContain('mai');
    });

    it('GET /api/v1/languages/bihar should return the cultural languages of Bihar', async () => {
      const res = await request(app).get('/api/v1/languages/bihar');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(8);
      const ids = res.body.data.map((l) => l.id);
      expect(ids).toContain('maithili');
      expect(ids).toContain('bhojpuri');
      expect(ids).toContain('magahi');
      expect(ids).toContain('angika');
      expect(ids).toContain('bajjika');
      expect(ids).toContain('urdu');
      expect(ids).toContain('surjapuri');
    });

    it('GET /api/v1/languages/scripts should return scripts of Bihar', async () => {
      const res = await request(app).get('/api/v1/languages/scripts');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(4);
      const scriptIds = res.body.data.map((s) => s.id);
      expect(scriptIds).toContain('devanagari');
      expect(scriptIds).toContain('kaithi');
      expect(scriptIds).toContain('tirhuta');
    });
  });

  // ==========================================
  // 9. MUSIC TRACKS
  // ==========================================
  describe('Music Domain', () => {
    it('GET /api/v1/music should return verified tracks', async () => {
      const res = await request(app).get('/api/v1/music');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(15);
    });

    it('GET /api/v1/music/kelwa-ke-paat-par should return Sharda Sinha solar hymn', async () => {
      const res = await request(app).get('/api/v1/music/kelwa-ke-paat-par');
      expect(res.status).toBe(200);
      expect(res.body.data.performer).toContain('Sharda Sinha');
      expect(res.body.data.youtubeId).toBe('lQwwc2xbMZg');
    });
  });

  // ==========================================
  // 10. HISTORY ERAS & EVENTS
  // ==========================================
  describe('History Domain', () => {
    it('GET /api/v1/history/eras should return chronological eras in order', async () => {
      const res = await request(app).get('/api/v1/history/eras');
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveLength(12);
      expect(res.body.data[0].id).toBe('prehistory-archaeology');
    });

    it('GET /api/v1/history/events should return turning point events', async () => {
      const res = await request(app).get('/api/v1/history/events');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(25);
    });
  });

  // ==========================================
  // 11. JOURNEYS & STOPS
  // ==========================================
  describe('Journeys Domain', () => {
    it('GET /api/v1/journeys should return curated routes', async () => {
      const res = await request(app).get('/api/v1/journeys');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(10);
    });

    it('GET /api/v1/journeys/buddhist-awakening-trail should return itinerary with stops', async () => {
      const res = await request(app).get('/api/v1/journeys/buddhist-awakening-trail');
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe('buddhist-awakening-trail');
      expect(res.body.data.stops.length).toBeGreaterThan(0);
      expect(res.body.data.stops[0].placeName).toBeDefined();
    });
  });

  // ==========================================
  // 12. TRANSLATIONS
  // ==========================================
  describe('Translations Domain', () => {
    it('GET /api/v1/translations/en should return English interface dictionary', async () => {
      const res = await request(app).get('/api/v1/translations/en');
      expect(res.status).toBe(200);
      expect(res.body.data.nav).toBeDefined();
      expect(res.body.data.nav.districts).toBe('Districts (38)');
    });

    it('GET /api/v1/translations/hi/nav should return Hindi navigation strings', async () => {
      const res = await request(app).get('/api/v1/translations/hi/nav');
      expect(res.status).toBe(200);
      expect(res.body.data.districts).toBe('ज़िले (38)');
    });
  });

  // ==========================================
  // 13. MEDIA ASSETS
  // ==========================================
  describe('Media Domain', () => {
    it('GET /api/v1/media should return photographic assets', async () => {
      const res = await request(app).get('/api/v1/media');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBe(26);
    });
  });

  // ==========================================
  // 14. UNIVERSAL DISCOVERY & SEARCH
  // ==========================================
  describe('Discovery & Search Domain', () => {
    it('GET /api/v1/discovery/search?q=Patna should return Patna search hits', async () => {
      const res = await request(app).get('/api/v1/discovery/search?q=Patna');
      expect(res.status).toBe(200);
      expect(res.body.data.length).toBeGreaterThan(0);
    });

    it('GET /api/v1/discovery/entities/patna should return entity with connections', async () => {
      const res = await request(app).get('/api/v1/discovery/entities/patna');
      expect(res.status).toBe(200);
      expect(res.body.data.id).toBe('patna');
      expect(res.body.data.connections.length).toBeGreaterThan(0);
    });
  });
});
