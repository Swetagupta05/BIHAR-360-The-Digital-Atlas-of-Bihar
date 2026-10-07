import { ArtCraft, CraftMaterial, ArtPractitioner } from '../types';
import { VERIFIED_IMAGES } from './media';

export const ARTS_AND_CRAFTS: ArtCraft[] = [
  {
    id: 'madhubani-painting',
    name: 'Madhubani / Mithila Painting',
    hindiName: 'मधुबनी / मिथिला पेंटिंग',
    tagline: 'Centuries of mythological memory, sacred geometry, and female lineage painted with bamboo twigs.',
    originRegion: 'Mithila (Madhubani, Darbhanga, Sitamarhi)',
    districtId: 'madhubani',
    associatedDistricts: ['madhubani', 'darbhanga', 'sitamarhi', 'samastipur'],
    category: 'Visual Folk Painting',
    categoryType: 'painting',
    giTag: true,
    image: VERIFIED_IMAGES.madhubani,
    description:
      'One of the world’s most celebrated folk art traditions, Mithila painting originated as a sacred mural art practiced exclusively by women in the domestic courtyards of the Mithila region. Traditionally painted on mud walls freshly coated with cow dung and clay, the art is characterized by double outlines filled with intricate hatching, stippling, and vibrant pigments extracted entirely from indigenous flora and minerals.',
    history:
      'Cultural memory traces the art back to the ancient Kingdom of Videha, where King Janaka commissioned village artists to paint the wedding of Princess Sita to Prince Rama. For millennia, the art was preserved as ephemeral wall and floor drawings (Aripan). In 1934, British colonial officer William G. Archer discovered these remarkable domestic murals exposed by the Bihar earthquake. In the late 1960s, during a severe regional drought, visionary pupul Jayakar and the All India Handicrafts Board encouraged local women to transfer their wall murals onto handmade paper, launching a global artistic movement.',
    techniques:
      'Artists sketch directly without preliminary pencil measurements. Outlines are drawn using split bamboo twigs (kalam) tightly wrapped in raw cotton or fine steel nibs. Lines are executed in continuous double strokes. The negative space is meticulously filled with geometric cross-hatching (Kachni) or flat saturated colors (Bharni). No part of the canvas is left empty; empty spaces are populated with flowers, birds, fish, or miniature geometric emblems.',
    materials: [
      'Handmade paper washed with cow dung and rice starch sizing',
      'Split bamboo twigs (kalam) wrapped with raw cotton',
      'Lampblack / soot (Kajal) for dense black outlines',
      'Raw turmeric (Haldi) for luminous yellow',
      'Indigo (Neel) for deep mineral blue',
      'Aparajita & Bilva leaves for green',
      'Flame of the Forest (Palash/Kusum) flowers for crimson and ochre',
      'Tussar silk fabric and pure cotton canvas'
    ],
    masterArtisans: [
      'Sita Devi (Padma Shri 1981, pioneer of Bharni style)',
      'Ganga Devi (Padma Shri 1984, National Award 1976, renowned for Kachni murals)',
      'Baua Devi (Padma Shri 2017, master of mythic line drawings)',
      'Mahasundari Devi (Padma Shri 2011, community organizer)',
      'Dulari Devi (Padma Shri 2021, celebrated artist from the fishing community)'
    ],
    fiveStyles: [
      {
        name: 'Bharni',
        description: 'Characterized by rich, saturated fills of bright orange, crimson, yellow, and blue contained within bold double black outlines, historically popular among Brahmin and Kayastha households.',
        context: 'Depicts major Hindu deities—Krishna, Radha, Durga, and Vishnu avatars.'
      },
      {
        name: 'Kachni',
        description: 'Exquisite monochromatic or two-toned fine line work. Instead of solid color fills, every figure and petal is textured with parallel hatching, cross-hatching, and micro-stippling.',
        context: 'Favors deep introspective spiritual and tantric cosmological diagrams.'
      },
      {
        name: 'Tantrik',
        description: 'Esoteric and precise geometrical diagrams depicting cosmic energies, Yantras, the ten Mahavidyas, and celestial orbits, rooted in ancient Shakta philosophy.',
        context: 'Historically kept in inner prayer chambers (Gosain Ghar) for private meditation.'
      },
      {
        name: 'Godna',
        description: 'Originating from the body-tattooing traditions of Dalit and marginalized communities, rendered with bamboo pens using soot and water to create concentric circles, totemic animals, and flora.',
        context: 'Democratized by master artist Chano Devi, celebrating labor, trees, and rural spirits.'
      },
      {
        name: 'Kohbar',
        description: 'The sacred nuptial chamber mural, painted to bless the newlyweds with fertility, health, and cosmic harmony, featuring a prominent bamboo stalk encircled by seven lotuses.',
        context: 'Created collaboratively on house walls prior to wedding ceremonies.'
      }
    ],
    motifs: [
      {
        name: 'Kohbar & Lotus (Kamal)',
        hindiName: 'कोहबर एवं कमल',
        symbolism: 'The central lotus represents feminine creative power, purity, and the womb, while the surrounding pond symbolizes abundance.',
        visualContext: 'The focal point of traditional wedding chamber paintings.'
      },
      {
        name: 'Bamboo Stalk (Bans)',
        hindiName: 'बांस',
        symbolism: 'Represents masculine lineage, resilience, and unbroken family continuity rooted deep into the soil.',
        visualContext: 'Drawn vertically piercing through the circular lotus motif.'
      },
      {
        name: 'Fish (Matsya)',
        hindiName: 'मत्स्य',
        symbolism: 'Universal emblem of fertility, auspicious beginnings, and the life-giving waters of Mithila’s ponds.',
        visualContext: 'Drawn in symmetric swimming pairs around the primary lotus.'
      },
      {
        name: 'Sun & Moon (Surya-Chandra)',
        hindiName: 'सूर्य एवं चंद्रमा',
        symbolism: 'Cosmic balance, eternal truth, and the divine witnesses to human vows and earthly deeds.',
        visualContext: 'Flanking the upper corners of almost every traditional Mithila composition.'
      },
      {
        name: 'Peacock (Mor)',
        hindiName: 'मयूर',
        symbolism: 'Beauty, auspicious grace, and the welcoming of seasonal rains and prosperity.',
        visualContext: 'Bordering the central tableau with plumage detailed in intricate Kachni lines.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Raw Fiber & Paper Preparation',
        hindiTitle: 'कागज एवं आधार की तैयारी',
        description: 'Thick handmade paper is treated with a diluted wash of fresh cow dung and water, then sun-dried. This traditional wash provides a warm, earthy parchment tone and natural insect-repelling properties.',
        toolOrMaterial: 'Handmade cotton-rag paper, filtered cow-dung wash, broad wash brush.'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Extracting Natural Pigments',
        hindiTitle: 'प्राकृतिक रंगों का निष्कर्षण',
        description: 'Kajal (lampblack) is collected on an earthen lid held over a mustard-oil lamp and blended with gum arabic. Turmeric root is crushed for brilliant yellow; indigo is fermented for deep blue; aparajita and palash flowers are steeped for emerald green and saffron.',
        toolOrMaterial: 'Earthen lamps, mortar and pestle, natural acacia gum (babool gond).'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'Fashioning the Bamboo Kalam',
        hindiTitle: 'बांस की कलम तैयार करना',
        description: 'Artisans slice fine bamboo reeds into pointed nibs. A small wad of raw cotton is wrapped just above the tip and tied with handspun thread to act as an ink reservoir.',
        toolOrMaterial: 'Green bamboo slivers, raw untreated cotton, cotton thread.'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Tracing the Double Outline',
        hindiTitle: 'दोहरी रूपरेखा खींचना',
        description: 'The master artist dips the kalam into lampblack ink and draws continuous, fluid double lines freehand. These double contours define the human figures, celestial deities, and borders.',
        toolOrMaterial: 'Bamboo kalam, freshly prepared carbon lampblack ink.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Kachni (Hatching) & Bharni (Filling)',
        hindiTitle: 'कचनी एवं भरनी का कार्य',
        description: 'Depending on the stylistic tradition, the artisan either fills the enclosed forms with fine parallel cross-hatched lines using nib pens (Kachni) or saturates the spaces with rich vegetable colors using cotton swabs (Bharni).',
        toolOrMaterial: 'Nib pens, bamboo swabs, colored natural dyes.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Final Consecration & Sun Drying',
        hindiTitle: 'अंतिम रूप एवं धूप में सुखाना',
        description: 'The borders are sealed with intricate motifs of fish, peacocks, or lotus creepers. The completed painting is dried under gentle morning sunlight, locking in the natural gum binder.',
        toolOrMaterial: 'Clean shaded drying courtyard.'
      }
    ],
    culturalMeaning:
      'In Mithila, art is not decorative commerce; it is visual prayer and social documentation. Every Aripan drawn on the earthen threshold invokes deities to protect the home. The paintings celebrate the symbiotic bond between humanity, nature, and the cosmos, serving as a matriarchal archive where grandmother passes cosmological knowledge directly to granddaughter without text.',
    livingToday:
      'Today, Mithila painting has transcended mud walls to adorn global art museums, contemporary high fashion, public infrastructure (including the world-famous painted walls of Madhubani Railway Station and the Bihar Museum in Patna), and architectural installations. The villages of Jitwarpur and Ranti in Madhubani district remain bustling open-air academies where generations of women paint daily.',
    communityTradition:
      'Maintained for generations predominantly by women of Mithila across caste groups, each enriching the art with unique symbolic variations (from Kayastha line work and Brahmin mythological narratives to Dalit Godna totems).',
    relatedFestivals: ['Vivah Panchami', 'Chhath Mahaparva', 'Sama Chakeva', 'Makar Sankranti'],
    sources: {
      primary: 'Development Commissioner (Handicrafts), Ministry of Textiles, Government of India',
      institutionalAuthority: 'Upendra Maharathi Shilp Anusandhan Sansthan, Patna',
      giRegistry: 'GI Application No. 83 (Handicrafts - Mithila Painting), Geographical Indications Registry, Chennai',
      academicReference: 'Archer, W.G., "Paintings of Mithila" (1977); Véquaud, Yves, "The Women Painters of Mithila" (1977).'
    },
    multilingual: {
      title: {
        en: 'Madhubani / Mithila Painting',
        hi: 'मधुबनी / मिथिला चित्रकला',
        mai: 'मिथिलाक लोक चित्रकला (मधुबनी पेंटिंग)',
        bho: 'मिथिला के मधुबनी पेंटिंग'
      },
      tagline: {
        en: 'Generations of memory, sacred geometry, and female lineage painted with bamboo twigs.',
        hi: 'बांस की कलम और प्राकृतिक रंगों से लिखी गई पीढ़ियों की साधना।',
        mai: 'बांस के कलम आ प्राकृतिक रंग सं रचल माटि आ देबालक सनातन गाथा।'
      }
    }
  },
  {
    id: 'manjusha-art',
    name: 'Manjusha Art (Angika Snake Art)',
    hindiName: 'मंजूषा कला (अंगिका सर्प चित्रकला)',
    tagline: 'India’s only sequential scroll art in three sacred colors, telling the epic saga of Behula-Bishahari.',
    originRegion: 'Anga Region (Bhagalpur & Banka)',
    districtId: 'bhagalpur',
    associatedDistricts: ['bhagalpur', 'banka', 'munger'],
    category: 'Narrative Box / Scroll Art',
    categoryType: 'painting',
    giTag: true,
    image: VERIFIED_IMAGES.manjusha,
    description:
      'Unique to the ancient Anga region (centered on modern Bhagalpur), Manjusha Art is an ancient sequential narrative folk painting tradition. Unlike other Indian folk arts that depict isolated mythological episodes, Manjusha is executed as a continuous, comic-strip style story that narrates the folklore of Behula, her steadfast love for husband Bala Lakhindar, and the worship of Mansa Devi (the serpent goddess Bishahari).',
    history:
      'Dating back to the 7th century CE, the art was originally painted on eight-pillared ritual wooden and papier-mâché boxes known as "Manjushas" (literally "temple-boxes"). During the annual Bishahari festival in the monsoon month of Bhadrapad, the Kumbhakar (potter) and Malakar (garland-maker) communities constructed and painted these boxes to accompany the devotee’s offerings down the holy Ganga. Nearly forgotten in the mid-20th century, the art was revived through the dedicated efforts of master artisan Chakravarty Devi and the Department of Art & Culture.',
    techniques:
      'Manjusha art follows strict, unalterable iconographic rules: characters are strictly drawn in side-profile (X-ray view) with prominent almond-shaped eyes that intentionally have no pupils. The human body is depicted with fluid, expressive lines. The entire artwork is bound within defined border patterns—most famously the "Laharina" (wavy serpent ripples) and "Belpatra" (sacred leaves). Most crucially, it is executed strictly in three sacred colors: Pink, Green, and Yellow.',
    materials: [
      'Handmade jute and rag paper',
      'Pith wood (Shola) for ritual boxes',
      'Fine bamboo reed brushes',
      'Pink pigment (representing love, devotion, and feminine strength)',
      'Green pigment (representing vitality, poison, and nature)',
      'Yellow pigment (representing intellect, divinity, and sacrifice)'
    ],
    masterArtisans: [
      'Chakravarty Devi (Pioneering master artist who revived the endangered art)',
      'Manoj Pandit (National & State awardee, master scroll illustrator)',
      'Ulupi Jha (Eminent contemporary practitioner and trainer)',
      'Anjana Keshri (Renowned artist and researcher of Angika folklore)'
    ],
    fiveStyles: [
      {
        name: 'The Sacred Tri-Color Code',
        description: 'Strict adherence to exactly three colors: Pink (love and sacrifice), Green (nature and serpent power), and Yellow (divinity and intellect). No black or blue is traditionally permitted.',
        context: 'Found in all authentic traditional Bishahari shrine boxes.'
      },
      {
        name: 'Laharina Border (Serpent Waves)',
        description: 'Continuous undulating wavy lines framing the scroll, symbolizing the serpentine path of Bishahari and the flowing waters of the Ganga.',
        context: 'Mandatory structural border enclosing every narrative panel.'
      },
      {
        name: 'Mokha Border (Fish-Scale Grid)',
        description: 'Geometric diamond and scale patterns representing the aquatic ecology of the Ganga basin where Behula’s raft floated.',
        context: 'Used as inner panel dividers between narrative scenes.'
      },
      {
        name: 'Belpatra & Champa Motifs',
        description: 'Stylized representations of sacred three-pronged wood-apple leaves and fragrant frangipani flowers native to Anga.',
        context: 'Decorates the pillars and corners of ritual boxes.'
      }
    ],
    motifs: [
      {
        name: 'Laharina (Serpent Wave Border)',
        hindiName: 'लहरिया / लहरिना',
        symbolism: 'The eternal rhythm of water, life’s tribulations, and the protective coils of the serpent goddess Bishahari.',
        visualContext: 'The outer framing band of every Manjusha scroll.'
      },
      {
        name: 'Behula on the Raft (Mandap)',
        hindiName: 'केला के थंब पर बेहुला',
        symbolism: 'Unflinching loyalty, moral triumph, and female defiance against divine injustice.',
        visualContext: 'The emotional climax showing Behula steering her plantain-stem raft across the river.'
      },
      {
        name: 'Bishahari (Five Serpent Goddesses)',
        hindiName: 'पांच विषहरी माई',
        symbolism: 'Jaya, Bishara, Padmavani, Myna, and Dootila—daughters of Shiva who wield power over poison and cure.',
        visualContext: 'Rendered crowned with cobras and holding lotus blossoms.'
      },
      {
        name: 'Champa Flower',
        hindiName: 'चंपा फूल',
        symbolism: 'The ancient capital of Anga was Champanagar, where fragrant Champa trees bloomed abundantly.',
        visualContext: 'Appears as corner brackets and decorative flourishes.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Shola Pith & Handmade Paper Base',
        hindiTitle: 'शोला एवं हस्तनिर्मित कागज',
        description: 'Artisans harvest spongy white pith from the Shola plant (Aeschynomene aspera) found in marshy ponds, or prepare coarse, unbleached handmade jute paper.',
        toolOrMaterial: 'Shola pith blocks, sharp carving knives, handmade unbleached paper.'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Formulation of the Three Dyes',
        hindiTitle: 'तीन पावन रंगों की तैयारी',
        description: 'Pigments are strictly restricted to three shades: bright yellow (traditionally from turmeric/haridra), vivid green (from crushed spinach/bean leaves), and warm rose pink (from palash/geru).',
        toolOrMaterial: 'Mineral pigments, stone palettes, natural gum arabic.'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'Reed Pens (Kalam)',
        hindiTitle: 'नरकट की कलम',
        description: 'Finely shaved dry bamboo reeds or river reed stalks (Narkat) are sharpened into angled nibs that allow expressive thick-and-thin linework.',
        toolOrMaterial: 'Narkat reeds, fine steel dip pens for contemporary work.'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Drawing the Serpent Borders',
        hindiTitle: 'लहरिना बॉर्डर का अंकन',
        description: 'Before any human figure is drawn, the artisan lays down the multi-banded border. The wavy Laharina pattern in green and pink establishes the sacred space.',
        toolOrMaterial: 'Bamboo brush, green and pink pigments.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Sequential Narrative Characterization',
        hindiTitle: 'क्रमिक आख्यान एवं चरित्र अंकन',
        description: 'Scenes are drawn sequentially from left to right. Characters are drawn strictly in side-profile with almond-shaped blank eyes, conveying stoic mythological presence.',
        toolOrMaterial: 'Bamboo kalam, yellow background base.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Assembling the Manjusha Box',
        hindiTitle: 'मंजूषा मंजूषा पेटिका की पूर्णता',
        description: 'The painted panels are affixed onto the eight-cornered bamboo-and-shola structure, complete with ritual flags and bells ready for the Bishahari procession.',
        toolOrMaterial: 'Bamboo framing sticks, natural resin glue.'
      }
    ],
    culturalMeaning:
      'Manjusha art embodies the resilience of the common person against fate. The epic of Behula is not merely a tale of wifely devotion; it is a profound Angika allegory of human dignity triumphing over divine arrogance. It also reflects the ancient riverine relationship with venomous snakes along the Ganga basin.',
    livingToday:
      'Through state-sponsored training workshops at the Upendra Maharathi Sansthan and university research programs in Bhagalpur, Manjusha has experienced a remarkable revival. It is now featured on silk scarves, canvas wall art, hand-painted ceramic ware, and government architecture across the Anga region.',
    communityTradition:
      'Preserved historically by the Kumbhakar (potter) and Malakar (florist/pith-craft) castes of Bhagalpur and Banka, now practiced by dedicated cultural societies across Bihar.',
    relatedFestivals: ['Bishahari Puja', 'Nag Panchami', 'Chhath Mahaparva'],
    sources: {
      primary: 'Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India',
      institutionalAuthority: 'Upendra Maharathi Shilp Anusandhan Sansthan, Patna',
      giRegistry: 'GI Application No. 374 (Manjusha Art), Geographical Indications Registry, Chennai',
      academicReference: 'Verma, R.K., "Folk Paintings of Anga: The Manjusha Tradition" (Bhagalpur University).'
    },
    multilingual: {
      title: {
        en: 'Manjusha Art (Angika Snake Art)',
        hi: 'मंजूषा कला (अंगिका सर्प चित्रकला)',
        mai: 'मंजूषा कला (अंग प्रदेशक लोक कला)',
        bho: 'मंजूषा चित्रकला'
      },
      tagline: {
        en: 'India’s only sequential scroll art in three sacred colors, telling the epic saga of Behula-Bishahari.',
        hi: 'तीन पावन रंगों और सर्पाकार रेखाओं में जीवित बिहुला-विषहरी की अमर गाथा।',
        mai: 'अंग देशक तीन रंगवला सर्पाकार लोक आख्यान चित्रकला।'
      }
    }
  },
  {
    id: 'sujuni-embroidery',
    name: 'Sujani Embroidery of Bihar',
    hindiName: 'सुजनी कढ़ाई एवं रजाई शिल्प',
    tagline: 'Recycled vintage textiles stitched with rippled running threads into intimate diaries of women’s lives.',
    originRegion: 'Tirhut (Muzaffarpur & Sitamarhi)',
    districtId: 'muzaffarpur',
    associatedDistricts: ['muzaffarpur', 'sitamarhi', 'sheohar', 'vaishali'],
    category: 'Textile Quilting & Needlework',
    categoryType: 'textile',
    giTag: true,
    image: VERIFIED_IMAGES.sujani,
    description:
      'A deeply meditative textile tradition with a Geographical Indication (GI) tag, Sujani is practiced by rural women in Bihar’s Tirhut region. Derived from "Su" (pure / facilitating) and "Jani" (birth), the craft began as a domestic tradition of layering soft, discarded cotton saris and dhotis to create warm, quilted wraps for newborn babies, stitched with loving blessings and protective symbols.',
    history:
      'For centuries, rural mothers and grandmothers stitched Sujani quilts in the quiet hours of afternoon courtyards. In the late 20th century, catalyzed by social activists and craft revivalists in Bhusra village near Muzaffarpur, Sujani underwent an extraordinary transformation. Women began utilizing the traditional quilting technique to depict their own lived realities—village domesticity, gender discrimination, female literacy, ecological devastation, and health awareness—turning simple baby quilts into powerful visual textile journals.',
    techniques:
      'Four to five layers of vintage, washed cotton saris are spread flat and basted together. Using fine white cotton thread, the artisan sews thousands of tiny, dense parallel running stitches across the fabric, creating a signature undulating, rippled texture. The contours of human figures, animals, and trees are then traced in bold chain stitch (usually in black, dark blue, or brown thread), and the interior volumes are embroidered with delicate parallel running stitches in vibrant red, green, and yellow embroidery floss.',
    materials: [
      'Layered vintage cotton saris and dhotis (or pure Tussar silk for contemporary wall hangings)',
      'Fine white quilting thread for background ripple effect',
      'Colored cotton and silk embroidery threads (black, blue, crimson, ochre, forest green)',
      'Fine sewing needles (Numbers 8–10)',
      'Wooden embroidery frames (Adda)'
    ],
    masterArtisans: [
      'Nirmala Devi (National Award winner in traditional textile embroidery)',
      'Sanju Devi (Master artisan and community trainer at Bhusra)',
      'Sharda Devi (Pioneer in narrative social embroidery)',
      'Artisan Collective of Mahila Vikas Samiti, Bhusra (Muzaffarpur)'
    ],
    fiveStyles: [
      {
        name: 'Traditional Newborn Quilt (Jani Sujani)',
        description: 'Layered soft cotton stitched in pale white threads with auspicious circular suns, lotuses, and evil-eye warding amulets to cushion the newborn infant.',
        context: 'Presented by grandmothers as an heirloom gift during the Chhathi birth ceremony.'
      },
      {
        name: 'Narrative Social Chronicle Quilt',
        description: 'Large-scale embroidered tapestries documenting women’s issues—such as girls attending school, rural healthcare, domestic labor, and village meetings.',
        context: 'Celebrated in international textile museums as feminist folk documentary.'
      },
      {
        name: 'Agrarian & Nature Panoramas',
        description: 'Depicting village harvest cycles, mango groves, cattle grazing, monsoons, and the companionship of peacocks and parrots.',
        context: 'Reflects rural Tirhut’s intimate ecological harmony.'
      }
    ],
    motifs: [
      {
        name: 'Rippled Running Stitch (Lahar)',
        hindiName: 'लहरिया टांका',
        symbolism: 'The continuous rhythm of life, breath, and the water currents of North Bihar’s rivers.',
        visualContext: 'The tactile quilted background that blankets the entire fabric.'
      },
      {
        name: 'Tree of Life (Jeevan Vriksha)',
        hindiName: 'जीवन वृक्ष',
        symbolism: 'Nourishment, ancestral roots, shelter for birds, and cosmic fertility.',
        visualContext: 'Often anchored in the center of the quilt with perching peacocks and nesting birds.'
      },
      {
        name: 'Women in Dialogue',
        hindiName: 'संवादरत महिलाएं',
        symbolism: 'Female solidarity, shared labor, and the oral transmission of ancestral wisdom.',
        visualContext: 'Depicted gathering water at village wells or weaving in courtyards.'
      },
      {
        name: 'Peacock & Parrot (Mor-Tota)',
        hindiName: 'मोर और तोता',
        symbolism: 'Messengers of devotion, seasonal rain, and marital fidelity.',
        visualContext: 'Stitched along borders in alternating chain stitches.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Sorting & Cleansing Vintage Cottons',
        hindiTitle: 'पुराने सूती वस्त्रों का चयन',
        description: 'Worn, soft cotton saris and dhotis are thoroughly washed with natural soap, sun-dried, and inspected for uniform softness. For contemporary art pieces, raw Tussar silk is carefully selected.',
        toolOrMaterial: 'Soft washed vintage cotton, clean wooden floor table.'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Layering and Basting (Kaccha Tanka)',
        hindiTitle: 'तह जमाना एवं कच्चा टांका',
        description: 'Three to five layers of cloth are smoothed out, stacked flat, and tacked together with long, loose basting stitches so the layers do not shift during embroidery.',
        toolOrMaterial: 'Large basting needles, thick white basting thread.'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'Tracing the Charcoal Storyboard',
        hindiTitle: 'कथा की रूपरेखा तैयार करना',
        description: 'The artisan draws the narrative freehand directly onto the topmost fabric layer using soft charcoal or erasable tailoring chalk.',
        toolOrMaterial: 'Charcoal pencil, tailor’s chalk.'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Background Quilting (Poth Work)',
        hindiTitle: 'पृष्ठभूमि का महीन सिलाई कार्य',
        description: 'Thousands of minute, tight running stitches are sewn parallel to one another across the background using white thread, creating the signature undulating quilted texture.',
        toolOrMaterial: 'Fine steel needles, high-tensile white cotton thread.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Chain-Stitch Outlines & Colored Fillings',
        hindiTitle: 'जंजीरा टांका एवं रंगीन भराव',
        description: 'Contours are established using bold chain stitches in dark threads. The interior spaces are then filled with colored embroidery thread using fine running and stem stitches.',
        toolOrMaterial: 'Stranded cotton embroidery floss in vibrant primary hues.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Edging & Final Finishing',
        hindiTitle: 'किनारी सिलना एवं पूर्णता',
        description: 'The perimeter edges are turned in and secured with dense blanket stitches or colorful fabric piping, creating a durable heirloom textile.',
        toolOrMaterial: 'Needle, contrast border fabric.'
      }
    ],
    culturalMeaning:
      'Sujani is a testament to the transformative power of women’s labor. It embodies the indigenous philosophy of conservation—taking worn, discarded cloth and imbuing it with new life, emotional warmth, and narrative dignity. It serves as both a soft cradle for newborns and an uninhibited canvas for rural women’s voices.',
    livingToday:
      'Supported by organizations like Mahila Vikas Samiti in Bhusra and national craft councils, Sujani artisans now export bespoke bedspreads, designer jackets, cushion covers, and museum-grade tapestries worldwide, providing sustainable economic independence to hundreds of rural women.',
    communityTradition:
      'Practiced collaboratively by women across rural communities in Tirhut, where stitching circles in village verandas foster mutual support and artistic innovation.',
    relatedFestivals: ['Chhathi (Birth Ceremony)', 'Vivah Panchami', 'Makar Sankranti'],
    sources: {
      primary: 'Development Commissioner (Handicrafts), Ministry of Textiles, Government of India',
      institutionalAuthority: 'Upendra Maharathi Shilp Anusandhan Sansthan, Patna',
      giRegistry: 'GI Application No. 144 (Sujani Embroidery of Bihar), Geographical Indications Registry, Chennai',
      academicReference: 'Chattopadhyay, Kamaladevi, "Indian Handicrafts" (1963); Craft Revival Trust Archives.'
    },
    multilingual: {
      title: {
        en: 'Sujani Embroidery of Bihar',
        hi: 'सुजनी कढ़ाई एवं रजाई शिल्प',
        mai: 'सुजनी कशीदाकारी शिल्प (तिरहुत)',
        bho: 'सुजनी कढ़ाई'
      },
      tagline: {
        en: 'Recycled vintage textiles stitched with rippled running threads into intimate diaries of women’s lives.',
        hi: 'पुराने वस्त्रों और महीन टांकों से रची गई ग्रामीण महिलाओं की मौन डायरी।',
        mai: 'महीन सुई आ धागा सं पुरान कपड़ा पर उकेरल जिनगीक सुख-दुख।'
      }
    }
  },
  {
    id: 'sikki-grass-craft',
    name: 'Sikki Grass Craft',
    hindiName: 'सिक्की घास शिल्प (सुनहरी घास)',
    tagline: 'Golden wild wetland reeds split with teeth and coiled into sculptured, biodegradable vessels.',
    originRegion: 'Mithila & Tirhut (Madhubani, Darbhanga, Sitamarhi)',
    districtId: 'madhubani',
    associatedDistricts: ['madhubani', 'darbhanga', 'sitamarhi', 'muzaffarpur', 'supaul'],
    category: 'Natural Fibre Weaving & Basketry',
    categoryType: 'fibre',
    giTag: true,
    image: VERIFIED_IMAGES.sikkiCraft,
    description:
      'Sikki is the renowned golden grass craft of Northern Bihar. Sikki (Chrysopogon zizanioides) is a wild, fragrant reed with a natural metallic gold sheen that grows wild in the swampy river meadows of the Gandak and Kosi basins. In the hands of skilled women artisans, this humble wetland plant is split, dyed, and coiled around wild sweetgrass to produce sculptural baskets, ceremonial boxes (Pauti), animal figurines, and daily domestic utensils of remarkable tensile strength.',
    history:
      'Deeply entwined with Mithila’s matrimonial customs for centuries. A prospective bride in rural Bihar was traditionally evaluated for her patience, creative ingenuity, and diligence by the intricate Sikki items she crafted for her bridal trousseau. The bride took these lidded containers (Pauti and Dauti) to her marital home to store her bridal vermillion (Sindoor), betel nuts, and delicate jewelry.',
    techniques:
      'Unlike wicker weaving, Sikki is created through a coil-binding technique. The structural skeleton is formed by "Munj" (a tough wild wetland grass). The artisan uses a single traditional tool: a 6-inch cold iron awl with a rounded wooden grip called a "Takua". The takua punctures the munj coil, and a strand of moist, pliable sikki is threaded through the hole and wound tightly around the munj, binding adjacent coils together seamlessly without any glue, nails, or synthetic thread.',
    materials: [
      'Wild Sikki grass (harvested during the autumn monsoon)',
      'Munj / Khar grass (tough inner structural core)',
      'Takua (traditional hand-forged iron needle with wooden handle)',
      'Natural & food-grade dyes (scarlet red, sapphire blue, emerald green, golden-yellow)'
    ],
    masterArtisans: [
      'Bindeshwari Devi (National Award winner in Sikki Basketry)',
      'Shanti Devi (State Awardee, master sculptor of Sikki figurines)',
      'Vimla Devi (Pioneering master artisan from Madhubani)',
      'Krishna Kant Jha (Promoter of contemporary Sikki lighting and home decor)'
    ],
    fiveStyles: [
      {
        name: 'Traditional Pauti (Lidded Dowry Box)',
        description: 'Circular or cylindrical containers with snug, conical lids, decorated with geometric diamond and fish motifs, crafted to hold sindoor, coins, and dried fruits.',
        context: 'Indispensable ceremonial gift carried by brides in Mithila weddings.'
      },
      {
        name: 'Dauti & Mauni (Open Shallow Trays)',
        description: 'Wide, sturdy round trays used in daily rural kitchens for winnowing grain, drying spices, and presenting sacred offering fruits during Chhath Puja.',
        context: 'Eco-friendly utilitarian vessels of remarkable longevity.'
      },
      {
        name: 'Three-Dimensional Sculptures & Toys',
        description: 'Sculpted elephants, peacocks, horses, and temple shrines built entirely through concentric coil construction.',
        context: 'Contemporary craft art celebrated in architectural design exhibitions.'
      }
    ],
    motifs: [
      {
        name: 'The Golden Sheen (Prakritik Sona)',
        hindiName: 'प्राकृतिक सुनहरी चमक',
        symbolism: 'The untamed bounty of Bihar’s river valleys, purity, and ecological sustainability.',
        visualContext: 'The natural undyed golden body of every Sikki product.'
      },
      {
        name: 'Elephant with Howdah (Hathi)',
        hindiName: 'हाथी',
        symbolism: 'Royal majesty, prosperity, strength, and the blessings of Ganesha.',
        visualContext: 'Sculpted as freestanding tabletop statues or finials atop container lids.'
      },
      {
        name: 'Fish (Machhli)',
        hindiName: 'मछली',
        symbolism: 'Good fortune, abundance, and the aquatic ecosystems of Mithila.',
        visualContext: 'Interwoven as relief motifs along the outer circumference of Pauti boxes.'
      },
      {
        name: 'Peacock (Mor)',
        hindiName: 'मयूर',
        symbolism: 'Rain, dance, and beauty in village folklore.',
        visualContext: 'Shaped into graceful handles and decorative side lugs.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Autumn Harvesting of Sikki & Munj',
        hindiTitle: 'सिक्की एवं मूंज घास की कटाई',
        description: 'In October and November, rural women wade into river shallows and wetland edges to cut wild Sikki reeds before they flower. The stems are dried in shade to retain their golden luster.',
        toolOrMaterial: 'Sickles, sun-drying fields along riverbanks.'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Splitting and Dyeing the Reeds',
        hindiTitle: 'घास की चीराई एवं रंगाई',
        description: 'Artisans use their teeth and sharp fingernails to split each slender reed lengthwise into two pliable halves. Some portions are boiled with vibrant dyes, while others are kept in their natural gold.',
        toolOrMaterial: 'Boiling cauldrons, natural mineral dyes, salt binders.'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'The Takua (Iron Awl)',
        hindiTitle: 'तकवा (लोहे की सूई)',
        description: 'The sole tool used in Sikki craftsmanship is the Takua—a pointed cold-iron needle without an eye, embedded into a smooth wooden bulb that fits snugly into the palm.',
        toolOrMaterial: 'Hand-forged iron Takua needle.'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Coiling Around the Munj Core',
        hindiTitle: 'मूंज के कोर पर लपेटना',
        description: 'Tough Munj grass is bundled into a circular cord. The artisan moistens a dyed Sikki reed with water, pierces the previous row of munj with the takua, and threads the wet reed through, wrapping it tightly.',
        toolOrMaterial: 'Water bowl, Takua, munj core.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Building Height & Geometric Patterns',
        hindiTitle: 'उभार एवं ज्यामितीय पैटर्न',
        description: 'Row upon row is coiled spirally upward. By introducing dyed red, green, and blue strands, the artisan creates intricate diamond checks, floral stars, and animal bands.',
        toolOrMaterial: 'Dyed and natural golden Sikki fibers.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Trimming & Finishing',
        hindiTitle: 'अंतिम छंटाई एवं फिनिशिंग',
        description: 'Stray reed ends are clipped flush with shears. The finished box or sculpture is lightweight, completely biodegradable, insect-resistant, and can endure for decades.',
        toolOrMaterial: 'Finishing scissors.'
      }
    ],
    culturalMeaning:
      'Sikii is a supreme example of grassroots ecological design. Created entirely from wild reeds, water, and human hands without a single drop of petrochemical glue or synthetic thread, it returns harmlessly to the earth when its life cycle ends. It represents the quiet, enduring dignity of rural women’s domestic mastery.',
    livingToday:
      'Modern designers have collaborated with Mithila artisans to adapt Sikki into contemporary interior products—lamp shades, coaster sets, wall paneling, and fashion accessories. The craft received a Geographical Indication (GI) tag, safeguarding the heritage of its traditional makers.',
    communityTradition:
      'Practiced by women across all rural communities in Mithila, where craft skills are passed down informally during the serene winter afternoons after the paddy harvest.',
    relatedFestivals: ['Chhath Mahaparva', 'Vivah Panchami', 'Makar Sankranti', 'Sama Chakeva'],
    sources: {
      primary: 'Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India',
      institutionalAuthority: 'Upendra Maharathi Shilp Anusandhan Sansthan, Patna',
      giRegistry: 'GI Application No. 191 (Sikki Grass Products of Bihar), Geographical Indications Registry, Chennai',
      academicReference: 'Jain, Jyotindra, "Ganga Devi: Tradition and Expression in Mithila Art" (1997).'
    },
    multilingual: {
      title: {
        en: 'Sikki Grass Craft',
        hi: 'सिक्की घास शिल्प (सुनहरी घास)',
        mai: 'सिक्की घासक पारंपरिक शिल्प (मिथिला)',
        bho: 'सिक्की घास के कला'
      },
      tagline: {
        en: 'Golden wild wetland reeds split with teeth and coiled into sculptured, biodegradable vessels.',
        hi: 'नदी किनारे उगने वाली सुनहरी घास से रची गई लोक कला और पर्यावरण की अनमोल धरोहर।',
        mai: 'मिथिलाक पोखरि-कछार सं चुनल सुनहली सीकी सं रचल अनुपम पौती-दौती।'
      }
    }
  },
  {
    id: 'bhagalpuri-silk',
    name: 'Bhagalpuri Tussar Silk Weaving',
    hindiName: 'भागलपुरी तसर सिल्क बुनकरी',
    tagline: 'The legendary "Queen of Wild Silks"—breathable, textured, and naturally golden on traditional pit looms.',
    originRegion: 'Anga Region (Bhagalpur & Banka)',
    districtId: 'bhagalpur',
    associatedDistricts: ['bhagalpur', 'banka'],
    category: 'Textile Handloom Weaving',
    categoryType: 'textile',
    giTag: true,
    image: VERIFIED_IMAGES.bhagalpuriSilk,
    description:
      'Known globally as the "Silk City" of India, Bhagalpur has been a world-renowned center of sericulture and handloom silk weaving for over two centuries. Bhagalpuri Tussar silk (often called "Kosa" silk) is wild forest silk spun from cocoons of the Antheraea paphia moth, which feed naturally on Asan and Arjun trees in the surrounding tribal forest belts. Prized for its rich porous texture, deep natural golden-beige luster, and remarkable thermal breathability, it holds a prestigious Geographical Indication (GI) tag.',
    history:
      'Historical archives record Bhagalpur as a bustling riverine trading port on the Ganga, exporting luxury wild silks to Europe, West Asia, and the Far East long before the British colonial era. Generations of Ansari, Tanti, and Momim weavers in traditional weaving mohallas like Champanagar, Nathnagar, and Puraini established family lineages where the rhythmic clatter of wooden pit looms has echoed continuously for over 200 years.',
    techniques:
      'Unlike cultivated mulberry silk, wild Tussar cocoons produce coarse, highly textured filaments. The raw yarn is hand-reeled using thigh-reeling and spindle techniques, creating distinct yarn varieties: Katia (slubby, textured yarn from damaged cocoons), Ghicha (uneven, rustic thread pulled by hand), and Matka (soft, heavy textured spun silk). These yarns are woven on traditional wooden pit looms with throw-shuttles or fly-shuttles, creating fabrics that breathe effortlessly in summer and insulate warmly in winter.',
    materials: [
      'Wild Tussar silk cocoons (Kosa) harvested from Arjun and Asan trees',
      'Handspun Ghicha, Katia, and Matka silk yarns',
      'Traditional wooden pit looms and fly-shuttles',
      'Natural vegetable dyes (indigo, harda, lac, and madder) alongside eco-friendly azo-free dyes'
    ],
    masterArtisans: [
      'Master Weavers of Nathnagar and Champanagar Cooperatives',
      'Shri Mohammad Rafique (Eminent master weaver and recipient of National Handloom Award)',
      'Weaver Collectives of Bhagalpur Regional Handloom Weavers Cooperative Union'
    ],
    fiveStyles: [
      {
        name: 'Pure Natural Tussar Saree',
        description: 'Lightweight drape with a soft golden-honey natural sheen, often accented with hand-painted Madhubani or Manjusha border motifs.',
        context: 'Celebrated as an aristocratic heirloom textile across India.'
      },
      {
        name: 'Ghicha & Katia Silk Fabric',
        description: 'Heavier, textured wild silk with natural irregularities and slubs, offering a linen-like rustic texture favored for kurtas, jackets, and luxury upholstery.',
        context: 'Prized internationally for sustainable luxury apparel.'
      },
      {
        name: 'Tussar-Eri Silk Blend',
        description: 'Blended with eco-friendly non-violent Ahimsa (Eri) silk, creating a velvety, ultra-soft handfeel of extraordinary durability.',
        context: 'Favored for winter stoles and ceremonial shawls.'
      }
    ],
    motifs: [
      {
        name: 'Natural Honey Luster (Swarnim Kosa)',
        hindiName: 'प्राकृतिक स्वर्णिम आभा',
        symbolism: 'The untamed beauty of wild Indian forests, requiring no artificial bleaching or chemical glazing.',
        visualContext: 'The signature base shade of raw Tussar silk.'
      },
      {
        name: 'Temple Border (Mandir Kinari)',
        hindiName: 'मंदिर किनार',
        symbolism: 'Sacred architectural spires invoking spiritual protection for the wearer.',
        visualContext: 'Woven with extra-weft shuttle along the saree borders.'
      },
      {
        name: 'Slub Texture (Katia Ghicha)',
        hindiName: 'घीचा बनावट',
        symbolism: 'Celebration of natural human touch and raw artisanal imperfection.',
        visualContext: 'Visible throughout the tactile surface weave.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Wild Forest Cocoon Harvesting',
        hindiTitle: 'जंगली तसर कोकून का संग्रह',
        description: 'Tribal forest gatherers in Banka and Bhagalpur collect wild Tussar cocoons from the canopy of wild Asan and Arjun trees at the close of autumn.',
        toolOrMaterial: 'Wild forest Tussar cocoons (Kosa).'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Boiling and Reeling the Filament',
        hindiTitle: 'कोकून उबालना एवं धागा कताई',
        description: 'The tough, mineral-crusted cocoons are boiled in water with soda ash to soften the sericin gum. Women artisans gently peel the outer filament and reel it onto earthen spindles.',
        toolOrMaterial: 'Boiling vat, wooden Natwa reel, hand spindles.'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'Spinning Ghicha & Katia Yarn',
        hindiTitle: 'घीचा एवं कतिया सूत कताई',
        description: 'The coarse inner and outer fibers that cannot be continuously reeled are hand-spun on traditional charkhas into richly textured Ghicha and Katia threads.',
        toolOrMaterial: 'Traditional wooden spinning wheels (charkha).'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Warping & Dressing the Pit Loom',
        hindiTitle: 'ताना तैयार करना एवं करघे पर चढ़ाना',
        description: 'Yarn is stretched across wooden peg frames for warping, starched with natural rice gruel, and threaded through thousands of healds and the reed of the pit loom.',
        toolOrMaterial: 'Wooden warp beams, sizing brushes, heald frames.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Rhythmic Handloom Weaving',
        hindiTitle: 'करघे पर पारंपरिक बुनाई',
        description: 'Seated inside the cool pit below floor level, the weaver coordinates foot treadles with the swift flick of the shuttle, interlacing weft threads at 60 to 80 picks per minute.',
        toolOrMaterial: 'Traditional timber pit loom, flying shuttle, boat shuttle.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Washing, Calendering & Finishing',
        hindiTitle: 'धुलाई एवं रोलर फिनिशिंग',
        description: 'The woven silk fabric is washed in soft water, naturally dried in open air, and passed through wooden calender rollers to soften the drape while preserving its natural porosity.',
        toolOrMaterial: 'Calendering roller, inspection table.'
      }
    ],
    culturalMeaning:
      'Bhagalpur silk embodies the symbiosis between forest ecosystems, tribal sericulture communities, and urban artisan weavers. It is celebrated as the "Queen of Wild Silks" because it harmonizes luxury with organic sustainability, carrying the fragrance of indigenous forest trees and the precision of ancestral weaver families.',
    livingToday:
      'Today, Bhagalpur’s silk cluster comprises over 25,000 handlooms and powerlooms, generating millions in domestic handloom markets and international fashion exports. Contemporary collaborations feature Bhagalpuri silk printed or hand-painted with GI-certified Madhubani and Manjusha art.',
    communityTradition:
      'Nathnagar and Champanagar are living weaving neighborhoods where family workshops (Karkhanas) buzz from sunrise to dusk, maintaining continuous traditions passed down through generations.',
    relatedFestivals: ['Chhath Mahaparva', 'Vivah Panchami', 'Eid-ul-Fitr', 'Bishahari Puja'],
    sources: {
      primary: 'Office of the Development Commissioner for Handlooms, Ministry of Textiles, Govt. of India',
      institutionalAuthority: 'Weavers’ Service Centre (WSC), Bhagalpur / Directorate of Handloom & Sericulture, Govt. of Bihar',
      giRegistry: 'GI Application No. 193 (Bhagalpur Silk), Geographical Indications Registry, Chennai',
      academicReference: 'Roy, Tirthankar, "Artisans and Industrialization: Indian Weaving in the Twentieth Century".'
    },
    multilingual: {
      title: {
        en: 'Bhagalpuri Tussar Silk Weaving',
        hi: 'भागलपुरी तसर सिल्क बुनकरी',
        mai: 'भागलपुरी तसर सिल्क बुनाई (अंग प्रदेश)',
        bho: 'भागलपुर के तसर सिल्क'
      },
      tagline: {
        en: 'The legendary "Queen of Wild Silks"—breathable, textured, and naturally golden on traditional pit looms.',
        hi: 'गंगा तट के बुनकरों द्वारा करघे पर बुनी गई स्वर्णिम प्राकृतिक तसर सिल्क।',
        mai: 'अंग देशक रेशमी नगरी भागलपुरक विश्वविख्यात तसर सिल्क।'
      }
    }
  },
  {
    id: 'tikuli-art',
    name: 'Tikuli Art of Patna',
    hindiName: 'टिकुली कला (पटना की लघु तामचीनी कला)',
    tagline: 'An 800-year-old royal bindi tradition reincarnated on enameled wooden plaques with gold foil and sable brushes.',
    originRegion: 'Magadh (Patna)',
    districtId: 'patna',
    associatedDistricts: ['patna', 'nalanda'],
    category: 'Miniature Enamel & Lacquer Art',
    categoryType: 'miniature',
    giTag: false,
    image: '',
    description:
      'Originating in the historic lanes of Patna City over 800 years ago, Tikuli art takes its name from "Tikli"—the ornate dot or bindi traditionally worn by Indian women between their eyebrows. Once crafted from micro-thin glass wafers adorned with pure 24-karat gold foil for royal queens and court dancers, Tikuli was reinvented in the modern era as an exquisite decorative plaque art rendered on enameled wood with sable-hair brushes.',
    history:
      'During the Mauryan and Mughal eras, Patna was the imperial capital of Tikuli manufacturing, employing more than 5,000 artisan families in the lanes of Patna City. Aristocratic ladies across northern India wore custom glass Tikulis. With the Industrial Revolution and the flood of mass-produced plastic bindis in the early 20th century, the craft faced extinction. In 1954, visionary master artist Upendra Maharathi re-engineered the technique, transferring the delicate miniature painting from glass bindis onto durable hardboard panels.',
    techniques:
      'High-density wooden or fiberboard panels are cut into geometric shapes and treated with 4 to 5 successive coatings of zinc oxide and lacquer, sanded with pumice until mirror-smooth. Traditional miniature paintings depicting Krishna Leela, village weddings, and Buddhist motifs are painted using single-hair brushes, embellished with genuine or simulated gold leaf, and sealed under layers of transparent lacquer.',
    materials: [
      'High-density fiberboard (MDF) or seasoned wood panels',
      'Zinc oxide, slate dust, and lacquer primer',
      'Fine Japanese sable-hair and squirrel-tail brushes (Numbers 00 and 000)',
      'Gold foil and imitation metallic leaf',
      'Clear nitrocellulose enamel varnish'
    ],
    masterArtisans: [
      'Upendra Maharathi (Visionary artist and father of modern Bihar craft revival)',
      'Ashok Kumar Biswas (State & National Award winner, trained thousands of women in Tikuli art)',
      'Arti Devi (National Award winner)'
    ],
    fiveStyles: [
      {
        name: 'Royal Tikuli Bindi Mandalas',
        description: 'Circular geometric concentric disks with delicate gold foil filigree scrollwork, replicating the original royal bindis of ancient Magadh.',
        context: 'Traditional decorative wall coasters and jewelry pendants.'
      },
      {
        name: 'Mithila & Magadhi Tableaux',
        description: 'Intricately painted visual narratives of rural life—village dances, harvest celebrations, and Krishna playing the flute under Kadamba trees.',
        context: 'Contemporary collector wall plaques and decorative screens.'
      }
    ],
    motifs: [
      {
        name: 'Gold Foil Filigree (Swarna Rekha)',
        hindiName: 'स्वर्ण रेखा कार्य',
        symbolism: 'The imperial splendor of Pataliputra and cosmic radiance.',
        visualContext: 'Ornate borders and deity crowns illuminated with pressed gold foil.'
      },
      {
        name: 'Radha-Krishna & Raas Leela',
        hindiName: 'रासलीला',
        symbolism: 'Divine love, ecstasy, and spiritual union.',
        visualContext: 'The most popular classical narrative rendered on circular Tikuli plates.'
      }
    ],
    processSteps: [
      {
        step: 1,
        phase: 'Material',
        title: 'Cutting the Wooden Plaque Base',
        hindiTitle: 'काष्ठ पट्टिका की कटाई',
        description: 'Seasoned wood or high-density fiberboard is precision cut into circles, squares, or arched niches.',
        toolOrMaterial: 'Jigsaw, MDF wooden blanks.'
      },
      {
        step: 2,
        phase: 'Preparation',
        title: 'Layering Primer & Sanding',
        hindiTitle: 'प्राइमर एवं सैंडिंग',
        description: 'The panel is coated with four to five layers of zinc oxide and lacquer primer, air-dried, and hand-rubbed with fine sandpaper until the surface is mirror-smooth.',
        toolOrMaterial: 'Zinc oxide primer, waterproof sandpaper (Number 1000).'
      },
      {
        step: 3,
        phase: 'Tools',
        title: 'Miniature Sable Hair Brushes',
        hindiTitle: 'बारीक गिलहरी-बाल की कलम',
        description: 'Artisans use ultra-fine triple-zero (000) brushes made of squirrel hair or fine synthetic filaments capable of painting hairline strokes.',
        toolOrMaterial: 'Number 000 sable brush.'
      },
      {
        step: 4,
        phase: 'Technique',
        title: 'Enamel Miniature Painting',
        hindiTitle: 'एनामेल लघु चित्रकारी',
        description: 'Intricate figures from Indian mythology and Magadhan folklore are painted freehand with vibrant enamel colors directly onto the black or white lacquered background.',
        toolOrMaterial: 'Fast-drying enamel pigments.'
      },
      {
        step: 5,
        phase: 'Crafting',
        title: 'Gold Foil Embellishment',
        hindiTitle: 'स्वर्ण वर्क चिपकाना',
        description: 'Adhesive gum is traced over crowns, jewelry, and border lines. Delicate gold foil leaves are carefully laid down with tweezers and burnished to a high gleam.',
        toolOrMaterial: 'Gold foil leaf, burnishing agate stone, tweezers.'
      },
      {
        step: 6,
        phase: 'Finished Art',
        title: 'Clear Lacquer Glazing',
        hindiTitle: 'पारदर्शी लैकर सीलिंग',
        description: 'Multiple coats of transparent clear varnish are sprayed over the entire plaque, sealing the gold and enamel from moisture, dust, and UV fading.',
        toolOrMaterial: 'Clear nitrocellulose lacquer.'
      }
    ],
    culturalMeaning:
      'Tikuli art represents the perseverance and reinvention of Indian craft heritage. An art form that was completely doomed by industrial plastic competition was saved through artistic vision and adapted into a thriving cottage industry that today trains and employs thousands of marginalized urban women in Patna.',
    livingToday:
      'Under the stewardship of master artist Ashok Kumar Biswas and the Upendra Maharathi Sansthan, Tikuli has trained over 8,000 women artisans across Bihar. It is now adapted into tabletop trays, coasters, statement jewelry, and grand public murals at Patna Junction and the Bihar Museum.',
    communityTradition:
      'Centered in Patna City and Danapur, where self-help women’s groups paint together in cooperative workshops.',
    relatedFestivals: ['Chhath Mahaparva', 'Diwali', 'Shravani Mela'],
    sources: {
      primary: 'Upendra Maharathi Shilp Anusandhan Sansthan, Patna, Department of Industries, Govt. of Bihar',
      institutionalAuthority: 'Development Commissioner (Handicrafts), Ministry of Textiles, Govt. of India',
      academicReference: 'Upendra Maharathi, "The Living Arts of Bihar" (Patna, 1968).'
    },
    multilingual: {
      title: {
        en: 'Tikuli Art of Patna',
        hi: 'टिकुली कला (पटना की लघु तामचीनी कला)',
        mai: 'टिकुली कला (पाटलिपुत्रक प्राचीन शिल्प)',
        bho: 'पटना के टिकुली कला'
      },
      tagline: {
        en: 'An 800-year-old royal bindi tradition reincarnated on enameled wooden plaques with gold foil and sable brushes.',
        hi: 'राजघरानों की बिंदियों से निकलकर काष्ठ फलकों पर उकेरी गई 800 वर्ष पुरानी कला।',
        mai: 'मगध सम्राट सभक समय सं चलि रहल बिंदी शिल्प जे आइ काष्ठ पटल पर चमकैत अछि।'
      }
    }
  }
];

