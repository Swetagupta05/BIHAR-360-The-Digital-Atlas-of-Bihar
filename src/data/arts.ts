import { ArtCraft } from '../types';
import { VERIFIED_IMAGES } from './media';

export const ARTS_AND_CRAFTS: ArtCraft[] = [
  {
    id: 'madhubani-painting',
    name: 'Madhubani / Mithila Painting',
    hindiName: 'मधुबनी / मिथिला पेंटिंग',
    originRegion: 'Mithila (Madhubani & Darbhanga)',
    districtId: 'madhubani',
    category: 'Visual Folk Painting',
    giTag: true,
    image: VERIFIED_IMAGES.madhubani,
    description: 'One of the most celebrated and globally exhibited folk art traditions of India. Characterized by eye-catching geometrical patterns, line drawings filled with vibrant natural vegetable dyes, double outlines, and sacred motifs depicting Hindu mythology, nature, and wedding rituals.',
    history: 'Ancient origin dating back to King Janaka who commissioned village women to paint the wedding of Rama and Sita in Mithila. Traditionally created on freshly plastered mud and cow-dung walls of huts (Kohbar and Gosain Ghar) during weddings and religious festivals.',
    techniques: 'Artists draw directly using bamboo twigs (kalam) wrapped in cotton wool or nib pens. Pigments are extracted entirely from nature: soot/lampblack (black), turmeric (yellow), indigo (blue), bilva leaf (green), kusum flower and vermillion (red). Double line borders are filled with cross-hatching and dotting (Kachni) or solid colors (Bharni).',
    materials: ['Handmade paper treated with cow-dung wash', 'Bamboo pens (kalam)', 'Natural plant pigments', 'Tussar silk fabric', 'Cotton canvas'],
    masterArtisans: [
      'Sita Devi (Padma Shri, pioneering artist of Bharni style)',
      'Ganga Devi (National Award winner, expanded Madhubani to international museums)',
      'Baua Devi (Padma Shri, master of Mithila line drawings)',
      'Mahasundari Devi (Padma Shri)'
    ],
    fiveStyles: [
      { name: 'Bharni', description: 'Rich, solid fills of vibrant colors like orange, red, and yellow inside bold black outlines.' },
      { name: 'Kachni', description: 'Intricate monochromatic or two-toned line art filled with fine hatching, stippling, and miniature geometric motifs.' },
      { name: 'Tantrik', description: 'Esoteric representations of cosmic diagrams, yantras, and divine energy forms (Mahavidyas).' },
      { name: 'Godna', description: 'Tattoo-inspired concentric circles, animal forms, and tribal emblems created using bamboo pens.' },
      { name: 'Gobar / Kohbar', description: 'Ritual wall murals on cow-dung treated surfaces dedicated to fertility and marital prosperity.' }
    ]
  },
  {
    id: 'manjusha-art',
    name: 'Manjusha Art (Angika Snake Art)',
    hindiName: 'मंजूषा कला',
    originRegion: 'Anga (Bhagalpur)',
    districtId: 'bhagalpur',
    category: 'Scroll / Box Art',
    giTag: true,
    image: VERIFIED_IMAGES.manjusha,
    description: 'An ancient pictorial narrative scroll art unique to the Anga region of Bhagalpur, centered around the folklore of Behula-Bishahari. It is recognized as India’s only sequential comic-strip style folk art executed in exactly three colors: Pink, Green, and Yellow.',
    history: 'Dating back to the 7th century CE, Manjusha art was originally painted on eight-pillar ritual wooden and paper boxes (Manjushas) crafted by the Kumbhakar and Malakar communities during the annual Bishahari festival in honor of the snake goddess Mansa.',
    techniques: 'Characterized by strict artistic conventions: figures are always drawn in side profile (X-ray view), human characters possess pronounced almond eyes without pupils, and the artwork must feature bordered frames containing wavy snake patterns, mokha (fish-scale), or belpatra motifs.',
    materials: ['Handmade jute paper', 'Bamboo reed brushes', 'Pink, Green, and Yellow mineral/vegetable colors', 'Pith (Shola) wood'],
    masterArtisans: [
      'Chakravarty Devi (Pioneering master artist who revived the dying craft)',
      'Manoj Pandit',
      'Ulupi Jha'
    ],
    fiveStyles: [
      { name: 'Three Sacred Colors', description: 'Strict adherence to Pink (love/victory), Green (nature/vitality), and Yellow (intellect/divine power).' },
      { name: 'Snake Borders', description: 'Every scroll is enclosed by continuous stylized wave patterns representing serpent deities.' }
    ]
  },
  {
    id: 'sujuni-embroidery',
    name: 'Sujuni Embroidery of Bihar',
    hindiName: 'सुजनी कढ़ाई',
    originRegion: 'Tirhut (Muzaffarpur & Sitamarhi)',
    districtId: 'muzaffarpur',
    category: 'Textile Quilting & Embroidery',
    giTag: true,
    image: VERIFIED_IMAGES.sujani,
    description: 'A traditional needlework and quilting art with a Geographical Indication (GI) tag, practiced by women in rural Bihar. Old saris and dhotis are layered and stitched together with fine running stitches to create narrative quilts depicting social themes, nature, women’s empowerment, and rural life.',
    history: 'Derived from "Su" (facilitating/pure) and "Jani" (birth). Historically crafted by grandmothers and mothers to welcome newborn babies by layering soft, washed vintage cotton cloths stitched with auspicious motifs like peacocks, lotus, and sun.',
    techniques: 'Multiple layers of old cotton fabrics are quilted together using white thread in tiny running stitches to create a wavy rippled texture. The outlines of figures are traced in chain stitch with colored threads (black, brown, or blue) and filled with parallel running stitches (red, green, yellow).',
    materials: ['Recycled cotton saris and dhotis or fresh tussar silk', 'Cotton embroidery threads', 'Embroidery needles'],
    masterArtisans: [
      'Nirmala Devi (National Award winner)',
      'Sanju Devi',
      'Women artisans of Mahila Vikas Samiti'
    ],
    fiveStyles: [
      { name: 'Storytelling Quilts', description: 'Depicting village stories, women’s daily routines, domestic struggles, and ecological harmony.' },
      { name: 'Baby Quilts (Kanthas)', description: 'Soft, cushioned mats stitched with loving auspicious prayers for newborns.' }
    ]
  },
  {
    id: 'sikki-grass-craft',
    name: 'Sikki Grass Craft',
    hindiName: 'सिक्की घास शिल्प',
    originRegion: 'Mithila & Tirhut',
    districtId: 'madhubani',
    category: 'Grass Weaving & Basketry',
    giTag: true,
    image: VERIFIED_IMAGES.sikkiCraft,
    description: 'The golden grass craft of North Bihar. Sikki (a wild, fragrant reed with a natural golden sheen) is harvested from riverbanks, split with teeth, dyed in jewel tones, and coiled around sweetgrass to weave sculptural baskets (Dauti), boxes, lampshades, and decorative animal idols.',
    history: 'Historically practiced by women in Mithila where a bride’s dowry was judged by the beauty of the Sikki items (Pauti and Dauti) she crafted with her own hands to store jewelry, vermillion (Sindoor), and spices.',
    techniques: 'Sikki stems are boiled, sun-bleached, and dyed in red, blue, green, or left in natural lustrous gold. Using an iron needle with a wooden handle called a "Takua", the artisan punctures the munj grass core and coils the wet sikki grass around it, interlocking rows into dense 3D forms.',
    materials: ['Sikki grass (Golden reed)', 'Khar / Munj grass (Inner structural core)', 'Takua (Special iron needle)', 'Natural and azo dyes'],
    masterArtisans: [
      'Bindeshwari Devi (National Award winner)',
      'Shanti Devi',
      'Vimla Devi'
    ],
    fiveStyles: [
      { name: 'Pauti & Dauti', description: 'Traditional storage containers for betel nuts, jewelry, and sacred vermillion.' },
      { name: 'Figurative Sculptures', description: 'Handcrafted three-dimensional elephants, peacocks, horses, and human figurines.' }
    ]
  },
  {
    id: 'tikuli-art',
    name: 'Tikuli Art of Patna',
    hindiName: 'टिकुली कला',
    originRegion: 'Magadh (Patna)',
    districtId: 'patna',
    category: 'Miniature Enamel Art',
    giTag: false,
    image: '',
    description: 'An ancient 800-year-old decorative art form native to Patna. Originally created as ornate glass bindis (Tikulis) worn by royal women, today it is rendered on enamel-coated hardboard plaques using delicate squirrel-hair brushes and gold foil.',
    history: 'Flourished during the Mughal and Mauryan eras in Patna City. Was nearly extinct with the advent of factory-made synthetic bindis until revived as fine decorative art panels by master craftsman Upendra Maharathi.',
    techniques: 'High-density fiberboard is cut into shapes and coated with 4 to 5 layers of zinc oxide and lacquer, rubbed with sandpaper until glassy smooth. Detailed traditional paintings of Krishna Leela, village life, and Buddhist icons are painted, detailed with imitation gold foil, and sealed under clear varnish.',
    materials: ['Hardboard / MDF wood', 'Enamel paints and lacquer', 'Gold leaf foil', 'Sable hair brushes'],
    masterArtisans: [
      'Upendra Maharathi (Visionary reviver)',
      'Ashok Kumar Biswas (State & National Award winner)'
    ],
    fiveStyles: [
      { name: 'Royal Bindi Motifs', description: 'Circular miniature mandalas featuring intricate gold foil scrollwork.' },
      { name: 'Mithila & Magadh Tableaux', description: 'Wall plates depicting traditional Indian wedding processions and rural dances.' }
    ]
  },
  {
    id: 'bhagalpuri-silk',
    name: 'Bhagalpuri Tussar Silk Weaving',
    hindiName: 'भागलपुरी तसर सिल्क',
    originRegion: 'Anga (Bhagalpur)',
    districtId: 'bhagalpur',
    category: 'Textile Handloom',
    giTag: true,
    image: VERIFIED_IMAGES.bhagalpuriSilk,
    description: 'The prized wild silk of Bhagalpur, known globally for its porous, breathable texture, rich natural golden-brown sheen, and deep cultural heritage spanning over two centuries.',
    history: 'Bhagalpur has been renowned as the "Silk City" since the days of the East India Company and earlier. Weavers in Champanagar and Nathnagar carry lineages spanning over two hundred years.',
    techniques: 'Tussar silk is produced by silkworms (Antheraea paphia) feeding on local Asan and Arjun trees. The raw wild yarn is spun into Matka, Katia, and Ghicha threads, and handwoven on pit looms into textured sarees, stoles, and suit fabrics.',
    materials: ['Natural wild Tussar cocoons', 'Handspun silk yarn', 'Traditional wooden pit looms'],
    masterArtisans: [
      'Master weavers of Nathnagar and Champanagar cooperatives',
      'Padma Shri awardees in handloom textiles'
    ],
    fiveStyles: [
      { name: 'Pure Tussar Saree', description: 'Rich textured drape with natural beige-gold color and subtle geometric pallu borders.' },
      { name: 'Matka & Ghicha Silk', description: 'Heavier slub textured silk fabrics prized for jackets, kurtas, and luxury winter upholstery.' }
    ]
  }
];
