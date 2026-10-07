import React, { useState } from 'react';
import {
  CUISINE_ITEMS,
  CULINARY_REGIONS,
  CULINARY_SEASONS,
  CULINARY_INGREDIENTS
} from '../../data/cuisine';
import { FoodHero } from '../../components/cuisine/FoodHero';
import { BiharThroughFood } from '../../components/cuisine/BiharThroughFood';
import { RegionalKitchensSection } from '../../components/cuisine/RegionalKitchensSection';
import { SignatureDishesSection } from '../../components/cuisine/SignatureDishesSection';
import { FoodFestivalSection } from '../../components/cuisine/FoodFestivalSection';
import { FoodSeasonsSection } from '../../components/cuisine/FoodSeasonsSection';
import { IngredientsLandscapeSection } from '../../components/cuisine/IngredientsLandscapeSection';
import { EverydayFoodSection } from '../../components/cuisine/EverydayFoodSection';
import { FoodDetailModal } from '../../components/cuisine/FoodDetailModal';

export const CuisineView = ({
  language,
  onNavigateTab,
  onSelectDistrictById
}) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const handleScrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectIngredientDish = (dishName) => {
    const cleanQuery = dishName.toLowerCase();
    const matched = CUISINE_ITEMS.find(
      d =>
        d.name.toLowerCase().includes(cleanQuery) ||
        cleanQuery.includes(d.name.toLowerCase()) ||
        d.hindiName.includes(dishName)
    );
    if (matched) {
      setSelectedDish(matched);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-10 pb-16 animate-in fade-in duration-200">
      {/* 1. Food Hero: Editorial narrative opening */}
      <FoodHero
        language={language}
        onExploreRegions={() => handleScrollToSection('regional-kitchens-section')}
        onExploreSignatures={() => handleScrollToSection('signature-dishes-section')}
      />

      {/* 2. Bihar Through Food: Split editorial narrative & landscape composition */}
      <BiharThroughFood language={language} />

      {/* 3. Explore by Region: Mithila, Tirhut, Magadh, Bhojpur, Saran, Anga */}
      <RegionalKitchensSection
        regions={CULINARY_REGIONS}
        dishes={CUISINE_ITEMS}
        language={language}
        onSelectDish={dish => setSelectedDish(dish)}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 4 & 5. Signature Bihar Foods: Curated editorial showcase */}
      <SignatureDishesSection
        dishes={CUISINE_ITEMS}
        language={language}
        onSelectDish={dish => setSelectedDish(dish)}
        onSelectDistrictById={onSelectDistrictById}
      />

      {/* 6. Food × Festivals: Sacred culinary calendars */}
      <FoodFestivalSection
        dishes={CUISINE_ITEMS}
        language={language}
        onSelectDish={dish => setSelectedDish(dish)}
        onNavigateTab={onNavigateTab}
      />

      {/* 7. Food × Seasons: Seasonal agro-climatic rhythms */}
      <FoodSeasonsSection
        seasons={CULINARY_SEASONS}
        dishes={CUISINE_ITEMS}
        language={language}
        onSelectDish={dish => setSelectedDish(dish)}
      />

      {/* 8. Ingredients of Bihar: Landscape, agricultural season, & domestic kitchen */}
      <IngredientsLandscapeSection
        ingredients={CULINARY_INGREDIENTS}
        language={language}
        onSelectIngredientDish={handleSelectIngredientDish}
      />

      {/* 9. Everyday Meal Traditions: Daily thali & domestic care */}
      <EverydayFoodSection language={language} />

      {/* 10. Dish Stories Detail Modal */}
      {selectedDish && (
        <FoodDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
          language={language}
          onNavigateTab={onNavigateTab}
          onSelectDistrictById={onSelectDistrictById}
        />
      )}
    </div>
  );
};