export const CRAFT_MATERIALS: CraftMaterial[] = [
  {
    id: 'soot-lampblack',
    name: 'Soot / Lampblack (Kajal)',
    hindiName: 'काजल / दीये की कालिमा',
    category: 'Mineral & Plant Pigment',
    origin: 'Rural households across Mithila & Anga',
    usedInArts: ['Madhubani / Mithila Painting', 'Manjusha Art'],
    description:
      'Collected on an earthen clay lid held over a mustard-oil lamp with a handspun cotton wick. Blended with fresh cow dung water and gum arabic to produce an intense, non-fading jet black outline ink.',
    extractionProcess: 'Slow burning of pure cold-pressed mustard oil inside clay lamps, scraping carbon deposits from the earthen lid.',
    sensoryTexture: 'Velvety, matte carbon powder suspended in natural gum solution.'
  },
  {
    id: 'tussar-cocoons',
    name: 'Wild Tussar Cocoons (Kosa)',
    hindiName: 'जंगली तसर कोकून (कोसा)',
    category: 'Raw Textile & Cocoon',
    origin: 'Canopy of Arjun and Asan trees in Banka & Bhagalpur forests',
    usedInArts: ['Bhagalpuri Tussar Silk Weaving'],
    description:
      'Hard-shelled oval cocoons spun by wild Antheraea paphia silkworms. Unlike farm-cultivated mulberry cocoons, wild Tussar cocoons are naturally golden-brown and packed with rich minerals that impart exceptional thermal resilience.',
    extractionProcess: 'Wild harvesting from forest canopies in late autumn, boiling in soft water with soda ash to soften the sericin protective gum.',
    sensoryTexture: 'Crisp, textured, porous filament with a subtle honey-tinted sheen.'
  },
  {
    id: 'sikki-reed',
    name: 'Golden Sikki Grass (Chrysopogon zizanioides)',
    hindiName: 'सिक्की सुनहरी घास',
    category: 'Natural Fiber',
    origin: 'Swampy wetland meadows and riverbanks of Gandak and Kosi basins',
    usedInArts: ['Sikki Grass Craft'],
    description:
      'A wild sweet reed with an extraordinary metallic golden sheen. It grows naturally in the waterlogged wetlands of North Bihar. Highly tensile, naturally water-resistant, and fragrant.',
    extractionProcess: 'Harvested just before flowering in autumn, split lengthwise using teeth and fingernails, and sun-bleached on clean sand.',
    sensoryTexture: 'Smooth, lustrous, metallic-golden reed with remarkable pliability when moistened.'
  },
  {
    id: 'vintage-cotton',
    name: 'Vintage Recycled Cotton',
    hindiName: 'धोती-साड़ी की मुलायम पुरानी सूती परतें',
    category: 'Natural Fiber',
    origin: 'Domestic courtyards of Tirhut & Mithila villages',
    usedInArts: ['Sujani Embroidery of Bihar'],
    description:
      'Multiple layers of washed, sun-softened vintage cotton saris and dhotis. Repurposing these domestic textiles imbues the quilt with emotional memories of mothers and ancestors.',
    extractionProcess: 'Collected from family closets, washed with soap-nuts, sun-dried, and pressed flat by hand.',
    sensoryTexture: 'Incredibly soft, breathable, and slightly rumpled like a beloved family quilt.'
  },
  {
    id: 'turmeric-palash',
    name: 'Turmeric & Palash Flower Pigments',
    hindiName: 'हल्दी एवं पलाश / कुसुम के फूल',
    category: 'Mineral & Plant Pigment',
    origin: 'Village gardens and deciduous forest borders across Bihar',
    usedInArts: ['Madhubani / Mithila Painting', 'Manjusha Art'],
    description:
      'Crushed raw turmeric root yields a brilliant sacred yellow, while the dried scarlet petals of Palash (Butea monosperma / Flame of the Forest) and Kusum steep into radiant saffron, red, and warm ochre.',
    extractionProcess: 'Crushing fresh roots in stone mortars and boiling dried flower blossoms in water with lime or alum mordants.',
    sensoryTexture: 'Warm, fragrant, earth-derived matte vegetable dye.'
  },
  {
    id: 'takua-needle',
    name: 'The Takua (Iron Awl)',
    hindiName: 'लोहे का तकवा',
    category: 'Traditional Tool',
    origin: 'Village blacksmiths of Madhubani & Darbhanga',
    usedInArts: ['Sikki Grass Craft'],
    description:
      'A 6-inch hand-forged pointed cold-iron needle without an eye, embedded firmly in a turned wooden knob. It punctures the structural munj coil to allow moist sikki to be wrapped snugly.',
    extractionProcess: 'Forged from scrap railway iron or tempered steel by local village lohars (blacksmiths).',
    sensoryTexture: 'Cold, heavy, polished steel with a hand-smoothed sheesham wood grip.'
  },
  {
    id: 'bamboo-kalam',
    name: 'Split Bamboo Kalam',
    hindiName: 'बांस की कलम',
    category: 'Traditional Tool',
    origin: 'Bamboo groves of rural North Bihar',
    usedInArts: ['Madhubani / Mithila Painting', 'Manjusha Art'],
    description:
      'Fresh green bamboo whittled down to a fine pointed nib. A tiny ball of raw untreated cotton is bound just above the tip with thread to hold the liquid natural pigment reservoir.',
    extractionProcess: 'Carved by the artist’s own hands using a small pocket knife from seasoned green bamboo shoots.',
    sensoryTexture: 'Lightweight, fibrous bamboo with a soft, absorbent cotton reservoir.'
  },
  {
    id: 'shola-pith',
    name: 'Shola Pith (Aeschynomene aspera)',
    hindiName: 'शोला की जलीय लकड़ी',
    category: 'Natural Resin & Foil',
    origin: 'Marshy wetlands and stagnant oxbow lakes of Anga basin',
    usedInArts: ['Manjusha Art'],
    description:
      'The inner white stem core of the aquatic Shola plant. Lighter than cork and purer than paper, it provides the structural skin for ritual Bishahari temple boxes.',
    extractionProcess: 'Harvested from muddy oxbow lakes during post-monsoon, air-dried, and sliced into thin sheets with razor-sharp knives.',
    sensoryTexture: 'Feather-light, spongy, pristine white natural cellulose.'
  }
];

export const NOTABLE_PRACTITIONERS: ArtPractitioner[] = [
  {
    name: 'Sita Devi',
    hindiName: 'सीता देवी',
    honor: 'Padma Shri (1981) & Bihar Ratna',
    artFormId: 'madhubani-painting',
    region: 'Mithila (Jitwarpur, Madhubani)',
    districtId: 'madhubani',
    contribution:
      'The pioneering genius who brought Madhubani painting from domestic mud walls to national acclaim. Master of the Bharni style, she was the first Mithila artist to be honored with the National Award (1975) and Padma Shri.',
    source: 'National Crafts Museum & Lalit Kala Akademi Archives'
  },
  {
    name: 'Ganga Devi',
    hindiName: 'गंगा देवी',
    honor: 'Padma Shri (1984) & National Award (1976)',
    artFormId: 'madhubani-painting',
    region: 'Mithila (Chatra, Madhubani)',
    districtId: 'madhubani',
    contribution:
      'Internationally revered master of the intricate Kachni line style. Her monumental autobiographical scroll "Cancer Series" and mythological murals are exhibited at the Smithsonian Institution in Washington D.C. and the Craft Museum in Tokyo.',
    source: 'Smithsonian Institution & Upendra Maharathi Sansthan'
  },
  {
    name: 'Baua Devi',
    hindiName: 'बउआ देवी',
    honor: 'Padma Shri (2017) & National Award (1984)',
    artFormId: 'madhubani-painting',
    region: 'Mithila (Jitwarpur, Madhubani)',
    districtId: 'madhubani',
    contribution:
      'One of the original group of women artists who began painting on paper in 1966. Renowned for her expressive, surrealist Nag Kanya and Krishna imagery. She was the sole Indian artist selected for the Magiciens de la Terre exhibition at the Centre Pompidou, Paris (1989).',
    source: 'Ministry of Culture, Govt. of India'
  },
  {
    name: 'Dulari Devi',
    hindiName: 'दुलारी देवी',
    honor: 'Padma Shri (2021)',
    artFormId: 'madhubani-painting',
    region: 'Mithila (Ranti, Madhubani)',
    districtId: 'madhubani',
    contribution:
      'Hailing from the marginalized Mallah fishing community, she learned by observing Mahasundari Devi while working as a domestic helper. Her works broke traditional caste barriers, depicting fishponds, rural labor, child education, and women’s empowerment.',
    source: 'President of India Citation (2021)'
  },
  {
    name: 'Chakravarty Devi',
    hindiName: 'चक्रवर्ती देवी',
    honor: 'State Master Artisan & Pioneer of Manjusha Revival',
    artFormId: 'manjusha-art',
    region: 'Anga (Bhagalpur)',
    districtId: 'bhagalpur',
    contribution:
      'The legendary doyenne who preserved the endangered Manjusha scroll tradition during the 1980s and 1990s. She trained a generation of young artists in Bhagalpur, ensuring the three-color Bihula-Bishahari iconography did not disappear.',
    source: 'Department of Art, Culture & Youth, Govt. of Bihar'
  },
  {
    name: 'Manoj Pandit',
    hindiName: 'मनोज पंडित',
    honor: 'State Awardee & National Merit Winner',
    artFormId: 'manjusha-art',
    region: 'Anga (Bhagalpur)',
    districtId: 'bhagalpur',
    contribution:
      'Master artisan who has represented Manjusha art across national craft expositions and adapted the traditional Behula narrative onto silk scrolls, public murals, and architectural facades in Bhagalpur.',
    source: 'Upendra Maharathi Shilp Anusandhan Sansthan'
  },
  {
    name: 'Nirmala Devi',
    hindiName: 'निर्मला देवी',
    honor: 'National Award Winner in Handloom Textiles',
    artFormId: 'sujuni-embroidery',
    region: 'Tirhut (Bhusra, Muzaffarpur)',
    districtId: 'muzaffarpur',
    contribution:
      'Celebrated master of Sujani quilting who guided the transition of traditional baby wraps into narrative social tapestries documenting female literacy and rural health in North Bihar.',
    source: 'Development Commissioner (Handicrafts), Govt. of India'
  },
  {
    name: 'Bindeshwari Devi',
    hindiName: 'बिन्देश्वरी देवी',
    honor: 'National Award Winner in Sikki Basketry',
    artFormId: 'sikki-grass-craft',
    region: 'Mithila (Madhubani)',
    districtId: 'madhubani',
    contribution:
      'Visionary pioneer who elevated Sikki grass from utilitarian domestic dowry boxes to intricate three-dimensional sculptural forms of mythological deities, birds, and sacred temple chariots.',
    source: 'National Crafts Museum, New Delhi'
  },
  {
    name: 'Ashok Kumar Biswas',
    hindiName: 'अशोक कुमार विश्वास',
    honor: 'National & State Award Winner',
    artFormId: 'tikuli-art',
    region: 'Magadh (Patna)',
    districtId: 'patna',
    contribution:
      'The modern crusader of Tikuli art who revived the dying 800-year-old bindi technique on enameled wood panels. He has personally trained over 8,000 rural and underprivileged women, turning the craft into an engine of female financial empowerment.',
    source: 'Upendra Maharathi Shilp Anusandhan Sansthan & Ministry of Textiles'
  }
];

export const CRAFT_GEOGRAPHIC_CLUSTERS = [
  {
    region: 'Mithila (मधुबनी एवं दरभंगा)',
    districtId: 'madhubani',
    districtName: 'Madhubani & Darbhanga',
    coordinates: { lat: 26.35, lng: 86.08 },
    artForms: ['Madhubani / Mithila Painting', 'Sikki Grass Craft'],
    giStatus: 'GI Tagged Heritage Hub',
    description: 'The ancient cultural hearth of Videha, where every rural courtyard is an open-air studio for line murals and golden sweetgrass coiling.'
  },
  {
    region: 'Anga (भागलपुर एवं बांका)',
    districtId: 'bhagalpur',
    districtName: 'Bhagalpur & Banka',
    coordinates: { lat: 25.24, lng: 86.98 },
    artForms: ['Bhagalpuri Tussar Silk Weaving', 'Manjusha Art'],
    giStatus: 'GI Certified Silk & Art Center',
    description: 'The historic "Silk City" along the Ganga, blending centuries of wild cocoon handloom weaving with the three-color serpent scrolls of Behula-Bishahari.'
  },
  {
    region: 'Tirhut (मुजफ्फरपुर एवं सीतामढ़ी)',
    districtId: 'muzaffarpur',
    districtName: 'Muzaffarpur & Sitamarhi',
    coordinates: { lat: 26.12, lng: 85.39 },
    artForms: ['Sujani Embroidery of Bihar'],
    giStatus: 'GI Tagged Needlecraft Cluster',
    description: 'The fertile alluvial plains where women’s collectives turn vintage layered cotton cloths into rippled, narrative story quilts.'
  },
  {
    region: 'Magadh (पटना एवं नालंदा)',
    districtId: 'patna',
    districtName: 'Patna & Nalanda',
    coordinates: { lat: 25.61, lng: 85.14 },
    artForms: ['Tikuli Art of Patna', 'Stone Carving (Patharkatti)'],
    giStatus: 'Ancient Imperial Enamel Craft',
    description: 'The imperial heartland of Pataliputra, where 800-year-old royal bindi designs are preserved on enameled lacquer panels with pure gold leaf.'
  }
];
